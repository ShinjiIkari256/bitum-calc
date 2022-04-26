<template>
    <my-card
        class="card-item"
        @change="updateList"
    >
        <div class="header-card">
            <span class="card-title bg-dark text-light">
                {{ `${typeName[type]} ${index + 1}` }}
            </span>
            <btn-plus class="cross" @click="$emit('remove', model)"/>
        </div>

        <my-input :title="'Ширина'" v-model.number="model.w" :unit="'м'" />
        <my-input :title="'Высота'" v-model.number="model.h" :unit="'м'" />
    </my-card>
</template>

<script>
export default {
    name: 'CardItem',
    props: {
        type: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            default: '',
        },
        index: {
            type: Number,
            required: true,
        },
        item: {
            type: Object,
            required: true,
        },

    },
    data() {
        return {
            model: {
                id: this.item.id,
                h:  this.item.h,
                w:  this.item.w,
            },
            typeName: {
                wall: 'Стена',
                window: 'Окно',
                door: 'Дверь',
            },
        }
    },
    methods: {
        updateList() {
            this.$store.dispatch('changeList', { type: this.type, model: this.model });
        },
    },
}
</script>

<style scoped>
.header-card {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-title {
    padding: .5px 8px;
    border-radius: 20px;
}
</style>