<template>
  <header>
    <nav>
    <ul>
        <li>
          <RouterLink class="router-text" to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink class="router-text" to="/login">Login</RouterLink>
        </li>
        <li>
          <RouterLink class="router-text" to="/signup">Sign up</RouterLink>
        </li>
      </ul>
    </nav>  
  </header>
  <RouterView></RouterView>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
ul{
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 75%;
}
nav{
  display: flex;
  background-color:#2c3e50;
  height: 10vh;
  padding: 0.5em ;
  align-items: center;  
}
.router-text{
  color: whitesmoke;
  font-size: 1.5em;
}
</style>
