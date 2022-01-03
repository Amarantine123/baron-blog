<template>
<div class="q-pa-md">
  <q-layout view="LHh lpr lFf" class="shadow-2 rounded-borders">
    <q-header elevated class="bg-cyan">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="q-mr-xs"
          @click="toggleLeftDrawer"
        />
        <a-space/>
        <q-toolbar-title>
         <strong> Welcome To Baron's Blog</strong>
        </q-toolbar-title>
          <q-btn flat round dense icon="search" class="q-mr-xs" />
          <div class="q-pa-md">
              <div class="q-gutter-md row"> 
                <q-select
                  label="Language"
                  color='orange'
                  transition-show="flip-up"
                  transition-hide="flip-down"
                  filled
                  v-model="lang_op"
                  :options="options"
                  style="width: 150px"
                >
                <template v-slot:append>
                  <q-icon name="mode_standby" />
                  </template>
                </q-select>
                  <q-select 
                  color="purple-12"
                  transition-show="flip-up"
                  transition-hide="flip-down" 
                  v-model="lang_op" 
                  :options="options" 
                  label="Theme"
                  style="width: 150px"
                  >
                  <template v-slot:append>
                  <q-icon name="settings_suggest" />
                  </template>
                  </q-select>
             </div>
          </div>
          <q-btn flat round dense icon="group_add" />
      </q-toolbar>
           <div class="q-gutter-y-md">
          <q-tabs>
        <q-route-tab
          icon="article"
          to="/your/route"
          replace
          label="Articles"
        />
        <q-route-tab
          icon="image"
          to="/some/other/route"
          replace
          label="Images"
        />
          <q-route-tab
          icon="smart_display"
          to="/some/other/route"
          replace
          label="Videos"
        />
      </q-tabs>
      </div>
    </q-header>
     <q-footer reveal elevated>
        <p style="text-align: center;margin:20px auto">  Copyright © 2022 Baron | 网站托管：github.com | Chrome | Firefox | Safari</p>
      </q-footer>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menus
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
  
      <router-view />
    </q-page-container>
  </q-layout>
  </div>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'
const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

import { defineComponent, ref,reactive } from 'vue'
export   default  defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,    
  },

  setup () {
    const leftDrawerOpen = ref(false);
    const lang_op=ref(null);
    const options=reactive([
      'English',
      'Chinese',
    ])
    
    return {
      essentialLinks: linksList,
      leftDrawerOpen,   
      tab:ref('images') ,
      lang_op,
      options,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
