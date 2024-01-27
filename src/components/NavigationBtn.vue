<template>
    <div class="navigation-btn">
        <img src="@/assets/image/arrow.svg">
    </div>
</template>

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