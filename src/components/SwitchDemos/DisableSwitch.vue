<template>
	<div class="demo">
		<h2>支持 disabled</h2>
		<div class="demo-component">
			<Switch v-model:value="bool" disabled />
		</div>
		<div class="demo-actions">
			<Button>查看代码</Button>
		</div>
		<div class="demo-code">
			<pre>
            &lt;Switch v-model:value="bool" disabled /&gt;
            </pre
			>
		</div>
	</div>
</template>

<script>
	import { ref } from "vue";
	import Switch from "../../lib/Switch.vue";
	import Button from "../../lib/Button.vue";
	export default {
		components: {
			Switch,
			Button,
		},
		setup() {
			const bool = ref(false);

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