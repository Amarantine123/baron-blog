<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        icon="mail"
        label="Inbox"
        caption="5 unread emails"
        default-opened
      >
          <q-expansion-item
            :header-inset-level="1"
            expand-separator
            icon="receipt"
            label="Receipts"
            default-opened
          >
              <q-expansion-item
              switch-toggle-side dense-toggle
              label="Today"
              :header-inset-level="1"
              :content-inset-level="2">
              <q-item
              clickable
              :to="path"
              >
                <q-item-section
                v-if="icon"
                avatar
                >
                  <q-icon :name="icon"></q-icon>
                </q-item-section>
              </q-item>
              </q-expansion-item>

            </q-expansion-item>

      </q-expansion-item>

    </q-list>
  </div>
</template>
<script>
import {ref}from 'vue'
export default {
  setup () {
    const searchText=ref('');
    const icon=ref('receipt');
    const path=ref('/index')
    return {
      searchText,
      icon,
      path
    }
  }
}
</script>
