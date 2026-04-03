import { useState, useEffect } from 'react';
import { Github, Linkedin, Code2, Server, Layout, BookOpen, GraduationCap, ArrowLeft, Mail, Terminal, Share2, Sun, Moon, Download, Globe } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const projects = [
  {
    title: { es: 'Sistema Bibliotecario Ionosfera', en: 'Ionosfera Library System' },
    desc: {
      es: 'Sistema integral web y móvil para gestión bibliotecaria de una ONG ambientalista. Arquitectura escalable y moderna.',
      en: 'Web and mobile library management system for an environmental NGO. Built with a scalable and modern architecture.'
    },
    tags: ['Django REST', 'React', 'React Native', 'PostgreSQL', 'Tailwind'],
    icon: <BookOpen className="w-8 h-8 text-primary-500" />,
    badge: { es: 'En proceso', en: 'In progress' },
    preview: {
      type: 'library',
      accent: 'from-sky-400/25 via-primary-500/20 to-cyan-500/25'
    },
    link: null
  },
  {
    title: { es: 'Música y Emociones', en: 'Music and Emotions' },
    desc: {
      es: 'Blog personal interactivo explorando la psicología de la música. Diseño responsive centrado en la experiencia de lectura.',
      en: 'Interactive personal blog exploring the psychology of music. A responsive design focused on the reading experience.'
    },
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    icon: <Layout className="w-8 h-8 text-primary-500" />,
    image: '/musica-emociones.png',
    preview: {
      type: 'blog'
    },
    link: 'https://musica-y-emociones.netlify.app/'
  },
  {
    title: { es: 'SHAREFLOW', en: 'SHAREFLOW' },
    subtitle: { es: 'P2P File Transfer App', en: 'P2P File Transfer App' },
    desc: {
      es: 'Aplicación web de transferencia de archivos en tiempo real diseñada para conectar ecosistemas incompatibles (iOS/Android). Utiliza WebRTC para crear túneles de datos directos y privados sin almacenamiento en servidor, garantizando máxima velocidad y seguridad.',
      en: 'Real-time file transfer web app designed to connect incompatible ecosystems (iOS/Android). It uses WebRTC to create direct, private data tunnels without server storage, ensuring maximum speed and security.'
    },
    tags: ['REACT', 'DJANGO', 'CHANNELS', 'WEBRTC', 'TAILWIND', 'WEBSOCKETS'],
    icon: <Share2 className="w-8 h-8 text-primary-500" />,
    image: '/Shareflow.png',
    preview: {
      type: 'transfer'
    },
    link: 'https://share-app-devfran.vercel.app/'
  }
];

