<template>
  <form action="post">
    <div class="input-text">
      <label for="username">Username</label>
      <input v-model="username" type="text" name="username">
    </div>

    <div class="input-text">
      <label for="email">Email</label>
      <input v-model="email" type="text" name="email">
    </div>

    <div class="input-text">
      <label for="password">Password</label>
      <input v-model="password" type="text" name="password">
    </div>

    <div class="input-text">
      <label for="confirm_password">Confirm Password</label>
      <input v-model="confirm_password" type="text" name="confirm_password">
    </div>
    <input type="submit" value="Enviar">
  </form>

</template>
<script>
export default {
  name:'Timeline',
  data(){
    return{
      username,
      email,
      password,
      confirm_password,
    }
  },
  methods:{
    sendRequest(){
    }
  }

};
</script>


<style lang="scss">
</style>
