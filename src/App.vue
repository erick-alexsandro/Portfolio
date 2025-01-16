<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IconHome from './components/icons/IconHome.vue'
import IconAbout from './components/icons/IconAbout.vue'
import IconProjects from './components/icons/IconProjects.vue'
import IconTranslate from './components/icons/IconTranslate.vue'
import IconSelectedV from './components/icons/IconSelectedV.vue'
import { useCounterStore } from './stores/counter'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'
const { locale } = useI18n()

const counter = useCounterStore()

const isToggled = ref(false)

const backToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
  })
}

const toggleDropdown = () => {
  const dropdown = document.querySelector('.dropdown')
  if (isToggled.value) {
    dropdown.classList.remove('show')
    dropdown.classList.add('hide')
    isToggled.value = false
  } else {
    dropdown.classList.add('show')
    dropdown.classList.remove('hide')
    isToggled.value = true
  }
}

const selectedLanguage = ref('English')

const selectLanguage = (language) => {
  const localeMap = {
    Português: 'pt',
    English: 'en',
  }
  const dropdown = document.querySelector('.dropdown')
  dropdown.classList.remove('show')
  const selectedText = document.querySelector('.selected-text')
  selectedText.textContent = language
  selectedLanguage.value = language
  locale.value = localeMap[language]
  localStorage.setItem('preferredLanguage', language)
}

watch(selectedLanguage, (language) => {
  const localeMap = {
    Português: 'pt',
    English: 'en',
  }
  locale.value = localeMap[language]
})

onMounted(() => {
  const savedLanguage = localStorage.getItem('preferredLanguage')
  if (savedLanguage) {
    selectLanguage(savedLanguage)
  }

  counter.startTime()
  setInterval(() => {
    counter.startTime()
  }, 1000)
})
</script>

<template>
  <header>
    <nav>
      <RouterLink @click="backToTop" to="/" data-i18n="nav.home"
        ><IconHome />{{ $t('nav.home') }}</RouterLink
      >
      <RouterLink @click="backToTop" to="/about" data-i18n="nav.about"
        ><IconAbout />{{ $t('nav.about') }}</RouterLink
      >
      <RouterLink @click="backToTop" to="/portfolio" data-i18n="nav.portfolio"
        ><IconProjects />{{ $t('nav.portfolio') }}</RouterLink
      >
    </nav>
  </header>

  <RouterView />
  <footer>
    <div class="footer-text">
      <p>© {{ new Date().getFullYear() }} / {{ $t('footer.madeWith') }}</p>
      ({{ counter.time }})
    </div>
    <div class="footer-icons">
      <div @click="toggleDropdown" class="language-selector">
        <div class="selected-language">
          <IconTranslate />
          <div class="selected-text">English</div>
        </div>
        <div class="dropdown hide">
          <div class="dropdown-item" @click="selectLanguage('Português')">
            Português
            <IconSelectedV v-if="selectedLanguage === 'Português'" />
          </div>
          <div class="dropdown-item" @click="selectLanguage('English')">
            English
            <IconSelectedV v-if="selectedLanguage === 'English'" />
          </div>
        </div>
      </div>
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
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  padding: 2rem;
}

nav {
  font-size: 12px;
  text-align: center;
  position: sticky;
  top: 2rem;
  left: 2rem;
  z-index: 1000;
  display: flex;
  gap: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 2rem;
  padding: 0.5rem 0.5rem;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.5rem) brightness(0.95);
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
