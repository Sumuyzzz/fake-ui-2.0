<template>
  <div v-for="title in titles" :key="title">{{ title }}</div>
  <component :is="content" v-for="(content,index) in defaults" :key="index"/>
</template>

<script lang="ts">
import Tab from "./Tab.vue";

export default {
  components: {
    Tab
  },
  setup(props, context) {
    const defaults = context["slots"].default()
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw  new Error('Tabs 子标签必须是Tab')
      }
    })
    const titles = defaults.map((tag) => {
      return tag["props"].title
    })
    return {defaults, titles}
  },
};
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