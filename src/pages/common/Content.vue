<template>

    <!--<div id="tool-panel">-->


    <!--&lt;!&ndash;<m-tabs type="card" @tab-click="handleClick">&ndash;&gt;-->
    <!--&lt;!&ndash;<m-tab-pane label="模板" icon="search">&ndash;&gt;-->
    <!--&lt;!&ndash;<Layout></Layout>&ndash;&gt;-->

    <!--&lt;!&ndash;</m-tab-pane>&ndash;&gt;-->
    <!--&lt;!&ndash;<m-tab-pane label="设置" icon="search">&ndash;&gt;-->
    <!--&lt;!&ndash;<Setting></Setting>&ndash;&gt;-->

    <!--&lt;!&ndash;</m-tab-pane>&ndash;&gt;-->
    <!--&lt;!&ndash;<m-tab-pane label="数据" icon="search">&ndash;&gt;-->
    <!--&lt;!&ndash;<Data-form></Data-form>&ndash;&gt;-->
    <!--&lt;!&ndash;</m-tab-pane>&ndash;&gt;-->
    <!--&lt;!&ndash;<m-tab-pane label="统计" icon="search">&ndash;&gt;-->
    <!--&lt;!&ndash;<Statistics></Statistics>&ndash;&gt;-->
    <!--&lt;!&ndash;</m-tab-pane>&ndash;&gt;-->
    <!--&lt;!&ndash;</m-tabs>&ndash;&gt;-->


    <!--</div>-->

    <div id="tool-panel" class="panel">

        <div class="tool-menu">

            <ul class='right-menu'>


                <li v-for="(menu,index) in menus" >
                    <router-link :to="{ name: menu.route ,query: { bid: app.bid }}" class="btn btn-menu btn-tag" :title='menu.title'>
                        <i :class="'el-icon-'+menu.icon"></i>

                    </router-link>

                </li>
            </ul>

            <div class="help-menu">
                <a class="btn btn-menu btn-tag" title="帮助" data-charlimit="10" tag="帮助" id="help" href="#">
                    <div class="iconWrapper"><i class="icon-help"></i></div>
                </a>
            </div>

        </div>

        <div class="tool-content">

            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    @import "../../assets/css/variable"
    $panel-color=#eceff1
    $menu-active-color=#01adb6



    #tool-panel .tool-content {
        display: block;
        float: left;
        height: 100%;
        width: 400px;
        padding: 10px 10px 20px;
    }

    .tool-menu {
        display: block;
        float: left;
        height: 100%;
        width: 80px;
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
    #tool-panel
        top: 0;
        left: 0;
        bottom: 0;
        width: 485px;
        background-color: $panel-color;

    .btn-tag:after {
        position: relative;
        display: block;
        content: attr(title);
        color: #899595;
        width: 100%;
        left: 0;
        bottom: 0;
        padding-top:10px
        font-size: 14px;
        line-height: 13px;
        font-weight: normal;
        text-transform: lowercase;
        letter-spacing: 0;
        word-wrap: break-word;
    }


    .btn-tag.active:after {
        color: $menu-active-color ;
    }
    .right-menu .btn {
        float: left;
        color: white;
        height: 100%;

    }

    .right-menu .btn i {
        margin: 10 5px;
    }

    .right-menu .btn.active,
    .router-link-active
        background-color: $panel-color !important;
        color: $menu-active-color !important;

    .router-link-active:after
            bottom: 5px;
            color:$menu-active-color




    .btn
        font-family: Lato, Arial, sans-serif;
        text-align: center;
        cursor: pointer;
        font-size: 13.333px;
        font-weight: bold;
        border: none;

    .btn i
        text-align: center;
        vertical-align: middle;
        margin: 10px 5px;
        font-size:22px

    .btn:hover,
    .btn:focus,
    .btn.active {
            color: $menu-active-color;
    }
    .btn-menu {
            display: inline-table;
            vertical-align: top;
            color: #899595;
            padding: 0;
            font-size: 3vh;

            border-right: 10px solid transparent;
            width: 100%;
            height: 100%;
    }


    .btn-menu.active {
            background-color: $panel-color;

    }

    .btn-menu.btn-tag:after {
            bottom: 5px;

    }
    .btn-menu.btn-tag.active:after {
            bottom: 5px;
            color:$menu-active-color
    }
    .tool-menu ul {
        height: 100%;
        background-color: #2b3031;
    }

    .tool-menu ul li {
        list-style: none;

        height: 10vh;
        min-height: 50px;
        max-height: 90px;
        width: 80px;
    }

    .tool-menu ul li.active .btn-menu,
    .tool-menu ul li.active .btn-tag:after {
        color: #2b3031;
    }

    .tool-menu ul li.active .btn-menu {
        background-color: #414a4b;
        border-right: 10px solid #ffdd17;
    }

</style>
<script>

//import {MTabs,MTabPane} from 'leven'
//import {Layout,DataForm,Statistics,Setting} from './tabs'
export default {



        data(){
            return {
                menus:[]

            }
        },
        methods: {

            _init: function (callback) {
               this.menus=[
                {title:"模板",icon:"document",route:'layout'},
                {title:"设置",icon:"setting",route:'setting'},
                {title:"数据",icon:"more",route:'data'}

               ]
            },
            handleClick(e){
              console.log(e)

            },
            components22: {


                //MTabs,
                //MTabPane,
                //Layout,
                //DataForm ,
                //Statistics,
                //Setting



            }
        }


    }




</script>