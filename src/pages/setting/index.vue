<template>

    <div class='setting'>
        <el-row class='headBar'>
            <el-col :span="12">
                设置
            </el-col>
            <el-col :span="12"></el-col>
        </el-row>


        <el-form :model="bill" :rules="rules" ref="bill" label-width="100px" class="demo-ruleForm">
            <el-form-item label="项目标题" prop="title">
                <el-input v-model="bill.title"></el-input>
            </el-form-item>

            <el-form-item label="是否公开" prop="public">
                <el-switch on-text="" off-text="" v-model="bill.public"></el-switch>
            </el-form-item>

            <el-form-item label="code" prop="description">
                <el-input type="textarea" v-model="bill.code"></el-input>
            </el-form-item>

            <el-form-item label="备注描述" prop="description">
                <el-input type="textarea" v-model="bill.description"></el-input>
            </el-form-item>

            <el-form-item label="上传图片">
                <leven-upload :filelist='filelist'></leven-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleSubmit">更新</el-button>

            </el-form-item>
        </el-form>


    </div>
</template>

<style lang="stylus">
    .setting

        .headBar {
            border-bottom: 1px solid #e7e7e7
        }
        .demo-ruleForm
            padding-top: 10px;
</style>
<script type='text/ecmascript-6'>
    /**
     * Created by leven on 16/12/21.
     */
    import K from 'parse';
    import {mapGetters, mapActions} from 'vuex'
    import Emitter from 'kevio/lib/emitter';
    import levenUpload from 'pages/common/Upload'

    var Bill = K.Object.extend("bill");

    export default {
        name:"Setting",
        data() {
            return {
                
                bill: {

                    title: '',
                    code: '',

                    public: true,

                    desc: ''
                },


                rules: {
                    title: [
                        {required: true, message: '请输入名称', trigger: 'blur'},
                        {min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur'}
                    ],

                    description: [
                        {required: true, message: '请填写描述', trigger: 'blur'}
                    ]
                },
                filelist: []
            };
        },
        mixins: [Emitter],
        computed: {
            ...mapGetters(['storebill', 'storebid', 'storebilljson','storeupload']),


        },
        components: {
            levenUpload
        },
        watch: {
            'storebill': {
                deep: true,
                handler: function (val) {
                     this.boot(val)
                }
            },'bill':{
                deep: true,
                handler: function (val) {

                    this.$bus.$emit('bill_change', {
                        bill: val

                    });
                }
            },'storeupload':{
                deep: true,
                handler: function (val) {

                    this.bill.picture=this.storeupload?this.storeupload.toJSON():''
                }
            }
        },

        methods: {
            ...mapActions(['getBill','saveBill','setUpload','setBill','setTempBill']),
            _init(){
                "use strict";
                var _vm=this;
                _vm.getBill().then(function (results) {
                    if (results) {


                    }else{
                        //获取不到数据的处理；

                    }
                })
            },
            boot: function (bill) {
                console.error(bill)
                var _vm = this; 

                var picture = bill.get('picture')

                if (picture) {
                    this.filelist = []
                    this.setUpload(picture)

                    var file = {
                        name: picture.name(),
                        url: picture.url()
                    }
                    this.filelist.push(file)
                }
                _vm.bill = bill.toJSON()



            },

            handleReset() {
                this.$refs.bill.resetFields();
            },
            handleSubmit(ev) {
                var _vm = this;
                this.$refs.bill.validate((valid) => {
                    if (valid) {
                        _vm.bill.picture=this.storeupload
                        _vm.saveBill(_vm.bill).then(
                                function (results) {

                                    _vm.setBill(results)
                                    _vm.setUpload(null)
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