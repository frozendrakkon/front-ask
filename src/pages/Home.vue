<script setup lang="ts">
import { computed, Ref, ref } from 'vue'
import defaultLayout from '@/layouts/defaultLayout.vue'
import TheAskCard from '@/components/TheAskCard.vue';
import NavigationBtn from '@/components/NavigationBtn.vue';
import BaseBtn from '@/components/BaseBtn.vue';
import SettingsItem from '@/components/SettingsItem.vue'
import { TAsk, type TLevel, type TTheme } from '@/types/index';
import { useQuestionsStore } from '@/store/questions'


const store = useQuestionsStore()

const levels: Ref<TLevel[]> = ref([
    {
        text: 'Junior',
        value: '1',
        checked: false,
        type: 'level'
    },
    {
        text: 'Middle',
        value: '2',
        checked: false,
        type: 'level'
    },
    {
        text: 'Senior',
        value: '3',
        checked: false,
        type: 'level'
    }
])
const themes: Ref<TTheme[]> = ref([
    {
        text: 'Html',
        value: 'html',
        checked: false,
        type: 'theme'
    },
    {
        text: 'Js',
        value: 'js',
        checked: false,
        type: 'theme'
    },
    {
        text: 'Vue',
        value: 'vue',
        checked: false,
        type: 'theme'
    },
    {
        text: 'Code',
        value: 'code',
        checked: false,
        type: 'theme'
    }
])

const checkedLevels = computed((): Array<TLevel> => {
    return (levels.value.filter((level) => level.checked))
})
const checkedThemes = computed((): Array<TTheme> => {
    return (themes.value.filter((theme) => theme.checked))
})

const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
store.setCountFavorites(favorites.length)

function acceptSettings(): void {
    store.collectAsks(checkedLevels.value, checkedThemes.value)
}

function clickNavigation(direction: 'prev' | 'next') {
    store.changeCurrentAsk(direction)
}

function disabledNavigation(direction: 'prev' | 'next') {
    const { currentAskIndex, asks } = store

    if (direction === 'prev' && currentAskIndex === 0) return true
    if (direction === 'next' && currentAskIndex === asks.length - 1) return true
    if (currentAskIndex === -1) return true
    return false
}

function disabledAccept() {
    return Boolean(!checkedLevels.value.length || !checkedThemes.value.length)
}

function addFavorite() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.length) {
        favorites.push(store.currentAsk)
        // https://stackoverflow.com/questions/39997067/es6-unique-array-of-objects-with-set
        // @ts-ignore
        const uniqFavorites = [...new Set(favorites.map(o => JSON.stringify(o)))].map(s => JSON.parse(s))
        localStorage.setItem('favorites', JSON.stringify(uniqFavorites))
        store.setCountFavorites(uniqFavorites.length)
        return
    }
    store.setCountFavorites(1)
    localStorage.setItem('favorites', JSON.stringify([store.currentAsk]))
}

function deleteFavorite() {
    const favorites: Array<TAsk> = JSON.parse(localStorage.getItem('favorites') || '[]');

    const deleteElIndex = favorites.findIndex((favorite) => {
        return favorite.ask === store?.currentAsk?.ask
    })

    favorites.splice(deleteElIndex, 1)

    localStorage.setItem('favorites', JSON.stringify(favorites))
    store.setCountFavorites(favorites.length)
}
</script>

<template>
    <defaultLayout>
        <div class="settings-ask">
            <div class="settings-ask__settings">
                <SettingsItem :items="levels" text="Уровень:" />
                <SettingsItem :items="themes" text="Тема:" />
            </div>
            <BaseBtn :disabled="disabledAccept()" text="Применить" @on-click-btn="acceptSettings" />
        </div>
        <div class="ask-block">
            <TheAskCard class="ask-block__modal" :showAddFavorite="Boolean(store.currentAsk)" :ask="store?.currentAsk"
                @addFavorite="addFavorite()" @deleteFavorite="deleteFavorite" />
            <div class="ask-block__navigation">
                <NavigationBtn :disabled="disabledNavigation('prev')" @on-click-btn="clickNavigation('prev')" />
                <NavigationBtn :disabled="disabledNavigation('next')" @on-click-btn="clickNavigation('next')" />
            </div>

        </div>
    </defaultLayout>
</template>

<style lang="scss" scoped>
.settings-ask {
    display: flex;
    justify-content: space-around;
    align-items: center;

    &__settings {
        &> :nth-child(2) {
            margin-top: 20px;
        }
    }
}

.ask-block {
    margin: 70px auto 0;
    max-width: 80%;

    &__navigation {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-top: 30px;

        &>div {
            width: 50%
        }

        :nth-child(2) {
            transform: rotate(180deg);
        }
    }
}
</style>