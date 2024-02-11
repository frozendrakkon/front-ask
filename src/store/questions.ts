import { defineStore } from 'pinia'
import { type TLevelValue, type ask, type TLevel, type TTheme } from '@/types'

import codeAsk from '@/questions/code'
import jsAsk from '@/questions/javaScript'
import htmlAsk from '@/questions/html'
import vueAsk from '@/questions/vue'

interface IQuestionsState {
    currentAsk: null | ask
    asks: Array<ask>
    currentAskIndex: number
    checkedSettings: {
        levels: Array<TLevel>,
        themes: Array<TTheme>
    } | null
}

import shuffle from 'lodash.shuffle'
import { getCheckedValues } from '@/utils'

export const useQuestionsStore = defineStore('questions', {
    state: (): IQuestionsState => {
        return {
            currentAsk: null,
            asks: [],
            currentAskIndex: -1,
            checkedSettings: null
        }
    },
    actions: {
        changeCurrentAsk(direction: 'prev' | 'next') {
            if (direction === 'next') {
                this.currentAskIndex += 1
                this.currentAsk = this.asks[this.currentAskIndex]
                console.log(this.currentAsk, this.currentAskIndex, this.asks)
            } else {
                this.currentAskIndex -= 1
                this.currentAsk = this.asks[this.currentAskIndex]
                console.log(this.currentAsk, this.currentAskIndex, this.asks)
            }
        },
        collectAsks(levels: TLevel[], themes: TTheme[]) {

            const themesCheckedValues = getCheckedValues(themes)
            const levelsCheckedValues = getCheckedValues(levels)

            const allAsks = [...codeAsk, ...jsAsk, ...htmlAsk, ...vueAsk]

            this.asks = shuffle(
                allAsks.filter((ask: ask) => {
                    const { theme, level } = ask
                    return (
                        themesCheckedValues.includes(theme) &&
                        levelsCheckedValues.includes(String(level) as TLevelValue)
                    )
                })
            )

            this.changeCurrentAsk('next')
            this.checkedSettings = {levels, themes};
        }
    }
})
