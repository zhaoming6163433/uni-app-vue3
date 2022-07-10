<template>
	<div class="home">
		<view class="page-section-spacing">
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
