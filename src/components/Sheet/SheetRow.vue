<template>
    <tr>
        <td>{{ record.name  }}</td>
        <td>{{ record.cost  }}</td>
        <td>{{ record.count }}</td>
        <td>{{ record.total }}</td>
    </tr>
</template>

<script>
export default {
    name: 'SheetRow',
    props: {
        record: {
            type: Object,
        }
    },
}
</script>

<style scoped>
td {
    text-align: right;
}
td:first-child {
    text-align: left;
}
thead td, thead td:first-child {
    text-align: center;
}
</style>