import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n=new VueI18n({
  locale: localStorage.getItem('locale') || 'zh',
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {//引入语言包
    'zh': require('./lang/fa'),   // 中文语言包
    'en': require('./lang/en'),    // 英文语言包
    'vn': require('./lang/vn'),    // 日文语言包
  }
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  i18n,//挂载vue上
}).$mount('#app')
