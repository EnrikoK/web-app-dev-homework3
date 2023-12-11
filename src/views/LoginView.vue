<template>
<form>
    <label>email:</label>
    <input type="email" required v-model="email">
    <label>password:</label>
    <input type="password" required v-model="password">
    <button @click.prevent="login">Submit</button>
    
</form>
<p v-if="loginError">Invalid login, please try again</p>
</template>

<script>

export default{
    name:'LoginView',
    data: function(){
        return{
            email:'',
            password:'',
            loginError:false,
        }
    },
    methods:{
        login(){
            var data ={
                email: this.email,
                password: this.password,
               
            };
            fetch("http://localhost:3000/api/auth/login",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                credentials:'include',
                body: JSON.stringify(data),
            }).then((resp) => resp.json())
            .then((json) =>{
                if(!json.auth){
                    this.loginError=true;
                }else{
                    console.log(json)
                    location.assign("/");   
                }
                
            } ).catch((err) => console.log(err.message))
        }
    }

}
</script>

<style>
</style>