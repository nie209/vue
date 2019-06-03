export default {
  computed:{
    filterBlogs: function(){
      return this.listOfBlogs.filter((blog)=>{
        return blog.title.match(this.search);
      });
    }
  }
}
