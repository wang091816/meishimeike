<template>
    <div id="wode">
        <div class="gjSemicircle"></div>
        <div class="gjDenglu">
            <p class="top" @click="goMessage">
                <img src="../assets/img/E_04.jpg" alt="" class="left">
                <span class="right">未登录</span>
            </p>
            <img src="../assets/img/E1_11.jpg" alt="" class="topLogo" @click="goYiduiyifudao">
            <p class="bottom">
                <ul>
                    <li @click="goStudy">
                        <p class="p1">0</p>
                        <p class="p2">我的特色课</p>
                        <p class="p3">已购特色课程学习</p>
                    </li>
                    <li @click="goYuekejilu">
                        <p class="p1">0</p>
                        <p class="p2">一对一辅导</p>
                        <p class="p3">我的一对一老师辅导</p>
                    </li>
                    <li @click="goBalance">
                        <p class="p1">0.00</p>
                        <p class="p2">剩余学习币</p>
                        <p class="p3">查看剩余学习币</p>
                    </li>
                </ul>
            </p>
        </div>
        <img src="../assets/img/E1_16.jpg" alt="" class="logo">
        <div class="gjCourse">
            <p>课程相关</p>
            <van-grid clickable :column-num="4">
                <van-grid-item icon="friends-o" text="关注的老师" to="/Attention" />
                <van-grid-item icon="star-o" text="我的收藏" to="/Collect" />
            </van-grid>
        </div>
        <div class="gjIndent">
            <p>订单相关</p>
            <van-grid clickable :column-num="4">
                <van-grid-item icon="notes-o" text="课程订单" to="/Course" />
                <van-grid-item icon="notes-o" text="会员订单" to="/Member" />
                <van-grid-item icon="notes-o" text="约课订单" to="/Invite" />
            </van-grid>
        </div>
        <div class="gjAccount">
            <p>我的账户</p>
            <van-grid clickable :column-num="4">
                <van-grid-item icon="balance-pay" text="优惠券" to="/Coupon" />
                <van-grid-item icon="idcard" text="学习卡" to="/Cards" />
                <van-grid-item icon="diamond-o" text="会员" to="/Vip" />
            </van-grid>
        </div>
        <div class="gjServe">
            <p>自动服务</p>
            <van-grid clickable :column-num="4">
                <van-grid-item icon="volume-o" text="我的消息" to="/News" />
                <van-grid-item icon="envelop-o" text="意见反馈" to="/Feedback" />
                <van-grid-item icon="service-o" text="在线客服" to="/Service" />
                <van-grid-item icon="setting-o" text="设置" to="/Options" />
            </van-grid>
        </div>
        <div class="gjFooter"></div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: "wode",
        methods: {
            goMessage(){
                this.$router.push("/Message")
            },
            goYiduiyifudao(){
                this.$router.push("/Yuduiyifudao")
            },
            goStudy(){
                this.$router.push("/Study")
            },
            goYuekejilu(){
                this.$router.push("/Yuekejilu")
            },
            goBalance(){
                this.$router.push("/Balance")
            }
        }
    })
</script>

<style scoped lang="scss">
#wode{
    position: relative;
    background: white;
    .gjSemicircle{
        width: 100%;
        height: 15rem;
        background: #FC5500;
        border-radius: 30%;
        position: absolute;
        top: -7rem;
    }
    .gjDenglu{
        width: 90%;
        height: 11rem;
        border: 1px solid #eee;
        background: white;
        position: absolute;
        top: 3rem;
        margin-left: 5%;
        .top{
            height: 50%;
            .left{
                width: 18%;
                margin: 5% 5% 0 5%;
                float: left;
            }
            .right{
                font-size: 1.5rem;
                margin-top: 1.5rem;
                float: left;
            }
        }
        .topLogo{
            width: 15%;
            position: absolute;
            top: 1.8rem;
            right: -0.1rem;
        }
        .bottom{
            height: 50%;
            ul{
                display: flex;
                li{
                    flex: 1;
                    margin-top: 2%;
                    border-left: 1px solid #eee;
                    p{
                        width: 100%;
                        text-align: center;
                    }
                    .p1{
                        color: red;
                        font-size: 1.3rem;
                    }
                    .p3{
                        color: #B7B7B7;
                        font-size: 0.7rem;
                    }
                }
            }
        }
    }
    .logo{
        width: 90%;
        height: 100%;
        margin-top: 15rem;
        margin-left: 5%;
    }
    .gjCourse,.gjIndent,.gjAccount,.gjServe{
        margin-left: 1rem;
        p{
            margin: 0.5rem 0;
            font-size: 1.2rem;
        }
    }
    .gjFooter{
        width: 100%;
        height: 4rem;
        background: #F0F2F5;
    }
}
</style>