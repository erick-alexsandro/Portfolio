<script setup>
import WelcomeItem from './WelcomeItem.vue'
import IconAlarm from './icons/IconAlarm.vue'
import GameIcon from './icons/GameIcon.vue'
import IconDiscord from './icons/IconDiscord.vue'
</script>

<template>
  <div class="screen">
    <div class="greetings">
      <h2 class="white name">
        Hey! I'm <bold style="text-decoration: underline" class="name">Eric Alex</bold>👋
      </h2>
      <h3>
        A Brazilian developer with skills ranging from building beautiful websites to creating
        desktop applications.
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
      <WelcomeItem>
        <template #icon>
          <IconAlarm />
        </template>
        <template #heading>PomodoroApp</template>

        <div class="desc">
          PomodoroApp is an application that helps users manage their tasks and study sessions using
          the Pomodoro technique. It includes functionalities for creating, editing and completing
          tasks, as well as controlling work time and breaks.
          <a href="https://github.com/erick-alexsandro/PomodoroApp" target="_blank">
            View the Github repository >
          </a>
        </div>
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <IconDiscord />
        </template>
        <template #heading>ChatGotch</template>
        <div class="desc">
          ChatGotch is a Discord bot that allows users to create, edit, and delete their own pets.
          These pets can fight other pets, ask for food, and, if not fed, will eventually die.
          <a href="https://github.com/erick-alexsandro/ChatGotch" target="_blank">
            View the Github repository >
          </a>
        </div>
      </WelcomeItem>

      <WelcomeItem>
        <template #icon>
          <GameIcon />
        </template>
        <template #heading>SnakeGame in C#</template>
        <div class="desc">
          This project contains a C# implementation of the classic Snake game, developed following
          the instructional video by OttoBotCode. It has a fully functional Snake game without the
          use of any game engine, utilizing WPF for the user interface.
          <a href="https://github.com/erick-alexsandro/CSharp-Snake-Game" target="_blank">
            View the Github repository >
          </a>
        </div>
      </WelcomeItem>
    </div>
  </div>
</template>

<style scoped>
.screen {
  margin-top: 2%;
}
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
