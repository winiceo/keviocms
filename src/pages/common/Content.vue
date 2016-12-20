<template>

    <div id="tool-panel">


        <m-tabs type="card" @tab-click="handleClick">
            <m-tab-pane label="模板" icon="search">
                <Layout></Layout>

            </m-tab-pane>
            <m-tab-pane label="设置" icon="search">
                <Setting></Setting>

            </m-tab-pane>
            <m-tab-pane label="数据" icon="search">
                <Data-form></Data-form>
            </m-tab-pane>
            <m-tab-pane label="统计" icon="search">
                <Statistics></Statistics>
            </m-tab-pane>
        </m-tabs>


    </div>
</template>

<style lang="stylus">
    @import "../../assets/css/variable"

    #tool-panel {
        top: 0;
        left: 0;
        bottom: 0;
        width: 595px;
        background-color: #ECEFF1;
    }

    #tool-panel
        .el-tabs__header
            position absolute
            width 80px
            height 100%
            top: 0;
            left 0
            bottom: 0;
            background-color: #2E343C
            .is-active
                background-color: $color-white-dark
                border: 0px solid #d3dce6;
                border-right-color: #fff;
                border-radius: 0;
        .el-tabs__content
            position absolute
            top 0
            bottom 0
            left 80px
            background-color: $color-white-dark
            display: block;
            float: left;
            height: 100%;
            width: 515px;
            padding: 10px 10px 20px;
            overflow-x: hidden;
            overflow-y: scroll;

        .el-tabs__item
            padding: 0 16px;
            height: 60px;
            width: 81px;
            box-sizing: border-box;
            line-height: 42px;
            float: left;
            list-style: none;
            font-size: 14px;
            color: #8492a6;
            margin-bottom: -1px;
            position: relative;
            > span
                display: inline-block;
                line-height: normal;
                vertical-align: middle;
                text-align: center;
                font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
                color: #99a9bf;
                padding-left: 10px;
                > i
                    display: block;
                    font-size: 22px;
                    margin-top: 10px;
                    color: #8492a6;

    #tool-panel .tool-content {
        display: block;
        float: left;
        height: 100%;
        width: 315px;
        padding: 10px 10px 20px;
    }

    .tool-content .tab {
        position: relative;
        display: none;
        height: 100%;
        overflow: hidden;
    }

    .tool-menu {
        display: block;
        float: left;
        height: 100%;
        width: 80px;
    }

    .tool-menu ul {
        height: 100%;
        background-color: #2b3031;
    }

    .tool-menu ul li {
        list-style: none;
        border-bottom: 1px solid #414a4b;
        height: 7vh;
        min-height: 50px;
        max-height: 70px;
        width: 90px;
    }

    .tool-menu ul li.active .btn-menu,
    .tool-menu ul li.active .btn-tag:after {
        color: #ffdd17;
    }

    .tool-menu ul li.active .btn-menu {
        background-color: #414a4b;
        border-right: 10px solid #ffdd17;
    }

    .tool-menu .help-menu {
        position: absolute;
        bottom: 25px;
        width: 90px;
        height: 7vh;
        min-height: 50px;
        max-height: 70px;
    }

    #canvas-panel {
        background-color: #ededed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 595px;
        z-index: 5;
    }

    #canvas-panel.mode {
        border: 10px solid #ffdd17;
    }

</style>
<script>

import {MTabs,MTabPane} from 'leven'
import {Layout,DataForm,Statistics,Setting} from './tabs'
export default {



        data(){
            return {
                options: [{
                          value: '选项1',
                          label: '黄金糕'
                        }, {
                          value: '选项2',
                          label: '双皮奶'
                        }, {
                          value: '选项3',
                          label: '蚵仔煎'
                        }, {
                          value: '选项4',
                          label: '龙须面'
                        }, {
                          value: '选项5',
                          label: '北京烤鸭'
                        }],
                  value: ''

            }
        },
        methods: {

            _init: function (callback) {

            },
            handleClick(e){
              console.log(e)

            }
        },
        components: {


            MTabs,
            MTabPane,
            Layout,
            DataForm ,
            Statistics,
            Setting



        }

    }



</script>