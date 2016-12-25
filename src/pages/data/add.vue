<style>


</style>
<template>
    <div class="demo-form">


        <el-form :model='item' :rules="rules" ref="item" label-width="100px" class="demo-item  ">

            <el-form-item label="名称" prop="name">
                <el-input v-model="item.name"></el-input>
            </el-form-item>
            <el-form-item label="网址" prop="url">
                <el-input v-model="item.url"></el-input>
            </el-form-item>

            <el-form-item label="描述" prop="description">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 6}" placeholder="请输入内容"
                          v-model="item.description">
                </el-input>
            </el-form-item>
            <el-form-item label="上传图片">
                <leven-upload :filelist='filelist'></leven-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click.native.prevent="handleSubmit">立即创建</el-button>
                <el-button @click.native.prevent="handleReset">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script type='text/ecmascript-6'>
    import {mapGetters, mapActions} from 'vuex'
    import emitter from 'kevio/mixins/emitter';
    import levenUpload from 'pages/common/Upload'
    export default {
        mixins: [emitter],
        data() {
            return {
                itemdata: {
                    name: '',
                    url: '',
                    description: '',
                    picture: null

                },
                item: {},
                rules: {
                    name: [
                        {required: true, message: '请输入名称', trigger: 'blur'}
                    ]
                },
                filelist: []
            };
        },
        components: {
            levenUpload
        },
        computed: {
            ...mapGetters(['storebilldata', 'storeupload']),

        },
        created(){
            //初始化
            this.initItem()

        },
        watch: {
            'storebilldata': {
                deep: true,
                handler: function (val, oldVal) {


                    this.initItem()
                }
            },
            'storeupload': {
                deep: true,
                handler: function (val, oldVal) {

                    if (val ) {
                        this.item.picture = val;
                    }

                }
            }
        },

        methods: {

            ...mapActions(['saveBillData', 'setBillData', 'setUpload', 'hideDialog']),
            _init(){

            },

            initItem(item){
                this.filelist = [];
                var _vm = this;

                var picture = this.storebilldata.get('picture')
                if (picture) {

                    this.filelist = []
                    this.setUpload(picture)
                    var file = {
                        name: picture.name(),
                        url: picture.url(),
                    }
                    this.filelist.push(file)
                }
                this.item = Object.assign({}, this.itemdata, this.storebilldata.toJSON())
            },

            handleReset() {
                this.item = {}
                this.filelist = [];
                this.$refs.item.resetFields();
            },

            handleSubmit(ev) {
                var _vm = this;
                this.$refs.item.validate((valid) => {
                    if (valid) {
                        _vm.item.picture=this.storeupload
                        _vm.saveBillData(_vm.item).then(
                                function (results) {
                                    _vm.$store.commit('toggleDialog', false);
                                    _vm.$store.commit('changeRefresh', true);
                                    _vm.$bus.$emit('billdata_change');
                                    _vm.$notify({
                                        title: '成功',
                                        message: '保存成功',
                                        type: 'success'
                                    });
                                    _vm.handleReset()
                                }, function (err) {
                                    //alert(err)
                                    _vm.$notify({
                                        title: '错误',
                                        message: '保存失败',
                                        type: 'error'
                                    });


                                })




                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }

</script>

