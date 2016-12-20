<style>
 .el-col{
      margin-bottom: 3px;
       margin-top: 3px;
      
    }
    .listrow{
        padding-left: 5px;
        padding-right: 5px;
    }
   /* .el-card__body{
        padding: 3px;
    }*/
</style>

<template>
<div>
<el-row type="flex" class="row-bg">
  <el-col :span="6">

<el-button type="text" @click.native="dialogVisible = true">点击打开 Dialog</el-button>


  </el-col> 
</el-row>

<el-row :gutter="10" class='listrow'>
        <el-col :span="8" v-for="(item,index) in items"     >
            <el-card :body-style="{ padding: '3px',margin:'10px'}">
                <img :src="item.picture.url" class="image" style="width:200px;height:150px;">
                <div style="padding: 14px;">
                    <span>{{ item.name}}</span>
                    <div class="bottom clearfix">
                        <time class="time">{{ item.picture.url  }}</time>
                        <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>

<!-- <el-dialog title="提示" v-model="dialogVisible222" size="tiny">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click.native="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click.native="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog> -->

<el-dialog title="提示" v-model="dialogVisible" size="small">
   <FromDes></FromDes>
</el-dialog>
</div>
</template>
<script>


    var infiniteScroll = require('vue-infinite-scroll').infiniteScroll;

    import FromDes from 'components/form/test'
    


    export default{
        directives: {infiniteScroll},
         components: {

           
            FromDes,

        },
        data(){
            return {
                pictureUrl:'/',
                dialogVisible:false,
                currentDate:33,
                add: true,
                context: "picwall",
                count: 0,
                next: 1,
                busy: false,
                items: [],
                item: {

                }

            }
        },

        methods: {
            _init(){

                this.getdata();
            },

            remove: function (item) {

                //this.item.delete(index)
                var _vm = this;

                api(_vm).post(_vm.app.api + '/picwall/pic/delete/' + item.id)
                        .then(function () {
                            _vm.items=_.filter(_vm.items, function(o) { return o.id !=item.id; });


                            toastr.info('删除成功')

                        });
            },

            getdata: function (callback) {
                var _vm = this;
                var WebSite = Kevio.Object.extend("WebSite");
                var query = new Kevio.Query(WebSite);
                query.descending("_created_at");

                query.find({
                    success: function(results) {
                        console.log("Successfully retrieved " + results.length + " scores.");
                        // Do something with the returned Parse.Object values
                        for (var i = 0; i < results.length; i++) {
                            var object = results[i];
                            console.log(object.toJSON())
                            _vm.items.push(object.toJSON())
                           // console.log(object.id + ' - ' + object.get('playerName'));
                        }
                    },
                    error: function(error) {
                        alert("Error: " + error.code + " " + error.message);
                    }
                });

            },
            loadMore: function () {
                this.busy = true;
                this.next += 1;
                console.log("leven"+this.next)
                this.getdata();

            },


            setup: function (that) {
                var _vm = this;
                try{
                    $(that).dropzone({

                        dictDefaultMessage: $(that).data("title"),
                        maxFiles: 10,
                        paramName: "file",
                        url:_vm.app.api+"/picwall/pic/new/"+_vm.app.aid,
                        headers: {
                            'Accept': 'application/json',

                            'Authorization': _vm.app.token
                        },
                        init: function () {

                            this.on("success", function (file, response) {
                                $('.dz-progress').hide();
                                $('.dz-size').hide();
                                $('.dz-error-mark').hide();

                                _vm.items.push(response.data);



                            });
                            this.on("addedfile", function (file) {



                            });
                            this.on("complete", function(file) {
                                this.removeFile(file);

                            });
                            this.on("queuecomplete", function(file) {
                                $('#exampleNiftyFadeScale').modal('toggle');

                            });


                        }

                    });
                }catch (e){

                }
            }
        }

    }
</script>