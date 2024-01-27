<script setup lang="ts">
const emit = defineEmits(['onClickBtn'])
defineProps({
    text: { type: String, default: 'Применить' }
})

function onClickBtn() {
    emit('onClickBtn')
}
</script>

<template>
    <button class="base-btn" @click="onClickBtn">{{ text }}</button>
</template>

<style lang="scss" scoped>
.base-btn {
    padding: 12px 36px;
    background-color: #4F4F4F;
    border-radius: 10px;
    color: #fff;
    font-weight: 500;
    font-size: 18px;
    font-family: Manrope;
    border: none;

    @include hover {
        opacity: 0.8;
        cursor: pointer;
    }
}
</style>