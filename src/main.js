import Vue from 'vue'
import App from './App.vue'
import appHeader from './components/section/appHeader.vue';


Vue.component('appHeader',appHeader);
new Vue({
  render: h => h(App),
}).$mount('#app')
