<template>
    <div id="app-main">
        <x-header></x-header>
        <aside id="content" class="web">
            <x-content></x-content>
            <x-canvas ></x-canvas>
            
        </aside>

         <n-progress parent="#app-main"></n-progress>

    </div>
</template>
<script>

import Vue from 'vue'
import XHeader from 'pages/common/Header'
import XContent from 'pages/common/Content'
import XCanvas from 'pages/common/Canvas'
import RouterLoading from 'pages/common/RouterLoading'
import NProgress from 'pages/common/NProgress'
import { mapGetters } from 'vuex'


export default {
    computed: {
        ...mapGetters(['loggedIn'])
    },
    data:function(){
            return {
                html:'<hr>',
                sets:{}

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
    .fade-transition {
        transition: opacity .3s ease;
    }
    .fade-enter, .fade-leave {
        opacity: 0;
    }
    .panel
        position: absolute;
        display: inline-block;
    .app-wrapper
        flex 1
        display flex
        flex-flow column
        overflow-x hidden
        .app-container
            position relative
            flex 1
            display flex
            justify-content center
            margin 0
            padding 1rem
            background-color #fff
            overflow auto
            &.active
                margin 1rem

</style>
