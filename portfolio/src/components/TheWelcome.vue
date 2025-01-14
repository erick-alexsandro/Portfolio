<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import CommunityIcon from './icons/IconCommunity.vue'

</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>PomodoroApp</template>

    PomodoroApp is an application that helps users manage their tasks and study sessions
    using the Pomodoro technique. It includes functionalities for creating, editing and completing tasks, as well as controlling work time and breaks.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>YelpCamp</template>
    This project empowers users to explore and review campsites from around the world.
    The platform features a user-friendly interface, star-based reviews, user registration,
    image uploading, and an interactive map displaying clusters of campsites.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>ChatGotch</template>
    ChatGotch is a Discord bot that allows users to create, edit, and delete their own pets.
    These pets can fight other pets, ask for food, and, if not fed, will eventually die.
  </WelcomeItem>

</template>
