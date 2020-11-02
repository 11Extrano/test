<template>
    <div>
       <div class="header">
           <h3>Flyme</h3>
           <span>
               <van-icon name="wap-home-o" @click='gotohome' />
           </span>
       </div>
       <div class="flymeContent" >
           <div class="content">
               <h1>{{this.loginData.title}}</h1>
               <p>{{this.loginData.dsc}}</p>  
                <van-tag plain type="primary">登录网页端</van-tag>
           </div>
       </div>
    </div>
</template>

<script>
import { loginData} from '@/data/cloud'
export default {
    data () {
        return {
            loginData: loginData,
 
        }
    },
    methods:{
        gotohome(){
            this.$router.go(-1);
        }
    }

}
</script>
 
<style lang = "less" scoped>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.15rem .15rem .1rem .15rem;
    position: fixed;
    width: 100%;
    h3 {
        color: #3987ec;
        font-size: .2rem; 
        flex:1;
    }
    span{
        width: 15%;
    }
}
.flymeContent{
    width: 100%;
    height: 100vh;
    background:url('../assets/mountain.jpg') no-repeat center 50px;
    .content{
        text-align: center;
        position: absolute;
        top: 40%;
        left: 50%;
        margin-left: -35%;
        color: #fff;
        h1{
            font-weight: normal;
        }
        p{
            font-size: .16rem;
            line-height: 1rem;

        }
        .van-tag {
            color: #fff;
            background-color: transparent;
            font-size: .16rem;
            padding: .1rem .2rem;
            text-align: center;
            border-radius: .2rem;
            width: 1rem;
           
        }
    }
}
</style>