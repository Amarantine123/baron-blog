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
         <strong> {{$t('title')}}</strong>
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
      <q-item-label header>Menu</q-item-label>
  <essential-link v-bind="menu" v-for="(menu,key) in MenuList" :key="key"></essential-link>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref,reactive } from 'vue'
import {useI18n}from 'vue-i18n'
import  EssentialLink  from 'components/EssentialLink.vue';
import {CategoriesMockup}from 'src/services/categories/categories.model'
export   default  defineComponent({
  name: 'MainLayout',
  components: {
    EssentialLink
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
      localeOptions,
      locale,
      searchText,
      MenuList:CategoriesMockup,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
