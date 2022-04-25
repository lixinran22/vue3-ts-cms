<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick">
      <Fold v-if="isFold" />
      <Expand v-else />
    </el-icon>
    <div class="content">
      <HyBreadcrumb></HyBreadcrumb>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import HyBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'

export default defineComponent({
  name: 'NavHeader',
  props: {},
  components: { Expand, Fold, HyBreadcrumb },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    const breadcrumbs: IBreadcrumb[] = [{ name: 'ceshi', path: '/' }]
    return {
      handleFoldClick,
      isFold,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  display: flex;
}
</style>
