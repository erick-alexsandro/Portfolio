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
            <h2 class="subtitle">FullStack Developer</h2>
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
                Passionate about technology, with a solid technical and academic background in
                Computer Science and related fields. Hands-on experience as a FullStack Developer,
                working on system development using technologies such as ASP.NET, C#, JavaScript,
                Vue.js, PostgreSQL, and MongoDB. Fluent in English, capable of contributing to
                global projects. Committed and adaptable to working in dynamic and challenging
                environments, always striving for continuous improvement and excellence in results.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="about-body">
        <div class="skills">
          <h1 style="font-size: 3rem" class="title">Skills</h1>
          <ul>
            <li>Web Development</li>
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
            <li>English</li>
            <li>Portuguese</li>
          </ul>
        </div>
        <div class="experience">
          <h1 style="font-size: 3rem" class="title">Experience</h1>
          <ul>
            <li>
              <div class="experience-header">
                <div class="experience-title">
                  <h2 class="title">Trival</h2>
                  <h3 class="subtitle">FullStack Developer</h3>
                </div>
                <div class="experience-time">
                  <p>Dec/2023 - Dec/2024</p>
                </div>
              </div>
              <p>
                At Trival, I was responsible for opening calls for clients and developing fullstack
                systems, using technologies such as ASP.NET, C#, MongoDB, PostgreSQL, JavaScript,
                Vue and Vuetify.At Trival, I was responsible for opening calls for clients and
                developing fullstack systems, using technologies such as ASP.NET, C#, MongoDB,
                PostgreSQL, JavaScript, Vue and Vuetify.
              </p>
            </li>
            <li>
              <div class="experience-header">
                <div class="experience-title">
                  <h2 class="title">Escola Estadual Padre João de Mattos</h2>
                  <h3 class="subtitle">Assembling Computer Networks</h3>
                </div>
                <div class="experience-time">
                  <p>Aug/2022 - Dec/2022</p>
                </div>
              </div>
              <p>
                Under the instruction of Elson Gomes Santana, I assisted in assembling the computer
                network in the school's computer room.
              </p>
            </li>
          </ul>
        </div>
        <div class="studies">
          <h1 style="font-size: 3rem" class="title">Studies</h1>
          <ul>
            <li>
              <div class="studies-header">
                <div class="studies-title">
                  <h2 class="title">Bachelor's degree - Computer Science</h2>
                  <h3 class="subtitle">Centro Universitário Una</h3>
                </div>
                <div class="studies-time">
                  <p>Aug/2023 - Aug/2027</p>
                </div>
              </div>
            </li>
            <li>
              <div class="studies-header">
                <div class="studies-title">
                  <h2 class="title">Technical Education - Internet Computing</h2>
                  <h3 class="subtitle">Escola Estadual Padre João de Mattos Almeida</h3>
                </div>
                <div class="studies-time">
                  <p>Aug/2021 - Dec/2022</p>
                </div>
              </div>
            </li>
            <li>
              <div class="studies-header">
                <div class="studies-title">
                  <h2 class="title">
                    Technical Education - Assembly and Configuration of Windows Computers and
                    Networks
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
.screen {
  margin-top: 10%;
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
