<template>
    <aside id="content" class="web">
        <panel id="tool-panel">
            <div class="tool-menu">
                <ToolNav></ToolNav>


                <div class="help-menu">
                    <a class="btn btn-menu btn-tag"
                       title="帮助"
                       data-charlimit="10"
                       tag="帮助" id="help" href="#">
                        <div class="iconWrapper"><i class="icon-help"></i></div>
                    </a>
                </div>

            </div>

            <div class="tool-content">


                <router-view class="content" name="tool-content"></router-view>

            </div>
        </panel>


        <panel id="canvas-panel">
            <div id="ik-editor" class="antiscroll-wrap">
                <div id="workarea" class="antiscroll-inner">
                    <div id="ruler-horizontal"></div>
                    <div id="ruler-vertical"></div>

                    <div id="editor">
                        <router-view class="content" name="content"></router-view>


                        <!--<div id="svgcanvas" style="position:relative"></div>-->
                        <!--<div id="canvaspanel" style="position:absolute; pointer-events: none;"></div>-->
                    </div>
                </div>
            </div>


        </panel>



    </aside>
</template>

<script>

    import ToolNav from './nav'
    import Content from './content'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components: {



            ToolNav,
            Content


        }
    }
</script>
