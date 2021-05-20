<template>
	<router-view />
</template>

<script>
	import { ref, provide } from "vue";
	import { router } from "./router";

	export default {
		setup() {
			const viewWidth = document.documentElement.clientWidth;
			const menuVisible = ref(viewWidth <= 500 ? false : true);
			provide("menuVisible", menuVisible);
			console.log(viewWidth);
			router.afterEach(() => {
				if (viewWidth <= 500) {
					menuVisible.value = false;
				}
			});
		},
	};
</script>
