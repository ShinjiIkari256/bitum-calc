<template>
    <div>
        <h1>Калькулятор</h1>
        <step-card>
            <h2 class="list-title h3">Серые стены</h2>

            <Tabs>
                <TabItem :name="`Комната`">
                    <FormRoom />
                </TabItem>
                <TabItem :name="`Стены`">
                    <ListCards :type="'wall'"/>
                </TabItem>
            </Tabs>
        </step-card>
        <step-card>
            <h2 class="list-title h3">Мутные окна</h2>
            <ListCards :type="'window'"/>
        </step-card>
        <step-card>
            <h2 class="list-title h3">Двери</h2>
            <ListCards :type="'door'"/>
        </step-card>
        <step-card>
            <h2 class="list-title h3">Обои</h2>
            <FormWallpaper />
        </step-card>
        <step-card>
            <h2 class="list-title h3">Клей</h2>
            <FormGlue/>
        </step-card>
    </div>
</template>

<script>
import StepCard from '@/components/StepCard.vue';

export default {
    components: { StepCard },
}
</script>

<style>
</style>