<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav>
            <figure>
                <img src="../img/travel-app-logo.png" alt="icona rappresentante una valigia che si apre in un diario">
            </figure>
            <h1>Travel App</h1>
        </nav>
        <nav>
            <ul class="list-unstyled">
                <li>
                    <a href="http://localhost:8000/login">Accedi</a>
                </li>
                <li>
                    <a href="http://localhost:8000/register">Registrati</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    color: orange;
    height: 80px;
    border-bottom: 1px solid currentColor;
}

nav,
ul {
    display: flex;
    gap: 20px;
    align-items: center;

    a {
        text-decoration: none;
        font-size: 24px;
        color: orange;
    }
}
</style>