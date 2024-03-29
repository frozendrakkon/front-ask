<script setup lang="ts">
import { type TAsk } from '@/types';
import { computed, PropType, Ref, ref } from 'vue';
import { levelToText } from '@/utils/index'
import { useQuestionsStore } from '@/store/questions';

const emit = defineEmits(['addFavorite', 'deleteFavorite'])
const store = useQuestionsStore()

const props = defineProps({
    showAddFavorite: {
        type: Boolean as PropType<boolean>,
        required: true
    },
    ask: {
        type: (Object) as PropType<TAsk | null>,
        required: true
    }
})

function addFavorite() {
    emit('addFavorite')
}

function deleteFavorite() {
    emit('deleteFavorite')
}

const isCardAlreadyAddFavorite = computed(() => {
    const favorites: Ref<Array<TAsk>> = ref(JSON.parse(localStorage.getItem('favorites') || '[]'));
    store.countFavorites

    return favorites.value.some((favorite) => {
        return Object.is(JSON.stringify(favorite), JSON.stringify(props.ask))
    })
})
</script>

<template>
    <div class="ask-modal">
        <div class="ask-modal__header">
            <div v-if="ask" class="about-task">
                <div class="about-task__theme">{{ ask?.theme }}</div>
                <div class="about-task__level">{{ levelToText(ask.level) }}</div>
            </div>
            <div v-if="showAddFavorite" class="favorite">
                <span v-if="isCardAlreadyAddFavorite" @click="deleteFavorite">Удалить из избранного</span>
                <span v-else @click="addFavorite()">В избранное</span>
                <img src="@/assets/images/star.svg">
                <!--  -->
            </div>
        </div>
        <div class="ask">{{ ask?.ask || 'Выберите уровень и темы' }}</div>
    </div>
</template>

<style lang="scss" scoped>
.ask-modal {
    padding: 30px;
    border-radius: 20px;
    background-color: #F7F7F7;

    &__header {
        display: flex;
        justify-content: space-between;
    }

    .ask {
        color: #000;
        font-family: 'Manrope';
        font-size: 20px;
        font-weight: 600;
        word-wrap: break-word;
        margin-top: 16px;
    }
}

.about-task {
    display: flex;

    &__theme,
    &__level {
        font-size: 16px;
        color: #828282;
        font-family: 'Inter';
        font-weight: 400;
    }

    div:nth-child(n + 2) {
        margin-left: 10px;
    }
}

.favorite {
    color: #2a73d2;
    font-size: 16px;
    font-family: 'Manrope';
    display: flex;
    align-items: center;

    img {
        margin-left: 4px;
    }

    @include hover {
        cursor: pointer;
        color: #2360b0;
    }
}
</style>