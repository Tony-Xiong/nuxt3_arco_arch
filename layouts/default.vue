<template>
  <a-layout>
    <layout-page-header />
    <a-layout>
      <layout-page-sider :menu-items="menuItems" />
      <layout-page-content />
    </a-layout>
    <layout-page-footer></layout-page-footer>
  </a-layout>
</template>
<script setup lang="ts">
const menuStore = useMenuStore()
const sideMenu = menuStore.getSideMenu;
const menuItems = ref(sideMenu && sideMenu['children']?sideMenu['children']:new Array<IMenuItem>());
menuStore.$subscribe((mutation, state) => {
  const activeTopMenu = state.activeTopMenu;
  const newSideMenu = state.topMenuList[activeTopMenu];
  menuItems.value = newSideMenu && newSideMenu['children'] && newSideMenu['children'].length > 0 ?newSideMenu['children']:new Array<IMenuItem>();
});
</script>