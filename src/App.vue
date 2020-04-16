
<template>
    <div class="app">
        <home />
    </div>
</template>

<script>
import Home from 'src/pages/home/home.vue'
export default {
    name:'App',
    components:{
        Home
    },
    data(){
        return{}
    }
}
</script>

<style lang="less">
    *,p,ul,li{
        padding: 0;
        margin: 0;
    }
    i{
        font-style: normal;
    }
    body{
        background: #f1f1f1;
    }
</style>
