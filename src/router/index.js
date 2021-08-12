import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

import {constantRouter} from "@/router/routes";


const router = new Router({
    mode:'history',
    routes: constantRouter,
});

router.beforeEach((to, from, next) => {

    let token = router.app.$cookies.get('token');
    // let token =window.sessionStorage.getItem('token');
    if(!token && to.path != '/login') {
        console.log(token);
        next({path: '/login'});
    } else {
        next();
    }

});

export default router;

