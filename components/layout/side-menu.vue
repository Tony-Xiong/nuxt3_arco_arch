<template>
  <a-menu>
    <layout-menu-item v-for="item in menuItems"  :item="item"/>
  </a-menu>
</template>
<script setup lang="ts">

const { menuItems } = defineProps<{
  menuItems: Array<IMenuItem>
}>()

</script>