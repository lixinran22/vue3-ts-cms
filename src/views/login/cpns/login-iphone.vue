<template>
  <el-form :model="iphone" :rules="rules" label-position="left" label-width="70px">
    <el-form-item label="手机号" prop="iphoneNum">
      <el-input v-model="iphone.iphoneNum" />
    </el-form-item>
    <el-form-item label="验证码" prop="code" class="code">
      <el-input v-model="iphone.code" />
      <el-button type="primary" class="btn">获取验证码</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/iphone'
import localCache from '@/utils/cache'

export default defineComponent({
  props: {},
  components: {},
  setup() {
    const iphone = reactive({
      iphoneNum: localCache.getCache('iphoneNum'),
      code: localCache.getCache('code')
    })
    const phoneLogin = (isKeepLink: boolean) => {
      if (isKeepLink) {
        localCache.setCache('iphoneNum', iphone.iphoneNum)
        localCache.setCache('code', iphone.code)
      } else {
        localCache.deletCache('iphoneNum')
        localCache.deletCache('code')
      }
    }
    return {
      iphone,
      rules,
      phoneLogin
    }
  }
})
</script>

<style scoped lang="less">
/deep/ .el-form-item__content {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  .btn {
    margin-left: 8px;
  }
}
</style>
