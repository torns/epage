<template lang="pug">
Tabs(:value='tab' size='small')
  Button(slot="extra" size="small" type="text")
    a(:href='docURL' target='_blank')
      Icon(type="help")
      span &nbsp;帮助

  TabPane(label='属性' name='widget')
    epage-panel.ep-setting-prop
      template(v-if='isSelected && settingWidget')
        component(:is='settingWidget' :store='store' :setting='setting')

  TabPane(label='表单' name='form' )
    epage-panel.ep-setting-form
      form-setting(:store='store')

</template>
<script>
import FormSetting from './form'
import EpagePanel from '../../components/panel'

export default {
  components: {
    FormSetting,
    EpagePanel
  },
  props: {
    setting: {
      type: Object,
      default: () => ({})
    },
    store: {
      type: Object,
      default: () => ({
        types: {},
        state: {}
      })
    }
  },
  data () {
    return {
      tab: 'widget',
      docURL: '//epage.didichuxing.com'
    }
  },
  computed: {
    // 是否有选中的组件
    isSelected () {
      return this.store.isSelected()
    },
    settingWidget () {
      return this.store.getSettingWidget()
    }
  }
}
</script>
