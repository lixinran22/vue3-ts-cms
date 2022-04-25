import { IForm } from '@/base-ui/form'
export const formItems: IForm = {
  formItems: [
    { field: 'name', label: '用户名', type: 'input', rules: [], placeholder: '请输入用户名' },
    { field: 'iphone', label: '电话号码', type: 'input', rules: [], placeholder: '请输入电话号码' },
    {
      field: 'status',
      label: '用户状态',
      type: 'select',
      options: [
        { label: '1', value: '1' },
        { label: '2', value: '2' }
      ],
      rules: [],
      placeholder: '选择用户状态'
    },
    {
      field: 'createTime',
      label: '创建时间',
      type: 'datepicker',
      rules: [],
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  colLayout: {
    span: 8
  }
}
