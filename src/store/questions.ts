import { defineStore } from "pinia"
import { type TLevelValue, type TThemeValue, type ask } from "@/types";

import codeAsk from "@/questions/code"
import jsAsk from "@/questions/javaScript"
import htmlAsk from "@/questions/html"
import vueAsk from "@/questions/vue"

import { getRandomNumber } from "@/utils";

interface IQuestionsState {
    currentAsk: null | ask;
    asks: Array<ask>
}

export const useQuestionsStore = defineStore('questions', {
    state: (): IQuestionsState => {
        return {
            currentAsk: null,
            asks: []
        }
    },
    actions: {
        changeCurrentAsk(direction: 'prev' | 'next') {
            console.log('tut')
            this.currentAsk = this.asks[getRandomNumber(this.asks.length)]
        },
        collectAsks(levels: TLevelValue[], themes: TThemeValue[]) {
            const allAsks = [
                ...codeAsk,
                ...jsAsk,
                ...htmlAsk,
                ...vueAsk,
            ];

            this.asks = allAsks.filter((ask: ask) => {
                const { theme, level } = ask
                if ((themes).includes(theme) && levels.includes(String(level) as TLevelValue)) {

                }
            })
        }
    }
})