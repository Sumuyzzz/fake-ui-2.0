<template>
	<h1>按钮展示</h1>
	<Demo :component="DefaultButton" />
	<Demo :component="SizeButton" />
	<Demo :component="LevelButton" />
	<Demo :component="DisableButton" />
	<Demo :component="LoadingButton" />
</template>
<script lang="ts">
	import DefaultButton from "./DefaultButton.vue";
	import SizeButton from "./SizeButton.vue";
	import LevelButton from "./LevelButton.vue";
	import DisableButton from "./DisableButton.vue";
	import LoadingButton from "./LoadingButton.vue";
	import Demo from "../Demo.vue";
	export default {
		components: {
			Demo,
		},

		setup() {
			return {
				DefaultButton,
				SizeButton,
				LevelButton,
				DisableButton,
				LoadingButton,
			};
		},
	};
</script>

<style lang="scss">
</style>