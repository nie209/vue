import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import route from './route'
Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter);
const router = new VueRouter({
  routes: route,
  mode: "history",
});

// custom directive
// this directive has been register locally

// Vue.directive("rainbow", {
//   bind(el, binding, vnode){
//     el.style.color = "#" + Math.random().toString().slice(2,8);
//
//   }
// });
// custom directive v-name = "somevalue" somevalue could be an object string etc...
Vue.directive("theme", {
  bind(el, binding, vnode){
    if (binding.value == "wide"){
      // you have to use this syntax maxWidth instead of max-width in the css
      el.style.maxWidth = "1400px"
      console.log("i am being called");
    }
    else if(binding.value == "small"){
      el.style.maxWidth ="800px";
    }
  }
});
// value refter to "blog.title" in {{blog.title | to-uppercase }} case


// we removed is because it had been register locally
// Vue.filter('to-uppercase', function(value){
//   return value.toUpperCase();
// });
Vue.filter('max-display-width', function(data){
  return data.slice(0,20) + "...";
});
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
