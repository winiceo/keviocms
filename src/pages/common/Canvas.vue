<template>

    <div id="canvas-panel" class="panel">
        <div id="editor">


            <div class="uk-container uk-container-center">
                <section>
                <ul class="uk-grid" data-uk-grid-margin="">

                    <li class="uk-width-medium-1-1 uk-row-first">
                        <figure class="uk-overlay">
                            <img :src="html.head_img"  >
                            <figcaption class="uk-overlay-panel uk-overlay-background uk-flex uk-flex-center uk-flex-middle uk-text-center">
                                <div class='overplay-div'>
                                    <h3>{{html.title}}</h3>
                                    <span class='des'>{{html.description}}</span>

                                </div>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
               </section>
                <section class='list'>
                    <div class="uk-grid uk-margin-top" v-for="(item,index) in kdata">
                        <div class="uk-width-1-1"  >
                            <div class="uk-panel uk-panel-box">
                                <div class="uk-grid uk-margin-remove">
                                    <div class="uk-width-3-10"  >
                                        <img :src="item.get('picture').url()" >
                                    </div>
                                    <div class="uk-width-7-10">
                                        <div class="uk-text-bold uk-margin-small-top uk-float-left" style="font-size:2.2em">{{item.get('name')}}</div>
                                        <div class="uk-text-right" style="display: none"><a href="">详细介绍</a></div><hr>
                                        <span class="uk-margin-small-top">{{item.get('description')}}</span><hr>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



               </section>



            </div>

        </div>
        <slot  ></slot>
    </div>
</template>

<style lang="stylus" scoped>
    @import "../../assets/css/variable"
    .list
        .k-panel
          border 1px solid red
    .uk-container
        padding 0


    #editor
        position absolute
        left 0
        right 0
        top 0
        bottom 0px
        pading:10px;
        margin 10px
        border 1px solid gray
        overflow: scroll;

    .overlay-div
        vertical-align bottom
        position: absolute;
        bottom: 10px;

    .uk-panel-teaser
        >img
            width:100%
            height 120px
    .uk-overlay-panel
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 20px;
        color: #fff;



    .uk-overlay
        display: inline-block;
        position: relative;
        max-width: 100%;
        vertical-align: middle;
        overflow: hidden;
        -webkit-transform: translateZ(0);
        margin: 0;
        img
            width:100%
            height:250px

    .uk-overlay-background
        background-color: rgba(0,0,0,0.1);

    .overplay-div
        text-align center
        font-size 40px
        .des
            font-size 15px


</style>
<script>

import { mapGetters, mapActions } from 'vuex'

export default {
        data(){
            return {

            }
        },
        props: ['html','kdata'],
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