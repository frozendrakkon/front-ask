<script setup lang="ts">
import defaultLayout from '@/layouts/defaultLayout.vue'
import TheAskModal from '@/components/TheAskModal.vue';
import NavigationBtn from '@/components/NavigationBtn.vue';
</script>

<template>
    <defaultLayout>
            <div class="ask-block">
                <TheAskModal class="ask-block__modal" />
                <div class="ask-block__navigation">
                    <NavigationBtn />
                    <NavigationBtn />
                </div>

            </div>
    </defaultLayout>    
</template>

<style lang="scss" scoped>
.ask-block {
    margin: 0 auto;
    max-width: 80%;
    &__navigation {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-top: 30px;
        & > div {
            width: 50%
        }
        :nth-child(2) {
            transform: rotate(180deg);
        }
    }
}
</style>