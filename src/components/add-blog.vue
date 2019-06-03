<template lang="html">
    <div id="add-blog">
        <h2 v-if="!isSubmitted">Add a new blog</h2>
        <form v-if="!isSubmitted">
            <label>Blog Title</label>
            <input type="text" v-model.lazy="blog.title" value="Enter blog title here">
            <label>Blog Content</label>
            <textarea name="content" rows="8" cols="80" v-model.lazy="blog.content"></textarea>
            <div class="checkbox">
                <label>Food</label>
                <input type="checkbox" v-model="blog.blog_type" value="food">
                <label>Tech</label>
                <input type="checkbox" v-model="blog.blog_type" value="tech">
                <label>Life Hack</label>
                <input type="checkbox" v-model="blog.blog_type" value="life hack">
            </div>
            <div class="authors">
              <label>Authors</label>
              <select v-model="blog.author">
                <option v-for="author in listOfAuthors">{{author}}</option>
              </select>
            </div>
            <button @click.prevent="submitForm">Submit Form</button>
        </form>
        <div v-if="isSubmitted">
          <h3>Form submitted</h3>
        </div>
        <div id="preview">
            <h3>Blog Preview</h3>
            <p>Blog title: {{blog.title}}</p>
            <p>Blog Content:</p>
            <p>{{blog.content}}</p>
            <p>Blog Type: </p>
            <ul>
              <li v-for="type in blog.blog_type">{{type}}</li>
            </ul>
            <p>Blog Author: {{blog.author}}</p>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      blog:{
        title:"",
        content:"",
        blog_type:[],
        author:"",
      },
      listOfAuthors:["Wilson", "Bob", "John"],
      isSubmitted: false,
    }
  },
  methods: {
    submitForm: function(){
      this.$http.post("https://jsonplaceholder.typicode.com/posts",{
        title: this.blog.title,
        body: this.blog.content,
        userid: 0
      }).then(function(data){
        console.log(data);
        this.isSubmitted = true;
      });
    }
  },
}
</script>

<style lang="css" scoped>
  #add-blog *{
    box-sizing: border-box;
  }
  #add-blog{
    margin: 20px auto;
    max-width: 500px;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
  }
  #preview{
    padding: 10px, 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  h3{
    margin-top: 10px;
  }
  .checkbox input{
    display: inline-block;
    margin-right: 10px
  }
  .checkbox label{
    display: inline-block;
  }

</style>
