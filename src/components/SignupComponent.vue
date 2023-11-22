<template>
    <form @submit.prevent="validateInputs">
        <div>
            <label>Email:</label>
            <input type="email" v-model="emailInp" name="email" placeholder="email">   
        </div>
        <div>
            <label>Password:</label>
            <input type="password" v-model="passwordInp" name="password" placeholder="password">  
        </div>
        <input type="submit" value="Create account" class="submit-button">
    </form>
    <p class="error-tooltip" v-if="isError">{{ errorMsg }}</p>
</template>

<script>
export default{
    name:"SignupComponent",
    data(){
        return{
            isError:false,
            errorMsg:""
        }
    },
    methods:{
    validateInputs(){
        
        if(this.passwordInp.length < 8 || this.passwordInp.length > 15){
            this.isError=true;
            this.errorMsg="Password must be less than 15 and more than 8 characters long";
        }else if(!this.passwordInp.includes("_")){
            this.isError=true;
            this.errorMsg="Password must contain the character: _ ";
        }else if(this.passwordInp == this.passwordInp.toLowercase()){
            this.isError=true;
            this.errorMsg="Password must contain at least one uppercase letter";
        }else if(this.passwordInp[0] == this.passwordInp[0].toUppercase()){
            this.isError=true;
            this.errorMsg="The first letter of the password must be uppercase";
        }
    
        let lowercase = /[a-z]{2,}/;
        let numeric = /[1-9]+/;
        if(!lowercase.test(this.passwordInp)){
            this.isError=true;
            this.errorMsg= "Password must contain at least two lowercase letters"
        }
        if(!numeric.test(this.passwordInp)){
            this.isError=true;
            this.errorMsg="Password must contain at least one digit";
        }

        
    }
   } 
}
</script>

<style scoped>
form{
    background-color: darkgrey;
    width: 30vw;
    height: 25vh;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 1em;
}

form>div>input{
    font-size: large;
    height: 2em;
    width: 50%;
}
form>div{
    font-size: medium;
    width: 100%;
    display: flex;
}
label{
    font-size: 1.5em;
    width: 50%;
    
}
.submit-button{
    font-size: large;
    padding: 0.75em;

}
.submit-button:hover{
    background-color:#2c3e50;
    color: whitesmoke;
    transition: 0.3s;
}
.error-tooltip{
    background-color: rgb(222, 98, 98);
    padding: 1em;
    margin: 0.5em;
    font-size:1.5em;
    border-radius: 5px;
}
</style>