<script setup lang="ts">
import { reactive } from 'vue'
import defaultLayout from '@/layouts/defaultLayout.vue'
import TheAskModal from '@/components/TheAskModal.vue';
import NavigationBtn from '@/components/NavigationBtn.vue';
import BaseBtn from '@/components/BaseBtn.vue';
import SettingsItem from '@/components/SettingsItem.vue'
import { TItems } from '@/types/general';

const levelItems: Array<TItems> = reactive([
    {
        text: 'Junior',
        value: '1',
        checked: false,
        type: 'level'
    },
    {
        text: 'Middle',
        value: '2',
        checked: false,
        type: 'level'
    },
    {
        text: 'Senior',
        value: '3',
        checked: false,
        type: 'level'
    }
])
const themes: Array<TItems> = reactive([
    {
        text: 'HTML',
        value: 'html',
        checked: false,
        type: 'theme'
    },
    {
        text: 'Js',
        value: 'js',
        checked: false,
        type: 'theme'
    },
    {
        text: 'Vue',
        value: 'vue',
        checked: false,
        type: 'theme'
    },
    {
        text: 'Code',
        value: 'code',
        checked: false,
        type: 'theme'
    }
])


</script>

<template>
    <defaultLayout>
        <div class="settings-ask">
            <div class="settings-ask__settings">
                <SettingsItem :items="levelItems" text="Уровень:" />
                <SettingsItem :items="themes" text="Тема:" />
            </div>
            <BaseBtn />
        </div>
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
.settings-ask {
    display: flex;
    justify-content: space-around;
    align-items: center;
    &__settings {
        & > :nth-child(2) {
            margin-top: 20px;
        }
    }
}

.ask-block {
    margin: 70px auto 0;
    max-width: 80%;

    &__navigation {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-top: 30px;

        &>div {
            width: 50%
        }

        :nth-child(2) {
            transform: rotate(180deg);
        }
    }
}</style>