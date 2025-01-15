<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import IconHome from './components/icons/IconHome.vue'
import IconAbout from './components/icons/IconAbout.vue'
import IconProjects from './components/icons/IconProjects.vue'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/"><IconHome />Home</RouterLink>
      <RouterLink to="/about"><IconAbout />About</RouterLink>
      <RouterLink to="/portfolio"><IconProjects />Portfolio</RouterLink>
    </nav>
    <div class="wrapper"></div>
  </header>

  <RouterView />
  <footer>
    <div class="footer-text">
      <p>© {{ new Date().getFullYear() }} / Made with ❤️ by Eric Alex.</p>
    </div>
    <div class="footer-icons">
      <a href="mailto:contatoerickalexsandro@gmail.com" target="_blank" rel="noopener"
        ><font-awesome-icon icon="fa-solid fa-square-envelope"
      /></a>
      <a href="https://github.com/erick-alexsandro" target="_blank" rel="noopener"
        ><font-awesome-icon icon="fa-brands fa-square-github"
      /></a>
      <a href="https://www.linkedin.com/in/erick-alexsandro/" target="_blank" rel="noopener"
        ><font-awesome-icon icon="fa-brands fa-linkedin"
      /></a>
    </div>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  position: sticky;
  display: flex;
}

nav {
  font-size: 12px;
  text-align: center;
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 1000;
  display: flex;
  gap: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 2rem;
  padding: 0.5rem 0.5rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  font-weight: bold;
  background: rgba(255, 255, 255, 0.158);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-radius: 1rem;
  border: 1px solid var(--color-border);
  padding: 0.4rem 1rem;
  color: var(--color-text);
  display: flex;
  gap: 5px;
}
</style>
