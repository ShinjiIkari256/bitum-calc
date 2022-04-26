<template>
    <header class="navbar bg-dark text-light">
        <section class="navbar-section">
            <my-button
                @click="$router.push('/')"
            >
                Калькулятор обоев
            </my-button>
        </section>
        <section class="navbar-section">
            <my-button
                @click="$router.push('/result')"
            >
                Результат
            </my-button>
        </section>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    height: 50px;
    box-shadow: 2px 2px 4px grey;
    padding: 0 15px;
    background: #2c3e50;
}
</style>