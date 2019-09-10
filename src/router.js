
import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//ページコンポーネント
import Home from './views/Home.vue'
import Kiyaku from './views/Kiyaku.vue'
import Postslist from './views/Postslist.vue'
import Post from './views/Post.vue'
import Create from './views/Create.vue'



//import store from './store'

//VueRouterプラグインを使用する
Vue.use(VueRouter);
Vue.use(BootstrapVue);

//マッピング
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/create',
    component: Create,
  },
  {
    path: '/kiyaku',
    component: Kiyaku,
  },
  {
    path: '/posts',
    component: Postslist,
  },
  {
    path: '/post/:post_id',
    component: Post,
  },
];

//VueRouterインスタンス作成
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
