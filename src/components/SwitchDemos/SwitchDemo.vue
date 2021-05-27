<template>
	<div>
		<h1>示例</h1>
		<div class="demo">
			<h2>默认开关</h2>
			<div class="demo-component">
				<component :is="DefultSwitch"></component>
			</div>
			<div class="demo-actions">
				<Button> 查看代码 </Button>
			</div>
			<div class="demo-code">
				<pre
					class="language-html"
					v-html="
						Prism.highlight(
							DefultSwitch.__sourceCode,
							Prism.languages.html,
							'html'
						)
					"
				></pre>
			</div>
		</div>
		<div class="demo">
			<h2>支持 disabled</h2>
			<div class="demo-component">
				<DisableSwitch />
			</div>
			<div class="demo-actions">
				<Button>查看代码</Button>
			</div>
			<div class="demo-code">
				<pre
					class="language-html"
					v-html="
						Prism.highlight(
							DisableSwitch.__sourceCode,
							Prism.languages.html,
							'html'
						)
					"
				></pre>
			</div>
		</div>
	</div>
</template>

<script>
	import DisableSwitch from "./DisableSwitch.vue";
	import DefultSwitch from "./DefultSwitch.vue";
	import Button from "../../lib/Button.vue";
	import "Prismjs";
	import "prismjs/themes/prism.css";

	console.log(window.Prism);
	export default {
		components: { DisableSwitch, Button },
		setup() {
			return { DefultSwitch, DisableSwitch, Prism };
		},
	};
</script>

<style lang="scss" scoped>
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