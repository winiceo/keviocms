<template>
    <div>

         

             
        
adsfs
    </div>
</template>
<script>


    import Collect from "./collect.vue"
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components:{
           
            Collect
        },
        methods:{
            _init(){
                console.log(this.$route.query)
            },
            mounted(){
                console.log(this.$route.query)
            }
        }
    }
</script>
