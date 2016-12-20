<template>
    <div id="app-main">
        <x-header></x-header>
        <aside id="content" class="web">
            <x-content></x-content>
            <x-canvas></x-canvas>
            <router-view
                    keep-alive
                    transition="fade"
                    transition-mod="out-in">
            </router-view>
        </aside>

         <n-progress parent=".app-wrapper"></n-progress>

    </div>
</template>
<script>
import Vue from 'vue'
import XHeader from 'pages/common/Header'
import XContent from 'pages/common/Content'
import XCanvas from 'pages/common/Canvas'
// import RouterLoading from './components/RouterLoading'
import NProgress from 'pages/common/NProgress'


export default {
    data:function(){
            return {


            }
    },
    methods:{

        _init(){


        }
  },
  components: {
    XHeader,
    XContent,
    XCanvas,

    NProgress
  }
}
</script>
<style lang="stylus">
    @import "assets/css/variable"
    @import "assets/css/animate"
    @import "assets/fonts/iconfont.css"
    @import "assets/css/flex"
    ::-webkit-scrollbar
        width 4px
        height 4px
        background-color $color-gray
    ::-webkit-scrollbar-button
    ::-webkit-scrollbar-track
        display none
    ::-webkit-scrollbar-thumb
        background-color $color-silver-light
    ::-webkit-scrollbar-thumb:hover
        background-color $color-black-exact-light
    #content {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        top: 50px;
        min-height: 520px;
        color: #9d9d9d;
    }

</style>
