<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#" id="title">KAT-ON</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-nav class="ml-auto" is-nav v-if="auth.user===null">
        <b-nav-item v-on:click="redirect('/Login')">Login</b-nav-item>
        <b-nav-item @click="redirect('/Register')" >Register</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<style scoped lang="scss">
    @import '~assets/styles.scss';
    #title{
      color:$primary !important;
      color: #FFC312;
    }
</style>
<script>
import AUTH from 'services/auth'
import Router from 'router'
export default  {
  data(){
    return{
      auth:AUTH
    }
  },
    methods: {
        redirect(route){
            Router.push(route)
        }
    }
}
</script>