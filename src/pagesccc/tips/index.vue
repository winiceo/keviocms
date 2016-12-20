<template>
    <div>

        asdfsadfasdf
    </div>
</template>
<script>


    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components:{

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
