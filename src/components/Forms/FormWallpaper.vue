<template>
    <div
        class="form-wallpaper"
        @change="changeSize"
    >
        <my-select
            :title="'Тип обоев'"
            v-model="model.type"
            :options="$store.getters.getWallpaperType"
        />

        <div class="params-block">

            <div class="param-block with-btn">
                <my-input :title="'Длина'" v-model.number="model.a" :unit="'м'" />
                <div class="param-btn">
                    <my-button>10.05 м</my-button>
                    <my-button>25 м</my-button>
                </div>
            </div>
            <div class="param-block with-btn">
                <my-input :title="'Ширина'" v-model.number="model.b" :unit="'м'" />
                <div class="param-btn">
                    <my-button style="btn">0.53 м</my-button>
                    <my-button style="btn">1.06 м</my-button>
                </div>
            </div>
            <div class="param-block">
                <my-input :title="'Раппорт'" v-model.number="model.rapport" :unit="'см'" />
            </div>

            <div class="param-block">
                <my-input :title="'Цена'" v-model.number="model.cost" :unit="'₽'" />
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'FormWallpaper',
    data() {
        return {
            model: {
                type: '',
                a: 0,
                b: 0,
                rapport: 0,
                cost: 0,
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
.form-wallpaper,
.params-block,
.param-block,
.param-btn  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
}

.params-block,
.param-btn {
    flex-direction: row;
    flex: 1 1 auto;
}

.param-block:not(.with-btn) {
    justify-content: flex-start;
    align-items: flex-start;
}
</style>