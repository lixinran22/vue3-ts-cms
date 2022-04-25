export const rules = {
  iphoneNum: [
    { required: true, message: '手机号必传', trigger: 'blur' },
    { pattern: /^[a-z0-9]{5,10}$/, message: '账号需要5-10位字母或数字', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '密码必传', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,5}$/, message: '密码需要3-5位字母或数字', trigger: 'blur' }
  ]
}
