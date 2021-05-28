<template>
	<Demo :component="DefaultDialog" />
	<Demo :component="ConfirmDialog" />
</template>

<script lang="ts">
	import Demo from "../Demo.vue";
	import DefaultDialog from "./DefaultDialog.vue";
	import ConfirmDialog from "./ConfirmDialog.vue";
	export default {
		components: {
			Demo,
		},
		setup() {
			return {
				DefaultDialog,
				ConfirmDialog,
			};
		},
	};
</script>