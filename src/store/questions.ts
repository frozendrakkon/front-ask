import { defineStore } from "pinia"
import { computed, reactive } from "vue"

import { type ask } from "@/types";

import codeAsk from "@/questions/code"
import jsAsk from "@/questions/javaScript"
import htmlAsk from "@/questions/html"
import vueAsk from "@/questions/vue"

export const useQuestionsStore = defineStore('questions', () => {
    const lastQuestions: Array<ask> = reactive([])
    const allAsks: Array<ask> = [
        ...codeAsk,
        ...jsAsk,
        ...htmlAsk,
        ...vueAsk,
    ]

    function getRandomNumber(): number {
        return Math.floor(Math.random() * (allAsks.length - 0 + 1)) + 0;
    }

    const currentAsk = computed(() => {
        return allAsks[getRandomNumber()]
    })

    function addLastQuestions(ask: ask) {
        lastQuestions.push(ask)
    }


    return { lastQuestions, currentAsk, addLastQuestions }
})