<template>

    <el-card class="box-card">
        {{sets||json}}
        <div slot="header" class="clearfix">
            <span style="line-height: 36px;">设置</span>
        </div>
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
import { mapGetters, mapActions } from 'vuex'
import Emitter from 'kevio/lib/emitter';

var Bill = K.Object.extend("bill");

export default {
    data() {
      return {
        sets:{

                  title: '',
                  code:'',

                  public: true,

                  desc: ''
         },
        bill:{},

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
    mixins: [Emitter],
    computed: {
        ...mapGetters(['storebill','storebid','storebilljson'])
    },
    
    methods: {
      ...mapActions(['getBill','updateBid','updateBillJson']),
      ooo(nb,ob){
        this.$store.dispatch('updateBillJson',nb)
        //this.updateBillJson(nb)
      },
      _init: function (callback) {
            var _vm=this;
            this.updateBid(this.app.bid)
            this.getBill().then(function(data) {

                if(data){
                  _vm.bill=data;
                  _vm.sets=_vm.bill.toJSON() 

                }
            }, function(err) {
                console.log(err);
            });
              //console.log(this.getBill())
           // this.sets=this.bill.toJSON() 

      },
      
      getdata(){
            var _vm=this;

            var query = new K.Query(Bill);

            query.equalTo("objectId", _vm.app.bid);

            query.first({
              success: function(result) {
                 _vm.bill=result
                 _vm.sets=result.toJSON()

              },
              error: function(error) {
                alert("Error: " + error.code + " " + error.message);
              }
            });


      },
      handleReset() {
        this.$refs.sets.resetFields();
      },
      handleSubmit(ev) {
      var _vm=this;
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
    },
    watch:{
        'sets':{
          deep:true,
          handler: function(val, oldVal) {
            this.ooo(val)
          }
        }

  
    },
  }



</script>