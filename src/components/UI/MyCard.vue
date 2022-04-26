<template>
    <div class="card">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'my-card',
    props: {
    },
    data() {
        return {

        }
    },
}
</script>

<style>
.card {
    padding: 10px;
}
</style>