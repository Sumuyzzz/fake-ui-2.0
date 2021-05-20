<template>
  <div :size="size">
  <button v-bind="reset">
    <slot />
  </button>
  </div>
</template>

<script>
export default {
 inheritAttrs:false,
  props:{

  },
  setup( props ,context){
   const {size ,reset}=context=context.attrs;
   return {size,reset}
  }
}
</script>

<style scoped>

</style>