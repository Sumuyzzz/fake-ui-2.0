<template>
	<div class="demo">
		<h2>默认开关</h2>
		<div class="demo-component">
			<Switch v-model:value="bool" />
		</div>
		<div class="demo-actions">
			<Button> 查看代码 </Button>
		</div>
		<div class="demo-code">
			<pre>
 
                &lt;Switch v-model:value="bool" /&gt;
            </pre
			>
		</div>
	</div>
</template>

<script>
	import { ref } from "vue";
	import Button from "../../lib/Button.vue";
	import Switch from "../../lib/Switch.vue";
	export default {
		components: {
			Button,
			Switch,
		},
		setup() {
			const bool = ref(true);
			return { bool };
		},
	};
</script>

<style lang="scss" scope>
	$border-color: #d9d9d9;
	.demo {
		border: 1px solid $border-color;
		margin: 16px 0 32px;
		> h2 {
			font-size: 20px;
			padding: 8px 16px;
			border-bottom: 1px solid $border-color;
		}
		&-component {
			padding: 16px;
		}
		&-actions {
			padding: 8px 16px;
			border-top: 1px dashed $border-color;
		}
		&-code {
			padding: 8px 16px;
			border-top: 1px dashed $border-color;
			> pre {
				line-height: 1.1;
				font-family: Consolas, "Courier New", Courier, monospace;
				margin: 0;
			}
		}
	}
</style>
