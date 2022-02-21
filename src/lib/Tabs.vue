<template>
<<<<<<< HEAD
	<div class="fake-tabs">
		<div ref="nav" class="fake-tabs-nav">
			<div
				v-for="(title, index) in titles"
				:key="index"
				:ref="
					(el) => {
						if (el) navItems[index] = el;
					}
				"
				:class="{ selected: title === selected }"
				class="fake-tabs-nav-item"
				@click="select(title)"
			>
				{{ title }}
			</div>
			<div ref="indicator" class="fake-tabs-nav-indicator"></div>
		</div>
		<div class="fake-tabs-content">
			<component
				:is="current"
				:key="current.props.title"
				class="fake-tabs-content-item"
			/>
		</div>
	</div>
</template>

<script lang="ts">
	import Tab from "./Tab.vue";
	import { computed, onMounted, onUpdated, ref } from "vue";

	export default {
		props: {
			selected: {
				type: String,
			},
		},
		setup(props, context) {
			const defaults = context.slots.default();
			defaults.forEach((tag) => {
				if (tag.type !== Tab) {
					throw new Error("Tabs 子标签必须是 Tab");
				}
			});
			const current = computed(() => {
				return defaults.filter((tag) => {
					return tag.props.title === props.selected;
				})[0];
			});
			const titles = defaults.map((tag) => {
				return tag.props.title;
			});
			const select = (title: string) => {
				context.emit("update:selected", title);
			};
			const navItems = ref<HTMLDivElement[]>([]);
			const indicator = ref<HTMLDivElement>(null);
			const nav = ref<HTMLDivElement>(null);
			const x = () => {
				const divs = navItems.value;
				const result = divs.find((div) => div.classList.contains("selected"));
				const { width } = result.getBoundingClientRect();
				indicator.value.style.width = width + "px";
				const { left: left1 } = nav.value.getBoundingClientRect();
				const { left: left2 } = result.getBoundingClientRect();
				const left = left2 - left1;
				indicator.value.style.left = left + "px";
			};
			onMounted(x);
			onUpdated(x);

			return {
				defaults,
				titles,
				current,
				select,
				navItems,
				indicator,
				nav,
			};
		},
	};
=======
  <div class="fake-tabs">
    <div ref="container" class="fake-tabs-nav">
      <div v-for="(title,index) in titles" :key="index" :ref="el=>{if(title===selected)
        selectedItem=el}"
           :class="{selected: title=== selected}" class="fake-tabs-nav-item"
           @click="select(title)">{{ title }}
      </div>
      <div ref="indicator" class="fake-tabs-nav-indicator"></div>
    </div>
    <div class="fake-tabs-content">
      <component :is="current" :key="selected" class="fake-tabs-content-item"/>
    </div>

  </div>
</template>

<script lang="ts">

import Tab from './Tab.vue'
import {computed, onMounted, onUpdated, ref} from 'vue'

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected
      })[0]
    })
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    const select = (title: string) => {
      context.emit('update:selected', title)
    }

    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    const x = () => {


      const {
        width
      } = selectedItem.value.getBoundingClientRect()
      indicator.value.style.width = width + 'px'
      const {
        left: left1
      } = container.value.getBoundingClientRect()
      const {
        left: left2
      } = selectedItem.value.getBoundingClientRect()
      const left = left2 - left1
      indicator.value.style.left = left + 'px'
    }
    onMounted(x)
    onUpdated(x)

    return {
      defaults,
      titles,
      current,
      select,
      selectedItem,
      indicator,
      container,
    }
  }
}
>>>>>>> e44f1328223e0ecef7deef4d0db8378e7d9c2f44
</script>
<style lang="scss">
	$blue: #40a9ff;
	$color: #333;
	$border-color: #d9d9d9;
	.fake-tabs {
		&-nav {
			display: flex;
			color: $color;
			border-bottom: 1px solid $border-color;
			position: relative;

			&-item {
				padding: 8px 0;
				margin: 0 16px;
				cursor: pointer;

				&:first-child {
					margin-left: 0;
				}

				&.selected {
					color: $blue;
				}
			}

			&-indicator {
				position: absolute;
				height: 3px;
				background: $blue;
				left: 0;
				bottom: -1px;
				width: 100px;
				transition: all 250ms;
			}
		}

		&-content {
			padding: 8px 0;

			&-item {
				display: none;

				&.selected {
					display: block;
				}
			}
		}
	}
</style>