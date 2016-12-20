<template>
    <div>

        <Aside></Aside>
        <panel id="canvas-panel">

            <Collect></Collect>
        </panel>

    </div>
</template>
<script>

    import Aside from "./aside.vue"
    import Collect from "./collect.vue"
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components:{
            Aside,
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
