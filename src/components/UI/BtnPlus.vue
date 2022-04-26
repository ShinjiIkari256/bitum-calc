<template>
    <button @click.prevent class="btn-plus"><span>+</span></button>
</template>

<script>
export default {
    name: 'btn-plus'
}
</script>

<style scoped>
.btn-plus {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 1em;
    height: 1em;
    border: none;
    border-radius: 50%;
    /* background: orangered; */
    background: #303742;
    color: #fff;
}

.btn-plus span {
    padding: 0;
    margin: 0;
    line-height: .6em;
}

.cross {
    height: 25px;
    width: 25px;
    transform: rotate(45deg);
    font-size: 25px;
}

.big {
    font-size: 60px;
}
</style>