<template>

    <div class='setting'>
        <el-row class='headBar'>
            <el-col :span="12">
                设置
            </el-col>
            <el-col :span="12"> </el-col>
        </el-row>

        <el-form :model="sets" :rules="rules" ref="sets" label-width="100px" class="demo-ruleForm">
            <el-form-item label="项目标题" prop="title">
                <el-input v-model="sets.title"></el-input>
            </el-form-item>

            <el-form-item label="是否公开" prop="public">
                <el-switch on-text="" off-text="" v-model="sets.public"></el-switch>
            </el-form-item>

            <el-form-item label="code" prop="description">
                <el-input type="textarea" v-model="sets.code"></el-input>
            </el-form-item>

            <el-form-item label="备注描述" prop="description">
                <el-input type="textarea" v-model="sets.description"></el-input>
            </el-form-item>

            <el-form-item label="上传图片">
                <el-upload
                        action="http://localhost:4000/api/upload"
                        type="drag"
                        :thumbnail-mode="true"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-upload="handleUPloadBefore"
                        :on-success="handleUPloadSuccess"

                >
                    <template v-if="uploadTip">
                        <i class="el-icon-upload"></i>

                        <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>

                        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </template>

                    <template v-if="!uploadTip">
                        <div class="el-upload__inner el-dragger is-showCover">
                            <div class="el-dragger__cover"><!---->
                                <div class="el-dragger__cover__content"><img :src="sets.head_img">
                                    <div class="el-dragger__cover__interact">
                                        <div class="el-draggeer__cover__btns"><span class="btn"><i
                                                class="el-icon-upload2"></i><span>继续上传</span></span> <span
                                                class="btn"><i class="el-icon-view"></i><span>查看图片</span></span> <span
                                                class="btn"><i class="el-icon-delete2"></i><span>删除</span></span></div>
                                    </div>
                                     </div>
                            </div>
                            <input type="file" accept="image/*" class="el-upload__input"></div>
                    </template>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleSubmit">更新</el-button>

            </el-form-item>
        </el-form>


    </div>
</template>

<style lang="stylus">
.setting

    .headBar{
        border-bottom :1px solid #e7e7e7
    }
    .demo-ruleForm
        padding-top:10px;
</style>
<script>
/**
 * Created by leven on 16/12/21.
 */
import K from 'parse';
import {mapGetters, mapActions} from 'vuex'
import Emitter from 'kevio/lib/emitter';

var Bill = K.Object.extend("bill");

export default {
    data() {
        return {
            uploadTip: true,
            parseFile: false,
            sets: {

                title: '',
                code: '',

                public: true,

                desc: ''
            },
            bill: {},

            rules: {
                title: [
                    {required: true, message: '请输入名称', trigger: 'blur'},
                    {min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur'}
                ],

                description: [
                    {required: true, message: '请填写描述', trigger: 'blur'}
                ]
            }
        };
    },
    mixins: [Emitter],
    computed: {
        ...mapGetters(['storebill', 'storebid', 'storebilljson'])
    },

    methods: {
        ...mapActions(['getBill', 'updateBid', 'updateBillJson']),
        ooo(nb, ob){

            //this.$parent.$parent.html = nb;
            //this.$store.dispatch('updateBillJson',nb)
            //this.updateBillJson(nb)
        },
        _init: function (callback) {
            var _vm = this;

            this.getBill().then(function (data) {

                if (data) {
                    _vm.bill = data;
                    _vm.sets = _vm.bill.toJSON()
                    if(_vm.sets.head_img){
                        _vm.uploadTip=false;
                    }

                }
            }, function (err) {
                console.log(err);
            });
            //console.log(this.getBill())
            // this.sets=this.bill.toJSON()

        },

        getdata(){
            var _vm = this;

            var query = new K.Query(Bill);

            query.equalTo("objectId", this.storebid);

            query.first({
                success: function (result) {
                    _vm.bill = result
                    _vm.sets = result.toJSON()

                },
                error: function (error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            });


        },

        upload(){

            var fileUploadControl = $("#profilePhotoFileUpload")[0];
            if (fileUploadControl.files.length > 0) {
                var file = fileUploadControl.files[0];
                var name = "photo.jpg";

                var parseFile = new K.File(name, file);
                parseFile.save().then(function (file) {
                    console.log(file)
                }, function (error) {
                    console.log(error)
                    // The file either could not be read, or could not be saved to K.
                });
            }
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleUPloadSuccess(){

            this.sets.head_img = this.parseFile.url();
            this.uploadTip = false;


        },
        handleUPloadBefore(file){
            var _vm = this;
            // console.log(this)


            this.parseFile = new K.File(file.name, file, file.type);
            this.parseFile.save().then(function (file) {
                _vm.handleUPloadSuccess()
            }, function (error) {
                console.log(error)
                // The file either could not be read, or could not be saved to K.
            });
            return false;
        },

        handleReset() {
            this.$refs.sets.resetFields();
        },
        handleSubmit(ev) {
            var _vm = this;
            this.$refs.sets.validate((valid) => {
                if (valid) {

                    _vm.bill.set(_vm.sets)



                    _vm.bill.save();
                    _vm.$notify({
                        title: '成功',
                        message: '这是一条成功的提示消息',
                        type: 'success'
                    });

                } else {

                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
    }




</script>