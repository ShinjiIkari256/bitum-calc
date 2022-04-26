<template>
    <div class="step-block">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'step-cards',
    props: {

    },
}
</script>

<style>
.step-block {
    width: 100%;
    border: 1px solid #303742;
    padding: 15px;
    margin-top: 15px;
}
.cards-block * {
    width: 100%;
}

.list-title {
    text-align: left;
}
</style>