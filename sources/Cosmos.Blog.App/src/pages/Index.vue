<template>
  <q-page class="row items-center justify-evenly">
    <div style="width:600px;margin-top:10px">
      <Carousel/>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
//import ExampleComponent from 'components/CompositionComponent.vue';
import Carousel from './Carousel.vue'
import { defineComponent, ref } from 'vue';
import{useI18n}from'vue-i18n'
export default defineComponent({
  name: 'PageIndex',
  components: {
    Carousel  
    },
  setup() {
    const { locale } = useI18n({ useScope: 'global' })
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ]);
    const meta = ref<Meta>({
      totalCount: 1200
    });
    
    return { todos, meta,locale,localeOptions:[
      {value:'en-US',label:'English'},
      {value:'zh-CN',label:'Chinese'}
    ] };
  }
});
</script>