const copy = {
  es: {
    nav: {
      skills: 'Skills',
      education: 'Formación',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    language: 'EN',
    languageLabel: 'Cambiar a inglés',
    hero: {
      badge: '¡Bienvenido a mi portafolio!',
      roles: ['Frontend Developer', 2500, 'Backend Developer', 2500, 'Ing. de Software en Formación', 2500, 'Autodidacta y Curioso', 2500],
      greeting: '¡Hola!',
      introStart: ' Soy estudiante de quinto año de Ingeniería en Desarrollo de Software, enfocado en crear',
      introStrong: ' interfaces web responsivas ',
      introConnector: 'y funcionales, con una sólida base en ',
      introBackend: 'backend',
      introEnd: ' (Django/Python) para comprender el ciclo completo del desarrollo.',
      contact: 'Contáctame',
      downloadCv: 'Descargar CV',
      profileAlt: 'Foto de perfil de Franklin Avila'
    },
    skills: {
      title: 'Skills',
      cards: [
        { title: 'Frontend', skills: 'React, Tailwind, JS (ES6+), TypeScript, Next.js, HTML5/CSS3' },
        { title: 'Backend', skills: 'Python, Django/DRF, Node.js, PostgreSQL' },
        { title: 'Herramientas', skills: 'Git, GitHub, Vite, Docker, Jest, Cypress, CI/CD' },
        { title: 'Formación', skills: 'Ing. Software (5º Año), Autodidacta' }
      ]
    },
    education: {
      title: 'Formación Académica',
      degree: 'Ingeniería en Desarrollo de Software',
      status: '5º Año (En curso)',
      university: 'Universidad de El Salvador (UES)',
      paragraph1: 'Mi formación combina la ingeniería de software tradicional con tecnologías web modernas. Mantengo un enfoque principal en el desarrollo Frontend, creando interfaces que no solo son funcionales, sino intuitivas y centradas en el usuario.',
      paragraph2: 'Paralelamente, fortalezco mi perfil con tecnologías Backend (APIs REST, Bases de Datos), lo que me permite comprender el ciclo de vida completo del dato y facilitar una integración sólida entre el cliente y el servidor.'
    },
    projects: {
      title: 'Proyectos Destacados',
      visit: 'Visitar Proyecto',
      privateCode: 'Código Privado'
    },
    footer: {
      heading: '¿Tienes un proyecto en mente?',
      text: 'Actualmente estoy disponible para nuevas oportunidades laborales y colaboraciones. Si buscas un desarrollador comprometido con la calidad, ¡hablemos!',
      sendMail: 'Enviar Correo',
      copyright: 'Hecho con React & Tailwind.'
    }
  },
  en: {
    nav: {
      skills: 'Skills',
      education: 'Education',
      projects: 'Projects',
      contact: 'Contact'
    },
    language: 'ES',
    languageLabel: 'Switch to Spanish',
    hero: {
      badge: 'Welcome to my portfolio!',
      roles: ['Frontend Developer', 2500, 'Backend Developer', 2500, 'Software Engineering Student', 2500, 'Self-taught and Curious', 2500],
      greeting: 'Hi!',
      introStart: ' I am a fifth-year Software Engineering student focused on building',
      introStrong: ' responsive web interfaces ',
      introConnector: 'and functional, with a solid foundation in ',
      introBackend: 'backend',
      introEnd: ' (Django/Python) to understand the full development cycle.',
      contact: 'Contact me',
      downloadCv: 'Download CV',
      profileAlt: 'Franklin Avila profile photo'
    },
    skills: {
      title: 'Skills',
      cards: [
        { title: 'Frontend', skills: 'React, Tailwind, JS (ES6+), TypeScript, Next.js, HTML5/CSS3' },
        { title: 'Backend', skills: 'Python, Django/DRF, Node.js, PostgreSQL' },
        { title: 'Tools', skills: 'Git, GitHub, Vite, Docker, Jest, Cypress, CI/CD' },
        { title: 'Education', skills: 'Software Engineering (5th Year), Self-taught' }
      ]
    },
    education: {
      title: 'Academic Background',
      degree: 'Software Engineering',
      status: '5th Year (In progress)',
      university: 'University of El Salvador (UES)',
      paragraph1: 'My background combines traditional software engineering with modern web technologies. I maintain a main focus on Frontend development, building interfaces that are not only functional, but also intuitive and user-centered.',
      paragraph2: 'At the same time, I strengthen my profile with Backend technologies (REST APIs, Databases), which allows me to understand the full data lifecycle and build a solid client-server integration.'
    },
    projects: {
      title: 'Featured Projects',
      visit: 'Visit Project',
      privateCode: 'Private Code'
    },
    footer: {
      heading: 'Have a project in mind?',
      text: 'I am currently available for new job opportunities and collaborations. If you are looking for a developer committed to quality, let us talk!',
      sendMail: 'Send Email',
      copyright: 'Built with React & Tailwind.'
    }
  }
};

const Navbar = ({ theme, toggleTheme, language, toggleLanguage, content }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md transition-all duration-300 border-b border-gray-200 dark:border-transparent shadow-sm dark:shadow-none">
    <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
      <a href="#inicio" className="text-2xl font-bold text-light-text-main dark:text-white tracking-wider hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
        Frann<span className="text-primary-500">.</span>Dev
      </a>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-8 uppercase text-sm font-bold tracking-widest">
          <a href="#habilidades" className="text-light-text-muted dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">{content.nav.skills}</a>
          <a href="#formacion" className="text-light-text-muted dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">{content.nav.education}</a>
          <a href="#proyectos" className="text-light-text-muted dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">{content.nav.projects}</a>
          <a href="#contacto" className="text-light-text-muted dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">{content.nav.contact}</a>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative flex items-center rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-[#1E1E1F] p-1 shadow-sm">
            <button
              onClick={() => toggleLanguage('es')}
              aria-label="Cambiar a español"
              aria-pressed={language === 'es'}
              className={`relative z-10 min-w-11 rounded-full px-3 py-2 text-xs font-bold tracking-widest transition-all duration-300 ${
                language === 'es'
                  ? 'bg-primary-600 text-white shadow-md shadow-primary-500/25'
                  : 'text-light-text-muted dark:text-gray-400 hover:text-light-text-main dark:hover:text-white'
              }`}
            >
              ES
            </button>

            <button
              onClick={() => toggleLanguage('en')}
              aria-label="Switch to English"
              aria-pressed={language === 'en'}
              className={`relative z-10 min-w-11 rounded-full px-3 py-2 text-xs font-bold tracking-widest transition-all duration-300 ${
                language === 'en'
                  ? 'bg-primary-600 text-white shadow-md shadow-primary-500/25'
                  : 'text-light-text-muted dark:text-gray-400 hover:text-light-text-main dark:hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            className="p-2 rounded-full bg-gray-200 dark:bg-dark-card text-light-text-muted dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-[#3E3E42] transition-all hover:scale-110 hover:rotate-12"
          >
            {theme === 'dark' ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-primary-600" />}
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const HeroSection = ({ content }) => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center pt-24 pb-32 px-4 overflow-hidden bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-500/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary-500/10 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-12 items-center"
        >
          <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-none">
            <div className="w-full max-w-md bg-gray-200 dark:bg-[#2D2D2E] p-1 rounded-lg shadow-2xl transition-colors duration-300 group">
              <div className="flex gap-2 px-4 py-3 bg-gray-300 dark:bg-[#3E3E42] rounded-t-lg transition-colors duration-300">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="relative aspect-square bg-light-card dark:bg-dark-card rounded-b-lg overflow-hidden">
                <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src="/perfil1.jpeg"
                  alt={content.hero.profileAlt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x400?text=FA'; }}
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-7 text-center md:text-left flex flex-col items-center md:items-start order-2 md:order-none">
            <span className="inline-block px-3 py-1 mb-6 text-sm font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400 bg-primary-500/10 rounded-full">
              {content.hero.badge}
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-light-text-main dark:text-white mb-4 uppercase tracking-tight transition-colors duration-300 leading-none">
              Franklin Avila
            </h1>

            <div className="text-2xl md:text-3xl font-light text-primary-600 dark:text-primary-400 mb-8 h-12 uppercase tracking-widest">
              <TypeAnimation sequence={content.hero.roles} wrapper="span" speed={50} repeat={Infinity} />
            </div>

            <div className="bg-gray-200 dark:bg-[#2D2D2E] p-1 rounded-lg shadow-xl w-full mb-8 text-left transition-colors duration-300">
              <div className="flex gap-2 px-4 py-3 bg-gray-300 dark:bg-[#3E3E42] rounded-t-lg transition-colors duration-300">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="p-6 md:p-8 bg-light-card dark:bg-dark-card rounded-b-lg transition-colors duration-300">
                <p className="text-light-text-muted dark:text-gray-300 leading-relaxed text-lg">
                  <span className="text-primary-600 dark:text-primary-400 font-bold">{content.hero.greeting}</span>
                  {content.hero.introStart}
                  <strong className="text-light-text-main dark:text-white">{content.hero.introStrong}</strong>
                  {content.hero.introConnector}
                  <strong className="text-light-text-main dark:text-white">{content.hero.introBackend}</strong>
                  {content.hero.introEnd}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center">
              <a href="#contacto" className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-colors uppercase tracking-widest shadow-lg shadow-primary-500/20">
                {content.hero.contact}
              </a>
              <a
                href="/FranklinAvila-CV.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-600 dark:hover:bg-primary-400 hover:text-white dark:hover:text-dark-bg font-bold rounded-lg transition-all uppercase tracking-widest"
              >
                <Download size={18} />
                {content.hero.downloadCv}
              </a>
              <div className="flex gap-4 pl-4 border-l border-gray-300 dark:border-gray-700">
                <a href="https://github.com/Frann-Avila1411" target="_blank" rel="noreferrer" className="text-light-text-muted dark:text-gray-400 hover:text-light-text-main dark:hover:text-white transition-colors hover:scale-110 transform duration-300 p-2">
                  <Github size={28} />
                </a>
                <a href="https://www.linkedin.com/in/franklin-avila-dev/" target="_blank" rel="noreferrer" className="text-light-text-muted dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors hover:scale-110 transform duration-300 p-2">
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillsSection = ({ content }) => {
  const skillCards = [
    { icon: <Layout size={40} />, title: content.skills.cards[0].title, skills: content.skills.cards[0].skills },
    { icon: <Server size={40} />, title: content.skills.cards[1].title, skills: content.skills.cards[1].skills },
    { icon: <Terminal size={40} />, title: content.skills.cards[2].title, skills: content.skills.cards[2].skills },
    { icon: <GraduationCap size={40} />, title: content.skills.cards[3].title, skills: content.skills.cards[3].skills }
  ];

  return (
    <section id="habilidades" className="py-20 px-4 bg-light-bg dark:bg-[#181819] transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-16 text-light-text-main dark:text-white uppercase tracking-widest transition-colors duration-300">
          {content.skills.title}
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
          {skillCards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-light-card dark:bg-dark-card rounded-xl p-8 shadow-md dark:shadow-lg flex flex-col items-center text-center group border-b-2 border-transparent hover:border-primary-500 transition-all duration-300"
            >
              <div className="text-primary-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h4 className="text-xl font-bold text-light-text-main dark:text-white mb-4 uppercase transition-colors duration-300">{card.title}</h4>
              <p className="text-light-text-muted dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">{card.skills}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationSection = ({ content }) => {
  return (
    <section id="formacion" className="py-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-center text-light-text-main dark:text-white uppercase tracking-widest transition-colors duration-300">
          {content.education.title}
        </h3>

        <div className="relative border-l-4 border-primary-200 dark:border-primary-900 ml-3 md:ml-6 space-y-12">
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[11px] top-0 w-6 h-6 bg-primary-600 rounded-full border-4 border-light-bg dark:border-dark-bg transition-colors duration-300"></div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h4 className="text-xl font-bold text-light-text-main dark:text-white transition-colors duration-300">
                {content.education.degree}
              </h4>
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 transition-colors duration-300">
                {content.education.status}
              </span>
            </div>

            <p className="text-light-text-muted dark:text-gray-400 font-medium mb-4 transition-colors duration-300">
              {content.education.university}
            </p>

            <p className="text-light-text-muted dark:text-gray-300 leading-relaxed text-lg transition-colors duration-300">
              {content.education.paragraph1}
            </p>
            <p className="text-light-text-muted dark:text-gray-300 leading-relaxed text-lg mt-3 transition-colors duration-300">
              {content.education.paragraph2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectPreview = ({ project, language }) => {
  const isSpanish = language === 'es';

  if (project.preview.type === 'library') {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-none bg-[#0F172A] text-white">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.preview.accent}`}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_35%)]"></div>

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">{isSpanish ? 'Panel bibliotecario' : 'Library dashboard'}</span>
          </div>

          <div className="grid flex-1 grid-cols-[0.9fr_1.3fr] gap-3 p-4">
            <aside className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">{isSpanish ? 'Usuarios' : 'Users'}</p>
              <div className="mt-4 space-y-3">
                <div className="h-10 rounded-lg bg-white/10"></div>
                <div className="h-10 rounded-lg bg-white/10"></div>
                <div className="h-10 rounded-lg bg-white/10"></div>
              </div>
              <div className="mt-4 rounded-xl bg-primary-500/20 p-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">{isSpanish ? 'Libros' : 'Books'}</p>
                <p className="mt-1 text-lg font-bold">248</p>
              </div>
            </aside>

            <main className="space-y-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">{isSpanish ? 'Reservas activas' : 'Active bookings'}</p>
                  <p className="mt-1 text-2xl font-bold">32</p>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em]">Django</div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/12 p-3">
                  <div className="h-24 rounded-lg bg-gradient-to-br from-sky-300/60 to-cyan-300/30"></div>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/70">Frontend</p>
                </div>
                <div className="rounded-xl bg-white/12 p-3">
                  <div className="h-24 rounded-lg bg-gradient-to-br from-primary-400/60 to-emerald-300/30"></div>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/70">API</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="h-12 rounded-lg bg-white/12"></div>
                <div className="h-12 rounded-lg bg-white/12"></div>
                <div className="h-12 rounded-lg bg-white/12"></div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  if (project.preview.type === 'blog') {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-none bg-[#111827] text-white">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.preview.accent}`}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.07),transparent_30%)]"></div>

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">{isSpanish ? 'Blog personal' : 'Personal blog'}</span>
          </div>

          <div className="flex flex-1 flex-col gap-3 p-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
              <div className="h-24 rounded-xl bg-gradient-to-r from-amber-300/70 via-orange-300/45 to-rose-300/40"></div>
              <div className="mt-4 h-4 w-3/5 rounded-full bg-white/30"></div>
              <div className="mt-3 h-3 w-full rounded-full bg-white/15"></div>
              <div className="mt-2 h-3 w-11/12 rounded-full bg-white/15"></div>
            </div>

            <div className="grid flex-1 grid-cols-3 gap-3">
              <div className="rounded-xl bg-white/10 p-3">
                <div className="h-full rounded-lg bg-gradient-to-br from-white/18 to-white/5"></div>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <div className="h-full rounded-lg bg-gradient-to-br from-white/18 to-white/5"></div>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <div className="h-full rounded-lg bg-gradient-to-br from-white/18 to-white/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-none bg-[#0B1220] text-white">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.preview.accent}`}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_28%)]"></div>

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">SHAREFLOW</span>
        </div>

        <div className="grid flex-1 grid-cols-[1fr_auto_1fr] items-center gap-3 p-5">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">iOS</p>
            <div className="mt-3 space-y-2">
              <div className="h-3 w-4/5 rounded-full bg-white/20"></div>
              <div className="h-3 w-full rounded-full bg-white/12"></div>
              <div className="h-24 rounded-xl bg-gradient-to-br from-sky-300/50 to-cyan-300/20"></div>
            </div>
          </div>

          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-2xl shadow-primary-500/20 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white">
              <ArrowLeft size={24} className="rotate-180" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Android</p>
            <div className="mt-3 space-y-2">
              <div className="h-3 w-4/5 rounded-full bg-white/20"></div>
              <div className="h-3 w-full rounded-full bg-white/12"></div>
              <div className="h-24 rounded-xl bg-gradient-to-br from-emerald-300/50 to-primary-300/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, content, language }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="bg-light-card dark:bg-dark-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-100 dark:border-[#3E3E42] flex flex-col h-full group transition-all duration-300"
  >
    <div className="h-56 relative overflow-hidden bg-gray-100 dark:bg-[#252526] transition-colors duration-500">
      {project.image ? (
        <>
          <img
            src={project.image}
            alt={project.title[language]}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-100"></div>

          <div className="absolute left-4 top-4 z-20 rounded-full bg-white/10 p-2 backdrop-blur-md ring-1 ring-white/10">
            <div className="scale-110 text-white/90">{project.icon}</div>
          </div>
        </>
      ) : (
        <>
          <ProjectPreview project={project} language={language} />

          <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent opacity-100"></div>

          <div className="absolute left-4 top-4 z-20 rounded-full bg-white/10 p-2 backdrop-blur-md ring-1 ring-white/10">
            <div className="scale-110 text-white/90">{project.icon}</div>
          </div>
        </>
      )}

      {project.badge && (
        <span className="absolute top-4 right-4 px-3 py-1 text-[10px] font-bold bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300 rounded-full uppercase tracking-wider shadow-sm z-20">
          {project.badge[language]}
        </span>
      )}
    </div>

    <div className="p-8 flex flex-col justify-between flex-grow bg-white dark:bg-dark-card relative">
      <div>
        <h4 className="text-2xl font-bold mb-3 text-light-text-main dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors uppercase tracking-tight">
          {project.title[language]}
        </h4>

        {project.subtitle && (
          <p className="text-primary-600 dark:text-primary-400 font-bold uppercase tracking-widest text-[11px] mb-3">
            {project.subtitle[language]}
          </p>
        )}

        <p className="text-light-text-muted dark:text-gray-400 mb-6 text-sm leading-relaxed">
          {project.desc[language]}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-[10px] font-bold bg-gray-50 dark:bg-[#1E1E1F] text-gray-500 dark:text-gray-400 rounded-md border border-gray-100 dark:border-gray-700 uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-gray-50 dark:border-gray-800">
        {project.link ? (
          <a href={project.link} target="_blank" rel="noreferrer" className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-300 font-bold rounded-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-all uppercase tracking-widest text-xs group/btn">
            {content.projects.visit} <ArrowLeft size={16} className="rotate-180 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        ) : (
          <div className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-[#1E1E1F] text-gray-400 dark:text-gray-500 font-bold rounded-lg uppercase tracking-widest text-xs cursor-not-allowed">
            <Code2 size={16} /> {content.projects.privateCode}
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const Footer = ({ content }) => {
  return (
    <footer id="contacto" className="pt-20 pb-10 bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 mb-20">
        <div className="bg-white dark:bg-dark-card rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-[#3E3E42] text-center relative overflow-hidden group transition-colors duration-300">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl -z-10 scale-50 group-hover:scale-100 transition-transform duration-700"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-light-text-main dark:text-white mb-6 uppercase tracking-tight">
            {content.footer.heading}
          </h2>

          <p className="text-light-text-muted dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            {content.footer.text}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="mailto:frann2022gonzalez@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-500/30 hover:-translate-y-1 uppercase tracking-widest text-sm"
            >
              <Mail size={20} /> {content.footer.sendMail}
            </a>

            <span className="hidden md:block text-gray-300 dark:text-gray-600">|</span>

            <div className="flex gap-4">
              <a href="https://github.com/Frann-Avila1411" target="_blank" rel="noreferrer" className="p-3 bg-gray-50 dark:bg-[#1E1E1F] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all border border-gray-100 dark:border-gray-700">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/franklin-avila-dev/" target="_blank" rel="noreferrer" className="p-3 bg-gray-50 dark:bg-[#1E1E1F] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all border border-gray-100 dark:border-gray-700">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-[#3E3E42] pt-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <a href="#inicio" className="text-xl font-bold text-light-text-main dark:text-white tracking-wider flex items-center gap-2">
            Frann<span className="text-primary-500">.</span>Dev
          </a>

          <p className="text-light-text-muted dark:text-gray-500 text-sm uppercase tracking-wider text-center md:text-right">
            © {new Date().getFullYear()} Franklin Avila <br className="md:hidden" />
            {content.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage === 'es' || savedLanguage === 'en') {
      return savedLanguage;
    }

    return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es';
  });

  const content = copy[language];

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text-main dark:text-gray-300 font-sans selection:bg-primary-500/30 selection:text-white transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} language={language} toggleLanguage={toggleLanguage} content={content} />

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={language}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <HeroSection content={content} />
          <SkillsSection content={content} />
          <EducationSection content={content} />

          <section id="proyectos" className="py-20 px-4 bg-light-bg dark:bg-[#181819] transition-colors duration-300">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold mb-16 text-center text-light-text-main dark:text-white uppercase tracking-widest transition-colors duration-300">
                {content.projects.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} content={content} language={language} />
                ))}
              </div>
            </div>
          </section>
        </motion.main>
      </AnimatePresence>

      <Footer content={content} />
    </div>
  );
}

export default App;