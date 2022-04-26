<template>
    <div
        class="form-room"
        @change="changeSize"
    >
        <my-input :title="'Длина'" v-model.number="model.a" :unit="'м'" />
        <my-input :title="'Ширина'" v-model.number="model.b" :unit="'м'" />
        <my-input :title="'Высота'" v-model.number="model.h" :unit="'м'" />
    </div>
</template>

<script>
export default {
    name: 'FormRoom',
    data() {
        return {
            model: {
                a: 0,
                b: 0,
                h: 0,
            }
        }
    },
    methods: {
        changeSize() {
            console.log('room');
            this.$store.dispatch('changeRoomSize', this.model);
        }
    },
    created() {
        this.model = this.$store.getters.getRoom;
    },
}
</script>

<style scoped>
.form-room {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex: 1 1 auto;
    gap: 10px;
}
</style>