<style>
    .tool-content {
        left: 80px;
        padding-left: 80px;
        width: 200px;
    }

    #aside-content {
        top: 0;
        left: 80px;
        bottom: 0;
        width: 250px;
        background-color: #414a4b;
    }

    .el-col {
        box-sizing: border-box;
    }

    .page-guide {
        padding: 55px 0 95px;

    .content {
        padding-left: 25px;
        border-left: 1px solid #eaeefa;
        margin-left: -1px;

    h3 {
        font-size: 22px;
        font-weight: normal;
        margin: 0 0 30px;
        color: #1f2d3d;
    }

    p {
        font-size: 14px;
        color: #5e6d82;
    }

    ul {
        margin-bottom: 50px;
        padding-left: 0;
    }

    li {
        font-size: 14px;
        margin-bottom: 10px;
        color: #99a9bf;
        list-style: none;

    &
    :before {
        content: '';
        display: inline-block;
        width: 4px;
        height: @width;
        border-radius: 50%;
        vertical-align: middle;
        background-color: #5e6d82;
        margin-right: 5px;
    }

    strong {
        color: #5e6d82;
        font-weight: 400;
    }

    }
    }
    }
</style>
<template>
    <div>
        <panel id="aside-content">
            <div class="tool-content">
                <div class="page-container page-guide">
                    <el-row>
                        <el-col :span="5">

                            <router-link :to="'website/home'">website</router-link>

                        </el-col>
                        <el-col :span="5">
                            <side-nav :data="navsData"></side-nav>
                        </el-col>

                    </el-row>
                </div>
            </div>
        </panel>
        <panel id="canvas-panel">
            <div id="ik-editor" class="antiscroll-wrap">
                <div id="workarea" class="antiscroll-inner">


                    <div id="editor">
                        <router-view class="content" name="content"></router-view>


                        <!--<div id="svgcanvas" style="position:relative"></div>-->
                        <!--<div id="canvaspanel" style="position:absolute; pointer-events: none;"></div>-->
                    </div>
                </div>
            </div>


        </panel>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                navsData: [
                    {
                        path: '/modules/website',
                        name: '网站'
                    },
                    {
                        path: '/modules/logo',
                        name: 'Logo'
                    }
                ]
            };
        }
    };
</script>
