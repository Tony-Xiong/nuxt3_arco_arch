<script setup lang="ts">
import {ref} from "vue"
import { useRouter } from 'vue-router'
import { useFullscreen } from '@vueuse/core'
const { signOut } = useSession()

const isDark = ref(false)
const toggleDark = (flag) => {
    if(flag){
        console.log('dark')
        document.body.setAttribute('arco-theme', 'dark')
        isDark.value = false
    }else {
        console.log('light')
        document.body.removeAttribute('arco-theme');
        isDark.value = true
    }
}

const { toggle } = useFullscreen()
const logout = () => {
    useRouter().push({name: 'login'})
}
</script>

<template>
  <a-layout-header>
    <div class="header">
      <div class="logo"><layout-logo /></div>
      <div class="top-menu"><layout-top-menu /></div>
      <div class="setting">
        <a-space>
          <span class="i-mdi-home hover:i-mdi-home-alert text-5xl text-green-800"></span>
          <icon-fullscreen ref="el" @click="toggle()" />
          <icon-moon @click="toggleDark(true)" />
          <icon-sun @click="toggleDark(false)" />
          <a-dropdown trigger="hover">
            <a-avatar><IconUser class="icon" /></a-avatar>
            <template #content>
              <a-doption>个人中心</a-doption>
              <a-doption>修改密码</a-doption>
              <a-divider style="margin: 0"/>
              <a-doption @click="signOut({ callbackUrl: '/'})">登出</a-doption>
            </template>
          </a-dropdown>
        </a-space>
      </div>
    </div>
  </a-layout-header>
</template>

<style lang="scss" scoped>
.header {
  @apply flex flex-row flex-nowrap justify-between items-center;
  height: 60px;
  .logo {
    width: 200px;
    @apply mx-6;
  }
  .top-menu {
    width: 100%;
    height: 100%;
  }
  .setting {
    width: 200px;
    @apply text-right right-0 items-right pr-6;
    .icon {
      font-size: 18px;
    }
  }
}

</style>