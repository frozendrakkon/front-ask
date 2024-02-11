import { type TLevel, type TLevelValue, type TTheme, type TThemeValue } from "@/types"

export function getCheckedValues(items: Array<TLevel | TTheme>) {
    return items.reduce((acc: Array<TLevelValue | TThemeValue>, item: TLevel | TTheme) => {
        if (item.checked) acc.push(item.value)
        return acc
    }, [])
}