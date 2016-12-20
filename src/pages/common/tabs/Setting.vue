<template>

    <el-card class="box-card">

        <div slot="header" class="clearfix">
            <span style="line-height: 36px;">设置</span>
         </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="项目标题" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="是否公开" prop="public">
                <el-switch on-text="" off-text="" v-model="ruleForm.public"></el-switch>
            </el-form-item>

            <el-form-item label="备注描述" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleSubmit">立即创建</el-button>
                <el-button @click="handleReset">重置</el-button>
            </el-form-item>
        </el-form>

    </el-card>
</template>

<style lang="stylus">

</style>
<script>

export default {
    data() {
      return {
        ruleForm: {
          name: '',

          public: true,

          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            { min: 3, max: 100, message: '长度在 3 到 100 个字符', trigger: 'blur' }
          ],

          desc: [
            { required: true, message: '请填写描述', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      _init: function (callback) {
            console.log(1)
            this.getdata();

      },
      getdata(){
            var _vm=this;
            var Bill = K.Object.extend("bill");
            var query = new K.Query(Bill);

            query.equalTo("objectId", _vm.app);

            query.first({
              success: function(results) {
                console.log(results)
              },
              error: function(error) {
                alert("Error: " + error.code + " " + error.message);
              }
            });


      },
      handleReset() {
        this.$refs.ruleForm.resetFields();
      },
      handleSubmit(ev) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }

</script>