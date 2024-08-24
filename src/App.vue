<script>
import AppHeader from './components/AppHeader.vue'
export default {
    name: 'Travel App',
    components: { AppHeader }
}
</script>

<template>
    <AppHeader />
    <main>
        <!-- pagine -->
        <RouterView />
    </main>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
