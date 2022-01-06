<template>
      <q-item
        clickable
        :to="path"
      >
        <q-item-section
        v-if="icon"
        avatar
        >
          <q-icon :name="icon" />
        </q-item-section>
           <q-item-section>
              <q-item-label>{{ title }}</q-item-label>
              <q-item-label caption>
                {{ caption }}
              </q-item-label>
          </q-item-section>
      </q-item>
</template>

<script lang="ts">
import{defineComponent} from 'vue'
export default defineComponent({
  name:'CosmosMenuItem',
  components:{

  },
  setup(){
    return{

    }
  },
  props:{
    icon:{
      type:String,
      default:''
    },
    path:{
      type:String,
      default:''
    },
    title:{
      type:String,
      default:''
    },
    caption:{
      type:String,
      default:''
    }
  }
})
</script>
