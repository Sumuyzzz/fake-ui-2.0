<template>
	<router-view />
</template>

<script>
import {provide, ref} from "vue";
import {router} from "./router";

export default {
  setup() {
    const viewWidth = document.documentElement.clientWidth;
    const menuVisible = ref(viewWidth > 500);
    provide("menuVisible", menuVisible);
    router.afterEach(() => {
      if (viewWidth <= 500) {
        menuVisible.value = false;
      }
    });
		},
	};
</script>
