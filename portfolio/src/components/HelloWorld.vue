<script></script>

<template>
  <div class="greetings">
    <h2 class="white name">
      Hey! I'm <bold style="text-decoration: underline" class="name">Eric Alex</bold>👋
    </h2>
    <h3>
      A Brazilian developer with skills ranging from building beautiful websites to creating desktop
      applications.
    </h3>
    <div class="icons">
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
  </div>
</template>

<style scoped>
h2 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

.name {
  font-weight: 700;
}

h3 {
  font-size: 1.2rem;
}

.icons {
  display: flex;
  gap: 2px;
  font-size: 2rem;
}

.icons a {
  color: white;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
