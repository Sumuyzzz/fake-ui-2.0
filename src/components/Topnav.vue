<template>
	<div class="topnav">
		<div class="logo">
			<a href="#">
				<svg>
					<use xlink:href="#iconhome"></use>
				</svg>
			</a>
		</div>
		<span class="toggleAside" @click="toggleMenu">
			<svg>
				<use xlink:href="#iconsetting"></use>
			</svg>
		</span>
		<ul class="menu">
			<li>
				<router-link to="/doc/intro">文档</router-link>
			</li>
			<li>
				<router-link to="/doc/switch">组件</router-link>
			</li>
		</ul>
	</div>
</template>
<script lang="ts">
	import { inject, Ref, ref } from "vue";
	import Tabs from "../lib/Tabs.vue";
	import Tab from "../lib/Tab.vue";
	export default {
		component: {
			Tabs,
			Tab,
		},
		setup() {
			const menuVisible = inject<Ref<Boolean>>("menuVisible");
			const toggleMenu = () => {
				menuVisible.value = !menuVisible.value;
				console.log(menuVisible.value);
			};
			const selected = ref("导航2");
			return { toggleMenu, selected };
		},
	};
</script>
<style lang="scss" scoped>
	.router-link-active {
		color: #eee;
	}
	.topnav {
		background: #9cc2ea;
		display: flex;
		padding: 16px;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		justify-content: center;
		align-items: center;

		svg {
			grid-area: icon;
			width: 24px;
			height: 24px;
		}

		> .logo {
			max-width: 6em;
			margin-right: auto;
		}

		> .menu {
			display: flex;
			white-space: nowrap;
			flex-wrap: nowrap;

			> li {
				margin: 0 1em;
				a {
					display: block;
				}
			}
		}

		> .toggleAside {
			width: 24px;
			height: 24px;

			position: absolute;
			left: 16px;
			top: 50%;
			transform: translateY(-50%);
			display: none;
		}

		@media (max-width: 500px) {
			> .menu {
				display: none;
			}
			> .logo {
				margin: 0 auto;
			}
			> .toggleAside {
				display: inline-block;
			}
		}
	}
</style>