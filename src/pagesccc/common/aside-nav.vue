<template>

    <div id="side-menu-panel">
        <div class="tool-menu">
            <div class="demo-menu">
                <el-menu default-active="2" class="el-menu-vertical-demo  el-menu-demo"   router="true" mode='vertical'>
                    <el-menu-item index="/collect">
                            <span class="btn btn-menu btn-tag"
                                  title="收藏"
                                  data-charlimit="10"
                                  tag="收藏"
                                  role="tab" data-toggle="tab">
                                <div class="iconWrapper"><i class="el-icon-menu"></i></div>
                            </span>
                    </el-menu-item>
                    <el-menu-item index="/modules">
                            <span class="btn btn-menu btn-tag"
                                  title="功能"
                                  data-charlimit="10"
                                  tag="功能"
                                  role="tab" data-toggle="tab">
                                <div class="iconWrapper"><i class="el-icon-menu"></i></div>
                            </span>
                    </el-menu-item>
                    <el-menu-item index="/media">
                        <span class="btn btn-menu btn-tag"
                              title="素材"
                              data-charlimit="10"
                              tag="素材"
                              role="tab" data-toggle="tab">
                            <div class="iconWrapper"><i class="el-icon-menu"></i></div>
                        </span>
                    </el-menu-item>
                    <el-menu-item index="/doc">
                         <span class="btn btn-menu btn-tag"
                               title="教学指示"
                               data-charlimit="10"
                               tag="教学指示"
                               role="tab" data-toggle="tab" href="#tabTutorial">
                            <div class="iconWrapper"><i class="el-icon-menu"></i></div>
                        </span>
                    </el-menu-item>
                </el-menu>
            </div>


            <div class="help-menu">
                <a class="btn btn-menu btn-tag"
                   title="帮助"
                   data-charlimit="10"
                   tag="帮助" id="help" href="#">
                    <div class="iconWrapper"><i class="icon-help"></i></div>
                </a>
            </div>

        </div>


    </div>

</template>


<style>
    .tool-menu {
        background-color: #2b3031;
    }

    .demo-menu {

    ul {
        height: 100%;
        background-color: #2b3031;
    }

    ul li {
        list-style: none;
        border-bottom: 1px solid #414a4b;
        height: 7vh;
        min-height: 70px;
        max-height: 70px;
        width: 100%;
    }

    ul li.active .btn-menu,
    ul li.active .btn-tag:after {
        color: #ffdd17;
    }

    .el-menu-demo {
        display: block;
        float: left;
        height: 100%;
        width: 80px;
    }

    .el-menu-item, .el-submenu__title {
        padding: 0px;
    }

    .el-menu-item.is-active {
        color: #ffdd17;
        background-color: #414a4b;
        border-right: 1px solid #ffdd17;
    }

    .el-menu-item.is-active .btn {
        color: #ffdd17;
    }

    .el-menu-item.is-active .btn-tag:after {
        color: #ffdd17 !important;
    }

    }


</style>
<script>

    export default{
        data(){
            return {}
        }
    }
</script>
