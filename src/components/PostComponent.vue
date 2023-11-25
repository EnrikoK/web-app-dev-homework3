<template>
    <div class="post">
        <div class="content" v-for="post in getPosts" :key="post.id">
            <h4 class="username">{{post.user}}</h4>
            <p class="date">{{post.date}}</p>
            <h3>{{ post.text }}</h3>
            <img src= {{post.image}}>
            <p class="likeCount">{{post.likes}} likes</p>
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

<style scoped>
.content {
    background-color: lightgrey;
    border-radius: 10px;
    padding: 1em;
    margin: 1em 15em;
}

.date {
    float: right;
    margin-right: 2em;
}

.username {
    float: left;
    margin-left: 1em;
}

h3 {
    text-align: justify;
    padding: 2em 1em;
}

.likeCount {
    text-align: left;
    margin-left: 1em;
}

</style>