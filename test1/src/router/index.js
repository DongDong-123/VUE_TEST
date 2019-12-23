import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/first_index'
import A from '@/components/A'
import B from '@/components/B'
import A1 from '@/components/A1'
import A2 from '@/components/A2'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'First',
      component: First,
      children:[
      	{
      path: '/a',
      component: A,
    },
    {
      path: '/b',
      component: B
    },
    {
	      path: '/a1',
	      component: A1
      },
      {
	      path: '/a2',
	      component: A2

      }
      ]
    }
    
  ]
})
