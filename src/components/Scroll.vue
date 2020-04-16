
<template>
    <div class="scroll-view">
        <div class="scroll-wrapper" ref="scroll">
            <div class="scroll-content">
                <span class="scroll-item" v-for="(item, index) in list" :key="index">{{item}}</span>
            </div>
        </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
    name:'Scroll',
    components: {
        BScroll
    },
    data(){
        return{
            BS: null,
            list: []
        }
    },
    created(){
        this.createScrollItem(10);
    },
    mounted(){
        this.init();
    },
    beforeDestroy() {
      this.BS.destroy()
    },
    methods: {
        createScrollItem(num){
            for(let i=0; i<num; i++){
                this.list.push('better-scroll-item'+i+1);
            }
        },
        init() {
            this.BS = new BScroll(this.$refs.scroll, {
                scrollX: true,
                probeType: 3
            })
      }
    }
}
</script>
<style lang="less" scoped>
    .scroll-view{
        width: 100%;
        margin: 0 auto;
        height: 40px;
        white-space: nowrap;
        overflow: hidden;
        .scroll-content{
            display: inline-block;
        }
        .scroll-item{
            display: inline-block;
            height: 30px;
            line-height: 30px;
            margin: 0 5px;
            padding: 2px;
            border-radius: 20px;
            border: solid 1px #c2c2c2;
            font-size: 16px;
        }
    }
</style>