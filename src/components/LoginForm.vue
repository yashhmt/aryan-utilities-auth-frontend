<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

const handleLogin = () => {
  console.log("Logged in!", email.value, password.value);
};
</script>

<template>
  <div class="container">
    <h1 class="login-title">Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <input v-model="email" placeholder="Email" type="email" id="email" class="input" required>
      </div>
      <div>
        <input v-model="password" placeholder="Password" type="password" id="password" class="input" required>
      </div>
      <button type="submit" class="submit-btn">Login</button>
    </form>
    <div class="footer-links">
      <h4 class="register-link">
        Don't have an account? 
        <a href="#" @click.prevent="router.push('/register')" class="link-text">Register here</a>
      </h4>
      <h5 class="register-link">
        <a href="#" @click.prevent="router.push('/forgot-password')" class="link-text">Forgot your password?</a>
      </h5>
    </div>
  </div>
</template>

<style scoped>
/* Copy styles from Register above to keep them identical */
.container {
  background-color: #3b3b3b;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 450px;
  box-sizing: border-box;
}

.login-title { color: #fff; margin-bottom: 1rem; }
form { display: flex; flex-direction: column; }

.input {
  width: 100%;
  height: 40px;
  padding: 0.5rem;
  border-radius: 12px;
  border: none;
  margin: 10px 0;
  box-sizing: border-box;
}

.submit-btn {
  align-self: flex-end;
  padding: 0.75rem 2rem;
  background-color: #636363;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
}

.register-link { color: #fff; margin-top: 1rem; }
.link-text { color: #8ab4f8; text-decoration: none; }
.footer-links { margin-top: 1rem; }
</style>