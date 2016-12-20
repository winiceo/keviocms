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
    .demo-webFrom {
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
        <el-form :model="webFrom" :rules="rules" ref="webFrom" label-width="100px" class="demo-webFrom  ">
            <el-form-item label="网站名称" prop="name">
                <el-input v-model="webFrom.name"></el-input>
            </el-form-item>

            <el-form-item label="url" prop="url">
                <el-input v-model="webFrom.url"></el-input>
            </el-form-item>
            <el-form-item label="remark" prop="remark">
                <el-input v-model="webFrom.remark"></el-input>
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
                webFrom: {
                    name: '',
                    url:"",


                },
                rules: {
                    name: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'}
                    ],
                    url: [

                    ],
                    remark:[]

                },
                uploadfile: {}
            };
        },

        methods: {

            handleReset() {
                this.$refs.webFrom.resetFields();
            },
            handleSubmit(ev) {
                var _vm = this;
                this.$refs.webFrom.validate((valid) => {
                    if (valid) {
                        var WebSite = Kevio.Object.extend("logo");
                        var website = new WebSite();

                        website.set(_vm.webFrom);


                        website.save( {
                            success: function (web) {
                                // Execute any logic that should take place after the object is saved.


                                _vm.$dispatch("addItem", web.toJson());

                                console.log(_vm.$parent.$parent.items)
                                _vm.$parent.$parent.$refs.webDialog.close()
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

