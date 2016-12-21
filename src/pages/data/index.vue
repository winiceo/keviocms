<template>

    <div class="layoutContent">
        <el-row class='headBar'>
            <el-col :span="12">
                <el-button type="primary" icon="plus" @click.native="dialogVisible = true">添加数据</el-button>
            </el-col>
            <el-col :span="12">
                <router-link :to="{ name: 'form_setting', params: { tag: 1 }}">1</router-link>

                <el-button type="primary" icon="setting" @click="setting">设置字段</el-button>
            </el-col>
        </el-row>

        <el-row :gutter="10" class='listrow'>
            <el-col :span="8" v-for="(item,index) in items"     >
                <figure :class="[selected==index?'uk-overlay':'']" >
                    <div class="uk-panel uk-panel-box" @click="select(index)">
                        <div class="uk-panel-teaser">
                            <img :src="item.get('picture').url()" >
                            <div style="padding: 14px;">
                                <span>{{item.get('name')}}</span>

                            </div>


                        </div>


                    </div>
                    <figcaption class="uk-overlay-panel uk-overlay-background uk-flex uk-flex-center uk-flex-middle uk-text-center" v-show="selected==index">

                    <div class='overlay-div'><el-button type="primary" icon="edit" @click="edit(item)">编辑</el-button>
                        <br><br>
                        <el-button type="primary" icon="delete" @click="remove(item)">删除</el-button>
                    </div>
                </figcaption>

                </figure>


            </el-col>
        </el-row>
        <el-dialog title="添加" v-model="dialogVisible" size="small" ref="webDialog">
            <AddForm></AddForm>
        </el-dialog>
    </div>
</template>

<style lang="stylus">
 .layoutContent
     .listrow
         margin-top: 2px
         .uk-overlay-panel {
             position: relative;
             top: 0;

             left: 0;

             width:100%
             height:100%
         }
         .uk-panel-box
            background-color:white;
            border 1px solid  #e7e7e7
         .overlay-div
            vertical-align bottom
            position: absolute;
            bottom: 10px;
         .uk-panel-teaser
            >img
                width:100%
                height 120px
         .uk-overlay-panel {
             position: absolute;
             top: 0;
             bottom: 0;
             left: 0;
             right: 0;
             padding: 20px;
             color: #fff;
         }

         .uk-overlay {
             display: inline-block;
             position: relative;
             max-width: 100%;
             vertical-align: middle;
             overflow: hidden;
             -webkit-transform: translateZ(0);
             margin: 0;
         }



     .el-col{
         margin-bottom: 5px;
         margin-top: 5px;
     }
     .headBar{
         border-bottom :1px solid #e7e7e7
     }

    .uk-overlay-background
        background-color:rgba(0,0,0,0.66);
</style>
<script>


import AddForm from './DataFormAdd'
export default {

        data(){
            return {
                dialogVisible:false,
                items:[],
                selected:-1,
                item:false

            }
        },
        components: {


             AddForm,

        },
        methods: {

            _init: function (callback) {
                this.getdata();
            },
            setting:function(){

                var path='/dataform/setting'
                this.$router.go(path)

            },
            select:function(index){
                console.log(index)
                this.selected=index
            },
            remove: function (item) {
                var _vm=this;
               item.destroy({
                  success: function(object) {
                     _vm.$notify({
                              title: '成功',
                              message: '这是一条成功的提示消息',
                              type: 'success'
                            });
                  },
                  error: function(object, error) {

                  }
                });
            },

            edit: function (item) {
                this.item=item;
                this.dialogVisible=true;

            },

            getdata: function (callback) {
                var _vm = this;
                this.items=[];
                var WebSite = Kevio.Object.extend("an_layout");
                var query = new Kevio.Query(WebSite);
                query.descending("_created_at");

                query.find({
                    success: function(results) {
                        console.log("Successfully retrieved " + results.length + " scores.");
                        // Do something with the returned Parse.Object values
                        for (var i = 0; i < results.length; i++) {
                            var object = results[i] ;

                             //object.picture=object.parseFile.url;

                            _vm.items.push(object)
                           // console.log(object.id + ' - ' + object.get('playerName'));
                        }
                    },
                    error: function(error) {
                        alert("Error: " + error.code + " " + error.message);
                    }
                });

            },
        }


    }

</script>