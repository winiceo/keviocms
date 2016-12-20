<template>

    <el-card class="box-card">

        <div slot="header" class="clearfix">
            <span style="line-height: 36px;">设置</span>
        </div>
        <el-form :model="item" :rules="rules" ref="item" label-width="100px" class="demo-ruleForm">
            <el-form-item label="项目标题" prop="title">
                <el-input v-model="item.title"></el-input>
            </el-form-item>

            <el-form-item label="是否公开" prop="public">
                <el-switch on-text="" off-text="" v-model="item.public"></el-switch>
            </el-form-item>

            <el-form-item label="code" prop="description">
                <el-input type="textarea" v-model="item.code" rows=6></el-input>
            </el-form-item>

            <el-form-item label="备注描述" prop="description">
                <el-input type="textarea" v-model="item.description" rows=6></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleSubmit">更新</el-button>

            </el-form-item>
        </el-form>


    </el-card>
</template>

<style lang="stylus">

</style>
<script>
import K from 'parse';

var Bill = K.Object.extend("bill");

export default {
    data() {
      return {

        bill:{},
        item: {
          name: '',
          code:'',

          public: true,

          desc: ''
        },
        rules: {
          title: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            { min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur' }
          ],

          description: [
            { required: true, message: '请填写描述', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      _init: function (callback) {

            this.getdata();

      },
      getdata(){
            var _vm=this;

            var query = new K.Query(Bill);

            query.equalTo("objectId", _vm.app.bid);

            query.first({
              success: function(result) {
                 _vm.bill=result
                 _vm.item=result.toJSON()

              },
              error: function(error) {
                alert("Error: " + error.code + " " + error.message);
              }
            });


      },
      handleReset() {
        this.$refs.item.resetFields();
      },
      handleSubmit(ev) {
      var _vm=this;
        this.$refs.item.validate((valid) => {
          if (valid) {

            _vm.bill.set(_vm.item)
            _vm.bill.save();
            _vm.$notify({
                              title: '成功',
                              message: '这是一条成功的提示消息',
                              type: 'success'
            });

          } else {
            alert(4444)
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }


</script>