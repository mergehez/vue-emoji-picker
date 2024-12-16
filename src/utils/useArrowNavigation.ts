type TOpts = {
  perLine: number,
  groups: number[], // number of items in each group
  pos: TFullPos,
  onChange: (pos: TFullPos) => void
}

type TGData = {
  readonly id: number,
  readonly before: number,
  readonly total: number,
  readonly rows: number[],
  getLastRowCol: () => TPos
  fixCol: (pos: TPos) => number
  moveUp: (pos: TPos) => [TGData, TPos]
  moveDown: (pos: TPos) => [TGData, TPos]
  moveLeft: (pos: TPos) => [TGData, TPos]
  moveRight: (pos: TPos) => [TGData, TPos]
}

type TPos = {
  row: number,
  col: number
}
export type TFullPos = {
  groupIndex: number,
  row: number,
  col: number
}

function p(row: number, col: number) {
  return { row, col } as TPos
}


function createGroupData(allGroups: number[], initialPos: TFullPos, perLine: number) {
  const res = [] as TGData[]
  let total = 0, totalRows = 0
  for (let i = 0; i < allGroups.length; i++) {
    const itemCount = allGroups[i]
    const rowCount = Math.ceil(itemCount / perLine)
    const rows = Array.from({ length: rowCount }, (_, i) => i < rowCount - 1 ? perLine : itemCount % perLine || perLine)

    function getPrevious() {
      return res[(allGroups.length - 1 + i) % allGroups.length]
    }

    function getNext() {
      return res[(i + 1) % allGroups.length]
    }

    const gData: TGData = {
      id: i,
      before: total,
      total: itemCount,
      rows,
      fixCol: ({ row, col }: TPos) => {
        return col >= rows[row] ? rows[row] - 1 : col
      },
      getLastRowCol: () => {
        const r = rows.length - 1
        return p(r, rows[r] - 1)
      },
      moveUp: ({ row, col }: TPos) => {
        let newRow = row - 1
        if (newRow >= 0) {
          return [gData, p(newRow, col)]
        }
        const prev = getPrevious()
        const prevRow = prev.rows.length - 1
        if (prev.rows[prevRow] <= col) {
          return prev.moveUp(p(prevRow, col))
        }
        return [prev, p(prevRow, prev.fixCol(p(prevRow, col)))]
      },
      moveDown: ({ row, col }: TPos) => {
        let newRow = row + 1
        if (newRow < rows.length && rows[newRow] > col) {
          return [gData, p(newRow, col)]
        }
        const next = getNext()
        return [next, p(0, next.fixCol(p(0, col)))]
      },
      moveLeft: ({ row, col }: TPos) => {
        let newCol = col - 1
        if (newCol >= 0) {
          return [gData, p(row, newCol)]
        }
        if (row == 0) {
          const prev = getPrevious()
          return [prev, prev.getLastRowCol()]
        }
        return gData.moveUp(p(row - 1, (rows[row - 1] - 1 + perLine) % perLine))
      },
      moveRight: ({ row, col }: TPos) => {
        let newCol = col + 1
        if (newCol < rows[row]) {
          return [gData, p(row, newCol)]
        }
        if (row == rows.length - 1) {
          return [getNext(), p(0, 0)]
        }

        return gData.moveDown(p(row + 1, 0))
      },
    } as const satisfies TGData
    res.push(gData)
    totalRows += rows.length
    total += itemCount
  }
  if (res.length >= initialPos.groupIndex) {
    initialPos.col = 0
    initialPos.row = 0
    initialPos.groupIndex = 0
  }
  return { allGroups: res, currentGroup: res[initialPos.groupIndex]! } as const
}

export function useArrowNavigation(options: TOpts) {
  let opts = options
  const pos = opts.pos
  let { allGroups: _, currentGroup } = createGroupData(opts.groups, pos, opts.perLine)

  function updateCoords(newGroup: TGData, newPos: TPos, silent = false) {
    currentGroup = newGroup
    pos.groupIndex = currentGroup.id
    pos.row = newPos.row
    pos.col = newPos.col
    if (!silent)
      opts.onChange(pos)
  }

  return {
    reinit(options: TOpts) {
      opts = options
      const res = createGroupData(opts.groups, opts.pos, opts.perLine)
      _ = res.allGroups
      currentGroup = res.currentGroup
      updateCoords(currentGroup, opts.pos)
    },
    updatePos: (newPos: TFullPos, silent = true) => {
      const newGroup = _[newPos.groupIndex]
      updateCoords(newGroup, newPos, silent)
    },
    up: () => {
      const [newGroup, p] = currentGroup.moveUp(pos)
      updateCoords(newGroup, p)
    },
    down: () => {
      const [newGroup, p] = currentGroup.moveDown(pos)
      updateCoords(newGroup, p)
    },
    left: () => {
      const [newGroup, p] = currentGroup.moveLeft(pos)
      updateCoords(newGroup, p)
    },
    right: () => {
      const [newGroup, p] = currentGroup.moveRight(pos)
      updateCoords(newGroup, p)
    },
  }
}