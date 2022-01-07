<template>
<div class="q-pa-md">
  <q-layout view="hHh lpr fFf" class="shadow-2 rounded-borders">
    <q-header elevated class="bg-cyan">
      <q-toolbar>
        <div class="q-gutter-y-md column" style="max-width: 260px">
              <q-input
              v-model="searchText"
              debounce="500"
              :placeholder="$t('search')"
            >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
             <template v-slot:append>
          <q-icon v-if="searchText !== ''" name="close" @click="searchText = ''" class="cursor-pointer" />
        </template>
        </q-input>
      </div>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="q-mr-xs"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          <q-field item-aligned  standout="bg-yellow text-white" bg-color="cyan-13"  stack-label>
              <template v-slot:control>
                <div style="text-align:center;font-size:28px;font-family:Courier New;color:" class="self-center full-width no-outline" tabindex="0"><strong> {{$t('title')}}</strong></div>
              </template>
          </q-field>
        </q-toolbar-title>

          <div class="q-pa-md">
              <div class="q-gutter-md row">
                <q-select
                  v-model="locale"
                  :options="localeOptions"
                  :label="$t('language_description')"
                  dense
                  borderless
                  emit-value
                  map-options
                  options-dense
                  style="min-width: 150px"
                  transition-show="flip-up"
                  transition-hide="flip-down"

                />
             </div>
          </div>
      </q-toolbar>
    </q-header>

     <q-footer reveal elevated>
        <p style="text-align: center;margin:20px auto">  {{$t('copyright_message')}}</p>
      </q-footer>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-item>
        <q-item-section>
          <q-item-label overline>OVERLINE</q-item-label>
          <q-item-label>2022-1-3</q-item-label>
          <q-item-label caption>Today is not a happy day!</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption>Baron</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced />
        <q-item-section>
          <q-list bordered class="rounded-borders" separator padding>
              <cosmos-menu v-for="(menu,i) in menus" v-bind="menu" :key="i">
              <cosmos-menu-item v-for="(item,q) in menu.children" :key="q" v-bind="item" />
              </cosmos-menu>
            </q-list>
        </q-item-section>
    </q-drawer>

    <q-drawer
        side="right"
        show-if-above
        :width="320"
        :breakpoint="700"
        v-model="drawerRight"
        bordered
    >
      <q-list  dense>
          <q-item>
               <q-date
                v-model="date"
                color="orange"
                />
          </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="accent" />
          </q-page-scroller>
    </q-page-container>
  </q-layout>
</div>
</template>

<script lang="ts">
import { defineComponent, ref,reactive } from 'vue'
import {useI18n}from 'vue-i18n'
import CosmosMenu from 'components/menus/CosmosMenu.vue';
import CosmosMenuItem from 'components/menus/CosmosMenuItem.vue';
import {CategoriesMockup,MenuList}from 'src/services/categories/categories.model'
export   default  defineComponent({
  name: 'MainLayout',
  components: {
    CosmosMenu,
    CosmosMenuItem
  },
  setup () {
    const leftDrawerOpen = ref(false);
    const localeOptions=reactive([
      {value:'en-US',label:'English'},
      {value:'zh-CN',label:'中文'}
    ])
    const{locale}=useI18n({useScope:'global'})
    const searchText=ref('');
    return {
      leftDrawerOpen,
      drawerRight: ref(false),
      localeOptions,
      locale,
      searchText,
      MenuList:CategoriesMockup,
      menus:MenuList,
      date:ref(Date.now().toLocaleString()),
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  }
})
</script>
