<template>
	<Demo :component="DefultSwitch" />
	<Demo :component="DisableSwitch" />
</template>

<script lang="ts">
	import DisableSwitch from "./DisableSwitch.vue";
	import DefultSwitch from "./DefaultSwitch.vue";
	import Demo from "../Demo.vue";

	export default {
		components: {
			Demo,
		},
		setup() {
			return { DefultSwitch, DisableSwitch };
		},
	};
</script>

