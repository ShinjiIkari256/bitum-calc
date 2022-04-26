<template>
    <table class="table table-striped table-hover">
        <thead>
            <SheetRow :record="header" />
        </thead>
        <tbody>
            <SheetRow
                v-for="(row, index) in rows"
                :key="index"
                :record="record(row)"
            />
            <SheetRow :record="totalrecord()" class="active" />
        </tbody>
    </table>
</template>

<script>
import SheetRow from './SheetRow.vue';

export default {
    name: 'Sheet',
    components: { SheetRow },
    data() {
        return {
            header: {
                name: 'Позиция',
                cost: 'Цена, ₽',
                count: 'Количество',
                total: 'Стоимость, ₽',
            },
            rows: [
                { id: 0, name: 'wallpaper 1', cost: 5, count: 1, },
                { id: 1, name: 'wallpaper 2', cost: 5, count: 2, },
                { id: 2, name: 'wallpaper 3', cost: 5, count: 3, },
                { id: 3, name: 'wallpaper 4', cost: 5, count: 4, },
            ],
        }
    },
    methods: {
        total: (item) => item.cost * item.count,
        record(item) {
            return {
                ...item,
                total: this.total(item),
            };
        },
        totalcost() {
            return this.rows.reduce((sum, item) => sum + this.total(item), 0);
        },
        totalrecord() {
            return {
                name: 'Итого',
                cost: '',
                count: '',
                total: this.totalcost(),
            };
        },
    },
}
</script>

<style>
thead tr td {
    text-align: center;
}

</style>