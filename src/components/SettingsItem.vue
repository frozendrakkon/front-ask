<script setup lang="ts">
import { TLevel, TTheme } from '@/types/index';
import { PropType } from 'vue';

defineProps({
    text: {
        type: String as PropType<string>,
        required: true
    },
    items: {
        type: Object as PropType<Array<TLevel | TTheme>>,
        required: true
    }
})

function clickItem(item: TLevel | TTheme) {
    item.checked = !item.checked
}

</script>

<template>
    <div class="settings-item">
        <span class="settings-item__text">{{ text }}</span>
        <div v-for="(item, idx) in items" :key="idx" class="settings-item__checkbox" @click="clickItem(item)">
            <input type="checkbox">
            <span>{{ item.text }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.settings-item {
    display: flex;
    align-items: center;

    &__text {
        font-size: 16px;
        font-weight: 400;
        font-family: 'Inter';
        font-weight: 400;
        color: #828282;
        width: 100px;
    }

    &__checkbox {
        width: 120px;
        display: flex;
        align-items: center;

        span {
            font-family: 'Inter';
            font-weight: 400;
            margin-left: 10px;
        }

        input[type='checkbox'] {
            border-radius: 4px;
            height: 24px;
            width: 24px;
        }
    }
}
</style>@/types