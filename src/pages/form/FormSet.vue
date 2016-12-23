<style>


</style>
<template>asdfasdf
    <div class="demo-form">
adfasdf    </div>
</template>
<script>

    export default {
        data() {
            return {
                uploadTip: true,
                parseFile:false,
                ruleForm: {
                    name: '',
                    code:'',
                    html:'',
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


            //this.ruleForm



        },
        methods: {


        }
    }

</script>

