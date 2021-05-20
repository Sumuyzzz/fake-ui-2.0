<template>
	<router-view />
</template>

<script>
	import { ref, provide } from "vue";

	export default {
		setup() {
			const menuVisible = ref(true);
			provide("menuVisible", menuVisible);
		},
	};
</script>
