<template>
    <el-upload
            action=""
            type="drag"
            :thumbnail-mode="true"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-upload="handleUPloadBefore"
            :on-success="handleUPloadSuccess"
            :default-file-list="filelist"

    >


        <template >
            <i class="el-icon-upload"></i>

            <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>

            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </template>


    </el-upload>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script type='text/ecmascript-6'>
    import {mapGetters, mapActions} from 'vuex'

    export default{
        data(){
            return{
                parseFile:{},

            }
        },
        props:['filelist'],
        methods:{
            ...mapActions(['setUpload']),
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleUPloadSuccess(file){
                this.setUpload(file)

                var piture=file.toJSON();
                piture.url=file.thumbnailURL(200, 200)
                this.filelist.push(piture)
            },
            handleUPloadBefore(file){
                var _vm = this;

                this.parseFile = new AV.File(file.name, file);

                this.parseFile.save().then(function (file) {

                    _vm.handleUPloadSuccess(file)
                }, function (error) {
                    console.log(error)
                    // The file either could not be read, or could not be saved to K.
                });
                return false;
            },

        }
    }
</script>
