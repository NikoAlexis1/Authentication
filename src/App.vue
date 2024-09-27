<script>
import { auth, signOut, onAuthStateChanged } from './auth.js';
export default{
  data(){
    return{
      isLoggedIn: false
    }
  },
  created(){
    onAuthStateChanged(auth, (user) => {
      this.isLoggedIn = user? true : false;
    })
  },
  methods:{
    async logout(){
      await signOut(auth);
      this.$router.push('/login')
    }
  }
}
</script>

<template>
  <div>
    <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
    <hr v-if="!isLoggedIn">
    <router-link to="/register" v-if="!isLoggedIn">Sign Up</router-link>
    <router-link to="/" v-if="isLoggedIn">Home</router-link>


    <router-view /><br>
    <button @click="logout" v-if="isLoggedIn">Sign Out</button>
  </div>
</template>

<style scoped>
hr{
  height: 15px;
  display: inline-block;
  margin: 0 1px;
  vertical-align: top;
  border-color: gray;
}
</style>
