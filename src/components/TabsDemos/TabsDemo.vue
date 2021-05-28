<template>
	<Demo :component="DefaultTabs" />
</template>

<script lang="ts">
	import DefaultTabs from "./DefaultTabs.vue";
	import Demo from "../Demo.vue";

	export default {
		components: {
			Demo,
		},

		setup() {
			return {
				DefaultTabs,
			};
		},
	};
</script>
