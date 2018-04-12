import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=>import('@/components/Home'),
      children:[{
        path:'/item1',
        name:"item1",
        component:()=>import('@/components/Home/Item1')
      },
      {
        path:'/item2',
        name:'item2',
        component:()=>import('@/components/Home/Item2')
      }]
    }
  ]
})
