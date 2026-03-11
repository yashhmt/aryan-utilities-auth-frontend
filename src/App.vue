<template>
  <div class="root-wrapper">
    <img src="./assets/Untitled (1).png" alt="logo" class="logo">
    <RouterView />
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #222222;
  /* Remove overflow: hidden; so mobile users can scroll if the form is long */
  overflow-x: hidden; 
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.root-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  gap: 4rem; /* Adds nice space between logo and form */
  padding: 20px;
  box-sizing: border-box;
}

.logo {
  max-width: 300px; /* Adjust size as needed */
  height: auto;
}

/* --- MOBILE RESPONSIVE LOGIC --- */
@media (max-width: 768px) {
  .root-wrapper {
    flex-direction: column; /* Stacks logo on top of form */
    gap: 2rem;             /* Reduces space for mobile */
    justify-content: flex-start; /* Starts from top instead of middle */
    padding-top: 50px;
  }

  .logo {
    max-width: 200px; /* Makes logo smaller on phones */
  }
}
</style>