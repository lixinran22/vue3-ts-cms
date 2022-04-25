<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title">vue3+ts</span>
    </div>
    <div>
      <el-menu
        :default-active="activeId"
        class="el-menu-vertical"
        text-color="#fff"
        active-text-color="#ffd04b"
        background-color="#545c64"
        :collapse="isCollapse"
        unique-opened
      >
        <template v-for="item in userMenus" :key="item.id">
          <template v-if="item.type === 1">
            <el-sub-menu :index="item.id + ''">
              <template #title>
                <el-icon class="is-burger">
                  <Burger />
                </el-icon>
                <span>{{ item.name }}</span>
              </template>
              <template v-for="submit in item.children" :key="submit.id">
                <router-link :to="submit.url">
                  <el-menu-item :index="submit.id + ''">
                    {{ submit.name }}
                  </el-menu-item>
                </router-link>
              </template>
            </el-sub-menu>
          </template>
          <template v-else-if="item.type === 2">
            <router-link :to="item.url">
              <el-menu-item :index="item.id + ''">
                {{ item.name }}
              </el-menu-item>
            </router-link>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { Burger } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/mapMenu'

export default defineComponent({
  name: 'NavMenu',
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  components: { Burger },
  setup() {
    const route = useRoute()
    const store = useStore()
    const currentPath = route.path
    let userMenus = computed(() => {
      return store.state.login.userMenus
    })
    console.log(JSON.parse(JSON.stringify(userMenus.value)))

    const menu = pathMapToMenu(JSON.parse(JSON.stringify(userMenus.value)), currentPath)
    console.log(menu)

    let activeId = ref(menu.id + '')
    return {
      userMenus,
      activeId
    }
  }
})
</script>
<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
    /deep/.el-sub-menu__title {
      color: white;
    }
  }

  // 目录
  // .el-submenu {
  //   background-color: #001529 !important;
  // 二级菜单 ( 默认背景 )
  //   .el-menu-item {
  //     padding-left: 50px !important;
  //     background-color: #0c2135 !important;
  //   }
  // }

  // ::v-deep .el-submenu__title {
  //   background-color: #001529 !important;
  // }

  // hover 高亮
  // .el-menu-item:hover {
  //   color: #fff !important; // 菜单
  // }

  // .el-menu-item.is-active {
  //   color: #fff !important;
  //   background-color: #0a60bd !important;
  // }
}

// .el-menu-vertical:not(.el-menu--collapse) {
//   background-color: #001529;
//   width: 100%;
//   height: calc(100% - 48px);
// }
</style>
