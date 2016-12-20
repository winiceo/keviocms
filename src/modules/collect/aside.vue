
<template>

        <panel id="aside-content" class="page-content demo-layout" style="width:260px;background-color:#414a4b">


            <!--<el-tag-->
                    <!--v-for="tag in tags"-->

                    <!--:type="tag.type"-->
                    <!--:key="tag"-->
                    <!--:close-transition="false"-->
                    <!--@click="change(tag)"-->

            <!--&gt;-->
                <!--{{tag.name}}-->
            <!--</el-tag>-->
            <!--<template v-for="tag in tags">-->
                <!--<el-button type="primary1">主要按钮</el-button>-->

            <!--</template>-->

            <el-row :gutter="20" >
                <el-col :span=20 v-for="tag in tags">


                    <router-link :to="{ name: 'collect_tag', params: { tag: tag.key }}">{{tag.name}}</router-link>



                </el-col>

            </el-row>
        </panel>


</template>

<style>
    .demo-layout {

        .el-col {

            border-radius: 0px;
            margin:15px;
            border-bottom:1px solid gray;
        }
        .bg-purple-dark {
            background: #99a9bf;
        }
        .bg-purple {
            background: #d3dce6;
        }
        .bg-purple-light {
            background: #e5e9f2;
        }
        .grid-content {
            height: 100%;
            border-radius: 4px;
        }
        .row-bg {
            padding: 10px 0;
            background-color: #f9fafc;
        }
    }
    .content-navs{
        left: 80px;
        padding-left: 80px;
        width: 200px;
        height:100%;
        background-color: #414a4b;
    }
    .page-content{
        left:80px;
        height:100%;
        bottom:0x;
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

    }
    .el-button{
        margin:5px;
        color:red;
    }


</style>
<script>
    export default {
        data() {
            return {
                tags: [
                    { key: "website", name: '网站', type: '',path:"/collect/2" },
                    { key: "article", name: '文章', type: '',path:"/collect/3" }


                ]
            };
        },
        methods: {
            change(tag) {

                console.log(tag)

            }
        }
    }
</script>
