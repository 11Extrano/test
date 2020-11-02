<template>
  <div>
    <ul>
      <li>
        <div class="refundhead">
          <span>供应商：魅族</span>
          <span>交易关闭</span>
        </div>
        <div class='refundContent'>
          <van-card
            price=" 2699"
            desc="全网通公开版 碳纤黑 6+128GB"
            title="魅族16s"
            thumb="https://openfile.meizu.com/group1/M00/07/3B/Cgbj0VzaXQqAMN2pAAa47vx50YU413.png"
          />
          <span class='num'>x 1</span>
          <p>共1件商品 合计：<span class='price'>￥ 2699 </span>（免运费）</p>
          <div class='pay'>
              <van-button color="#c8c8c8" plain class='cancel'>取消订单</van-button>
              <van-button color="#f0415f">立即付款</van-button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
 
<style lang = "less" scoped>
ul{
    li{
        background-color: #fff;
        margin-top: .1rem;
        .refundhead{
            padding: 0 2%;
            height:  .5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ccc;
        }
        .refundContent{
            padding: 4%;
            position: relative;
          .van-card{
              background-color: #fff;
              border-bottom: 1px solid #ccc;
              .van-card__title{
                  font-size: .16rem;
              }
              .van-card__desc{
                  line-height: .3rem;
              }
              .van-card__price{
                  color: #f0415f;
              }
          }
           .num{
               position: absolute;
               right: .2rem;
               top: .3rem;
           } 
           p{
               text-align: right;
               line-height: .5rem;
               border-bottom: 1px solid #ccc;
               .price{
                   color: #f0415f;
               }
           }
           .pay{
               text-align: right;
               .cancel{
                   .van-button__text{
                       color: #333;
                   }
               }
               .van-button{
                   margin-left: .1rem;
                   margin-top: .1rem;
                   border-radius: .04rem;
                   height: .35rem;
                   width: 1rem;
               }
           }
        }
    }
}
</style>