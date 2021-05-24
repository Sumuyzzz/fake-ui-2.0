<template>
  <div class="layout">
    <Topnav :toggleMenuButtonVisible="true" class="nav"/>
    <div class="content">
      <aside v-show="menuVisible">
        <div class="aside">
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/start">开始</router-link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
          </ol>
        </div>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from "vue";
import Topnav from "../components/Topnav.vue";

export default {
  components: {Topnav},
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    if (menuVisible !== undefined) return {menuVisible};
  },
};
</script>

<style lang="scss" scoped>
$border-color: #fff;
.router-link-active {
  color: #e5e7ec;
}

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 16px;
    background: rgb(255, 255, 255);
  }
}

.aside {
  background: #3c4a6e;
  color: #747e98;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 70px 16px 16px;
  height: 100%;
  z-index: 1;


  > h2 {
    margin-bottom: 4px;
  }

  > ol {
    > li {
      padding: 4px 0;

      & a {
        text-decoration: none;
      }


      &:hover {
        color: #e5e7ec;
      }

    }
  }

}


main {
  overflow: auto;
}
</style>