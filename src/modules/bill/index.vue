<template>

    <div class="layoutContent">
        <el-row class='headBar'>
            <el-col :span="12">
                <el-button type="primary" icon="plus" @click="add()">添加数据</el-button>
            </el-col>
            <el-col :span="12">
                <el-button type="primary" icon="setting" @click="setting">设置字段</el-button>
            </el-col>
        </el-row>


        <el-row :gutter="10" class='listrow'>
            <el-col :span="12" v-for="(item,index) in items">
                <figure :class="[selected==index?'uk-overlay':'']">
                    <div class="uk-panel uk-panel-box" @click="select(index)">
                        <div class="uk-panel-teaser">

                            <template v-if='item.get("picture")'>
                                <img :src="item.get('picture').thumbnailURL(200, 200)" style="height:150px;">
                            </template>
                            <div style="padding: 14px;">
                                <span>{{item.get('name')}}</span>

                            </div>


                        </div>


                    </div>
                    <figcaption
                            class="uk-overlay-panel uk-overlay-background uk-flex uk-flex-center uk-flex-middle uk-text-center"
                            v-show="selected==index">

                        <div class='overlay-div'>
                            <el-button type="primary" icon="edit" @click="edit(item)">编辑</el-button>
                            <br><br>
                            <el-button type="primary" icon="delete" @click="remove(item)">删除</el-button>
                        </div>
                    </figcaption>

                </figure>


            </el-col>
        </el-row>

        <el-dialog title="添加" v-model="dialogVisible" size="small" ref="webDialog">
            <AddForm ref="addform"></AddForm>
        </el-dialog>
    </div>
</template>

<style lang="stylus">
    .layoutContent
        .listrow
            margin-top: 2px

        .el-col {
            margin-bottom: 5px;
            margin-top: 5px;
        }
        .headBar {
            border-bottom: 1px solid #e7e7e7
        }

    .uk-overlay-background
        background-color: rgba(0, 0, 0, 0.66);
</style>
<script type="text/ecmascript-6">
    import AddForm from './add'
    import {mapGetters, mapActions} from 'vuex'

    export default {

        data(){
            return {

                items: [],
                selected: -1,
                item: {
                    name: '',

                    url: '',
                    description: ''
                }



            }
        },
        components: {
            AddForm,
        },
        computed: {
            ...mapGetters(['storebilldata', 'getState', 'storebid']),
            dialogVisible: {
                get(){
                    // /console.error(this.$store.state.common.dialogVisible)
                    return this.$store.getters.getState.dialogVisible;
                    //return this.$store.state.common.dialogVisible;
                },
                set(status){
                    this.$store.commit('toggleDialog', status);
                }
            },
            refreshData: {
                get(){
                     return this.$store.getters.getState.refresh;
                },
                set(status){
                    this.$store.commit('changeRefresh', status);
                }
            }
        },
        watch: {
            'refreshData': {
                deep: true,
                handler: function (val) {
                    console.error(val)
                    if (val == true) {
                        this.getdata();
                    }


                }
            }
        },
        methods: {
            ...mapActions(['getBillDatas', 'setBillData', 'setUpload']),
            notify () {

                this.setBillData(this.item)
                //this.note = _.assign({}, this.storenote.toJSON())
            },
            _init: function (callback) {
                console.warn(this.storebid)
                this.setBillData(false)
                this.getdata();
            },
            setting: function () {

                var path = '/dataform/setting'
                this.$router.go(path)

            },
            select: function (index) {

                this.selected = index
            },
            remove: function (item) {
                var _vm = this;
                item.destroy({
                    success: function (object) {
                        _vm.$notify({
                            title: '成功',
                            message: '删除成功',
                            type: 'success'
                        });
                        _vm.getdata();
                    },
                    error: function (object, error) {

                    }
                });
            },

            add: function () {
                var kobject = AV.Object.createWithoutData('billdata', '')
                this.item = kobject;
                this.notify()
                this.dialogVisible = true;

            },
            edit: function (item) {
                this.item = item;
                this.notify();
                this.dialogVisible = true;
            },


            getdata: function (callback) {
                var _vm = this;
                _vm.items = [];

                this.getBillDatas().then(function (results) {
                    console.log(results)
                    if (results) {

                        for (var i = 0; i < results.length; i++) {
                            var object = results[i];
                            console.log(object)
                            _vm.items.push(object)
                        }
                        _vm.$store.commit('changeRefresh', false);
                    }
                }, function (err) {
                    console.log(err);
                });


            },
        }


    }

</script>