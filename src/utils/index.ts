import { type TLevel, type TLevelValue, type TTheme, type TThemeValue } from "@/types"

export function getCheckedValues(items: Array<TLevel | TTheme>) {
    return items.reduce((acc: Array<TLevelValue | TThemeValue>, item: TLevel | TTheme) => {
        if (item.checked) acc.push(item.value)
        return acc
    }, [])
}

export function levelToText (level: 1 | 2 | 3 ) {
    switch (level) {
        case 1:
            return 'junior';
        case 2:
            return 'middle';
        case 3:
            return 'senior';
        default:
            return ''
        
    }
}