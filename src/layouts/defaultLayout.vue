<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';

</script>

<template>
    <div class="default-layout">
        <TheHeader />

        <div class="content">
            <slot />

        </div>
    </div>
</template>

<style lanh="scss" scoped>
.default-layout {
    max-width: 70%;
    margin: 48px auto 0;
}
.content {
    margin-top: 50px;
}
</style>