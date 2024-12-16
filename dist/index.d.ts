import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { ModelRef } from 'vue';
import { PublicProps } from 'vue';

declare const __VLS_component: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
select: (...args: any[]) => void;
"skin-change": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
onSelect?: ((...args: any[]) => any) | undefined;
"onSkin-change"?: ((...args: any[]) => any) | undefined;
}>, {
title: string;
set: TSet;
perLine: number;
maxSearchResults: number;
emojiSize: number;
emoji: string;
color: string;
defaultSkin: number;
i18n: TI18n;
showPreview: boolean;
showSearch: boolean;
showCategories: boolean;
showSkinTones: boolean;
infiniteScroll: boolean;
pickerStyles: Record<string, any>;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare type __VLS_PublicProps = {
    'query'?: typeof query['value'];
} & typeof __VLS_typeProps;

declare function __VLS_template(): {
    slots: {
        tabs?(_: {
            pickerUtils: {
                reset(): void;
                onScroll(): void;
                onAnchorClick(category: TCategory): void;
                onSearch(value?: string): void;
                onEmojiClick(emoji: TEmojiData): void;
                onEmojiEnter(catIndex: number, emojiIndex: number, emoji: TEmojiData): void;
                onEmojiLeave(emoji: TEmojiData): void;
                onArrowLeft: () => void;
                onArrowRight: () => void;
                onArrowDown: () => void;
                onArrowUp: () => void;
            };
        }): any;
        search?(_: {
            searchUtils: {
                onEnter: () => void;
                onArrowLeft: ($event: Event) => void;
                onArrowRight: () => void;
                onArrowUp: ($event: Event) => void;
                onArrowDown: () => void;
            };
            query: string;
        }): any;
        category?(_: {
            pickerUtils: {
                reset(): void;
                onScroll(): void;
                onAnchorClick(category: TCategory): void;
                onSearch(value?: string): void;
                onEmojiClick(emoji: TEmojiData): void;
                onEmojiEnter(catIndex: number, emojiIndex: number, emoji: TEmojiData): void;
                onEmojiLeave(emoji: TEmojiData): void;
                onArrowLeft: () => void;
                onArrowRight: () => void;
                onArrowDown: () => void;
                onArrowUp: () => void;
            };
            category: {
                id: TCategoryId;
                name: string;
                emojis: {
                    _data: {
                        _: number;
                        id: string;
                        subcategory: number;
                        name: string;
                        unified: string;
                        keywords: string[];
                        emoticons?: string[] | undefined;
                        text: string;
                        short_names: string[];
                        sheet: number[];
                        search: string;
                        skin_variations?: {
                            "1F3FA"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FB"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FC"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FD"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FE"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FF"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FA-1F3FA"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FB-1F3FB"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FC-1F3FC"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FD-1F3FD"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FE-1F3FE"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FF-1F3FF"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                        } | undefined;
                        skin_tone?: number | undefined;
                        has?: TSet[] | undefined;
                        colons?: string | undefined;
                        native?: string | undefined;
                        short_name?: string | undefined;
                        skin?: number | undefined;
                    };
                    _skins?: any[] | undefined;
                    name: string;
                    colons: string;
                    emoticons?: string[] | undefined;
                    custom?: boolean | undefined;
                    imageUrl?: string | undefined;
                    unified?: string | undefined;
                    skin?: number | undefined;
                    native?: string | undefined;
                    short_names: string[];
                    short_name: string;
                    id: string;
                    uniqueId: string;
                    getSkin: (skin: "native" | number) => TEmojiData;
                    getPosition: () => string;
                    ariaLabel: () => string;
                }[];
                first?: boolean | undefined;
            };
            index: number;
        }): any;
        preview?(_: {
            state: {
                filteredCategories: {
                    id: TCategoryId;
                    name: string;
                    emojis: {
                        _data: {
                            _: number;
                            id: string;
                            subcategory: number;
                            name: string;
                            unified: string;
                            keywords: string[];
                            emoticons?: string[] | undefined;
                            text: string;
                            short_names: string[];
                            sheet: number[];
                            search: string;
                            skin_variations?: {
                                "1F3FA"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FB"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FC"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FD"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FE"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FF"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FA-1F3FA"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FB-1F3FB"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FC-1F3FC"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FD-1F3FD"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FE-1F3FE"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FF-1F3FF"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                            } | undefined;
                            skin_tone?: number | undefined;
                            has?: TSet[] | undefined;
                            colons?: string | undefined;
                            native?: string | undefined;
                            short_name?: string | undefined;
                            skin?: number | undefined;
                        };
                        _skins?: any[] | undefined;
                        name: string;
                        colons: string;
                        emoticons?: string[] | undefined;
                        custom?: boolean | undefined;
                        imageUrl?: string | undefined;
                        unified?: string | undefined;
                        skin?: number | undefined;
                        native?: string | undefined;
                        short_names: string[];
                        short_name: string;
                        id: string;
                        uniqueId: string;
                        getSkin: (skin: "native" | number) => TEmojiData;
                        getPosition: () => string;
                        ariaLabel: () => string;
                    }[];
                    first?: boolean | undefined;
                }[];
                showSkinTones: boolean;
                color: string;
                title: string;
                set: TSet;
                native: boolean;
                emojiTooltip: boolean;
                infiniteScroll: boolean;
                emojiSize: number;
                fallback: TFallbackFn | undefined;
                waitingForPaint: boolean;
                previewEmoji: {
                    _data: {
                        _: number;
                        id: string;
                        subcategory: number;
                        name: string;
                        unified: string;
                        keywords: string[];
                        emoticons?: string[] | undefined;
                        text: string;
                        short_names: string[];
                        sheet: number[];
                        search: string;
                        skin_variations?: {
                            "1F3FA"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FB"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FC"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FD"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FE"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FF"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FA-1F3FA"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FB-1F3FB"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FC-1F3FC"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FD-1F3FD"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FE-1F3FE"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FF-1F3FF"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                        } | undefined;
                        skin_tone?: number | undefined;
                        has?: TSet[] | undefined;
                        colons?: string | undefined;
                        native?: string | undefined;
                        short_name?: string | undefined;
                        skin?: number | undefined;
                    };
                    _skins?: any[] | undefined;
                    name: string;
                    colons: string;
                    emoticons?: string[] | undefined;
                    custom?: boolean | undefined;
                    imageUrl?: string | undefined;
                    unified?: string | undefined;
                    skin?: number | undefined;
                    native?: string | undefined;
                    short_names: string[];
                    short_name: string;
                    id: string;
                    uniqueId: string;
                    getSkin: (skin: "native" | number) => TEmojiData;
                    getPosition: () => string;
                    ariaLabel: () => string;
                } | undefined;
                firstCategory: {
                    id: TCategoryId;
                    name: string;
                    emojis: {
                        _data: {
                            _: number;
                            id: string;
                            subcategory: number;
                            name: string;
                            unified: string;
                            keywords: string[];
                            emoticons?: string[] | undefined;
                            text: string;
                            short_names: string[];
                            sheet: number[];
                            search: string;
                            skin_variations?: {
                                "1F3FA"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FB"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FC"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FD"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FE"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FF"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FA-1F3FA"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FB-1F3FB"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FC-1F3FC"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FD-1F3FD"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FE-1F3FE"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FF-1F3FF"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                            } | undefined;
                            skin_tone?: number | undefined;
                            has?: TSet[] | undefined;
                            colons?: string | undefined;
                            native?: string | undefined;
                            short_name?: string | undefined;
                            skin?: number | undefined;
                        };
                        _skins?: any[] | undefined;
                        name: string;
                        colons: string;
                        emoticons?: string[] | undefined;
                        custom?: boolean | undefined;
                        imageUrl?: string | undefined;
                        unified?: string | undefined;
                        skin?: number | undefined;
                        native?: string | undefined;
                        short_names: string[];
                        short_name: string;
                        id: string;
                        uniqueId: string;
                        getSkin: (skin: "native" | number) => TEmojiData;
                        getPosition: () => string;
                        ariaLabel: () => string;
                    }[];
                    first?: boolean | undefined;
                };
                activeCategory: {
                    id: TCategoryId;
                    name: string;
                    emojis: {
                        _data: {
                            _: number;
                            id: string;
                            subcategory: number;
                            name: string;
                            unified: string;
                            keywords: string[];
                            emoticons?: string[] | undefined;
                            text: string;
                            short_names: string[];
                            sheet: number[];
                            search: string;
                            skin_variations?: {
                                "1F3FA"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FB"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FC"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FD"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FE"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FF"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FA-1F3FA"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FB-1F3FB"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FC-1F3FC"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FD-1F3FD"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FE-1F3FE"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                                "1F3FF-1F3FF"?: {
                                    added_in: string;
                                    image: string;
                                    sheet: number[];
                                    unified: string;
                                    has?: TSet[] | undefined;
                                } | undefined;
                            } | undefined;
                            skin_tone?: number | undefined;
                            has?: TSet[] | undefined;
                            colons?: string | undefined;
                            native?: string | undefined;
                            short_name?: string | undefined;
                            skin?: number | undefined;
                        };
                        _skins?: any[] | undefined;
                        name: string;
                        colons: string;
                        emoticons?: string[] | undefined;
                        custom?: boolean | undefined;
                        imageUrl?: string | undefined;
                        unified?: string | undefined;
                        skin?: number | undefined;
                        native?: string | undefined;
                        short_names: string[];
                        short_name: string;
                        id: string;
                        uniqueId: string;
                        getSkin: (skin: "native" | number) => TEmojiData;
                        getPosition: () => string;
                        ariaLabel: () => string;
                    }[];
                    first?: boolean | undefined;
                };
                searchEmojis: {
                    _data: {
                        _: number;
                        id: string;
                        subcategory: number;
                        name: string;
                        unified: string;
                        keywords: string[];
                        emoticons?: string[] | undefined;
                        text: string;
                        short_names: string[];
                        sheet: number[];
                        search: string;
                        skin_variations?: {
                            "1F3FA"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FB"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FC"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FD"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FE"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FF"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FA-1F3FA"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FB-1F3FB"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FC-1F3FC"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FD-1F3FD"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FE-1F3FE"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                            "1F3FF-1F3FF"?: {
                                added_in: string;
                                image: string;
                                sheet: number[];
                                unified: string;
                                has?: TSet[] | undefined;
                            } | undefined;
                        } | undefined;
                        skin_tone?: number | undefined;
                        has?: TSet[] | undefined;
                        colons?: string | undefined;
                        native?: string | undefined;
                        short_name?: string | undefined;
                        skin?: number | undefined;
                    };
                    _skins?: any[] | undefined;
                    name: string;
                    colons: string;
                    emoticons?: string[] | undefined;
                    custom?: boolean | undefined;
                    imageUrl?: string | undefined;
                    unified?: string | undefined;
                    skin?: number | undefined;
                    native?: string | undefined;
                    short_names: string[];
                    short_name: string;
                    id: string;
                    uniqueId: string;
                    getSkin: (skin: "native" | number) => TEmojiData;
                    getPosition: () => string;
                    ariaLabel: () => string;
                }[] | undefined;
                previewEmojiCategoryIdx: number | undefined;
                previewEmojiCategoryId: string | undefined;
                activeSkin: number;
                categoryRefs: HTMLElement[];
                scrollRef: HTMLElement | undefined;
                mergedI18n: {
                    readonly search: "Search";
                    readonly notfound: "No Emoji Found";
                    readonly categories: {
                        readonly search: "Search Results";
                        readonly recent: "Frequently Used";
                        readonly smileys: "Smileys & Emotion";
                        readonly people: "People & Body";
                        readonly nature: "Animals & Nature";
                        readonly foods: "Food & Drink";
                        readonly activity: "Activity";
                        readonly places: "Travel & Places";
                        readonly objects: "Objects";
                        readonly symbols: "Symbols";
                        readonly flags: "Flags";
                        readonly custom: "Custom";
                    };
                };
                isSearching: boolean;
                idleEmoji: TEmojiData;
            };
            emoji: TEmojiData;
            onSkinChange: typeof onSkinChange;
        }): any;
    };
    refs: {
        refSearchInput: HTMLInputElement;
        scrollContent: HTMLDivElement;
    };
    attrs: Partial<{}>;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare let __VLS_typeProps: TPickerProps;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const Anchors: DefineComponent<    {
categories: TCategory[];
state: TPickerState;
pickerUtils: TPickerUtils;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
categories: TCategory[];
state: TPickerState;
pickerUtils: TPickerUtils;
}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

export declare const CategoryEmojis: DefineComponent<    {
category: TCategory;
index: number;
pickerUtils: TPickerUtils;
state: TPickerState;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
category: TCategory;
index: number;
pickerUtils: TPickerUtils;
state: TPickerState;
}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const CompressionMap: {
    readonly name: "a";
    readonly unified: "b";
    readonly non_qualified: "c";
    readonly img_apple: "d";
    readonly img_google: "e";
    readonly img_twitter: "f";
    readonly img_facebook: "h";
    readonly image: "i";
    readonly keywords: "j";
    readonly sheet: "k";
    readonly emoticons: "l";
    readonly text: "m";
    readonly short_names: "n";
    readonly added_in: "o";
    readonly subcategory: "s";
    readonly skin_variations: "v";
};

declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export { _default as Picker }
export default _default;

export declare const Emoji: DefineComponent<    {
emoji?: TEmojiData;
emojiId?: string;
state: TPickerState;
data?: TEmojiIndex;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: (...args: any[]) => void;
mouseenter: (...args: any[]) => void;
mouseleave: (...args: any[]) => void;
}, string, PublicProps, Readonly<{
emoji?: TEmojiData;
emojiId?: string;
state: TPickerState;
data?: TEmojiIndex;
}> & Readonly<{
onClick?: ((...args: any[]) => any) | undefined;
onMouseenter?: ((...args: any[]) => any) | undefined;
onMouseleave?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const I18N: {
    readonly search: "Search";
    readonly notfound: "No Emoji Found";
    readonly categories: {
        readonly search: "Search Results";
        readonly recent: "Frequently Used";
        readonly smileys: "Smileys & Emotion";
        readonly people: "People & Body";
        readonly nature: "Animals & Nature";
        readonly foods: "Food & Drink";
        readonly activity: "Activity";
        readonly places: "Travel & Places";
        readonly objects: "Objects";
        readonly symbols: "Symbols";
        readonly flags: "Flags";
        readonly custom: "Custom";
    };
};

declare function onSkinChange(skin: number): void;

declare const pickerUtils: {
    reset(): void;
    onScroll(): void;
    onAnchorClick(category: TCategory): void;
    onSearch(value?: string): void;
    onEmojiClick(emoji: TEmojiData): void;
    onEmojiEnter(catIndex: number, emojiIndex: number, emoji: TEmojiData): void;
    onEmojiLeave(emoji: TEmojiData): void;
    onArrowLeft: () => void;
    onArrowRight: () => void;
    onArrowDown: () => void;
    onArrowUp: () => void;
};

declare const query: ModelRef<string, string, string, string>;

declare const SetMap: {
    readonly 1: "apple";
    readonly 2: "google";
    readonly 3: "twitter";
    readonly 4: "facebook";
};

declare const SKINS: readonly ["1F3FA", "1F3FB", "1F3FC", "1F3FD", "1F3FE", "1F3FF"];

declare const state: {
    filteredCategories: {
        id: TCategoryId;
        name: string;
        emojis: {
            _data: {
                _: number;
                id: string;
                subcategory: number;
                name: string;
                unified: string;
                keywords: string[];
                emoticons?: string[] | undefined;
                text: string;
                short_names: string[];
                sheet: number[];
                search: string;
                skin_variations?: {
                    "1F3FA"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FB"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FC"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FD"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FE"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FF"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FA-1F3FA"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FB-1F3FB"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FC-1F3FC"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FD-1F3FD"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FE-1F3FE"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FF-1F3FF"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                } | undefined;
                skin_tone?: number | undefined;
                has?: TSet[] | undefined;
                colons?: string | undefined;
                native?: string | undefined;
                short_name?: string | undefined;
                skin?: number | undefined;
            };
            _skins?: any[] | undefined;
            name: string;
            colons: string;
            emoticons?: string[] | undefined;
            custom?: boolean | undefined;
            imageUrl?: string | undefined;
            unified?: string | undefined;
            skin?: number | undefined;
            native?: string | undefined;
            short_names: string[];
            short_name: string;
            id: string;
            uniqueId: string;
            getSkin: (skin: "native" | number) => TEmojiData;
            getPosition: () => string;
            ariaLabel: () => string;
        }[];
        first?: boolean | undefined;
    }[];
    showSkinTones: boolean;
    color: string;
    title: string;
    set: TSet;
    native: boolean;
    emojiTooltip: boolean;
    infiniteScroll: boolean;
    emojiSize: number;
    fallback: TFallbackFn | undefined;
    waitingForPaint: boolean;
    previewEmoji: {
        _data: {
            _: number;
            id: string;
            subcategory: number;
            name: string;
            unified: string;
            keywords: string[];
            emoticons?: string[] | undefined;
            text: string;
            short_names: string[];
            sheet: number[];
            search: string;
            skin_variations?: {
                "1F3FA"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FB"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FC"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FD"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FE"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FF"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FA-1F3FA"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FB-1F3FB"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FC-1F3FC"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FD-1F3FD"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FE-1F3FE"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FF-1F3FF"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
            } | undefined;
            skin_tone?: number | undefined;
            has?: TSet[] | undefined;
            colons?: string | undefined;
            native?: string | undefined;
            short_name?: string | undefined;
            skin?: number | undefined;
        };
        _skins?: any[] | undefined;
        name: string;
        colons: string;
        emoticons?: string[] | undefined;
        custom?: boolean | undefined;
        imageUrl?: string | undefined;
        unified?: string | undefined;
        skin?: number | undefined;
        native?: string | undefined;
        short_names: string[];
        short_name: string;
        id: string;
        uniqueId: string;
        getSkin: (skin: "native" | number) => TEmojiData;
        getPosition: () => string;
        ariaLabel: () => string;
    } | undefined;
    firstCategory: {
        id: TCategoryId;
        name: string;
        emojis: {
            _data: {
                _: number;
                id: string;
                subcategory: number;
                name: string;
                unified: string;
                keywords: string[];
                emoticons?: string[] | undefined;
                text: string;
                short_names: string[];
                sheet: number[];
                search: string;
                skin_variations?: {
                    "1F3FA"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FB"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FC"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FD"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FE"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FF"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FA-1F3FA"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FB-1F3FB"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FC-1F3FC"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FD-1F3FD"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FE-1F3FE"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FF-1F3FF"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                } | undefined;
                skin_tone?: number | undefined;
                has?: TSet[] | undefined;
                colons?: string | undefined;
                native?: string | undefined;
                short_name?: string | undefined;
                skin?: number | undefined;
            };
            _skins?: any[] | undefined;
            name: string;
            colons: string;
            emoticons?: string[] | undefined;
            custom?: boolean | undefined;
            imageUrl?: string | undefined;
            unified?: string | undefined;
            skin?: number | undefined;
            native?: string | undefined;
            short_names: string[];
            short_name: string;
            id: string;
            uniqueId: string;
            getSkin: (skin: "native" | number) => TEmojiData;
            getPosition: () => string;
            ariaLabel: () => string;
        }[];
        first?: boolean | undefined;
    };
    activeCategory: {
        id: TCategoryId;
        name: string;
        emojis: {
            _data: {
                _: number;
                id: string;
                subcategory: number;
                name: string;
                unified: string;
                keywords: string[];
                emoticons?: string[] | undefined;
                text: string;
                short_names: string[];
                sheet: number[];
                search: string;
                skin_variations?: {
                    "1F3FA"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FB"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FC"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FD"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FE"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FF"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FA-1F3FA"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FB-1F3FB"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FC-1F3FC"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FD-1F3FD"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FE-1F3FE"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                    "1F3FF-1F3FF"?: {
                        added_in: string;
                        image: string;
                        sheet: number[];
                        unified: string;
                        has?: TSet[] | undefined;
                    } | undefined;
                } | undefined;
                skin_tone?: number | undefined;
                has?: TSet[] | undefined;
                colons?: string | undefined;
                native?: string | undefined;
                short_name?: string | undefined;
                skin?: number | undefined;
            };
            _skins?: any[] | undefined;
            name: string;
            colons: string;
            emoticons?: string[] | undefined;
            custom?: boolean | undefined;
            imageUrl?: string | undefined;
            unified?: string | undefined;
            skin?: number | undefined;
            native?: string | undefined;
            short_names: string[];
            short_name: string;
            id: string;
            uniqueId: string;
            getSkin: (skin: "native" | number) => TEmojiData;
            getPosition: () => string;
            ariaLabel: () => string;
        }[];
        first?: boolean | undefined;
    };
    searchEmojis: {
        _data: {
            _: number;
            id: string;
            subcategory: number;
            name: string;
            unified: string;
            keywords: string[];
            emoticons?: string[] | undefined;
            text: string;
            short_names: string[];
            sheet: number[];
            search: string;
            skin_variations?: {
                "1F3FA"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FB"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FC"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FD"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FE"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FF"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FA-1F3FA"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FB-1F3FB"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FC-1F3FC"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FD-1F3FD"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FE-1F3FE"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
                "1F3FF-1F3FF"?: {
                    added_in: string;
                    image: string;
                    sheet: number[];
                    unified: string;
                    has?: TSet[] | undefined;
                } | undefined;
            } | undefined;
            skin_tone?: number | undefined;
            has?: TSet[] | undefined;
            colons?: string | undefined;
            native?: string | undefined;
            short_name?: string | undefined;
            skin?: number | undefined;
        };
        _skins?: any[] | undefined;
        name: string;
        colons: string;
        emoticons?: string[] | undefined;
        custom?: boolean | undefined;
        imageUrl?: string | undefined;
        unified?: string | undefined;
        skin?: number | undefined;
        native?: string | undefined;
        short_names: string[];
        short_name: string;
        id: string;
        uniqueId: string;
        getSkin: (skin: "native" | number) => TEmojiData;
        getPosition: () => string;
        ariaLabel: () => string;
    }[] | undefined;
    previewEmojiCategoryIdx: number | undefined;
    previewEmojiCategoryId: string | undefined;
    activeSkin: number;
    categoryRefs: HTMLElement[];
    scrollRef: HTMLElement | undefined;
    mergedI18n: {
        readonly search: "Search";
        readonly notfound: "No Emoji Found";
        readonly categories: {
            readonly search: "Search Results";
            readonly recent: "Frequently Used";
            readonly smileys: "Smileys & Emotion";
            readonly people: "People & Body";
            readonly nature: "Animals & Nature";
            readonly foods: "Food & Drink";
            readonly activity: "Activity";
            readonly places: "Travel & Places";
            readonly objects: "Objects";
            readonly symbols: "Symbols";
            readonly flags: "Flags";
            readonly custom: "Custom";
        };
    };
    isSearching: boolean;
    idleEmoji: TEmojiData;
};

export declare type TCategory = {
    id: TCategoryId;
    name: string;
    emojis: TEmojiData[];
    first?: boolean;
};

declare type TCategoryId = string;

export declare type TCustomEmoji = TEmoji & {
    search?: string;
    custom: boolean;
    imageUrl?: any;
};

export declare type TData = TDataCompressed | TDataUncompressed;

declare type TDataCompressed = TDataShared & {
    compressed: number;
    emojis: Record<TShortName, TDataEmojiCompressed>;
};

declare type TDataEmoji = {
    _: number;
    id: string;
    subcategory: number;
    name: string;
    unified: string;
    keywords: string[];
    emoticons?: string[];
    text: string;
    short_names: string[];
    sheet: number[];
    search: string;
    skin_variations?: Partial<Record<TSkinSkin, TSkinVariation>>;
    skin_tone?: number;
    has?: TSet[];
};

declare type TDataEmojiCompressed = {
    _: number;
    [CompressionMap.name]: string;
    [CompressionMap.unified]: string;
    [CompressionMap.keywords]: string[];
    [CompressionMap.sheet]: number[];
    [CompressionMap.emoticons]?: string[];
    [CompressionMap.text]?: string;
    [CompressionMap.short_names]?: string[];
    [CompressionMap.subcategory]: number;
    [CompressionMap.skin_variations]?: Partial<Record<TSkinSkin, TSkinVariationCompressed>>;
    z?: number[];
};

declare type TDataShared = {
    all?: any;
    aliases: Record<string, string>;
    categories: {
        id: TCategoryId;
        name: string;
        emojis: number[];
    }[];
    subcategories: Record<string, number>;
};

declare type TDataUncompressed = TDataShared & {
    compressed: 0;
    emojis: Record<TShortName, TDataEmoji>;
};

declare type TEmoji = TDataEmoji & {
    colons: string;
    native: string;
    short_name: TShortName;
    skin?: number;
};

export declare type TEmojiData = {
    _data: Partial<TEmoji> & TDataEmoji;
    _skins?: TEmojiData[];
    name: string;
    colons: string;
    emoticons?: string[];
    custom?: boolean;
    imageUrl?: string;
    unified?: string;
    skin?: number;
    native?: string;
    short_names: string[];
    short_name: string;
    id: string;
    uniqueId: string;
    getSkin: (skin: 'native' | number) => TEmojiData;
    getPosition: () => string;
    ariaLabel: () => string;
};

export declare type TEmojiIndex = {
    emojis: Record<string, TEmojiData>;
    emoticons: Record<string, TShortName>;
    categories: TCategory[];
    emoji: (emojiId: string) => TEmojiData;
    firstEmoji: () => TEmojiData;
    hasEmoji: (emojiId: string) => boolean;
    nativeEmoji: (unicodeEmoji: string) => TEmojiData | null;
    addCustomEmoji: (customEmoji: TCustomEmoji) => TEmojiData;
    search: (value: string, maxResults?: number) => TEmojiData[];
    addEmoji: (emojiId: string, data: TDataEmoji) => TEmojiData | undefined;
    findEmoji: (emoji: string, skin?: any) => TEmojiData | null;
};

declare type TEmojiIndexOptions = {
    emojisToShowFilter?: (emoji: TEmojiData) => boolean;
    include?: TCategoryId[];
    exclude?: TCategoryId[];
    custom?: TCustomEmoji[];
    recent?: TShortName[];
    recentLength?: number;
};

export declare type TEmojiUI = ReturnType<ReturnType<typeof useEmojiUI2>['create']>;

export declare type TFallbackFn = (emoji: TEmojiData) => string;

export declare type TI18n = typeof I18N;

export declare type TPickerProps = {
    perLine?: number;
    maxSearchResults?: number;
    emojiSize?: number;
    title?: string;
    emoji?: string;
    color?: string;
    set?: TSet;
    skin?: number | null;
    defaultSkin?: number;
    native?: boolean;
    emojiTooltip?: boolean;
    autoFocus?: boolean;
    i18n?: TI18n;
    showPreview?: boolean;
    showSearch?: boolean;
    showCategories?: boolean;
    showSkinTones?: boolean;
    infiniteScroll?: boolean;
    pickerStyles?: Record<string, any>;
    data: TEmojiIndex;
    fallback?: TFallbackFn;
};

export declare type TPickerState = typeof state;

export declare type TPickerUtils = typeof pickerUtils;

export declare type TSet = (typeof SetMap)[TSetNum] | 'all';

declare type TSetNum = keyof typeof SetMap;

declare type TShortName = string;

declare type TSkin = (typeof SKINS)[number];

declare type TSkinSkin = TSkin | {
    [K in TSkin]: `${K}-${K}`;
}[TSkin];

declare type TSkinVariation = {
    added_in: string;
    image: string;
    sheet: number[];
    unified: string;
    has?: TSet[];
};

declare type TSkinVariationCompressed = {
    [CompressionMap.unified]: string;
    [CompressionMap.added_in]: string;
    [CompressionMap.image]: string;
    [CompressionMap.sheet]: number[];
    z?: number[];
};

export declare function useEmojiData(data: Partial<TCustomEmoji> & TDataEmoji): TEmojiData;

export declare function useEmojiIndex(data: TData, options?: TEmojiIndexOptions): TEmojiIndex;

export declare const useEmojiUI: (state: TPickerState) => {
    create: (e: TEmojiData) => {
        emoji: TEmojiData;
        canRender: boolean;
        cssClass: string[];
        cssStyle: {};
        content: string | undefined;
        title: string | undefined;
        ariaLabel: string;
    };
    toWatch: ((() => TSet) | (() => boolean) | (() => TFallbackFn | undefined) | (() => number))[];
};

declare const useEmojiUI2: (s: TPickerState) => {
    create: (e: TEmojiData) => {
        emoji: TEmojiData;
        canRender: boolean;
        cssClass: string[];
        cssStyle: {};
        content: string | undefined;
        title: string | undefined;
        ariaLabel: string;
    };
};

export { }
