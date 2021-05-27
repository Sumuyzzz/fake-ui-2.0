<template>
	<div>
		<h1>示例</h1>
		<SwitchDemo1 />
		<DisableSwitch />
	</div>
</template>

<script>
	import DisableSwitch from "./DisableSwitch.vue";
	import SwitchDemo1 from "./SwichDemo1.vue";

	export default {
		components: { DisableSwitch, SwitchDemo1 },
	};
</script>

<style lang="scss" scoped>
</style>