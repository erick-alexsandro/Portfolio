<script setup></script>

<template>
  <div class="screen">
    <div class="list-of-works">
      <div class="work work-1">
        <div class="work-image">
          <img class="screenshot-work" src="../assets/pomodoroapp.png" alt="Pomodoro App" />
        </div>
        <div class="work-details">
          <h1 class="title">PomodoroApp</h1>
        </div>
      </div>
      <div class="work work-2">
        <div class="work-image">
          <img class="screenshot-work" src="../assets/snakegame.png" alt="Snake Game" />
        </div>
        <div class="work-details">
          <h1 class="title">{{ $t('portfolioPage.snakeGame') }}</h1>
        </div>
      </div>
      <div class="work work-3">
        <div class="work-image">
          <img class="screenshot-work" src="../assets/chatgotch.png" alt="ChatGotch" />
        </div>
        <div class="work-details">
          <h1 class="title">ChatGotch</h1>
        </div>
      </div>
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
