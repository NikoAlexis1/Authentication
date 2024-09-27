<template>
    <div>
        <h1>Sign Up</h1>
        <form @submit.prevent>
            <label for="email">Email</label><br>
            <input type="email" id="email" v-model="email"><br>
            <label for="password">Contraseña</label><br>
            <input type="password" id="password" v-model="password"><br>
            <button @click="register">Registrarse</button>
        </form>
    </div>
</template>

<script>
import { auth, createUserWithEmailAndPassword } from '../auth.js';

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async register() {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password)
                this.email = '',
                this.password = ''
            } catch (error) {
                console.log(error);
            }
        }
    }
}

</script>