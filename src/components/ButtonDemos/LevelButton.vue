<demo>Level</demo>
<template>
	<div>
		<Button level="main">Info</Button>
		<Button>Plain</Button>
		<Button level="danger">Danger</Button>
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

