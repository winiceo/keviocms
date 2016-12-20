<template>
    <div>


        <AsideContent></AsideContent>
        <panel id="canvas-panel">
            <transition name="fade">
            <router-view  ></router-view>
            </transition>

        </panel>


    </div>
</template>
<script>





    import AsideContent from './common/aside-content.vue'
    export default{
        data(){
            return {
                msg: 'hello vue',
                currentView: 'home'
            }
        },
        components: {
            AsideContent,

        }
    }
</script>
