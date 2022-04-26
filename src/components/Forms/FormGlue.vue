<template>
    <div
        class="form-glue"
        @change="changeGlue"
    >

        <div class="params-block">

            <div class="param-block">
                <my-select
                    :title="'Измерения'"
                    v-model="model.unit"
                    :options="$store.getters.getUnitsOptions"
                />
            </div>

            <div class="param-block">
                <my-input :title="typeUnit" v-model.number="model.volume" :unit="getUnit().v" />
            </div>

            <div class="param-block">
                <my-input :title="'Расход'" v-model.number="model.consumption" :unit="getUnit().c" />
            </div>

            <div class="param-block">
                <my-input :title="'Цена'" v-model.number="model.cost" :unit="'₽'" />
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'FormGlue',
    data() {
        return {
            units: this.$store.getters.getUnits,
            unitsOptions: this.$store.getters.getUnitsOptions,
            model: {
                unit: 'kg',
                volume: 0,
                consumption: 0,
                cost: 0,
            }
        }
    },
    methods: {
        changeGlue() {
            this.$store.dispatch('changeGlue', this.model);
        },
        getUnit() { return this.units[this.model.unit]; },
    },
    computed: {
        typeUnit() { return this.unitsOptions.filter(i => i.value === this.model.unit)[0].name; },

    },
    created() {
        this.model = this.$store.getters.getGlue;
    },
}
</script>

<style scoped>
.form-glue,
.params-block,
.param-block,
.param-btn {
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
</style>