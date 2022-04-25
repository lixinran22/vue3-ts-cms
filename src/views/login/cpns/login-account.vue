<template>
  <el-form :model="account" :rules="rules" label-width="60px" ref="formRef">
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="account.password" show-password />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  components: {},
  setup() {
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const store = useStore()
    const accountLogin = (isKeepLink: boolean) => {
      formRef.value?.validate((valid: boolean) => {
        if (valid) {
          // 1.判断是否记住密码
          if (isKeepLink) {
            // 本地缓存
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deletCache('name')
            localCache.deletCache('password')
          }
          store.dispatch('login/accountLoginAction', account)
          // 2.登录接口
        }
      })
    }
    return {
      account,
      rules,
      formRef,
      accountLogin
    }
  }
})
</script>

<style scoped lang="less"></style>
