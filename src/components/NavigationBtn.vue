<template>
    <button :disabled="disabled" class="navigation-btn" @click="onClickBtn">
        <img src="@/assets/images/arrow.svg">
    </button>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

const emit = defineEmits(['onClickBtn'])

defineProps({
    disabled: {
        type: Boolean as PropType<boolean>,
        required: true
    },
})


function onClickBtn() {
    emit('onClickBtn')
}
</script>

<style lang="scss" scoped>
.navigation-btn {
    width: 100%;
    padding: 15px 35px;
    background-color: #EFF5FE;
    display: flex;
    justify-content: center;
    border: none;
    align-items: center;
    @include hover {
        // opacity: 0.8;
        background-color: #dbe8fb;
        cursor: pointer;
    }
    &:disabled {
        background-color: #dddddd;
        cursor: default;
    }
}
</style>