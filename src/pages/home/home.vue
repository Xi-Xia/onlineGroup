<template>
    <div class="home">
        <div class="head">
            <div class="product-preview" v-html="img">
                
            </div>
            <div class="product-infos">
                <div class="product-attr">
                    <p class="name">助力武汉，高端纯色美甲，每售出一份为武汉捐赠66元！</p>
                    <p class="price">
                        <span class="now"><i>￥98</i> 起</span> 
                        原价 <span class="old">￥299</span></p>
                    <p class="label">
                        <span>7天免费补休</span>
                        <span>产品保真</span>
                        <span>仪器进口</span>
                    </p>
                </div>
                <div class="product-status">
                    <span>已售60份</span>
                    <span>分析</span>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="stop-infos">
                <div class="shop-addr">
                    <p>医美Nice89号</p>
                    <p>南极站8号站</p>
                    <p>
                        <span>0 km</span>
                        <span>0 min</span>
                        <span>0 min</span>
                    </p>
                </div>
                <div class="shop-phone"></div>
            </div>
        </div>
        <div class="users-comments"></div>
        <div class="buy-btns">
            <div class="btn buy-alone">
                <p class="money">￥198</p>
                <p>单独购买</p>
            </div>
            <div class="btn buy-group">
                <div class="buy-three">
                    <p class="money">￥139</p>
                    <p>3人团</p>
                </div>
                <div class="btn buy-five">
                    <p class="money">￥98</p>
                    <p>5人团</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home',
    data() {
        return {
            img:`<img src="assets/images/beauty_nail.jpg" alt="">`
        }
    }
}
</script>
<style lang="less" scoped>
    .home{
        .head{
            background: #fff;
            .product-infos{
                display: flex;
                padding: 16px 18px;
            }
            .product-attr{
                flex: 1;
                .name{
                    font-size: 32px;
                    font-weight: bold;
                }
                .price{
                    font-size: 20px;
                    color: grey;
                    .now{
                        color: red;
                        i{
                            font-size: 30px;
                        }
                    }
                    .old{
                        text-decoration:line-through
                    }
                }
                .label{
                    span{
                        color: #80afb0;
                        border: solid 1px #80afb0;
                        padding: 2px 10px;
                    }
                }
            }
            .product-status{
                width: 125px;
            }
        }
        .buy-btns{
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 8px 0;
            background: #fff;
            text-align: center;
            .money{
                font-size: 28px;
            }
            .btn{
                padding: 10px 0;
            }
            .buy-alone{
                width: 250px;
                background: #f6f6f6;
                border-radius: 38px;
            }
            .buy-group{
                display: flex;
                flex: 1;
                .buy-three,.buy-five{
                    flex: 1;
                }
            }
        }

    }
</style>