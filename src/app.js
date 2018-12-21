import Vue from 'vue';
import app from './app.vue';


import VueRouter from 'vue-router';
Vue.use(VueRouter);



import './static/common.css';

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element);



import HOME from './page/home.vue';
import INFO from './page/info.vue';
import ADDARTICLE from './page/addArticle.vue';
import TREND from './page/trend.vue';
import CATEGORY from './page/category.vue';
import TAGS from './page/tags.vue';
import MANAGER from './page/manager.vue';
import ROLE from './page/role.vue';
import RBAC from './page/rbac.vue';

import STATISTICAL from './page/statistical.vue';
import WORKBENCH from './page/workbench.vue';

const routes = [
    {
        path:'*',
        redirect:'/home'
    },{
        path:'/home',
        component: HOME,
        children:[
            { path:'/', component: INFO},
            { path:'/add', component: ADDARTICLE},
            { path:'/trend', component: TREND},
            { path:'/category', component: CATEGORY},
            { path:'/tags', component: TAGS},
            { path:'/manager', component: MANAGER},
            { path:'/role', component: ROLE},
            { path:'/rbac', component: RBAC},
            { path:'/statistical', component: STATISTICAL},
            { path:'/workbench', component: WORKBENCH}
        ]
    }
];

const router = new VueRouter({
    mode:'history',
    routes:routes
});


new Vue({
    el:"#app",
    router,
    render:h=>h(app)
});






