export type TAsk = {
    id: number
    ask: string
    theme: 'js' | 'html' | 'code' | 'hr' | 'vue' | 'ts',
    level: 1 | 2 | 3
}

type GItem<value, type> = {
    text: string
    value: value
    checked: boolean
    type: type
}

export type TLevel = GItem<('1' | '2' | '3'), 'level'>
export type TTheme = GItem<('js' | 'html' | 'code' | 'hr' | 'vue' | 'ts'), 'theme'>

export type TLevelValue = '1' | '2' | '3'
export type TThemeValue = 'js' | 'html' | 'code' | 'hr' | 'vue' | 'ts'