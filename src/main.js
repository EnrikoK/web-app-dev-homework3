import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "./views/HomeView"
import LoginView from "./views/LoginView"
import SignupView from "./views/SignupView"
import { ref } from 'vue'

const store = createStore({
    state:{
        tervitus:"Tere tere vana kere :>",
        posts: ref([
            {id: 0, user:"Smilla", date:"01.11.2023", text: "this is my first post ever. very excited. Attack feet behind the couch destroy couch flop over give attitude hide when guests come over hopped up on goofballs hunt anything that moves chew ipad power cord   claw drapes, ", image: "../images/logo.png", likes: 0, isLiked:false},
            {id: 1, user:"Ivo Schenkenberg", date:"02.11.2023", text: "this is my first post ever. very excited.", image: "../images/photo2.jpg", likes: 3, isLiked:false},
            {id: 2, user:"Lance Lancelot", date:"03.11.2023", text: "this is my first post ever. very excited.", image: null, likes: 6, isLiked:false}
        ])
    },
    mutations:{
        resetLikes:(state) => {
            state.posts.forEach(post => {
                post.likes = 0;
                post.isLiked=false;
            });
    },
    likePost:(state,id) => {
        let post = state.posts.find(post => post.id==id)
        if(!post.isLiked){
            post.likes++;
            post.isLiked=true;
        }else if(post.isLiked){
            post.likes--;
            post.isLiked=false;
        }
        
    }
},
    getters: {
        getPostById: (state) => (id) => {
            return state.posts.find((post) => post.id === id);
          },
    },
    actions:{
        likePostAction: (act, index) => {
            act.commit('likePost',index);
        }
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
