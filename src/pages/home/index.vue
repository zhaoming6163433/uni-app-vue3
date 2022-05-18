<template>
	<div class="home">
		<view class="page-section-spacing">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>
		<ul>
			<li v-for="(item,index) in myList" :key="index">{{item}}</li>
		</ul>
	</div>
</template>
<script lang="ts">
	import {
		getCurrentInstance,
		ref,
		reactive
	} from 'vue'
	import {
		keyOrAny
	} from '@/interface/homeData'
	export default {
		components: {},
		setup() {
			const {
				appContext: {
					config: {
						globalProperties: {
							$api
						}
					}
				}
			} = getCurrentInstance()
			const form = reactive({
				searchValue: ''
			})
			const myList = ref < Array < keyOrAny >> ([])
			const getAllProjects = async () => {
				const res = await $api.getAllProjects()
				myList.value = res.data.data.list
			}
			const onSearch = (val) => {
				console.log(val)
			}
			getAllProjects()
			return {
				form,
				myList,
				onSearch
			}
		}
	}
</script>
<style lang="scss" scoped>
	.home {}
</style>
