export type ask = {
    id: number
    ask: string
    theme:  'js' | 'html' | 'code' | 'hr' | 'vue' | 'ts',
    level: 1 | 2 | 3
}

export type TItems = {
    text: string
    value: string
    checked: boolean
    type: 'level' | 'theme'
}