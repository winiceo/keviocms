<template>
    <div>
        <panel id="canvas-panel">
            <div id="ik-editor" class="antiscroll-wrap">
                <div id="workarea" class="antiscroll-inner">
                    <div id="ruler-horizontal"></div>
                    <div id="ruler-vertical"></div>

                    <div id="editor">
                        <router-view class="content"></router-view>


                        <!--<div id="svgcanvas" style="position:relative"></div>-->
                        <!--<div id="canvaspanel" style="position:absolute; pointer-events: none;"></div>-->
                    </div>
                </div>
            </div>


        </panel>

</template>
<style>

</style>
<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }

    }
</script>
