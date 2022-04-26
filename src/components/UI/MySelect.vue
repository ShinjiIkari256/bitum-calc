<template>
    <div class="input-block">
        <div class="input-title" >
            <span v-show="title">{{ title }}</span>
        </div>
        <div class="input-group">
            <select
                v-model="modelValue"
                @change="changeOption"
                class="form-select"
            >
                <!-- <option disabled value="">Выберите из списка</option> -->
                <option
                    v-for="option in options"
                    :key="option.value"
                    :value="option.value"
                >
                    {{ option.name }}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => [],
        },
        title: {
            type: String,
            default: '',
        },
    },
    methods: {
        changeOption(event) {
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
</style>