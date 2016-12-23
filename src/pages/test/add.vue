<style>


</style>
<template>
    <div class="demo-form">

        <el-form :model='item' :rules="rules" ref="item" label-width="100px" class="demo-item  ">
            <input v-model="item.name">
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
            ...mapGetters(['storenote', 'storeupload']),

        },
        created(){
            //初始化
            this.initItem()
        },
        watch: {
            'storenote': {
                deep: true,
                handler: function (val, oldVal) {


                    this.initItem()
                }
            },
            'storeupload': {
                deep: true,
                handler: function (val, oldVal) {
                    console.log(val.className)
                    if (val.className == '_File') {
                        this.item.picture = val;
                    }

                }
            }
        },

        methods: {
            open(){
                alert("open")
            },
            ...mapActions(['saveNote', 'setNote', 'setUpload']),
            _init(){

            },

            initItem(item){
                this.filelist = [];
                var _vm = this;

                var piture = this.storenote.get('picture')
                if (piture) {

                    this.filelist = []
                    this.setUpload(piture)
                    var file = {
                        name: piture.get("name"),
                        url: piture.thumbnailURL(200, 200)
                    }
                    this.filelist.push(file)
                }
                this.item = Object.assign({}, this.itemdata, this.storenote.toJSON())
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
                        _vm.saveNote(_vm.item).then(
                                function (results) {


                                }, function (err) {
                                    console.log(err);
                                });

                        //_vm.item.set(AV.Object.createWithoutData('notes',''))
                    _vm.dispatch('ElFormItem', 'el.form.blur', [this.currentValue]);

                        _vm.$parent.$parent.getdata();
                        _vm.$parent.$parent.$refs.webDialog.close()
                        _vm.$notify({
                            title: '成功',
                            message: '保存成功',
                            type: 'success'
                        });
                        _vm.handleReset()

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }

</script>

