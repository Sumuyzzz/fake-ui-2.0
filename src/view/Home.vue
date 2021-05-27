<template>
	<div class="topnavAndBanner">
		<Topnav />
		<div class="banner">
			<h1>fakeUI</h1>
			<h4>用于学习框架的UI组件库</h4>
			<p class="actions">
				<a href="https://github.com/Sumuyzzz/fake-ui-2.0">GitHub</a>
				<router-link to="/doc">起步</router-link>
			</p>
		</div>
	</div>
	<div class="features">
		<ul>
			<li>
				<svg>
					<use xlink:href="#iconVue"></use>
				</svg>
				<h3>vue3</h3>
				<p>小巧，api友好</p>
			</li>
			<li>
				<svg>
					<use xlink:href="#iconTS"></use>
				</svg>
				<h3>TypeScript</h3>
				<p>源码采用TypeScript</p>
			</li>
			<li>
				<svg>
					<use xlink:href="#iconLightweight"></use>
				</svg>
				<h3>轻量级</h3>
				<p>所有组件占空间小,且代码简洁</p>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import Topnav from "../components/Topnav.vue";

	export default defineComponent({
		components: { Topnav },
	});
</script>

<style lang="scss" scoped>
	.topnavAndBanner {
		background: #404d6d;
	}

	.banner {
		$home_color: #e5e7ec;
		color: $home_color;
		padding: 100px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		> .actions {
			padding: 8px 0;

			a {
				margin: 0 8px;
				color: #404d6d;
				background: #fde57d;
				display: inline-block;
				$h: 28px;
				height: $h;
				line-height: $h;
				border-radius: $h/5;
				text-align: center;
				border: 2px solid #d8bf56;
				padding: 0 8px;

				&:hover {
					text-decoration: none;
				}
			}
		}
	}

	.features {
		@media screen and (min-width: 500px) {
			margin: auto;
			width: 450px;
		}

		@media screen and (min-width: 800px) {
			width: 800px;
		}

		@media screen and (min-width: 1200px) {
			width: 1200px;
		}

		> ul {
			display: flex;
			flex-wrap: wrap;

			> li {
				width: 400px;
				margin: 16px 0;
				display: grid;
				justify-content: start;
				align-content: space-between;
				grid-template-areas:
					"icon title"
					"icon text";
				grid-template-columns: 80px auto;
				grid-template-rows: 1fr auto;

				> svg {
					grid-area: icon;
					width: 64px;
					height: 64px;
				}

				> h3 {
					grid-area: title;
					font-size: 28px;
				}

				> p {
					grid-area: text;
				}
			}
		}
	}
</style>
