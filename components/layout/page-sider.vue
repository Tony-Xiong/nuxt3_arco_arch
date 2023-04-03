<template>
  <keep-alive>
  <div v-if="!hasChildren(menuItems)"></div>
  <a-layout-sider v-else>
    <a-menu>
      <layout-side-menu :menu-items="menuItems"/>
    </a-menu>
  </a-layout-sider>
    </keep-alive>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  menuItems: Array<IMenuItem>
}>()

const hasChildren = ( menuItems: Array<IMenuItem>) => {
    if (menuItems) {
        if(menuItems.length){
            return menuItems.length > 0
        }
    }
    return false
}
</script>