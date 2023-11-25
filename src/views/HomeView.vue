<template>
<h1>Homepage</h1>
<post-component></post-component>
<button id='resetLikes' @click="resetLikes">Reset Likes</button>
</template>

<script>
import PostComponent from "../components/PostComponent.vue"
export default {
  name: 'HomeView',
  components: {
    "post-component": PostComponent,
  },
  methods: {
        resetLikes: function(){
            this.$store.commit('resetLikes')
        }
    }
}

</script>

<style>
h1 {
  margin-bottom: 2em;
}
</style>