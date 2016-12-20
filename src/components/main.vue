<template>
    <div>

    </div>
</template>

<script>

    import TabComponent from './tab.vue'
        import ListComponent from 'components/list'

    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
            ListComponent,
            TabComponent,
        }
    }
</script>
