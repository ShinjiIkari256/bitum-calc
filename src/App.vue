<template>
    <navbar/>
    <div class="app text-dark">
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
    components: { Navbar },
}
</script>

<style>
*,
*::before,
*::after {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.app {
    width: 640px;
    min-height: calc(100vh - 50px);
    border: 1px solid #2c3e50;
    color: #ffffff;
    margin: auto;
    padding: 15px;
    padding-top: 20px;
    text-align: center;
}

@media (max-width: 640px) {
    .app {
        width: 100%;
    }
}
</style>