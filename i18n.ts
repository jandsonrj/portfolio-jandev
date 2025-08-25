export const content = {
  pt: {
    header: {
      navLinks: [
        { href: '#home', label: 'Início' },
        { href: '#about', label: 'Sobre' },
        { href: '#services', label: 'Serviços' },
        { href: '#skills', label: 'Especialidade' },
        { href: '#projects', label: 'Projetos' },
        { href: '#contact', label: 'Contato' },
      ],
      langButton: 'EN'
    },
    hero: {
      greeting: 'Resolvendo problemas complexos com código elegante.',
      name: 'Eu sou Jandson Vitorino.',
      intro: 'E eu crio',
      typingTexts: ["Experiências Web Intuitivas", "Automações com Inteligência Artificial", "Soluções Digitais Inovadoras", "Software de Alta Performance"],
      button: 'Contratar-me'
    },
    about: {
      title: 'Sobre',
      subtitle: 'Quem sou eu',
      greeting: 'Sou Jandson,',
      role: 'Engenheiro de Software Pleno',
      p1: 'Curioso por tecnologia desde cedo, encontrei no desenvolvimento de software uma forma de transformar ideias em produtos. Hoje, aos 27 anos e atuando como Engenheiro de Software Pleno na benext.ai, combino minha paixão por frontend com o poder da Inteligência Artificial para resolver problemas complexos do mundo real.',
      p2: 'Minha especialidade é a integração de modelos de IA como Gemini/GPT em aplicações web, utilizando Vertex AI e LangChain para criar automações e chatbots inteligentes. Cuido de todo o ciclo, desde a engenharia de prompts e avaliação de qualidade até a construção de interfaces com React e Next.js, e o deployment de serviços em nuvem (GCP) com Docker.',
      p3: 'Na área de NLP, trabalho com classificação, análise de sentimentos, Q&A e sumarização. Sou formado em Análise e Desenvolvimento de Sistemas, com pós-graduações em Engenharia de Software e Engenharia de Dados, e coloco ativamente em equipes usando Git/GitHub para garantir código limpo e bem documentado.',
      p4: 'Fora do teclado, busco equilíbrio na musculação, corrida e trilhas. Sou movido por desafios e estou sempre aprendendo, com o objetivo de me aprofundar em IA/RAG em produção e continuar crescendo na minha carreira.',
      button: 'Abrir Currículo'
    },
    services: {
      title: 'Serviços',
      subtitle: 'Que ofereço',
      list: [
        {
          iconKey: 'frontend',
          title: 'Engenharia de Frontend',
          description: 'Desenvolvimento de interfaces modernas e responsivas com React, Next.js e Material-UI, focadas na experiência do usuário.',
        },
        {
          iconKey: 'ai',
          title: 'Inteligência Artificial Aplicada',
          description: 'Integração de modelos de IA (Gemini/GPT) em aplicações, cobrindo de prompt engineering a automações inteligentes.',
        },
        {
          iconKey: 'cloud',
          title: 'Soluções em Nuvem',
          description: 'Criação e implantação de serviços backend (Node.js/FastAPI) e bancos de dados (PostgreSQL) na GCP com Docker.',
        },
      ]
    },
    skills: {
        title: 'Especialidades',
        subtitle: 'Que faço',
        heading: 'Minhas habilidades criativas e experiências',
        p1: 'Como Engenheiro de Software Pleno, meu foco é na criação de soluções de ponta a ponta, unindo interfaces de usuário performáticas com a inteligência de modelos de IA. Tenho experiência em todo o ciclo de vida do desenvolvimento, desde a concepção e arquitetura até a implantação e manutenção em ambientes de nuvem, garantindo entregas robustas e escaláveis.',
        button: 'Mais informações',
        list: [
          { name: 'React / Next.js', percentage: 90 },
          { name: 'TypeScript / JavaScript', percentage: 85 },
          { name: 'Node.js / Python', percentage: 80 },
          { name: 'IA & NLP (Gemini, LangChain)', percentage: 80 },
          { name: 'GCP / Docker', percentage: 70 },
          { name: 'SQL (PostgreSQL / MySQL)', percentage: 75 },
        ]
    },
    projects: {
        title: 'Meus Projetos',
        subtitle: 'Projetos',
        list: [
          {
            imgSrc: '/assets/calculator.jpg',
            title: 'Calculadora',
            description: 'Resolvi por em prática tudo o que aprendi durante os cursos complementares, e logo veio a ideia de desenvolver minha própria calculadora, usando: HTML, CSS E JavaScript.',
            link: 'https://jandsonrj.github.io/calculadora/',
          },
          {
            imgSrc: '/assets/stopwatch.jpg',
            title: 'Cronômetro',
            description: 'Buscando aprimorar meus conhecimentos com a linguagem de programação JavaScript resolvi desenvolver esse cronômetro digital, projeto um tanto quanto básico, porém bem intuitivo.',
            link: 'https://jandsonrj.github.io/cronometro/',
          },
          {
            imgSrc: '/assets/background.png',
            title: 'Meu Portfólio',
            description: 'Com o intuito de compartilhar minha biografia com vocês e também está mostrando alguns projetos sem precisar me preocupar com limitações eu desenvolvi meu próprio Portfólio.',
            link: '#',
          },
          {
            imgSrc: '/assets/pws.png',
            title: 'PW-Sorvetes',
            description: 'Desafio prático para uma vaga de Desenvolvedor. Criei um site único, que se destaca pela sua originalidade em comparação com soluções convencionais.',
            link: 'https://jandsonrj.github.io/projetopws/',
          },
          {
            imgSrc: '/assets/pokemon.png',
            title: 'Pokémon',
            description: 'Este projeto é uma aplicação básica que utiliza a PokeAPI para exibir uma lista de Pokémon e seus detalhes.',
            link: 'https://pokemon-ionic-app.vercel.app/',
          },
        ]
    },
    contact: {
        title: 'Contato',
        subtitle: 'Contate-me',
        heading: 'Contate-me nos canais abaixo 👇',
        info: {
            name: { head: 'Nome', sub: 'Jandson Vitorino' },
            address: { head: 'Endereço', sub: 'Rio de Janeiro, RJ' },
            email: { head: 'Email', sub: 'jandson1512@gmail.com' },
            whatsapp: { head: 'WhatsApp', sub: 'Fale comigo' }
        },
        form: {
            heading: 'Mensagem',
            namePlaceholder: 'Digite seu nome',
            emailPlaceholder: 'Digite seu Email',
            messagePlaceholder: 'Descreva aqui o motivo do contato...',
            button: 'Enviar',
            sendingButton: 'Enviando...',
            successMessage: 'Sua mensagem foi enviada com sucesso! Obrigado pelo contato.',
            errorMessage: 'Ocorreu um erro ao enviar a mensagem. Tente novamente.'
        }
    },
    footer: {
        developedBy: 'Desenvolvido por',
        author: 'JANDev',
        rights: '| Todos os direitos reservados 2024 ©'
    },
    chatbot: {
      title: 'Assistente IA',
      welcomeMessage: 'Olá! 👋 Sou o assistente virtual do Jandson. Como posso ajudar com informações sobre o portfólio dele?',
      inputPlaceholder: 'Pergunte sobre skills, projetos...'
    }
  },
  en: {
    header: {
      navLinks: [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#services', label: 'Services' },
        { href: '#skills', label: 'Specialty' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
      ],
      langButton: 'PT'
    },
    hero: {
      greeting: 'Solving complex problems with elegant code.',
      name: "I'm Jandson Vitorino.",
      intro: 'And I create',
      typingTexts: ["Intuitive Web Experiences", "Automations with Artificial Intelligence", "Innovative Digital Solutions", "High-Performance Software"],
      button: 'Hire me'
    },
    about: {
      title: 'About',
      subtitle: 'Who I am',
      greeting: "I'm Jandson,",
      role: 'Mid-level Software Engineer',
      p1: 'Curious about technology from an early age, I found in software development a way to turn ideas into products. Today, at 27 and working as a Mid-level Software Engineer at benext.ai, I combine my passion for frontend with the power of Artificial Intelligence to solve complex real-world problems.',
      p2: 'My specialty is integrating AI models like Gemini/GPT into web applications, using Vertex AI and LangChain to create automations and intelligent chatbots. I handle the entire cycle, from prompt engineering and quality assessment to building interfaces with React and Next.js, and deploying services in the cloud (GCP) with Docker.',
      p3: 'In the NLP field, I work on classification, sentiment analysis, Q&A, and summarization. I have a degree in Systems Analysis and Development, with post-graduate degrees in Software Engineering and Data Engineering, and I actively collaborate in teams using Git/GitHub to ensure clean and well-documented code.',
      p4: 'Outside of the keyboard, I find balance in weight training, running, and hiking. I am driven by challenges and am always learning, aiming to delve deeper into AI/RAG in production and continue to grow in my career.',
      button: 'Open Resume'
    },
    services: {
      title: 'Services',
      subtitle: 'What I offer',
      list: [
        {
          iconKey: 'frontend',
          title: 'Frontend Engineering',
          description: 'Development of modern and responsive interfaces with React, Next.js, and Material-UI, focused on user experience.',
        },
        {
          iconKey: 'ai',
          title: 'Applied Artificial Intelligence',
          description: 'Integration of AI models (Gemini/GPT) into applications, covering everything from prompt engineering to intelligent automations.',
        },
        {
          iconKey: 'cloud',
          title: 'Cloud Solutions',
          description: 'Creation and deployment of backend services (Node.js/FastAPI) and databases (PostgreSQL) on GCP with Docker.',
        },
      ]
    },
    skills: {
        title: 'Specialties',
        subtitle: 'What I do',
        heading: 'My creative skills and experiences',
        p1: 'As a Mid-level Software Engineer, my focus is on creating end-to-end solutions, combining high-performance user interfaces with the intelligence of AI models. I have experience throughout the entire development lifecycle, from conception and architecture to deployment and maintenance in cloud environments, ensuring robust and scalable deliveries.',
        button: 'More information',
        list: [
          { name: 'React / Next.js', percentage: 90 },
          { name: 'TypeScript / JavaScript', percentage: 85 },
          { name: 'Node.js / Python', percentage: 80 },
          { name: 'AI & NLP (Gemini, LangChain)', percentage: 80 },
          { name: 'GCP / Docker', percentage: 70 },
          { name: 'SQL (PostgreSQL / MySQL)', percentage: 75 },
        ]
    },
    projects: {
        title: 'My Projects',
        subtitle: 'Projects',
        list: [
          {
            imgSrc: '/assets/calculator.jpg',
            title: 'Calculator',
            description: 'I decided to practice what I learned in complementary courses and came up with the idea of developing my own calculator using HTML, CSS, and JavaScript.',
            link: 'https://jandsonrj.github.io/calculadora/',
          },
          {
            imgSrc: '/assets/stopwatch.jpg',
            title: 'Stopwatch',
            description: 'To improve my JavaScript skills, I developed this digital stopwatch. It is a basic but very intuitive project.',
            link: 'https://jandsonrj.github.io/cronometro/',
          },
          {
            imgSrc: '/assets/background.png',
            title: 'My Portfolio',
            description: 'To share my biography with you and showcase some projects without worrying about limitations, I developed my own portfolio.',
            link: '#',
          },
          {
            imgSrc: '/assets/pws.png',
            title: 'PW-IceCream',
            description: 'A practical challenge for a Developer position. I created a unique website that stands out for its originality compared to conventional solutions.',
            link: 'https://jandsonrj.github.io/projetopws/',
          },
          {
            imgSrc: '/assets/pokemon.png',
            title: 'Pokémon',
            description: 'This project is a basic application that uses the PokeAPI to display a list of Pokémon and their details.',
            link: 'https://pokemon-ionic-app.vercel.app/',
          },
        ]
    },
    contact: {
        title: 'Contact',
        subtitle: 'Get in touch',
        heading: 'Contact me through the channels below 👇',
        info: {
            name: { head: 'Name', sub: 'Jandson Vitorino' },
            address: { head: 'Address', sub: 'Rio de Janeiro, RJ' },
            email: { head: 'Email', sub: 'jandson1512@gmail.com' },
            whatsapp: { head: 'WhatsApp', sub: 'Talk to me' }
        },
        form: {
            heading: 'Message me',
            namePlaceholder: 'Enter your name',
            emailPlaceholder: 'Enter your Email',
            messagePlaceholder: 'Describe the reason for your contact here...',
            button: 'Send',
            sendingButton: 'Sending...',
            successMessage: 'Your message has been sent successfully! Thank you for getting in touch.',
            errorMessage: 'An error occurred while sending the message. Please try again.'
        }
    },
    footer: {
        developedBy: 'Developed by',
        author: 'JANDev',
        rights: '| All rights reserved 2024 ©'
    },
    chatbot: {
      title: 'AI Assistant',
      welcomeMessage: "Hi! 👋 I'm Jandson's virtual assistant. How can I help you with information about his portfolio?",
      inputPlaceholder: 'Ask about skills, projects...'
    }
  }
};