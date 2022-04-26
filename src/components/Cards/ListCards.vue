<template>
    <div class="cards-list">
        <CardItem
            :type="type"
            v-for="(item, index) in getlist"
            :key="item.id"
            :item="item"
            :index="index"
            @remove="removeItem"
        >
        </CardItem>
        <CardAdd
            :type="type"
            @add="addItem"
        />
    </div>
</template>

<script>
export default {
    name: 'ListCards',
    props: {
        type: {
            type: String,
            required: true,
        },
    },
    methods: {
        addItem() {
            this.$store.commit('newItem', this.type);
        },
        removeItem(model) {
            this.$store.dispatch('removeItem', { type: this.type, model: model });
        }
    },
    computed: {
        getlist() {
            return [...this.$store.getters.getList(this.type)];
        },
    },
}
</script>

<style>
.cards-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    gap: 10px;
    border: 1px solid #2c3e50;
}
</style>