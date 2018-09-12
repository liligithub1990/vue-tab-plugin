import TabComponent from './tab.vue'
import { setProps } from './util.js'

const Tab = {
  install: function(Vue,options){
    const VueTab = Vue.extend(TabComponent)
    Vue.component('Tab',TabComponent)

    // console.info(options);
    function $tabInit(options) {
      setProps(Vue, options);
    }
    Vue.prototype.$tabInit = $tabInit
  }
}

export default Tab
