<template>
  <div>
    <myheader></myheader>
    <mycontent></mycontent>
    <app-footer></app-footer>
  </div>
</template>
<script>
// this register the component locally that mean only this file can use the myhtmltag component
import myheader from './components/header-component.vue'
import myfooter from './components/footer-component.vue'
import mycontent from './components/content-component.vue'
export default {
  data(){
  },
  components:{
    myheader,
    'app-footer' : myfooter,
    mycontent
  }
}
</script>

<style>

</style>
