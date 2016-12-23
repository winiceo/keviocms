<template></template>
<script>
import Vue from 'vue'
import nprogress from 'nprogress'
export default {
  props: {
    parent: String
  },
  created () {
    if (this.parent) {
      nprogress.configure({ parent: this.parent })
    }
    this.$router.beforeEach((to, from, next) => {
      nprogress.start()
      next()
    })
    this.$router.afterEach(() => {
      nprogress.done()
    })
    Vue.http.interceptors.push((request, next) => {
      nprogress.start()
      next(response => {
        nprogress.done()
        return response
      })
    })
  }
}
</script>
<style lang="stylus">
@import "~nprogress/nprogress.css"
#nprogress
    .bar
        background: white;

        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;

        width: 100%;
        height: 2px;

    .spinner
        display none
</style>
