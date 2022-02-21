<template>
	<div class="demo">
		<h2>{{ component.__sourceCodeTitle }}</h2>
		<div class="demo-component">
			<component :is="component" />
		</div>
		<div class="demo-actions">
			<component :is="Button" @click="showCode" v-if="!codeVisible"
				>展示代码</component
			>
			<component :is="Button" @click="closeCode" v-else>关闭代码</component>
		</div>
		<div class="demo-code" v-show="codeVisible">
			<pre class="language-html" v-html="Code" />
		</div>
	</div>
</template>

<script lang="ts">
	import "prismjs";
	import Button from "../lib/Button.vue";
	import { ref, computed } from "vue";
	const Prism = (window as any).Prism;
	export default {
		props: {
			component: Object,
		},
		setup(props) {
			const Code = computed((): any => {
				return Prism.highlight(
					props.component.__sourceCode,
					Prism.languages.html,
					"html"
				);
			});
			const codeVisible = ref(false);
			const showCode = (): boolean => (codeVisible.value = true);
			const closeCode = (): boolean => (codeVisible.value = false);
			return {
				Prism,
				Button,
				Code,
				showCode,
				codeVisible,
				closeCode,
			};
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