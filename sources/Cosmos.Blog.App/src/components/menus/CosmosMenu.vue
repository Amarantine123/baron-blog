<template>
      <q-item
        v-if="path"
        clickable
        :to="path"
        :inset-level="0"
      >
        <q-item-section v-if="icon" avatar>
            <q-icon :name="icon" color="red" text-color="white"/>
        </q-item-section>
          <q-item-section>
            <q-item-label>{{ title }}</q-item-label>
            <q-item-label caption>
              {{ caption }}
            </q-item-label>
        </q-item-section>
      </q-item>

      <q-item v-if="!path" >
        <q-item-section>
            <q-expansion-item
              :header-inset-level="level"
              :content-inset-level="(level+1)"
              expand-icon="perm_identity"
              expand-icon-class="text-purple"
              :header-style="{margin:0,padding:0,width:'100%'}"
              :icon="icon"
              :caption="caption"
              :label="title"
              text-color="white"
              color="secondary"
            >
                <slot></slot>

          </q-expansion-item>
          </q-item-section>
      </q-item>
</template>

<script lang="ts">
import{defineComponent} from 'vue'
export default defineComponent({
  name:'CosmosMenu',
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

    caption:{
      type:String,
      default:''
    },
    path:{
      type:String,
      default:''
    },
    level:{
      type:Number,
      default:0
    },
    title:{
      type:String,
      default:''
    }
  }
})
</script>
