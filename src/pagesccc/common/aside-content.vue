<style>

    .content-navs{
        left: 80px;
        padding-left: 80px;
        width: 200px;
        height:100%;
        background-color: #414a4b;
    }
    .page-content{
        left:80px;
        height:100%;
        bottom:0x;
    }
        ul {
            margin-bottom: 50px;
            padding-left: 0;
        }

        li {
            font-size: 14px;
            margin-bottom: 10px;
            color: #99a9bf;
            list-style: none;

        }


</style>
<template>
    <div>
        <panel id="aside-content" class="page-content">


           <side-nav :data="navsData" class="content-navs"></side-nav>


        </panel>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                navsData: [
                    {
                        path: '/modules/website',
                        name: '网站'
                    },
                    {
                        path: '/modules/logo',
                        name: 'Logo'
                    }
                ]
            };
        }
    };
</script>
