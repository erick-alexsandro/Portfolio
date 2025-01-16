<script setup>
import ProjectsItem from './ProjectsItem.vue'
import IconAlarm from './icons/IconAlarm.vue'
import IconGame from './icons/IconGame.vue'
import IconDiscord from './icons/IconDiscord.vue'
</script>

<template>
  <div class="screen">
    <div class="greetings">
      <h2 class="white name">
        {{ $t('greetings.hello')
        }}<bold style="text-decoration: underline" class="name">Eric Alex</bold>👋
      </h2>
      <h3>
        {{ $t('greetings.about') }}
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
    <div class="welcome">
      <ProjectsItem>
        <template #icon>
          <IconAlarm />
        </template>
        <template #heading>PomodoroApp</template>

        <div class="desc">
          {{ $t('homePortfolio.work1.description') }}
          <a href="https://github.com/erick-alexsandro/PomodoroApp" target="_blank">
            {{ $t('homePortfolio.link') }}
          </a>
        </div>
      </ProjectsItem>

      <ProjectsItem>
        <template #icon>
          <IconDiscord />
        </template>
        <template #heading>ChatGotch</template>
        <div class="desc">
          {{ $t('homePortfolio.work2.description') }}
          <a href="https://github.com/erick-alexsandro/ChatGotch" target="_blank">
            {{ $t('homePortfolio.link') }}
          </a>
        </div>
      </ProjectsItem>

      <ProjectsItem>
        <template #icon>
          <IconGame />
        </template>
        <template #heading>{{ $t('portfolioPage.snakeGame') }}</template>
        <div class="desc">
          {{ $t('homePortfolio.work3.description') }}
          <a href="https://github.com/erick-alexsandro/CSharp-Snake-Game" target="_blank">
            {{ $t('homePortfolio.link') }}
          </a>
        </div>
      </ProjectsItem>
    </div>
  </div>
</template>

<style scoped>
.greetings {
  width: 100%;
}

h2 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
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
</style>
