<template>
  <div>Button 示例</div>
  <div class="fake-examples">
    <h1>示例1</h1>
    <div>
      <Button theme="button">默认</Button>
      <Button theme="link">链接</Button>
      <Button theme="text">文本</Button>
    </div>
  </div>
  <div class="fake-examples">
    <h1>示例2</h1>
    <div>
      <Button size="big">大按钮</Button>
      <Button>普通按钮</Button>
      <Button size="small">小按钮</Button>
    </div>
    <div>
      <Button size="big" theme="link">大链接</Button>
      <Button theme="link">普通链接</Button>
      <Button size="small" theme="link">小链接</Button>
    </div>
    <div>
      <Button size="big" theme="text">大文本</Button>
      <Button theme="text">普通文本</Button>
      <Button size="small" theme="text">小文本</Button>
    </div>
  </div>
  <div class="fake-examples">
    <h1>示例3</h1>
    <div>
      <div>
        <Button level="main">主要按钮</Button>
        <Button>普通按钮</Button>
        <Button level="danger">危险按钮</Button>
      </div>
      <div>
        <Button level="main" theme="link">主要链接按钮</Button>
        <Button theme="link">普通链接按钮</Button>
        <Button level="danger" theme="link">危险链接按钮</Button>
      </div>
      <div>
        <Button level="main" theme="text">主要文本按钮</Button>
        <Button theme="text">普通文本按钮</Button>
        <Button level="danger" theme="text">危险文本按钮</Button>
      </div>
    </div>
  </div>
  <div class="fake-examples">
    <h1>示例4</h1>
    <div>
      <Button disabled>禁用按钮</Button>
      <Button disabled theme="link">禁用链接按钮</Button>
      <Button disabled theme="text">禁用按钮</Button>
    </div>
  </div>
  <div class="fake-examples">
    <h1>示例5</h1>
    <div>
      <Button disabled loading>加载中...</Button>
      <Button loading></Button>
    </div>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  components: {Button},
  setup() {
  }
};
</script>

<style lang="scss">
$border-color: #red;
.fake-examples {
  border: 1px solid $border-color;

}
</style>