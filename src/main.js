import Vue from 'vue'
import App from './App.vue'
<% if(useVueRouter){%>import router from './router'<% } %>
<% if(useVuex){%>import store from './store'<% } %>
<% if(UIfrag==='eleUI'){%>import ElementUI from 'element-ui'<% } %>


<% if(UIfrag==='eleUI'){%>
Vue.use(ElementUI)
<% } %>
Vue.config.productionTip = false

new Vue({<% if(useVuex){%>
  store,<% } %><% if(useVueRouter){%>
  router,<% } %>
  render: h => h(App),
}).$mount('#app')
