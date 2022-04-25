<template>
  <div class="login">
    <div class="login-content">
      <h3 class="title">后台管理系统</h3>
      <el-tabs type="border-card" class="demo-tabs" v-model="activeName">
        <el-tab-pane name="account">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon>
                <Avatar />
              </el-icon>
              <span>账号登录</span>
            </span>
          </template>
          <login-account ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane name="iphone">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Calendar /></el-icon>
              <span>手机登录</span>
            </span>
          </template>
          <login-iphone ref="phoneRef" />
        </el-tab-pane>
      </el-tabs>
      <div class="control">
        <el-checkbox v-model="isKeepLink">记住密码</el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>
      <el-button type="primary" class="submit" @click="loginClick">立即登录</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './cpns/login-account.vue'
import { Calendar, Avatar } from '@element-plus/icons-vue'
import LoginIphone from './cpns/login-iphone.vue'

export default defineComponent({
  name: 'loginPage',
  components: { Calendar, Avatar, LoginAccount, LoginIphone },
  setup() {
    let isKeepLink = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginIphone>>()
    let activeName = ref('account')
    const loginClick = () => {
      if (activeName.value === 'account') {
        accountRef.value?.accountLogin(isKeepLink.value)
      } else {
        phoneRef.value?.phoneLogin(isKeepLink.value)
      }
    }
    return {
      isKeepLink,
      accountRef,
      phoneRef,
      loginClick,
      activeName
    }
  }
})
</script>

<style scoped lang="less">
.login {
  width: 100%;
  background-image: url('../../assets/img/login-bg.svg');
  .login-content {
    margin-top: 150px;
    display: flex;
    width: 300px;
    margin: 0px auto;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    .title {
      text-align: center;
      margin-top: 150px;
    }
    /deep/ .el-tabs__nav {
      display: flex;
    }
  }
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
.control {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.submit {
  margin-top: 10px;
  width: 100%;
}
</style>
