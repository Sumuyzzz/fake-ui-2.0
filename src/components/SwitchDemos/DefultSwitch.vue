<template>
	<Switch v-model:value="bool" />
</template>

<script>
	import { ref } from "vue";
	import Switch from "../../lib/Switch.vue";
	export default {
		components: {
			Switch,
		},
		setup() {
			const bool = ref(true);
			return { bool };
		},
	};
</script>

<style lang="scss" scope>
</style>
