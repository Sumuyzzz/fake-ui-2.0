<template>
	<MarkDown path="./markdown/start.md" />

	<Button>这是默认按钮</Button>
</template>

<script>
	import Button from "../lib/Button.vue";

	export default {
		name: "Start",
		components: {
			Button,
		},
	};
</script>

<style scoped>
</style>