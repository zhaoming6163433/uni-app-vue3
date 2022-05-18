<template>
  <div class="content">
    <image class="logo" src="@/static/logo.png" @click="gohome"/>
    <div class="text-area">
      <text class="title">{{ title }}</text>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  components: {
  },
  setup (props, context) {
	const title = ref('Hello')
	const gohome = () => {
		uni.navigateTo({
			url: '../home/index'
		});	
	}
    return {
		title,
		gohome
    }
  }
}
</script>
<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
