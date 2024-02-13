<script setup lang="ts">
import defaultLayout from '@/layouts/defaultLayout.vue'
import TheAskCard from '@/components/TheAskCard.vue'
import { type TAsk } from '@/types';
import { useQuestionsStore } from '@/store/questions';
import { reactive } from 'vue';
import BaseBtn from '@/components/BaseBtn.vue';

const favorites: Array<TAsk> = reactive(JSON.parse(localStorage.getItem('favorites') || '[]'));
const store = useQuestionsStore()

function deleteFavorite(ask: TAsk) {
    const deleteElIndex = favorites.findIndex((favorite) => {
        return favorite.ask === ask.ask
    })

    favorites.splice(deleteElIndex, 1)

    localStorage.setItem('favorites', JSON.stringify(favorites))
    store.setCountFavorites(favorites.length)
}

function deleteAll() {
    favorites.splice(0, favorites.length)
    localStorage.setItem('favorites', '[]')
    store.setCountFavorites(favorites.length);
}
</script>

<template>
    <defaultLayout>
        <div class="favorites">
            <BaseBtn :text="'Удалить всё'" @onClickBtn="deleteAll"/>
            <TheAskCard v-for="ask in favorites" :key="ask.ask" :ask="ask" showAddFavorite class="favorites__item"
                @deleteFavorite="deleteFavorite(ask)" />
        </div>
    </defaultLayout>
</template>

<style lang="scss" scoped>
.favorites {
    &> :nth-child(n + 2) {
        margin-top: 24px;
    }
}
</style>