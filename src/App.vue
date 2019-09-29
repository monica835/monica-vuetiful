<template>   
  <div id="app">
    <SampleHeader v-show = "$route.path === '/Login' || $route.path === '/Register' ||  $route.path === '/'? true: false"></SampleHeader>
    <Appbody></Appbody>
    <Sidebar v-show = "$route.path === '/dashboard' || $route.path === '/Subjects'|| $route.path === '/PersonalInfo' ? true: false">
    </Sidebar>

  </div>
</template>

<script>
import SampleHeader from 'components/frame/Header.vue'
import Appbody from 'components/frame/Body.vue'
import SideBar from 'components/frame/SideBar.vue'
export default {
  name: 'app',
  components: {
    SampleHeader,
    Appbody,
    SideBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
