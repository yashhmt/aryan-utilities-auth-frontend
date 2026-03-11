<script setup lang="ts">
import { ref } from 'vue'; // Missing this!
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

const handleRegister = () => {
  // Now email.value and password.value will work
  console.log("Registering:", email.value, password.value);
};
</script>

<template>
  <div class="container">
    <h1 class="login-title">Create Account</h1>
    <form @submit.prevent="handleRegister">
      <div>
        <input v-model="email" placeholder="Email" type="email" id="email" class="input" required>
      </div>
      <div>
        <input v-model="password" placeholder="Password" type="password" id="password" class="input" required>
      </div>
      <button type="submit" class="submit-btn">Create Account Now</button>
    </form>
    <h4 class="register-link">
      Already have an account? 
      <a href="#" @click.prevent="router.push('/')" class="link-text">Login here</a>
    </h4>
  </div>
</template>

<style scoped>
.container {
  background-color: #3b3b3b;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;          /* Mobile friendly */
  max-width: 450px;    /* Desktop friendly */
  box-sizing: border-box;
}

.login-title {
  color: #fff;
  margin-bottom: 1rem;
}

form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;         /* Fill the container */
  height: 40px;
  padding: 0.5rem;
  border: none;
  border-radius: 12px;
  margin: 10px 0;
  box-sizing: border-box;
}

.submit-btn {
  align-self: flex-end; /* Replaces float */
  padding: 0.75rem 1.5rem;
  background-color: #636363;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s;
}

.submit-btn:hover {
  background-color: #222222;
  border-radius: 6px;
}

.register-link {
  color: #fff;
  margin-top: 1.5rem;
}

.link-text {
  color: #8ab4f8; /* Makes the link look clickable */
  text-decoration: none;
}
</style>