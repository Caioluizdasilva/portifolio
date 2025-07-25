document.addEventListener("DOMContentLoaded", function() {

    // --- LÓGICA DO FUNDO INTERATIVO (BLOB) ---
    const blob = document.getElementById("blob");
    if (blob) {
        window.onpointermove = event => { 
            const { clientX, clientY } = event;
            blob.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, { duration: 3000, fill: "forwards" });
        };
    }

    // --- LÓGICA DA ANIMAÇÃO DE ROLAGEM ---
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% da seção está visível
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- NOVO: LÓGICA DO MINI-BLOB NOS CARDS DE HABILIDADE ---
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            item.style.setProperty('--mouse-x', `${x}px`);
            item.style.setProperty('--mouse-y', `${y}px`);
        });
    });

});

document.addEventListener("DOMContentLoaded", function() {

    // --- LÓGICA DO CARROSSEL DE TECNOLOGIAS ---
    const scrollers = document.querySelectorAll(".tech-scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }
    function addAnimation() {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);
            const scrollerInner = scroller.querySelector(".scroller-inner");
            const scrollerContent = Array.from(scrollerInner.children);
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }

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
            navSkills: "Habilidades",
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
            skillsTitle: "Habilidades Principais",
            skill1Title: "Desenvolvimento Web",
            skill1Desc: "Construo websites e sistemas customizados que destacam a identidade da sua marca.",
            skill2Title: "UX Design",
            skill2Desc: "Mergulho no comportamento do usuário para projetar soluções que encantam e resolvem problemas reais.",
            skill3Title: "UI Design",
            skill3Desc: "Crio interfaces visuais atraentes, intuitivas e consistentes em todos os dispositivos.",
            projectsTitle: "Projetos Recentes",
            projectButton: "Ver Projeto",
            experienceTitle: "Experiência Profissional",
            exp1Tab: "Assistente Comercial",
            exp2Tab: "Estágio de Vendas",
            exp3Tab: "Estágio Full-stack",
            exp1Title: "Assistente Comercial",
            exp1Preposition: "na",
            exp1Date: "jun 2024 - out 2024",
            exp1Desc: "Fortaleci a interação humana e o atendimento de excelência, fundamentais para construir relacionamentos duradouros com os clientes. Contribuí para o crescimento das vendas e a satisfação do cliente através da comunicação eficaz, organização estratégica e gerenciamento de leads no CRM.",
            exp2Title: "Estagiário de Vendas",
            exp2Preposition: "na",
            exp2Date: "abr 2023 - jul 2024",
            exp2Desc: "Forneci atendimento comercial de qualidade, elaborei propostas comerciais e conduzi apresentações institucionais e de produtos. Contribuí ativamente na criação e publicação de conteúdo relevante para o blog da empresa.",
            exp3Title: "Estagiário Desenvolvedor Full-stack",
            exp3Preposition: "no",
            exp3Date: "mai 2022 - dez 2022",
            exp3Desc: "Atuei na equipe de desenvolvimento do WeGIA. No front-end, utilizei HTML5, CSS3, JavaScript, React.js e Vue.js. No back-end, trabalhei com PHP e Laravel, APIs RESTful e modelagem de dados com MySQL.",
            educationTitle: "Formação",
            edu1Date: "jul 2021 - dez 2023",
            edu1Title: "Ensino Médio e Técnico em Informática",
            edu1Desc: "Formação técnica integrada ao ensino médio com foco em desenvolvimento de software, banco de dados e redes, seguindo as normas técnicas vigentes.",
            edu2Date: "fev 2024",
            edu2Title: "Curso Básico de Eletrônica com Arduino",
            edu2Desc: "Curso de extensão com introdução a conceitos de eletrônica analógica/digital e desenvolvimento de projetos práticos com a plataforma Arduino.",
            edu3Date: "out 2024",
            edu3Title: "Imersão Beta Hub by Mercado Livre - UX/UI",
            edu3Desc: "Imersão focada em Design de Experiência do Usuário (UX) e Interface do Usuário (UI), desenvolvendo competências em pesquisa, prototipação e trabalho em equipe.",
            coursesTitle: "Cursos e Certificações",
            institution: "Instituição",
            date: "Data",
            course1Title: "Introdução à UX (FGV)",
            course1Date: "ago 2024",
            course2Title: "Git e GitHub (DIO)",
            course2Date: "ago 2024",
            course3Title: "Programador sem Código",
            course3Date: "mar 2024",
            course4Title: "Formação JavaScript",
            course4Date: "jun 2025",
            course5Title: "Java: Primeira Aplicação",
            course5Date: "jun 2025",
            course6Title: "Acessibilidade HTML",
            course6Date: "jun 2025",
            classesTitle: "Meus Repositórios de Aulas",
            classButton: "Ver Repositório",
            contactTitle: "Vamos nos Conectar",
            contactInfoTitle: "Informações de Contato",
            contactSocialsTitle: "Me encontre nas redes",
            linkedinButton: "LinkedIn",
            githubButton: "GitHub",
            footerText: "Todos os direitos reservados © 2025 bylcscaio"
        },
        en: {
            navHome: "Home",
            navSkills: "Skills",
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
            skillsTitle: "Core Skills",
            skill1Title: "Web Development",
            skill1Desc: "I build custom websites and systems that highlight your brand's identity.",
            skill2Title: "UX Design",
            skill2Desc: "I dive into user behavior to design solutions that delight and solve real problems.",
            skill3Title: "UI Design",
            skill3Desc: "I create attractive, intuitive, and consistent visual interfaces across all devices.",
            projectsTitle: "Recent Projects",
            projectButton: "View Project",
            experienceTitle: "Professional Experience",
            exp1Tab: "Commercial Assistant",
            exp2Tab: "Sales Internship",
            exp3Tab: "Full-stack Internship",
            exp1Title: "Commercial Assistant",
            exp1Preposition: "at",
            exp1Date: "Jun 2024 - Oct 2024",
            exp1Desc: "I strengthened human interaction and service excellence, essential for building lasting customer relationships. I contributed to sales growth and customer satisfaction through effective communication and CRM lead management.",
            exp2Title: "Sales Intern",
            exp2Preposition: "at",
            exp2Date: "Apr 2023 - Jul 2024",
            exp2Desc: "I provided quality commercial service, prepared business proposals, and conducted institutional and product presentations. I actively contributed to creating and publishing relevant content for the company's blog.",
            exp3Title: "Full-stack Developer Intern",
            exp3Preposition: "at",
            exp3Date: "May 2022 - Dec 2022",
            exp3Desc: "I worked on the WeGIA development team. On the front-end, I used HTML5, CSS3, JavaScript, React.js, and Vue.js. On the back-end, I worked with PHP, Laravel, RESTful APIs, and MySQL data modeling.",
            educationTitle: "Education",
            edu1Date: "Jul 2021 - Dec 2023",
            edu1Title: "High School & Technical Degree in Informatics",
            edu1Desc: "Technical education integrated with high school focusing on software development, databases, and networks, following current technical standards.",
            edu2Date: "Feb 2024",
            edu2Title: "Basic Electronics Course with Arduino",
            edu2Desc: "Extension course introducing fundamental concepts of analog/digital electronics and practical project development with the Arduino platform.",
            edu3Date: "Oct 2024",
            edu3Title: "Beta Hub Immersion by Mercado Livre - UX/UI",
            edu3Desc: "Immersion focused on User Experience (UX) and User Interface (UI) Design, developing skills in research, prototyping, and teamwork.",
            coursesTitle: "Courses & Certifications",
            institution: "Institution",
            date: "Date",
            course1Title: "Introduction to UX (FGV)",
            course1Date: "Aug 2024",
            course2Title: "Git and GitHub (DIO)",
            course2Date: "Aug 2024",
            course3Title: "No-Code Programmer",
            course3Date: "Mar 2024",
            course4Title: "JavaScript Training",
            course4Date: "Jun 2025",
            course5Title: "Java: First Application",
            course5Date: "Jun 2025",
            course6Title: "HTML Accessibility",
            course6Date: "Jun 2025",
            classesTitle: "My Study Repositories",
            classButton: "View Repository",
            contactTitle: "Let's Connect",
            contactInfoTitle: "Contact Information",
            contactSocialsTitle: "Find me on the socials",
            linkedinButton: "LinkedIn",
            githubButton: "GitHub",
            footerText: "All rights reserved © 2025 bylcscaio"
        },
        es: {
            navHome: "Inicio",
            navSkills: "Habilidades",
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
            skillsTitle: "Habilidades Principales",
            skill1Title: "Desarrollo Web",
            skill1Desc: "Construyo sitios web y sistemas personalizados que resaltan la identidad de tu marca.",
            skill2Title: "Diseño UX",
            skill2Desc: "Me sumerjo en el comportamiento del usuario para diseñar soluciones que encantan y resuelven problemas reales.",
            skill3Title: "Diseño UI",
            skill3Desc: "Creo interfaces visuales atractivas, intuitivas y consistentes en todos los dispositivos.",
            projectsTitle: "Proyectos Recientes",
            projectButton: "Ver Proyecto",
            experienceTitle: "Experiencia Profesional",
            exp1Tab: "Asistente Comercial",
            exp2Tab: "Pasantía de Ventas",
            exp3Tab: "Pasantía Full-stack",
            exp1Title: "Asistente Comercial",
            exp1Preposition: "en",
            exp1Date: "jun 2024 - oct 2024",
            exp1Desc: "Fortalecí la interacción humana y la atención de excelencia, claves para construir relaciones duraderas con los clientes. Contribuí al crecimiento de las ventas y la satisfacción del cliente a través de una comunicación eficaz y la gestión de leads en CRM.",
            exp2Title: "Pasante de Ventas",
            exp2Preposition: "en",
            exp2Date: "abr 2023 - jul 2024",
            exp2Desc: "Proporcioné un servicio comercial de calidad, preparé propuestas comerciales y realicé presentaciones institucionales y de productos. Contribuí activamente en la creación y publicación de contenido relevante para el blog de la empresa.",
            exp3Title: "Pasante de Desarrollador Full-stack",
            exp3Preposition: "en",
            exp3Date: "may 2022 - dic 2022",
            exp3Desc: "Trabajé en el equipo de desarrollo de WeGIA. En el front-end, utilicé HTML5, CSS3, JavaScript, React.js y Vue.js. En el back-end, trabajé con PHP, Laravel, APIs RESTful y modelado de datos con MySQL.",
            educationTitle: "Formación",
            edu1Date: "jul 2021 - dic 2023",
            edu1Title: "Bachillerato y Técnico en Informática",
            edu1Desc: "Formación técnica integrada con bachillerato, enfocada en desarrollo de software, bases de datos y redes, siguiendo las normas técnicas vigentes.",
            edu2Date: "feb 2024",
            edu2Title: "Curso Básico de Electrónica con Arduino",
            edu2Desc: "Curso de extensión con introducción a conceptos de electrónica analógica/digital y desarrollo de proyectos prácticos con la plataforma Arduino.",
            edu3Date: "oct 2024",
            edu3Title: "Inmersión Beta Hub by Mercado Livre - UX/UI",
            edu3Desc: "Inmersión centrada en el Diseño de Experiencia de Usuario (UX) e Interfaz de Usuario (UI), desarrollando habilidades en investigación, prototipado y trabajo en equipo.",
            coursesTitle: "Cursos y Certificaciones",
            institution: "Institución",
            date: "Fecha",
            course1Title: "Introducción a la UX (FGV)",
            course1Date: "ago 2024",
            course2Title: "Git y GitHub (DIO)",
            course2Date: "ago 2024",
            course3Title: "Programador sin Código",
            course3Date: "mar 2024",
            course4Title: "Formación en JavaScript",
            course4Date: "jun 2025",
            course5Title: "Java: Primera Aplicación",
            course5Date: "jun 2025",
            course6Title: "Accesibilidad HTML",
            course6Date: "jun 2025",
            classesTitle: "Mis Repositorios de Estudio",
            classButton: "Ver Repositorio",
            contactTitle: "Conectemos",
            contactInfoTitle: "Información de Contacto",
            contactSocialsTitle: "Encuéntrame en las redes",
            linkedinButton: "LinkedIn",
            githubButton: "GitHub",
            footerText: "Todos los derechos reservados © 2025 bylcscaio"
        },
        fr: {
            navHome: "Accueil",
            navSkills: "Compétences",
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
            skillsTitle: "Compétences Principales",
            skill1Title: "Développement Web",
            skill1Desc: "Je construis des sites web et des systèmes personnalisés qui mettent en valeur l'identité de votre marque.",
            skill2Title: "Design UX",
            skill2Desc: "Je me plonge dans le comportement de l'utilisateur pour concevoir des solutions qui ravissent et résolvent de vrais problèmes.",
            skill3Title: "Design UI",
            skill3Desc: "Je crée des interfaces visuelles attrayantes, intuitives et cohérentes sur tous les appareils.",
            projectsTitle: "Projets Récents",
            projectButton: "Voir le Projet",
            experienceTitle: "Expérience Professionnelle",
            exp1Tab: "Assistant Commercial",
            exp2Tab: "Stage en Ventes",
            exp3Tab: "Stage Full-stack",
            exp1Title: "Assistant Commercial",
            exp1Preposition: "chez",
            exp1Date: "juin 2024 - oct 2024",
            exp1Desc: "J'ai renforcé l'interaction humaine et l'excellence du service, essentielles pour bâtir des relations durables avec les clients. J'ai contribué à la croissance des ventes et à la satisfaction client grâce à une communication efficace et à la gestion des leads dans le CRM.",
            exp2Title: "Stagiaire en Ventes",
            exp2Preposition: "chez",
            exp2Date: "avr 2023 - juil 2024",
            exp2Desc: "J'ai fourni un service commercial de qualité, préparé des propositions commerciales et mené des présentations institutionnelles et de produits. J'ai activement contribué à la création et à la publication de contenu pertinent pour le blog de l'entreprise.",
            exp3Title: "Stagiaire Développeur Full-stack",
            exp3Preposition: "chez",
            exp3Date: "mai 2022 - déc 2022",
            exp3Desc: "J'ai travaillé dans l'équipe de développement de WeGIA. En front-end, j'ai utilisé HTML5, CSS3, JavaScript, React.js et Vue.js. En back-end, j'ai travaillé avec PHP, Laravel, les API RESTful et la modélisation de données avec MySQL.",
            educationTitle: "Formation",
            edu1Date: "juil 2021 - déc 2023",
            edu1Title: "Lycée et Diplôme Technique en Informatique",
            edu1Desc: "Formation technique intégrée au lycée, axée sur le développement de logiciels, les bases de données et les réseaux, conformément aux normes techniques en vigueur.",
            edu2Date: "fév 2024",
            edu2Title: "Cours de Base en Électronique avec Arduino",
            edu2Desc: "Cours d'extension introduisant les concepts fondamentaux de l'électronique analogique/numérique et le développement de projets pratiques avec la plateforme Arduino.",
            edu3Date: "oct 2024",
            edu3Title: "Immersion Beta Hub par Mercado Livre - UX/UI",
            edu3Desc: "Immersion axée sur le Design de l'Expérience Utilisateur (UX) et de l'Interface Utilisateur (UI), développant des compétences en recherche, prototypage et travail d'équipe.",
            coursesTitle: "Cours et Certifications",
            institution: "Institution",
            date: "Date",
            course1Title: "Introduction à l'UX (FGV)",
            course1Date: "août 2024",
            course2Title: "Git et GitHub (DIO)",
            course2Date: "août 2024",
            course3Title: "Programmeur sans Code",
            course3Date: "mar 2024",
            course4Title: "Formation JavaScript",
            course4Date: "juin 2025",
            course5Title: "Java: Première Application",
            course5Date: "juin 2025",
            course6Title: "Accessibilité HTML",
            course6Date: "juin 2025",
            classesTitle: "Mes Dépôts d'Étude",
            classButton: "Voir le Dépôt",
            contactTitle: "Connectons-nous",
            contactInfoTitle: "Informations de Contact",
            contactSocialsTitle: "Retrouvez-moi sur les réseaux",
            linkedinButton: "LinkedIn",
            githubButton: "GitHub",
            footerText: "Tous droits réservés © 2025 bylcscaio"
        }
    };
    
    // --- O restante do seu código de tradução e efeito de digitar ---
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
                if(element.tagName === 'SPAN' && element.parentElement.classList.contains('social-btn')) {
                    element.textContent = translation[key];
                } else if (element.tagName !== 'A' || !element.classList.contains('social-btn')) {
                     element.textContent = translation[key];
                }
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
    if(languageSwitcher) {
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

    setLanguage(currentLang);
});