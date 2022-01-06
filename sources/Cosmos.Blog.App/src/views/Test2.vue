<template>
<div class="q-pa-md" style="max-width: 350px">
<q-list bordered class="rounded-borders">
  <cosmos-menu v-for="(menu,i) in menus" v-bind="menu" :key="i">
  <cosmos-menu-item v-for="(item,q) in menu.children" :key="q" v-bind="item"></cosmos-menu-item>
  </cosmos-menu>
</q-list>
</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import CosmosMenu from 'components/menus/CosmosMenu.vue'
import CosmosMenuItem from 'components/menus/CosmosMenuItem.vue'
export default defineComponent({
  components:{
    CosmosMenu,
    CosmosMenuItem,
  },
  setup(){
    return{
      menus:[{
      label:'Primary Menu',
      caption:'this is the first menu',
      icon:'inbox',
      itemIcon:'search',
      path:'/index',
      level:0,
      title:'main child menu'
      },
      {
      label:'Primary Menu',
      caption:'this is the first menu',
      icon:'inbox',
      children:[
        {
          icon:'menu',
          itemIcon:'search',
          label:'first menu',
          level:0,
          path:'/Index',
          title:'first',
          metaTitle:'first meta title'
        },
        {
          icon:'menu',
          itemIcon:'search',
          label:'second menu',
          level:0,
          path:'/user',
          title:'second',
          metaTitle:'second meta title'
        }
	  ]

},{
      label:'Secondary Menu',
      caption:'this is the second menu',
      icon:'inbox',
      children:[
        {
          icon:'menu',
          itemIcon:'search',
          label:'first menu',
          level:0,
          path:'/Index',
          title:'first',
          metaTitle:'first meta title'
        },
        {
          icon:'menu',
          itemIcon:'search',
          label:'second menu',
          level:0,
          path:'/user',
          title:'second',
          metaTitle:'second meta title'
        }
	  ]

}]
    }
  }
})
</script>
