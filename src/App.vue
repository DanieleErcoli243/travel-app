<script>
import AppHeader from './components/AppHeader.vue'
import AppLoader from './components/AppLoader.vue'
import { store } from './data/store.js'
export default {
    name: 'Travel App',
    components: { AppHeader, AppLoader },
    data: () => ({
        store
    })
}
</script>

<template>
    <AppLoader v-if="store.isLoading" />
    <AppHeader />
    <main v-show="!store.isLoading">
        <!-- pagine -->
        <RouterView />
    </main v-show="!store.isLoading">
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
