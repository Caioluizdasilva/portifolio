document.addEventListener("DOMContentLoaded", function() {

    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const hamburger = document.getElementById('hamburger-icon');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        const navLinks = navMenu.querySelectorAll('a');
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- LÓGICA DO FORMULÁRIO DE CONTATO COM FORMSPREE ---
    const form = document.getElementById("contactForm");
    
    async function handleSubmit(event) {
      event.preventDefault();
      const status = document.getElementById("form-status");
      const data = new FormData(event.target);
      
      try {
        const response = await fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          status.textContent = "Mensagem enviada com sucesso!";
          status.style.color = 'var(--amarelo-secundario)';
          form.reset();
        } else {
          const responseData = await response.json();
          if (Object.hasOwn(responseData, 'errors')) {
            status.textContent = responseData["errors"].map(error => error["message"]).join(", ");
          } else {
            status.textContent = "Oops! Houve um problema ao enviar seu formulário.";
          }
          status.style.color = 'red';
        }
      } catch (error) {
        status.textContent = "Oops! Houve um problema ao enviar seu formulário.";
        status.style.color = 'red';
      }
    }

    if (form) {
      form.addEventListener("submit", handleSubmit);
    }

    // --- LÓGICA DO HEADER QUE ENCOLHE AO ROLAR ---
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- LÓGICA DO SISTEMA DE ABAS (EXPERIÊNCIA) ---
    const tabsContainer = document.querySelector('.experience-tabs');
    if (tabsContainer) {
        const contentPanels = document.querySelectorAll('.content-panel');
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabsContainer.addEventListener('click', function(e) {
            const targetButton = e.target.closest('.tab-btn');
            if (targetButton) {
                const targetId = targetButton.dataset.target;
                tabButtons.forEach(btn => btn.classList.remove('active'));
                contentPanels.forEach(panel => panel.classList.remove('active'));
                targetButton.classList.add('active');
                const targetPanel = document.getElementById(targetId);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            }
        });
    }

    // --- DICIONÁRIO DE TRADUÇÕES ---
    const translations = {
        pt: {
            navHome: "Home",
            navServices: "Serviços",
            navProjects: "Projetos",
            navExperience: "Experiência",
            navEducation: "Formação",
            navCourses: "Cursos",
            navClasses: "Aulas",
            navContact: "Contato",
            heroGreeting: "Olá, eu sou",
            heroIntro: "e sou um ",
            heroTyping: ["Desenvolvedor Full Stack", "Designer UX/UI", "Entusiasta de Tecnologia", "Freelancer"],
            heroDescription: "Desenvolvedor apaixonado por transformar ideias em realidade digital, criando soluções criativas e funcionais que resolvem problemas reais.",
            heroButton: "Download CV",
            servicesTitle: "Meus Serviços",
            service1Title: "Web Development",
            service1Desc: "Construo websites e sistemas customizados que destacam a identidade da sua marca.",
            service2Title: "UX Design",
            service2Desc: "Mergulho no comportamento do usuário para projetar soluções que encantam e resolvem problemas reais.",
            service3Title: "UI Design",
            service3Desc: "Crio interfaces visuais atraentes, intuitivas e consistentes em todos os dispositivos.",
            service4Title: "Mobile Development",
            service4Desc: "Desenvolvo aplicativos móveis funcionais e com ótima performance para diversas plataformas.",
            projectsTitle: "Projetos Recentes",
            projectButton: "Ver Projeto",
            project1Title: "MySongs Java",
            project1Desc: "Encapsulador de músicas desenvolvido em Java, permitindo organizar e gerenciar coleções de áudio de forma eficiente.",
            project2Title: "Landing Page de Restaurante",
            project2Desc: "Página de aterrissagem moderna e responsiva para um restaurante, focada na conversão e na experiência do usuário.",
            project3Title: "Calculadora de Calorias",
            project3Desc: "Ferramenta web para cálculo de consumo diário de calorias, com interface limpa e resultados instantâneos.",
            project4Title: "App de Clima",
            project4Desc: "Aplicação que consulta APIs para exibir a previsão do tempo em tempo real de qualquer cidade do mundo.",
            project5Title: "Gerador de Senhas",
            project5Desc: "Crie senhas seguras e customizáveis com esta ferramenta, ajustando comprimento e tipos de caracteres.",
            project6Title: "Calculadora IMC",
            project6Desc: "Uma calculadora simples e direta para medir o Índice de Massa Corporal, ajudando no acompanhamento da saúde.",
            project7Title: "Kanban Board",
            project7Desc: "Sistema de quadro Kanban para organização de tarefas, permitindo mover cards entre colunas de forma interativa.",
            project8Title: "Projeto Acessibilidade",
            project8Desc: "Estudo e aplicação de práticas de acessibilidade web (WCAG) para garantir que a navegação seja inclusiva para todos.",
            experienceTitle: "Experiência Profissional",
            exp1Tab: "Assistente Comercial",
            exp2Tab: "Estágio de Vendas",
            exp3Tab: "Estágio Full-stack",
            exp1Title: "Assistente Comercial",
            exp1Date: "jun 2024 - out 2024",
            exp1Desc: "Fortaleci a interação humana e o atendimento de excelência, fundamentais para construir relacionamentos duradouros com os clientes. Contribuí para o crescimento das vendas e a satisfação do cliente através da comunicação eficaz, organização estratégica e gerenciamento de leads no CRM.",
            exp2Title: "Estagiário de Vendas",
            exp2Date: "abr 2023 - jul 2024",
            exp2Desc: "Forneci atendimento comercial de qualidade, elaborei propostas comerciais e conduzi apresentações institucionais e de produtos. Contribuí ativamente na criação e publicação de conteúdo relevante para o blog da empresa.",
            exp3Title: "Estagiário Desenvolvedor Full-stack",
            exp3Date: "mai 2022 - dez 2022",
            exp3Desc: "Atuei na equipe de desenvolvimento do WeGIA. No front-end, utilizei HTML5, CSS3, JavaScript, React.js e Vue.js. No back-end, trabalhei com PHP e Laravel, APIs RESTful e modelagem de dados com MySQL.",
            educationTitle: "Formação",
            edu1Date: "jul 2021 - dez 2023",
            edu1Title: "Ensino Médio e Técnico em Informática",
            edu1Desc: "Formação técnica integrada ao ensino médio com foco em desenvolvimento de software, banco de dados e redes, seguindo as normas técnicas vigentes.",
            edu2Date: "out 2024",
            edu2Title: "Imersão Beta Hub by Mercado Livre - UX/UI",
            edu2Desc: "Imersão focada em Design de Experiência do Usuário (UX) e Interface do Usuário (UI), desenvolvendo competências em pesquisa, prototipação e trabalho em equipe.",
            edu3Date: "fev 2024",
            edu3Title: "Curso Básico de Eletrônica com Arduino",
            edu3Desc: "Curso de extensão com introdução a conceitos de eletrônica analógica/digital e desenvolvimento de projetos práticos com a plataforma Arduino.",
            coursesTitle: "Cursos e Certificações",
            course1Title: "Introdução à Experiência do Usuário (FGV)",
            course2Title: "Minicurso de Soft Skills (Cubos Academy)",
            course3Title: "Minicurso de UI/UX Design (Cubos Academy)",
            course4Title: "Curso de Python (Santander Open Academy)",
            course5Title: "Lógica de Programação com JavaScript",
            course6Title: "Curso de Java",
            course7Title: "Acessibilidade HTML (Alura)",
            classesTitle: "Meus Repositórios de Aulas",
            classButton: "Ver Repositório",
            class1Title: "Java",
            class1Desc: "Repositório com exercícios e projetos desenvolvidos durante meus estudos em Java, do básico ao avançado.",
            class2Title: "Python",
            class2Desc: "Códigos e pequenos projetos em Python, explorando bibliotecas para automação, análise de dados e web.",
            class3Title: "Linguagem C",
            class3Desc: "Implementações de estruturas de dados, algoritmos e conceitos de baixo nível estudados em Linguagem C.",
            class4Title: "JavaScript",
            class4Desc: "Projetos e exercícios práticos para dominar a manipulação do DOM, APIs e a lógica da principal linguagem da web.",
            class5Title: "PHP",
            class5Desc: "Estudos sobre desenvolvimento web backend com PHP, incluindo conexão com bancos de dados e criação de páginas dinâmicas.",
            contactTitle: "Vamos nos Conectar",
            contactInfoTitle: "Informações de Contato",
            contactFormTitle: "Envie uma Mensagem",
            formName: "Seu Nome",
            formEmail: "Seu E-mail",
            formMessage: "Sua Mensagem",
            formButton: "Enviar",
            footerText: "Todos os direitos reservados © 2025 bylcscaio"
        },
        en: {
            navHome: "Home",
            navServices: "Services",
            navProjects: "Projects",
            navExperience: "Experience",
            navEducation: "Education",
            navCourses: "Courses",
            navClasses: "Studies",
            navContact: "Contact",
            heroGreeting: "Hello, I am",
            heroIntro: "and I'm a ",
            heroTyping: ["Full Stack Developer", "UX/UI Designer", "Technology Enthusiast", "Freelancer"],
            heroDescription: "A passionate developer dedicated to turning ideas into digital reality, creating creative and functional solutions that solve real problems.",
            heroButton: "Download CV",
            servicesTitle: "My Services",
            service1Title: "Web Development",
            service1Desc: "I build custom websites and systems that highlight your brand's identity.",
            service2Title: "UX Design",
            service2Desc: "I dive into user behavior to design solutions that delight and solve real problems.",
            service3Title: "UI Design",
            service3Desc: "I create attractive, intuitive, and consistent visual interfaces across all devices.",
            service4Title: "Mobile Development",
            service4Desc: "I develop functional mobile applications with great performance for various platforms.",
            projectsTitle: "Recent Projects",
            projectButton: "View Project",
            project1Title: "MySongs Java",
            project1Desc: "Music encapsulator developed in Java, allowing efficient organization and management of audio collections.",
            project2Title: "Restaurant Landing Page",
            project2Desc: "A modern and responsive landing page for a restaurant, focused on conversion and user experience.",
            project3Title: "Calorie Calculator",
            project3Desc: "Web tool for calculating daily calorie consumption, with a clean interface and instant results.",
            project4Title: "Weather App",
            project4Desc: "Application that queries APIs to display real-time weather forecasts for any city in the world.",
            project5Title: "Password Generator",
            project5Desc: "Create secure and customizable passwords with this tool, adjusting length and character types.",
            project6Title: "BMI Calculator",
            project6Desc: "A simple and straightforward calculator to measure Body Mass Index, aiding in health monitoring.",
            project7Title: "Kanban Board",
            project7Desc: "Kanban board system for task organization, allowing cards to be moved interactively between columns.",
            project8Title: "Accessibility Project",
            project8Desc: "Study and application of web accessibility practices (WCAG) to ensure navigation is inclusive for everyone.",
            experienceTitle: "Professional Experience",
            exp1Tab: "Commercial Assistant",
            exp2Tab: "Sales Internship",
            exp3Tab: "Full-stack Internship",
            exp1Title: "Commercial Assistant",
            exp1Date: "Jun 2024 - Oct 2024",
            exp1Desc: "I strengthened human interaction and service excellence, essential for building lasting customer relationships. I contributed to sales growth and customer satisfaction through effective communication and CRM lead management.",
            exp2Title: "Sales Intern",
            exp2Date: "Apr 2023 - Jul 2024",
            exp2Desc: "I provided quality commercial service, prepared business proposals, and conducted institutional and product presentations. I actively contributed to creating and publishing relevant content for the company's blog.",
            exp3Title: "Full-stack Developer Intern",
            exp3Date: "May 2022 - Dec 2022",
            exp3Desc: "I worked on the WeGIA development team. On the front-end, I used HTML5, CSS3, JavaScript, React.js, and Vue.js. On the back-end, I worked with PHP, Laravel, RESTful APIs, and MySQL data modeling.",
            educationTitle: "Education",
            edu1Date: "Jul 2021 - Dec 2023",
            edu1Title: "High School & Technical Degree in Informatics",
            edu1Desc: "Technical education integrated with high school focusing on software development, databases, and networks, following current technical standards.",
            edu2Date: "Oct 2024",
            edu2Title: "Beta Hub Immersion by Mercado Livre - UX/UI",
            edu2Desc: "Immersion focused on User Experience (UX) and User Interface (UI) Design, developing skills in research, prototyping, and teamwork.",
            edu3Date: "Feb 2024",
            edu3Title: "Basic Electronics Course with Arduino",
            edu3Desc: "Extension course introducing fundamental concepts of analog/digital electronics and practical project development with the Arduino platform.",
            coursesTitle: "Courses & Certifications",
            course1Title: "Introduction to User Experience (FGV)",
            course2Title: "Soft Skills Minicurse (Cubos Academy)",
            course3Title: "UI/UX Design Minicurse (Cubos Academy)",
            course4Title: "Python Course (Santander Open Academy)",
            course5Title: "Programming Logic with JavaScript",
            course6Title: "Java Course",
            course7Title: "HTML Accessibility (Alura)",
            classesTitle: "My Study Repositories",
            classButton: "View Repository",
            class1Title: "Java",
            class1Desc: "Repository with exercises and projects developed during my Java studies, from basic to advanced.",
            class2Title: "Python",
            class2Desc: "Code and small projects in Python, exploring libraries for automation, data analysis, and web.",
            class3Title: "C Language",
            class3Desc: "Implementations of data structures, algorithms, and low-level concepts studied in the C language.",
            class4Title: "JavaScript",
            class4Desc: "Projects and practical exercises to master DOM manipulation, APIs, and the logic of the main web language.",
            class5Title: "PHP",
            class5Desc: "Studies on backend web development with PHP, including database connection and dynamic page creation.",
            contactTitle: "Let's Connect",
            contactInfoTitle: "Contact Information",
            contactFormTitle: "Send a Message",
            formName: "Your Name",
            formEmail: "Your Email",
            formMessage: "Your Message",
            formButton: "Send",
            footerText: "All rights reserved © 2025 bylcscaio"
        },
        es: {
             navHome: "Inicio",
            navServices: "Servicios",
            navProjects: "Proyectos",
            navExperience: "Experiencia",
            navEducation: "Formación",
            navCourses: "Cursos",
            navClasses: "Estudios",
            navContact: "Contacto",
            heroGreeting: "Hola, soy",
            heroIntro: "y soy un ",
            heroTyping: ["Desarrollador Full Stack", "Diseñador UX/UI", "Entusiasta de la Tecnología", "Freelancer"],
            heroDescription: "Un desarrollador apasionado por convertir ideas en realidad digital, creando soluciones creativas y funcionales que resuelven problemas reales.",
            heroButton: "Descargar CV",
            servicesTitle: "Mis Servicios",
            service1Title: "Desarrollo Web",
            service1Desc: "Construyo sitios web y sistemas personalizados que resaltan la identidad de tu marca.",
            service2Title: "Diseño UX",
            service2Desc: "Me sumerjo en el comportamiento del usuario para diseñar soluciones que encantan y resuelven problemas reales.",
            service3Title: "Diseño UI",
            service3Desc: "Creo interfaces visuales atractivas, intuitivas y consistentes en todos los dispositivos.",
            service4Title: "Desarrollo Móvil",
            service4Desc: "Desarrollo aplicaciones móviles funcionales y con gran rendimiento para diversas plataformas.",
            projectsTitle: "Proyectos Recientes",
            projectButton: "Ver Proyecto",
            project1Title: "MySongs Java",
            project1Desc: "Encapsulador de música desarrollado en Java, que permite organizar y gestionar colecciones de audio de forma eficiente.",
            project2Title: "Landing Page de Restaurante",
            project2Desc: "Página de aterrizaje moderna y responsiva para un restaurante, enfocada en la conversión y la experiencia del usuario.",
            project3Title: "Calculadora de Calorías",
            project3Desc: "Herramienta web para el cálculo del consumo diario de calorías, con una interfaz limpia y resultados instantáneos.",
            project4Title: "App del Clima",
            project4Desc: "Aplicación que consulta APIs para mostrar el pronóstico del tiempo en tiempo real de cualquier ciudad del mundo.",
            project5Title: "Generador de Contraseñas",
            project5Desc: "Crea contraseñas seguras y personalizables con esta herramienta, ajustando la longitud y los tipos de caracteres.",
            project6Title: "Calculadora de IMC",
            project6Desc: "Una calculadora simple y directa para medir el Índice de Masa Corporal, ayudando en el seguimiento de la salud.",
            project7Title: "Tablero Kanban",
            project7Desc: "Sistema de tablero Kanban para la organización de tareas, permitiendo mover tarjetas interactivamente entre columnas.",
            project8Title: "Proyecto de Accesibilidad",
            project8Desc: "Estudio y aplicación de prácticas de accesibilidad web (WCAG) para garantizar que la navegación sea inclusiva para todos.",
            experienceTitle: "Experiencia Profesional",
            exp1Tab: "Asistente Comercial",
            exp2Tab: "Pasantía de Ventas",
            exp3Tab: "Pasantía Full-stack",
            exp1Title: "Asistente Comercial",
            exp1Date: "jun 2024 - oct 2024",
            exp1Desc: "Fortalecí la interacción humana y la atención de excelencia, claves para construir relaciones duraderas con los clientes. Contribuí al crecimiento de las ventas y la satisfacción del cliente a través de una comunicación eficaz y la gestión de leads en CRM.",
            exp2Title: "Pasante de Ventas",
            exp2Date: "abr 2023 - jul 2024",
            exp2Desc: "Proporcioné un servicio comercial de calidad, preparé propuestas comerciales y realicé presentaciones institucionales y de productos. Contribuí activamente en la creación y publicación de contenido relevante para el blog de la empresa.",
            exp3Title: "Pasante de Desarrollador Full-stack",
            exp3Date: "may 2022 - dic 2022",
            exp3Desc: "Trabajé en el equipo de desarrollo de WeGIA. En el front-end, utilicé HTML5, CSS3, JavaScript, React.js y Vue.js. En el back-end, trabajé con PHP, Laravel, APIs RESTful y modelado de datos con MySQL.",
            educationTitle: "Formación",
            edu1Date: "jul 2021 - dic 2023",
            edu1Title: "Bachillerato y Técnico en Informática",
            edu1Desc: "Formación técnica integrada con bachillerato, enfocada en desarrollo de software, bases de datos y redes, siguiendo las normas técnicas vigentes.",
            edu2Date: "oct 2024",
            edu2Title: "Inmersión Beta Hub by Mercado Livre - UX/UI",
            edu2Desc: "Inmersión centrada en el Diseño de Experiencia de Usuario (UX) e Interfaz de Usuario (UI), desarrollando habilidades en investigación, prototipado y trabajo en equipo.",
            edu3Date: "feb 2024",
            edu3Title: "Curso Básico de Electrónica con Arduino",
            edu3Desc: "Curso de extensión con introducción a conceptos de electrónica analógica/digital y desarrollo de proyectos prácticos con la plataforma Arduino.",
            coursesTitle: "Cursos y Certificaciones",
            course1Title: "Introducción a la Experiencia de Usuario (FGV)",
            course2Title: "Minicurso de Habilidades Blandas (Cubos Academy)",
            course3Title: "Minicurso de Diseño UI/UX (Cubos Academy)",
            course4Title: "Curso de Python (Santander Open Academy)",
            course5Title: "Lógica de Programación con JavaScript",
            course6Title: "Curso de Java",
            course7Title: "Accesibilidad HTML (Alura)",
            classesTitle: "Mis Repositorios de Estudio",
            classButton: "Ver Repositorio",
            class1Title: "Java",
            class1Desc: "Repositorio con ejercicios y proyectos desarrollados durante mis estudios de Java, desde básico hasta avanzado.",
            class2Title: "Python",
            class2Desc: "Códigos y pequeños proyectos en Python, explorando bibliotecas para automatización, análisis de datos y web.",
            class3Title: "Lenguaje C",
            class3Desc: "Implementaciones de estructuras de datos, algoritmos y conceptos de bajo nivel estudiados en el lenguaje C.",
            class4Title: "JavaScript",
            class4Desc: "Proyectos y ejercicios prácticos para dominar la manipulación del DOM, APIs y la lógica del principal lenguaje de la web.",
            class5Title: "PHP",
            class5Desc: "Estudios sobre desarrollo web backend con PHP, incluyendo conexión a bases de datos y creación de páginas dinámicas.",
            contactTitle: "Conectemos",
            contactInfoTitle: "Información de Contacto",
            contactFormTitle: "Enviar un Mensaje",
            formName: "Tu Nombre",
            formEmail: "Tu Email",
            formMessage: "Tu Mensaje",
            formButton: "Enviar",
            footerText: "Todos los derechos reservados © 2025 bylcscaio"
        },
        fr: {
            navHome: "Accueil",
            navServices: "Services",
            navProjects: "Projets",
            navExperience: "Expérience",
            navEducation: "Formation",
            navCourses: "Cours",
            navClasses: "Études",
            navContact: "Contact",
            heroGreeting: "Bonjour, je suis",
            heroIntro: "et je suis un ",
            heroTyping: ["Développeur Full Stack", "Designer UX/UI", "Passionné de Technologie", "Freelance"],
            heroDescription: "Un développeur passionné par la transformation des idées en réalité numérique, créant des solutions créatives et fonctionnelles qui résolvent de vrais problèmes.",
            heroButton: "Télécharger CV",
            servicesTitle: "Mes Services",
            service1Title: "Développement Web",
            service1Desc: "Je construis des sites web et des systèmes personnalisés qui mettent en valeur l'identité de votre marque.",
            service2Title: "Design UX",
            service2Desc: "Je me plonge dans le comportement de l'utilisateur pour concevoir des solutions qui ravissent et résolvent de vrais problèmes.",
            service3Title: "Design UI",
            service3Desc: "Je crée des interfaces visuelles attrayantes, intuitives et cohérentes sur tous les appareils.",
            service4Title: "Développement Mobile",
            service4Desc: "Je développe des applications mobiles fonctionnelles et performantes pour diverses plateformes.",
            projectsTitle: "Projets Récents",
            projectButton: "Voir le Projet",
            project1Title: "MySongs Java",
            project1Desc: "Encapsuleur de musique développé en Java, permettant d'organiser et de gérer efficacement des collections audio.",
            project2Title: "Page d'Accueil de Restaurant",
            project2Desc: "Une page d'accueil moderne et réactive pour un restaurant, axée sur la conversion et l'expérience utilisateur.",
            project3Title: "Calculateur de Calories",
            project3Desc: "Outil web pour calculer la consommation calorique quotidienne, avec une interface épurée et des résultats instantanés.",
            project4Title: "App Météo",
            project4Desc: "Application qui interroge des API pour afficher les prévisions météorologiques en temps réel de n'importe quelle ville du monde.",
            project5Title: "Générateur de Mots de Passe",
            project5Desc: "Créez des mots de passe sécurisés et personnalisables avec cet outil, en ajustant la longueur et les types de caractères.",
            project6Title: "Calculateur d'IMC",
            project6Desc: "Un calculateur simple et direct pour mesurer l'Indice de Masse Corporelle, aidant au suivi de la santé.",
            project7Title: "Tableau Kanban",
            project7Desc: "Système de tableau Kanban pour l'organisation des tâches, permettant de déplacer des cartes de manière interactive entre les colonnes.",
            project8Title: "Projet d'Accessibilité",
            project8Desc: "Étude et application des pratiques d'accessibilité web (WCAG) pour garantir une navigation inclusive pour tous.",
            experienceTitle: "Expérience Professionnelle",
            exp1Tab: "Assistant Commercial",
            exp2Tab: "Stage en Ventes",
            exp3Tab: "Stage Full-stack",
            exp1Title: "Assistant Commercial",
            exp1Date: "juin 2024 - oct 2024",
            exp1Desc: "J'ai renforcé l'interaction humaine et l'excellence du service, essentielles pour bâtir des relations durables avec les clients. J'ai contribué à la croissance des ventes et à la satisfaction client grâce à une communication efficace et à la gestion des leads dans le CRM.",
            exp2Title: "Stagiaire en Ventes",
            exp2Date: "avr 2023 - juil 2024",
            exp2Desc: "J'ai fourni un service commercial de qualité, préparé des propositions commerciales et mené des présentations institutionnelles et de produits. J'ai activement contribué à la création et à la publication de contenu pertinent pour le blog de l'entreprise.",
            exp3Title: "Stagiaire Développeur Full-stack",
            exp3Date: "mai 2022 - déc 2022",
            exp3Desc: "J'ai travaillé dans l'équipe de développement de WeGIA. En front-end, j'ai utilisé HTML5, CSS3, JavaScript, React.js et Vue.js. En back-end, j'ai travaillé avec PHP, Laravel, les API RESTful et la modélisation de données avec MySQL.",
            educationTitle: "Formation",
            edu1Date: "juil 2021 - déc 2023",
            edu1Title: "Lycée et Diplôme Technique en Informatique",
            edu1Desc: "Formation technique intégrée au lycée, axée sur le développement de logiciels, les bases de données et les réseaux, conformément aux normes techniques en vigueur.",
            edu2Date: "oct 2024",
            edu2Title: "Immersion Beta Hub par Mercado Livre - UX/UI",
            edu2Desc: "Immersion axée sur le Design de l'Expérience Utilisateur (UX) et de l'Interface Utilisateur (UI), développant des compétences en recherche, prototypage et travail d'équipe.",
            edu3Date: "fév 2024",
            edu3Title: "Cours de Base en Électronique avec Arduino",
            edu3Desc: "Cours d'extension introduisant les concepts fondamentaux de l'électronique analogique/numérique et le développement de projets pratiques avec la plateforme Arduino.",
            coursesTitle: "Cours et Certifications",
            course1Title: "Introduction à l'Expérience Utilisateur (FGV)",
            course2Title: "Mini-cours sur les Compétences Non Techniques (Cubos Academy)",
            course3Title: "Mini-cours de Design UI/UX (Cubos Academy)",
            course4Title: "Cours de Python (Santander Open Academy)",
            course5Title: "Logique de Programmation avec JavaScript",
            course6Title: "Cours de Java",
            course7Title: "Accessibilité HTML (Alura)",
            classesTitle: "Mes Dépôts d'Étude",
            classButton: "Voir le Dépôt",
            class1Title: "Java",
            class1Desc: "Dépôt avec des exercices et des projets développés lors de mes études de Java, du basique à l'avancé.",
            class2Title: "Python",
            class2Desc: "Codes et petits projets en Python, explorant des bibliothèques pour l'automatisation, l'analyse de données et le web.",
            class3Title: "Langage C",
            class3Desc: "Implémentations de structures de données, d'algorithmes et de concepts de bas niveau étudiés en langage C.",
            class4Title: "JavaScript",
            class4Desc: "Projets et exercices pratiques pour maîtriser la manipulation du DOM, les API et la logique du principal langage du web.",
            class5Title: "PHP",
            class5Desc: "Études sur le développement web backend avec PHP, y compris la connexion aux bases de données et la création de pages dinámicas.",
            contactTitle: "Connectons-nous",
            contactInfoTitle: "Informations de Contact",
            contactFormTitle: "Envoyer un Message",
            formName: "Votre Nom",
            formEmail: "Votre E-mail",
            formMessage: "Votre Message",
            formButton: "Envoyer",
            footerText: "Tous droits réservés © 2025 bylcscaio"
        }
    };

    // --- LÓGICA DE TRADUÇÃO ---
    const languageSwitcher = document.querySelector('.language-switcher');
    const langLinks = document.querySelectorAll('.lang-link');
    let currentLang = localStorage.getItem('language') || 'pt';

    function setLanguage(lang) {
        localStorage.setItem('language', lang);
        currentLang = lang;
        document.documentElement.setAttribute('lang', lang);
        const translation = translations[lang];
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translation[key]) {
                element.textContent = translation[key];
            }
        });
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translation[key]) {
                element.placeholder = translation[key];
            }
        });
        langLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-lang') === lang) {
                link.classList.add('active');
            }
        });
        resetTypingEffect();
    }

    if (languageSwitcher) {
        languageSwitcher.addEventListener('click', (e) => {
            e.preventDefault();
            const link = e.target.closest('.lang-link');
            if (link) {
                const lang = link.getAttribute('data-lang');
                if (lang !== currentLang) {
                    setLanguage(lang);
                }
            }
        });
    }

    // --- EFEITO DE DIGITAÇÃO ---
    const changingText = document.getElementById('changing-text');
    let wordIndex = 0, charIndex = 0, isDeleting = false, typingTimeout;
    const typingSpeed = 150, deletingSpeed = 100, delayBetweenWords = 2000;

    function type() {
        clearTimeout(typingTimeout);
        const words = translations[currentLang]?.heroTyping;
        if (!words || words.length === 0) return;
        const currentWord = words[wordIndex];
        if (isDeleting) {
            changingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            changingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        if (!isDeleting && charIndex === currentWord.length) {
            typingTimeout = setTimeout(() => isDeleting = true, delayBetweenWords);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
        const time = isDeleting ? deletingSpeed : typingSpeed;
        typingTimeout = setTimeout(type, time);
    }

    function resetTypingEffect() {
        clearTimeout(typingTimeout);
        wordIndex = 0;
        charIndex = 0;
        isDeleting = false;
        if (changingText) {
            type();
        }
    }

    // --- INICIALIZAÇÃO DA PÁGINA ---
    setLanguage(currentLang);
});