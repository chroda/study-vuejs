import showBlogs from './components/showBlogs.vue';
import addBlogs from './components/addBlog.vue';

export default [
    {path:'/', component: showBlogs},
    {path:'/add', component: addBlogs},
]
