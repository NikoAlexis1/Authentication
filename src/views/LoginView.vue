<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent>
            <label for="email">Email</label><br>
            <input type="email" id="email" v-model="email"><br>
            <label for="password">Contraseña</label><br>
            <input type="password" id="password" v-model="password"><br>
            <button @click="login">Iniciar Sesion</button>
        </form>
    </div>
</template>

<script>
import { auth, signInWithEmailAndPassword } from '../auth.js';
export default {
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            try {
                await signInWithEmailAndPassword(auth, this.email, this.password)
                const redirectPath = this.$route.query.redirect || '/home';
                this.$router.push(redirectPath);
            } catch (error) {
                alert('Error al iniciar sesion'+ error.message);
            }
        }
    }
}
</script>