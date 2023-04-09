<template>
  <div class="container-fluid app">
    <router-view></router-view>
  </div>
</template>
<script>
import emitter from './methods/emitter'
import ToastMessages from './components/ToastMessages.vue'
export default {
  components: {
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  }
}
</script>
<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";
.app{
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
