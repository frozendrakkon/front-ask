<script setup lang="ts">
import { reactive, toRaw } from 'vue'
import defaultLayout from '@/layouts/defaultLayout.vue'
import TheAskModal from '@/components/TheAskModal.vue';
import NavigationBtn from '@/components/NavigationBtn.vue';
import BaseBtn from '@/components/BaseBtn.vue';
import SettingsItem from '@/components/SettingsItem.vue'
import { type TLevelValue, type TThemeValue, type TLevel, type TTheme } from '@/types/index';
import { useQuestionsStore } from '@/store/questions'


const store = useQuestionsStore()

const levels: TLevel[] = reactive([
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
const themes: TTheme[] = reactive([
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

function getChecked(items: Array<TLevel | TTheme>): Array<TLevelValue | TThemeValue> {
    return items.reduce((acc: Array<TLevelValue | TThemeValue>, item) => {
        if (item.checked) acc.push(item.value)
        return acc
    }, [])
}

function acceptSettings() {
    const checkedLevels = getChecked((toRaw(levels)))
    const checkedThemes = getChecked((toRaw(themes)))

    store.collectAsks(checkedLevels as TLevelValue[], checkedThemes as TThemeValue[])
}

function clickNavigation(direction: 'prev' | 'next') {
    store.changeCurrentAsk(direction)
}

</script>

<template>
    <defaultLayout>
        <div class="settings-ask">
            <div class="settings-ask__settings">
                <SettingsItem :items="levels" text="Уровень:" />
                <SettingsItem :items="themes" text="Тема:" />
            </div>
            <BaseBtn text="Применить" @on-click-btn="acceptSettings" />
        </div>
        <div class="ask-block">
            <TheAskModal class="ask-block__modal" />
            <div class="ask-block__navigation">
                <NavigationBtn @on-click-btn="clickNavigation('prev')" />
                <NavigationBtn @on-click-btn="clickNavigation('next')" />
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
        &> :nth-child(2) {
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
}
</style>