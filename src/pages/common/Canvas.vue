<template>

    <div id="canvas-panel" class="panel">
        <div id="editor">
            <div v-html="html"></div>
            {{storebilljson}}
        </div>
    </div>
</template>

<style lang="stylus">
    @import "../../assets/css/variable"

    #canvas-panel {
        position absolute

        background-color: white;
        top: 0;
        bottom: 0;
        right: 0;
        left:485px;

        z-index: 5;
    }
    #editor
        position absolute
        left 0
        right 0
        top 0
        bottom 0px
        pading:10px;
        margin 10px
        border 1px solid gray

</style>
<script>

import { mapGetters, mapActions } from 'vuex'

export default {
        data(){
            return {
                html:"<hr>"
            }
        },
        computed: {
            ...mapGetters(['storebilljson','storebid'])
        },
        methods: {
            ...mapActions(['getBill','updateBid']),
            _init: function (callback) {
                 

            }
        }    
}



</script>