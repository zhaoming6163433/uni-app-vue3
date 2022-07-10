<template>
  <div class="content">
		<swiper :interval="3000" :duration="500" :indicator-dots="true" :autoplay="true" :circular="true" indicatorcolor="rgba(255,255,255,0.5)" indicator-active-color="#ff372b"
		:current="topSwiperIndex" @change="topSwiperTab">
				<swiper-item v-for="(item,index) in topSwiper" :key="index">
						<view class="swiper-item">
								<image :src="item.src" mode="aspectFill"></image>
						</view>
				</swiper-item>
		</swiper>
		<van-button type="info" @click="gohome">主要按钮</van-button>
    <div class="text-area">
      <text class="title">{{ title }}</text>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { onReachBottom} from '@dcloudio/uni-app';
export default {
  components: {
  },
  setup (props, context) {
		const title = ref('Hello')
		const topSwiperIndex = ref(0)
		const topSwiper =  ref([
		{
				src: '../../static/logo.png'
		},{
				src: '../../static/logo.png'
		},{
				src: '../../static/logo.png'
		}])
		const gohome = () => {
			uni.navigateTo({
				url: '../home/index'
			});	
		}
		const topSwiperTab = (val)=>{
			console.log(val)
		}
		onReachBottom(()=>{
			console.log('到底了')
		})
    return {
			title,
			gohome,
			topSwiper,
			topSwiperIndex,
			onReachBottom,
			topSwiperTab
    }
  }
}
</script>
<style lang="scss">
.content {
	text-align: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
