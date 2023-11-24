<template>
<h1>Homepage</h1>
<post-component></post-component>
</template>

<script>
import PostComponent from "../components/PostComponent.vue"
export default {
  name: 'HomeView',
  components: {
    "post-component": PostComponent,
  }
}

</script>

<style>
</style>