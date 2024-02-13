<script setup lang="ts">
import { useQuestionsStore } from '@/store/questions';

const store = useQuestionsStore()

</script>

<template>
    <div class="header">
        <router-link to="/">
            <img class="header__logo" src="@/assets/images/logo.svg" />
        </router-link>
        <router-link to="/favorites">
            <div class="header__favorite">Избранное <span>({{ store.countFavorites }})</span></div>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;

    a {
        text-decoration: none;
    }

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