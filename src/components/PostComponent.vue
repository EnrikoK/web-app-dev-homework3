<template>
    <div class="post">
        <div v-for="post in getPosts" :key="post.id">
            <h3>{{ post.text }}</h3>
            <img src= {{post.image}}>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
            getPosts() {
                return this.$store.state.posts
            }
    },
};
</script>

<style>
</style>