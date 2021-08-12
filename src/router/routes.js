
export const constantRouter =[
    {
        path:'/',
        redirect: '/login'
    },
    {
        path: '/home',
        name: 'home',
        component:()=>import('@/layout/Layout'),
    },{
        path: '/login',
        name: 'login',
        component:()=>import('@/views/system/Login'),
        hidden: true
    }];

