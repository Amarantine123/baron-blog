<template>

  <q-page class="row items-center justify-evenly">
    <q-menu
  transition-show="jump-down"
  transition-hide="jump-up"
  >
  <q-menu-item>ddddddddddddddd</q-menu-item>
    </q-menu>
    <transition
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    >
    
    <q-select
    v-model="locale"
    :options="localeOptions"
    :label="$t('success')"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 150px"
    >
</q-select>
</transition>
<div class="div">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
</div>

  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/CompositionComponent.vue';
import { defineComponent, ref } from 'vue';
import{useI18n}from'vue-i18n'
export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent },
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
