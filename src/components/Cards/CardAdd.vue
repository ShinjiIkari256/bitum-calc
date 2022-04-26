<template>
    <my-card
        class="add-card"
        @click.prevent="$emit('add')"
    >
        <btn-plus class="big"/>
        <span>{{ `Добавить ${ typeName[type] }` }}</span>
    </my-card>
</template>

<script>
export default {
    name: 'CardAdd',
    props: {
        type: {
            type: String,
            define: '',
        },
    },
    data: () => ({
        typeName: {
            wall: 'стену',
            window: 'окно',
            door: 'дверь',
        }
    }),
}
</script>

<style scoped>
.add-card {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    min-height: 187px;
}
</style>