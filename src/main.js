import { createApp } from 'vue';
import App from './App';

import ui from '@/components/UI';
import cards from '@/components/Cards';
import tabs from '@/components/Tabs';
import forms from '@/components/Forms';
import sheet from '@/components/Sheet';

import router from '@/router/router';
import store from '@/store';

import spectre from 'spectre.css';

const app = createApp(App);

[...ui, ...cards, ...tabs, ...forms, ...sheet]
    .forEach(component => {
    app.component(component.name, component);
});

app
    .use(router)
    .use(store)
    .use(spectre)
    .mount('#app');