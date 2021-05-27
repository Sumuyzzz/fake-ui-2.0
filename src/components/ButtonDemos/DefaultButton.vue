<demo>Theme</demo>
<template>
	<div>
		<Button theme="button">Default</Button>
		<Button theme="link">Link</Button>
		<Button theme="text">Text</Button>
	</div>
</template>

<script lang="ts">
	import Button from "../../lib/Button.vue";
	export default {
		components: {
			Button,
		},
	};
</script>

