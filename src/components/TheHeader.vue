<script setup lang="ts">
import { computed } from 'vue';

const countFavorite = computed(() => {
    return JSON.parse(localStorage.getItem('favorites') || '[]')?.length || 0
})
</script>

<template>
    <div class="header">
        <img class="header__logo" src="@/assets/images/logo.svg" />
        <div class="header__favorite">Избранное <span>({{ countFavorite }})</span></div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;

    &__favorite {
        font-family: 'Inter';
        font-size: 18px;
        font-weight: 400;
        color: #333;

        span {
            color: #2F80ED;
        }

        @include hover {
            cursor: pointer;
        }
    }
}
</style>