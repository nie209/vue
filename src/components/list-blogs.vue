<template lang="html">
  <div v-theme="'small'" id="listOfBlogs">
    <h2 id="page-header">List of all blogs</h2>
    <input  id="search" type="text" placeholder="search box" v-model="search"/>
    <div v-for="blog in filterBlogs" id="singleBlog">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixins'
export default {
  data(){
    return {
        listOfBlogs: [],
        search: '',
    };
  },
  created(){
    this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data){
        this.listOfBlogs = data.body.slice(0,10);

    });
  },
  // this is how you registering  vue directive locally
  // filters: {
  //   'to-uppercase' : function(data){
  //     return data.toUpperCase();
  //   }
  //}
  filters:{
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  directives:{
    'rainbow':{
      bind(el, binding, vnode){
        el.style.color = '#' + Math.random().toString(16).slice(2,8);
      }
    }
  },
  // custom search filter
  // moved to mixins js file because we want to resue the code
  // computed:{
  //   filterBlogs: function(){
  //     return this.listOfBlogs.filter((blog)=>{
  //       return blog.title.match(this.search);
  //     });
  //   }
  // }
  mixins:[
    searchMixin
  ]
}
</script>

<style lang="css" scoped>
#listOfBlogs{
  margin: 0 auto;
  max-width: 800px;
}
#singleBlog{
  padding: 20px;
  margin: 20px 0;
  border: 1px dotted;
  background-color: #eee;
}
#search{
  width: 800px;
}
</style>
