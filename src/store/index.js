import { createStore } from 'vuex';

export default createStore({
    state: {
        setAsRoom: true,
        room: {
            a: 0,
            b: 0,
            h: 0,
        },
        wall: [
            { id: 1, h: 2, w: 4},
        ],
        window: [
            { id: 1, h: 2, w: 4},
            { id: 2, h: 9, w: 3},
        ],
        door: [
            { id: 1, h: 2, w: 4},
            { id: 17, h: 9, w: 3},
            { id: 3, h: 4, w: 8},
        ],
        wallpaper: {
            type: '',
            a: 0,
            b: 0,
            rapport: 0,
            cost: 0,
        },
        wallpaperType: [
            {value: 'nonwoven', name: 'Флизелиновые'},
            {value: 'vinyl', name: 'Виниловые'},
            {value: 'paper', name: 'Бумажные'},
            {value: 'other', name: 'Другие'},
        ],
        glue: {
            unit: 'kg',
            volume: 0,
            consumption: 0,
            cost: 0,
        },
        unitsOptions: [
            { value: 'kg', name: 'Масса' },
            { value: 'ml', name: 'Объём' },
        ],
        units: {
            'kg': { v: 'кг', c: 'г/м²' },
            'ml': { v: 'л', c: 'мл/м²' },
        },
        calculated: {
            walls: 0,
            windows: 0,
            doors: 0,
            glue: 0,
        }
    },
    getters: {
        getList: state => type => state[type] || "Не существует",

        getRoom: state => state.room || "Не существует",

        getWallpaperType: state => state.wallpaperType || "Не существует",

        getGlue: state => state.glue || "Не существует",
        getUnitsOptions: state => state.unitsOptions || "Не существует",
        getUnits: state => state.units || "Не существует",
    },
    mutations: {
        newItem: (state, type) => {
            state[type].push({ id: Date.now(), h: 0, w: 0});
        },

        MUTATE_ITEMS: (state, { type, items }) => {
            state[type] = [...items];
        },
        MUTATE_ITEM: (state, { field, model }) => {
            // console.log(field, state[field]);
            state[field] = {...model};
        },
    },

    actions: {
        changeList: async (context, { type, model } ) => {
            let items = [...context.getters.getList(type)];
            let index = items.findIndex( i => i.id === model.id );
            items.splice(index, 1, model);
            context.commit('MUTATE_ITEMS', { type: type, items: items });
        },
        removeItem: async (context, { type, model } ) => {
            let items = [...context.getters.getList(type)].filter( i => i.id !== model.id );
            context.commit('MUTATE_ITEMS', { type: type, items: items });
        },
        changeRoomSize: (context, model) => {
            context.commit('MUTATE_ITEM', { field: 'room', model: model });
        },
        changeGlue: (context, model) => {
            context.commit('MUTATE_ITEM', { field: 'glue', model: model });
        },
    },
})