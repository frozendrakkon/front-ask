<template>
    <div class="navigation-btn" @click="onClickBtn">
        <img src="@/assets/images/arrow.svg">
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['onClickBtn'])

function onClickBtn() {
    emit('onClickBtn')
}
</script>

<style lang="scss" scoped>
.navigation-btn {
    padding: 15px 35px;
    background-color: #EFF5FE;
    display: flex;
    justify-content: center;
    align-items: center;
    @include hover {
        // opacity: 0.8;
        background-color: #dbe8fb;
        cursor: pointer;
    }
}
</style>