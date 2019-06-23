<template>
  <!-- <add-blog></add-blog> -->
  <div>
    <!-- <view-blogs></view-blogs>
    <h1>This is a different page we have not learn router yet</h1>
    <list-blogs></list-blogs> -->
    <vue-header></vue-header>
    <router-view></router-view>
  </div>

</template>
<script>
// this register the component locally that mean only this file can use the myhtmltag component
import addBlog from './components/add-blog.vue';
import viewBlogs from './components/view-blogs.vue';
import listBlogs from './components/list-blogs.vue';
import vueHeader from './components/vue-header.vue';
export default {
  data(){
    return{

    }
  },
  components:{
    "add-blog": addBlog,
    "view-blogs": viewBlogs,
    "list-blogs": listBlogs,
    'vue-header': vueHeader,
  },
}
</script>

<style>

</style>
