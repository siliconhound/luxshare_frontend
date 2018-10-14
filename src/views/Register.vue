<template>
    <div class="page register">
        <div class="profile-pic"></div>
        <form action="POST">
            <label for="username">username</label>
            <input v-model="user.name" :class="['input']"  name="username" type="text">

            <label for="email">email</label>
            <input v-model="user.email" :class="['input']"  name="email" type="text">

            <label for="bio">bio</label>
            <input v-model="user.bio" :class="['input']"  name="bio" type="text">

            <label for="avatar">avatar</label>
            <input @change="onFileChange" :class="['input']"  name="avatar" type="file"  id="">

            <label for="password">Password</label>
            <input v-model="user.password" type="password" name="password" id="" :class="['input']">

            <label for="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPasword" id="" :class="['input']">

            <input type="button" value="Registrar!" @click="sendRegister(event)">
        </form>
    </div>
</template>

<script>
export default {
    name:'Register',
    data(){
        return{
            user:{
                name:"",
                email:"",
                bio:"",
                password:"",
            },
        }
    },
    mounted() {
        console.log(this.user);
    },
    methods: {
        sendRegister(){

            


            console.log("init enviando post register -------------------------------");
            console.log(this.user);
            console.log("fin  enviando post register -------------------------------");
        },
        onFileChange(e){
            console.log("init filechange -------------------------------");
            console.log(e);
            console.log("fin  filechange -------------------------------");
        },
    }
}
</script>

<style lang="scss" scoped>

</style>


