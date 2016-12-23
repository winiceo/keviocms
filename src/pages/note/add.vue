<style>


</style>
<template>
    <div class="demo-form">
        <el-form :model="item" :rules="rules" ref="item" label-width="100px" class="demo-item  ">
            <el-form-item label="名称" prop="name">
                <el-input v-model="item.name"></el-input>
            </el-form-item>
            <el-form-item label="网址" prop="url">
                <el-input v-model="item.url"></el-input>
            </el-form-item>

            <el-form-item label="描述" prop="description">

                <el-input
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 6}"
                        placeholder="请输入内容"
                        v-model="item.description">
                </el-input>
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
                                    <div class="el-dragger__cover__interact">
                                        <div class="el-draggeer__cover__btns"><span class="btn"><i
                                                class="el-icon-upload2"></i><span>继续上传</span></span> <span
                                                class="btn"><i class="el-icon-view"></i><span>查看图片</span></span> <span
                                                class="btn"><i class="el-icon-delete2"></i><span>删除</span></span></div>
                                    </div>
                                    <h4 class="el-dragger__cover__title">
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
<script type='text/ecmascript-6'>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        data() {
            return {
                itemdata:{},
                item:{},
                uploadTip: true,
                parseFile: false,
                rules: {
                    name: [
                        {required: true, message: '请输入名称', trigger: 'blur'}
                    ]
                },
                uploadfile: {}
            };
        },
        computed: {
            ...mapGetters(['storebill', 'storebid', 'storebilljson','storekdataitem'])
        },

        mounted(){
            //this.itemdata=this.storekdataitem

        },
        watch: {
            'storekdataitem': {
                deep: true,
                handler: function (val, oldVal) {

                    this.boot(val)
                }
            }
        },
        methods: {

            boot(item){

                console.log(item)
                var _vm = this;


                this.parseFile = item.get('picture')
                if (this.parseFile.url()) {
                    this.handleUPloadSuccess()
                }
                this.item = item.toJSON()
                console.log(this.item)


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

                this.uploadfile = this.parseFile;
                this.uploadTip = false;
                console.log(this.parseFile)
                //alert(this.item)

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
                this.item = {
                    name: '',
                    code: '',
                    html: '',
                    bid: this.storebid,
                    head_img: ''
                }
                this.uploadTip = true
                this.$refs.item.resetFields();
            },
            handleSubmit(ev) {
                var _vm = this;
                this.$refs.item.validate((valid) => {
                    if (valid) {

                        _vm.storekdataitem.set(_vm.item);
                        if (_vm.parseFile) {
                            _vm.storekdataitem.set('picture', _vm.parseFile);

                        } else {
                            this.$notify.error({
                                title: '错误',
                                message: '请上传图片'
                            });
                            return false;
                        }


                        _vm.storekdataitem.save(null, {
                            success: function (web) {

                                // Execute any logic that should take place after the object is saved.
                                //console.log(_vm.$parent.$parent.items)
                                try {
                                    _vm.$emit('item_add', web.toJSON())
                                    _vm.$parent.$parent.getdata();
                                    _vm.$parent.$parent.$refs.webDialog.close()

                                    _vm.$notify({
                                        title: '成功',
                                        message: '保存成功',
                                        type: 'success'
                                    });
                                    _vm.handleReset()
                                } catch (e) {
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

