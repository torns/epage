import Schema from '../../../../modules/schema'
import { getRuleValidator } from '../../../helper'

export default class CascaderSchema extends Schema {
  constructor (props) {
    super()
    this.type = 'array<string>'
    this.title = '级联选择'
    this.placeholder = '请选择'
    this.rules = [{ required: false, message: '必填', type: 'array', trigger: 'change' }]
    this.option = {
      type: 'static',
      url: '',
      adapter: 'return data',
      dynamicData: [],
      delimiter: '/', // 展示时的分隔符
      clearable: true,
      notFoundText: '无匹配数据',
      filterable: false,
      data: [
        {
          value: 'option A',
          key: 'A',
          children: [{
            value: 'option B',
            key: 'B'
          }]
        }
      ]
    }
    this.$init(props)
    const rule = {
      trigger: 'change',
      validator: getRuleValidator(this.rules[0], this.type)
    }
    this.updateRequiredRule(rule)
  }
}

// 静态配置，同类widget公有
Object.assign(CascaderSchema, {
  title: '级联选择',
  widget: 'cascader',
  icon: 'ios-more-outline',
  type: ['array<string>', 'array<number>'],
  validators: [],
  logic: {
    value: ['<>', '><'],
    // event: ['focus', 'blur', 'change']
    event: []
  }
})
