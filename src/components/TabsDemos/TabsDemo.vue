<template>
	<div>Tabs 示例</div>
	<h1>示例1</h1>
	<Tabs v-model:selected="selected">
		<Tab title="导航1" class="">内容1</Tab>
		<Tab title="很长的导航2" class="">内容2</Tab>
		<Tab title="导航3" class="">内容3</Tab>
	</Tabs>
</template>

<script lang="ts">
	import Tabs from "../../lib/Tabs.vue";
	import Tab from "../../lib/Tab.vue";
	import { ref } from "vue";

	export default {
		components: {
			Tabs,
			Tab,
		},
		props: ["title"],

		setup() {
			const selected = ref("导航1");
			return {
				selected: selected,
			};
		},
	};
</script>
