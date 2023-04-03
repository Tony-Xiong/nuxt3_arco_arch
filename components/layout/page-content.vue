<template>
  <a-space direction="vertical">
    <a-breadcrumb>
      <a-breadcrumb-item>
        <icon-home/>
      </a-breadcrumb-item>
      <a-breadcrumb-item>{{title}}</a-breadcrumb-item>
    </a-breadcrumb>
    <NuxtPage />
  </a-space>
</template>
<script setup lang="ts">
const route = useRoute()
const title = route.meta.title
</script>