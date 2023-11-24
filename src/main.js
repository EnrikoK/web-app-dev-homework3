import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "./views/HomeView"
import LoginView from "./views/LoginView"
import SignupView from "./views/SignupView"


const store = createStore({
    state:{
        tervitus:"Tere tere vana kere :>",
        posts: [
            {id: 0, text: "this is my first post ever. very excited.", image: "assets/photo2.jpg", likes: 0}
        ]
    },
    getters: {
        getPostById: (state) => (id) => {
            return state.posts.find((post) => post.id === id);
          },
    }
});
// router routes
const routes = [
    {path: '/',name: 'home', component: HomeView},
    {path: '/login', name:'login', component: LoginView},
    {path: '/signup', name:'signup', component: SignupView}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
