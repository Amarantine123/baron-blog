import{createRouter,createWebHashHistory} from 'vue-router'


export const syncRoutes:any=[
    {
        path:'/login',
        component:()=>
            import('@/views/login/index.vue'),
        hidden:true
    }
]
export const asyncRoutes:any=[
    {
        path:'/',
        component:()=>import('@/views/layout/index.vue'),
        redirect:'/home',
        meta:{
            title:'Home',
            icon:'home-4-line',
            affix:true
        },
        children:[{
                path:'home',
                name:'Home',
                component:()=>
                    import('@/views/home/index.vue'),
                meta:{
                    title:'Home',
                    icon:'home-4-line',
                    affix:true
                }     
            }]
    }
]
const router=createRouter({
    history:createWebHashHistory(),
    routes:asyncRoutes,
})



export default router