<style>
    .demo-form {

    .el-select .el-input {
        width: 360px;
    }

    .el-form {
        width: 440px;
    }


    .line {
        text-align: center;
    }

    .el-checkbox-group {
        width: 320px;
        margin: 0;
        padding: 0;
        list-style: none;

    &
    :after,

    &
    :before {
        content: ' ';
        display: table;
    }

    &
    :after {
        clear: both;
        visibility: hidden;
        font-size: 0;
        height: 0;
    }

    .el-checkbox {
        float: left;
        width: 160px;
        padding-right: 20px;
        margin: 0;
        padding: 0;

    +
    .el-checkbox {
        margin-left: 0;
    }

    }
    }
    .demo-form-normal {
        width: 440px;
    }

    .demo-form-inline {

    .el-input {
        width: 150px;
    }

    >
    * {
        margin-right: 10px;
    }

    }
    .demo-form-stacked {
        width: 270px;

    .el-select .el-input {
        width: 100%;
    }

    }
    .demo-ruleForm {
        width: 460px;

    .el-input,
    .el-textarea {
        width: auto;
    }

    .el-select .el-input {
        width: 360px;
    }

    }
    .demo-dynamic {

    .el-input {
        display: inline-block;
        margin-right: 10px;
        width: 270px;
    }

    }
    .fr {
        float: right;
    }

    }
</style>
<template>
    <div class="demo-form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm  ">
            <el-form-item label="名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>



            <!-- <input type="file" id="profilePhotoFileUpload"><button @click="upload">asf</button> -->
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
                                <div class="el-dragger__cover__content"><img :src="uploadfile.url()">
                                    <div class="el-dragger__cover__interact"  >
                                        <div class="el-draggeer__cover__btns"><span class="btn"><i
                                                class="el-icon-upload2"></i><span>继续上传</span></span> <span
                                                class="btn"><i class="el-icon-view"></i><span>查看图片</span></span> <span
                                                class="btn"><i class="el-icon-delete2"></i><span>删除</span></span></div>
                                    </div>
                                    <h4 class="el-dragger__cover__title"  >
                                        {{uploadfile.name()}}</h4></div>
                            </div>
                            <input type="file" accept="image/*" class="el-upload__input"></div>
                    </template>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click.native.prevent="handleSubmit">立即创建</el-button>
                <el-button @click.native.prevent="handleReset">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import Parse from "parse"
    export default {
        data() {
            return {
                uploadTip: true,
                parseFile:{},
                ruleForm: {
                    name: '',


                },
                rules: {
                    name: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'}
                    ]


                },
                uploadfile: {}
            };
        },
        mounted(){
            Parse.initialize("kevioapp", 'pmker.com');
            Parse.serverURL = 'http://localhost:4000/api/parse'

            // Parse.initialize("71an.com", "71an.com");
            // Parse.serverURL = 'http://baas.71an.com:8043/parse'


//Parse.serverUrl=("http://localhost:4040/parse");

        },
        methods: {
            upload(){

                var fileUploadControl = $("#profilePhotoFileUpload")[0];
                if (fileUploadControl.files.length > 0) {
                    var file = fileUploadControl.files[0];
                    var name = "photo.jpg";

                    var parseFile = new Parse.File(name, file);
                    parseFile.save().then(function (file) {
                        console.log(file)
                    }, function (error) {
                        console.log(error)
                        // The file either could not be read, or could not be saved to Parse.
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
                console.log(this.parseFile)
                this.uploadfile = this.parseFile;
                this.uploadTip = false;
                //alert(this.ruleForm)

            },
            handleUPloadBefore(file){
                var _vm = this;
                // console.log(this)


                this.parseFile = new Parse.File(file.name, file, file.type);
                this.parseFile.save().then(function (file) {
                    _vm.handleUPloadSuccess()
                }, function (error) {
                    console.log(error)
                    // The file either could not be read, or could not be saved to Parse.
                });
                return false;
            },
            handleReset() {
                this.$refs.ruleForm.resetFields();
            },
            handleSubmit(ev) {
                var _vm = this;
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        var WebSite = Parse.Object.extend("media");
                        var website = new WebSite();

                        website.set(_vm.ruleForm);
                        website.set('picture', _vm.parseFile);


                        website.save(null, {
                            success: function (web) {

                                // Execute any logic that should take place after the object is saved.
                                //console.log(_vm.$parent.$parent.items)
                                try{
                                    _vm.$emit('item_add', web.toJSON())
                                    _vm.$parent.$parent.$refs.webDialog.close()
                                }catch (e){
                                    alert(e)
                                }


                                //alert('New object created with objectId: ' + gameScore.id);
                            },
                            error: function (web, error) {

                            }
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

