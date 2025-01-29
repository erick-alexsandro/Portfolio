import { createI18n } from 'vue-i18n'

const messages = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      portfolio: 'Portfólio',
    },
    footer: {
      madeWith: 'Feito com ❤️ por Eric Alex.',
    },
    greetings: {
      hello: 'Oi! Eu sou ',
      about:
        'Um desenvolvedor brasileiro com habilidades que vão desde a criação de lindos sites à criação de aplicativos de desktop.',
    },
    homePortfolio: {
      link: 'Veja o repositório no Github >',
      work0: {
        description:
          'Uma aplicação web que ajuda você a descobrir novos artistas similares aos seus favoritos usando a API do Last.fm e a API do Spotify.',
      },
      work1: {
        description:
          'O PomodoroApp é um aplicativo que ajuda os usuários a gerenciar suas tarefas e sessões de estudo usando a técnica Pomodoro. Ele inclui funcionalidades para criar, editar e concluir tarefas, além de controlar o tempo de trabalho e os intervalos. ',
      },
      work2: {
        description:
          'O ChatGotch é um bot do Discord que permite aos usuários criar, editar e excluir seus próprios animais de estimação. Esses animais de estimação podem lutar com outros, pedir comida e, se não forem alimentados, acabarão morrendo.',
      },
      work3: {
        description:
          'Este projeto contém uma implementação em C# do clássico jogo Snake, desenvolvido de acordo com o vídeo instrutivo do OttoBotCode. Trata-se de um jogo totalmente funcional sem o uso de qualquer mecanismo de jogos, utilizando o WPF para a interface do usuário. ',
      },
    },
    aboutPage: {
      heading: {
        profession: 'Desenvolvedor FullStack',
        details:
          'Apaixonado por tecnologia, com sólida formação técnica e acadêmica em Ciência da Computação e áreas relacionadas. Experiência prática como desenvolvedor FullStack, trabalhando no desenvolvimento de sistemas usando tecnologias como ASP.NET, C#, JavaScript, Vue.js, PostgreSQL e MongoDB. Fluente em inglês, capaz de contribuir para projetos globais. Comprometido e adaptável a trabalhar em ambientes dinâmicos e desafiadores, sempre buscando a melhoria contínua e a excelência nos resultados. ',
      },
      skills: {
        title: 'Habilidades',
        skillDev: 'Desenvolvimento Web',
        skillEnglish: 'Inglês',
        skillPt: 'Português',
      },
      experience: {
        title: 'Experiência',
        ex1: {
          title: 'Desenvolvedor FullStack',
          time: 'Dez/2023 - Dez/2024',
          description:
            'Na Trival, eu era responsável por abrir chamados para clientes e desenvolver sistemas FullStack, usando tecnologias como ASP.NET, C#, MongoDB, PostgreSQL, JavaScript, Vue e Vuetify. ',
        },
        ex2: {
          title: 'Montagem de Redes de Computadores',
          time: 'Ago/2022 - Dez/2022',
          description:
            'Sob a orientação de Elson Gomes Santana, auxiliei na montagem da rede de computadores na sala de informática da escola. ',
        },
      },
      studies: {
        title: 'Formação',
        std1: {
          title: 'Bacharelado - Ciência da Computação',
          time: 'Ago/2023 - Ago/2027',
        },
        std2: {
          title: 'Educação técnica - Informática para a Internet',
          time: 'Ago/2021 - Dez/2022',
        },
        std3: {
          title: 'Educação técnica - Montagem e Configuração de Computadores e Redes Windows',
        },
      },
    },
    portfolioPage: {
      snakeGame: 'Jogo da Cobrinha em C#',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
    },
    footer: {
      madeWith: 'Made with ❤️ by Eric Alex.',
    },
    greetings: {
      hello: "Hey! I'm ",
      about:
        'A Brazilian developer with skills ranging from building beautiful websites to creating desktop applications.',
    },
    homePortfolio: {
      link: 'View the Github repository >',
      work0: {
        description:
          'A web application that helps you discover new artists similar to your favorites using the Last.fm API and Spotify API.',
      },
      work1: {
        description:
          'PomodoroApp is an application that helps users manage their tasks and study sessions using the Pomodoro technique. It includes functionalities for creating, editing and completing tasks, as well as controlling work time and breaks. ',
      },
      work2: {
        description:
          'ChatGotch is a Discord bot that allows users to create, edit, and delete their own pets. These pets can fight other pets, ask for food, and, if not fed, will eventually die.',
      },
      work3: {
        description:
          'This project contains a C# implementation of the classic Snake game, developed following the instructional video by OttoBotCode. It has a fully functional Snake game without the use of any game engine, utilizing WPF for the user interface. ',
      },
    },
    aboutPage: {
      heading: {
        profession: 'FullStack Developer',
        details:
          'Passionate about technology, with a solid technical and academic background in Computer Science and related fields. Hands-on experience as a FullStack Developer, working on system development using technologies such as ASP.NET, C#, JavaScript, Vue.js, PostgreSQL, and MongoDB. Fluent in English, capable of contributing to global projects. Committed and adaptable to working in dynamic and challenging environments, always striving for continuous improvement and excellence in results. ',
      },
      skills: {
        title: 'Skills',
        skillDev: 'Web Development',
        skillEnglish: 'English',
        skillPt: 'Portuguese',
      },
      experience: {
        title: 'Experience',
        ex1: {
          title: 'FullStack Developer',
          time: 'Dec/2023 - Dec/2024',
          description:
            'At Trival, I was responsible for opening calls for clients and developing fullstack systems, using technologies such as ASP.NET, C#, MongoDB, PostgreSQL, JavaScript, Vue and Vuetify.',
        },
        ex2: {
          title: 'Assembling Computer Networks',
          time: 'Aug/2022 - Dec/2022',
          description:
            "Under the instruction of Elson Gomes Santana, I assisted in assembling the computer network in the school's computer room.",
        },
      },
      studies: {
        title: 'Education',
        std1: {
          title: "Bachelor's degree - Computer Science",
          time: 'Aug/2023 - Aug/2027',
        },
        std2: {
          title: 'Technical Education - Internet Computing',
          time: 'Aug/2021 - Dec/2022',
        },
        std3: {
          title:
            'Technical Education - Assembly and Configuration of Windows Computers and Networks',
        },
      },
    },
    portfolioPage: {
      snakeGame: 'Snake Game in C#',
    },
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
})
