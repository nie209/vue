import viewBlogs from './components/view-blogs.vue';
import addBlog from './components/add-blog.vue';
import singleBlog from './components/single-blog.vue';
export default [
  {path: '/', component: viewBlogs },
  {path: '/add', component: addBlog },
  {path: '/blog/:id', component: singleBlog },
]
