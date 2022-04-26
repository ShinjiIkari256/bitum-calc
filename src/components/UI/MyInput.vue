<template>
    <div class="input-block">
        <div class="input-title" >
            <span v-show="title">{{ title }}</span>
        </div>
        <div class="input-group">
            <input
                type="number"
                class="form-input"
                placeholder="0"
                min="0"
                step="0.01"
                :value="modelValue"
                @input="updateInput"
                @change="$emit('change')"
            />
            <span v-show="unit" class="input-group-addon">{{ unit }}</span>
        </div>
    </div>

</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: {
            type: Number,
            default: 0,
        },
        unit: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
    },
    data() {
        return {

        }
        // units: { m: 'м', cm: 'см', cash: '₽', },
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        },
    }
}
</script>

<style scoped>
.input-block {
    margin: 5px 0;
}

.input-title {
    width: 100%;
    text-align: left;
}

input[type="number"] {
    text-align: right;
    -moz-appearance: none;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
}
</style>