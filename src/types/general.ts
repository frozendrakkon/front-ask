export type ask = {
    id: number
    ask: string
    theme:  'js' | 'html' | 'css' | 'task' | 'hr' | 'vue' | 'ts' | 'other',
    level: 1 | 2 | 3
}