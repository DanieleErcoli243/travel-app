// importo le funzioni da vue-router
import { createRouter, createWebHistory } from 'vue-router';
// importo i componenti che fungono da pagine
import HomePage from '../../../components/pages/HomePage.vue';
import DetailPage from '../../../components/pages/DetailPage.vue';
import NotFoundPage from '../../../components/pages/NotFoundPage.vue';

// definisco le rotte
export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/stage/:slug', component: DetailPage, name: 'detail' },
        { path: '/not-found', component: NotFoundPage, name: 'not-found' },
        { path: '/:pathMatch(.*)*', redirect: 'not-found' },
    ]
});