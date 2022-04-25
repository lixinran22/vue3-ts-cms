export const rules = {
  name: [
    { required: true, message: '账号必填', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,10}$/, message: '账号需要5-10位字母或数字', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码必传', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,6}$/, message: '密码需要3-6位字母或数字', trigger: 'blur' }
  ]
}
