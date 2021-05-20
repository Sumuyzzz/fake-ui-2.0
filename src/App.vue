<template>
	<router-view />
</template>

<script>
	import { ref, provide } from "vue";

	export default {
		setup() {
			const viewWidth = document.documentElement.clientWidth;
			const menuVisible = ref(viewWidth <= 500 ? false : true);
			provide("menuVisible", menuVisible);
			console.log(viewWidth);
		},
	};
</script>
