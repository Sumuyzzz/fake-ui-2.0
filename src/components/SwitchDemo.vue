<template>
	<Switch v-model:value="boolean" />
	{{ value }}
</template>

<script>
	import Switch from "../lib/Switch.vue";
	import { ref } from "vue";
	export default {
		components: { Switch },
		setup() {
			const boolean = ref(false);

			return { boolean };
		},
	};
</script>

<style>
</style>