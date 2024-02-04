<template>
    <div class="ask-modal">
        <div class="ask-modal__header">
            <div class="about-task">
                <div class="about-task__theme">JS</div>
                <div class="about-task__level">Junior</div>
            </div>
            <div class="favorite">
                <span>В избранное</span>
                <img src="@/assets/images/star.svg">
            </div>
        </div>
        <div class="ask">Как можно узнать, равно ли значение переменной NaN?</div>
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
    &__theme, &__level {
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
    }
}
</style>