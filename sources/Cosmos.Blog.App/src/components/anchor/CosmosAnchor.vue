<template>
  <q-list dense>
    <q-item
    :to="path"
    >
      <a-item-section>
        <a-item-label>
          {{itemName}}
        </a-item-label>
      </a-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name:'CosmosAnchor',
  setup(){
    return{

    }
  },
  props:{
    itemName:{
      type:String,
      default:''
    },
    path:{
      type:String,
      default:''
    }
  }
})
</script>
