<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/bar">Bar</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
