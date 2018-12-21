import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import app from './app.vue';

import './style.css'

// let [a, ...c] = [3, 5, 6, 7, 7, 9]
//     console.log(a) //3
//     console.log(c) 



    import _ from 'lodash'

    import {  name,  year } from './utils'
    
    Promise.resolve(year).then(value => {
    
      console.log(`${name} - ${value} - ${_.add(1, 2)}`)
    
    }) 





import HOME from './home.vue';
import MINE from './mine.vue';
import CART from './cart.vue';

const routes = [
    {
        path:'/',
        redirect: "/home"
    },
    {
        path:'/home',
        component: HOME
    },{
        path:'/mine',
        component: MINE
    },{
        path:'/cart',
        component: CART
    }
]

const router = new VueRouter({
    mode:"history",
    routes: routes
});



new Vue({
    el:"#app",
    router,
    render:h=>h(app)
});






