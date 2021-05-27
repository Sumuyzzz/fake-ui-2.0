<template>
	<div>Dialog 示例</div>
	<h1>示例1</h1>
	<div>
		<Button @click="toggle">Toggle</Button>
		<Dialog v-model:visible="x" :ok="f1" :cancel="f2">
			<template v-slot:content>
				<span>这是dialog内容</span>
			</template>
			<template v-slot:title>
				<strong>标题</strong>
			</template>
		</Dialog>
	</div>
	<h1>示例2</h1>
	<Button @click="showDialog">show</Button>
</template>

<script lang="ts">
	import Dialog from "../../lib/Dialog.vue";
	import Button from "../../lib/Button.vue";
	import { ref, h } from "vue";
	import { openDialog } from "../../lib/openDialog";
	export default {
		components: {
			Dialog,
			Button,
		},
		setup() {
			const x = ref(false);
			const toggle = () => {
				x.value = !x.value;
				console.log(x.value);
			};
			const f1 = () => {
				return false;
			};
			const f2 = () => {};
			const showDialog = () => {
				openDialog({
					title: h("strong", {}, "标题"),
					content: "你好",
					ok() {
						console.log("ok");
					},
					cancel() {
						console.log("cancel");
					},
				});
			};
			return {
				x,
				toggle,
				f1,
				f2,
				showDialog,
			};
		},
	};
</script>

<style>
</style>