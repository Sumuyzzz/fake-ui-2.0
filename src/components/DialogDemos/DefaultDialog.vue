<demo>
常规使用
</demo>
<template>
	<div>
		<Button @click="toggle">open</Button>
		<Dialog
			v-model:visible="boolean"
			:closeOnClickOverlay="false"
			:ok="f1"
			:cancel="f2"
		>
			<template v-slot:content>
				<div>content</div>
			</template>
			<template v-slot:title>
				<strong>title</strong>
			</template>
		</Dialog>
	</div>
</template>

<script lang="ts">
	import Dialog from "../../lib/Dialog.vue";
	import Button from "../../lib/Button.vue";
	import { ref } from "vue";
	export default {
		components: {
			Dialog,
			Button,
		},
		setup() {
			const boolean = ref(false);
			const toggle = () => {
				boolean.value = !boolean.value;
			};
			const f1 = () => {
				return false;
			};
			const f2 = () => {};
			return {
				boolean,
				toggle,
				f1,
				f2,
			};
		},
	};
</script>