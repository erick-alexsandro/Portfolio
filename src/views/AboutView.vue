<script setup></script>

<template>
  <div class="screen">
    <div class="about-me">
      <div class="about-header">
        <div class="header-top">
          <div class="header-image">
            <img class="my-picture" src="../assets/me.jpg" alt="a picture of myself" />
          </div>
          <div class="header-text">
            <h1 class="name title">Eric Alex</h1>
            <h2 class="subtitle">{{ $t('aboutPage.heading.profession') }}</h2>
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
            <div class="description">
              <p>
                {{ $t('aboutPage.heading.details') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="about-body">
        <div class="skills">
          <h1 style="font-size: 3rem" class="title">{{ $t('aboutPage.skills.title') }}</h1>
          <ul>
            <li>{{ $t('aboutPage.skills.skillDev') }}</li>
            <li>C#</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>Vue.js</li>
            <li>Vuetify</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>ASP.NET</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>Git</li>
            <li>{{ $t('aboutPage.skills.skillEnglish') }}</li>
            <li>{{ $t('aboutPage.skills.skillPt') }}</li>
          </ul>
        </div>
        <div class="experience">
          <h1 style="font-size: 3rem" class="title">{{ $t('aboutPage.experience.title') }}</h1>
          <ul>
            <li>
              <div class="experience-header">
                <div class="experience-title">
                  <h2 class="title">Trival</h2>
                  <h3 class="subtitle">{{ $t('aboutPage.experience.ex1.title') }}</h3>
                </div>
                <div class="experience-time">
                  <p>{{ $t('aboutPage.experience.ex1.time') }}</p>
                </div>
              </div>
              <p>
                {{ $t('aboutPage.experience.ex1.description') }}
              </p>
            </li>
            <li>
              <div class="experience-header">
                <div class="experience-title">
                  <h2 class="title">Escola Estadual Padre João de Mattos</h2>
                  <h3 class="subtitle">{{ $t('aboutPage.experience.ex2.title') }}</h3>
                </div>
                <div class="experience-time">
                  <p>{{ $t('aboutPage.experience.ex2.time') }}</p>
                </div>
              </div>
              <p>
                {{ $t('aboutPage.experience.ex2.description') }}
              </p>
            </li>
          </ul>
        </div>
        <div class="studies">
          <h1 style="font-size: 3rem" class="title">{{ $t('aboutPage.studies.title') }}</h1>
          <ul>
            <li>
              <div class="studies-header">
                <div class="studies-title">
                  <h2 class="title">{{ $t('aboutPage.studies.std1.title') }}</h2>
                  <h3 class="subtitle">Centro Universitário Una</h3>
                </div>
                <div class="studies-time">
                  <p>{{ $t('aboutPage.studies.std1.time') }}</p>
                </div>
              </div>
            </li>
            <li>
              <div class="studies-header">
                <div class="studies-title">
                  <h2 class="title">{{ $t('aboutPage.studies.std2.title') }}</h2>
                  <h3 class="subtitle">Escola Estadual Padre João de Mattos Almeida</h3>
                </div>
                <div class="studies-time">
                  <p>{{ $t('aboutPage.studies.std2.time') }}</p>
                </div>
              </div>
            </li>
            <li>
              <div class="studies-header">
                <div class="studies-title">
                  <h2 class="title">
                    {{ $t('aboutPage.studies.std3.title') }}
                  </h2>
                  <h3 class="subtitle">Escola Estadual Padre João de Mattos Almeida</h3>
                </div>
                <div class="studies-time">
                  <p>Set/2021 - Set/2022</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
