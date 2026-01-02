import { useState, useEffect } from 'react';
import { Github, Linkedin, ExternalLink, Code2, Server, Layout, BookOpen, GraduationCap, ArrowLeft, CheckCircle, Mail, Terminal, Database, Cpu, Globe, Share2, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

// --- datos ---
const projects = [
  {
    title: "Sistema Bibliotecario Ionosfera",
    desc: "Sistema integral web y móvil para gestión bibliotecaria de una ONG ambientalista. Arquitectura escalable y moderna.",
    tags: ["Django REST", "React", "React Native", "PostgreSQL", "Tailwind"],
    icon: <BookOpen className="w-8 h-8 text-primary-500" />,
    status: "En desarrollo",
    link: null
  },
  {
    title: "Música y Emociones",
    desc: "Blog personal interactivo explorando la psicología de la música. Diseño responsive centrado en la experiencia de lectura.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    icon: <Layout className="w-8 h-8 text-primary-500" />,
    status: "Finalizado",
    link: "https://musica-y-emociones.netlify.app/"
  },
  {
    title: "SHAREFLOW",
    subtitle: "P2P File Transfer App",
    desc: "Aplicación web de transferencia de archivos en tiempo real diseñada para conectar ecosistemas incompatibles (iOS/Android). Utiliza WebRTC para crear túneles de datos directos y privados sin almacenamiento en servidor, garantizando máxima velocidad y seguridad.",
    tags: ["REACT", "DJANGO", "CHANNELS", "WEBRTC", "TAILWIND", "WEBSOCKETS"],
    icon: <Share2 className="w-8 h-8 text-primary-500" />,
    status: "Finalizado",
    link: "https://share-app-devfran.vercel.app/"
  }
];

// --- rediseño del modo claro y oscuro ---

const Navbar = ({ theme, toggleTheme }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md transition-all duration-300 border-b border-gray-200 dark:border-transparent shadow-sm dark:shadow-none">
    <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
      {/* Logo */}
      <a href="#inicio" className="text-2xl font-bold text-light-text-main dark:text-white tracking-wider hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
        Frann<span className="text-primary-500">.</span>Dev
      </a>

      <div className="flex items-center gap-8">
        {/* Enlaces (Desktop) */}
        <div className="hidden md:flex items-center gap-8 uppercase text-sm font-bold tracking-widest">
          <a href="#habilidades" className="text-light-text-muted dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Skills</a>
          <a href="#formacion" className="text-light-text-muted dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Formación</a>
          <a href="#proyectos" className="text-light-text-muted dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Proyectos</a>
          <a href="#contacto" className="text-light-text-muted dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Contacto</a>
        </div>

        {/* Botón de Tema*/}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-dark-card text-light-text-muted dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-[#3E3E42] transition-all hover:scale-110 hover:rotate-12"
        >
          {theme === 'dark' ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-primary-600" />}
        </button>
      </div>
    </div>
  </nav>
);

// Hero Section diseño de dos columnas con CSS Grid
const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center pt-24 pb-32 px-4 overflow-hidden bg-light-bg dark:bg-dark-bg transition-colors duration-300">

      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-500/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary-500/10 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-12 items-center"
        >

          {/* foto de perfil*/}
          <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-none">
            {/* Marco de ventana para la foto */}
            <div className="w-full max-w-md bg-gray-200 dark:bg-[#2D2D2E] p-1 rounded-lg shadow-2xl transition-colors duration-300 group">
              {/* Barra de título de la ventana */}
              <div className="flex gap-2 px-4 py-3 bg-gray-300 dark:bg-[#3E3E42] rounded-t-lg transition-colors duration-300">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              {/* Contenido de la imagen */}
              <div className="relative aspect-square bg-light-card dark:bg-dark-card rounded-b-lg overflow-hidden">
                <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src="/perfil1.jpeg"
                  alt="Foto de perfil de Franklin Avila"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/400x400?text=FA" }}
                />
              </div>
            </div>
          </div>

          {/* contenido de texto */}
          <div className="md:col-span-7 text-center md:text-left flex flex-col items-center md:items-start order-2 md:order-none">

            <span className="inline-block px-3 py-1 mb-6 text-sm font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400 bg-primary-500/10 rounded-full">
              ¡Bienvenido a mi portafolio!
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-light-text-main dark:text-white mb-4 uppercase tracking-tight transition-colors duration-300 leading-none">
              Franklin Avila
            </h1>

            <div className="text-2xl md:text-3xl font-light text-primary-600 dark:text-primary-400 mb-8 h-12 uppercase tracking-widest">
              <TypeAnimation
                sequence={[
                  'Frontend Developer', 2500,
                  'Backend Developer en Proceso', 2500,
                  'Ing. de Software en Formación', 2500,
                  'Autodidacta y Curioso', 2500,
                ]}
                wrapper="span" speed={50} repeat={Infinity}
              />
            </div>

            {/* Descripción */}
            <div className="bg-gray-200 dark:bg-[#2D2D2E] p-1 rounded-lg shadow-xl w-full mb-8 text-left transition-colors duration-300">
              {/* Barra de título de la ventana */}
              <div className="flex gap-2 px-4 py-3 bg-gray-300 dark:bg-[#3E3E42] rounded-t-lg transition-colors duration-300">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              {/* Contenido del texto */}
              <div className="p-6 md:p-8 bg-light-card dark:bg-dark-card rounded-b-lg transition-colors duration-300">
                <p className="text-light-text-muted dark:text-gray-300 leading-relaxed text-lg">
                  <span className="text-primary-600 dark:text-primary-400 font-bold">¡Hola!</span> Soy estudiante de cuarto año de Ingeniería en Desarrollo de Software, enfocado en crear <strong className="text-light-text-main dark:text-white">interfaces web responsivas</strong> y funcionales, con una sólida base en <strong className="text-light-text-main dark:text-white">backend</strong> (Django/Python) para comprender el ciclo completo del desarrollo.
                </p>
              </div>
            </div>

            {/* Redes Sociales y CTA */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center">
              <a href="#contacto" className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-colors uppercase tracking-widest shadow-lg shadow-primary-500/20">
                Contáctame
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

// Skills Section: Tarjetas claras en modo claro, oscuras en modo oscuro
const SkillsSection = () => {
  const skillCards = [
    { icon: <Layout size={40} />, title: "Frontend", skills: "React, Tailwind, JS (ES6+), HTML5/CSS3" },
    { icon: <Server size={40} />, title: "Backend", skills: "Python, Django/DRF, PostgreSQL" },
    { icon: <Terminal size={40} />, title: "Herramientas", skills: "Git, GitHub, Vite, Docker (Básico)" },
    { icon: <GraduationCap size={40} />, title: "Formación", skills: "Ing. Software (4º Año), Autodidacta" },
  ];

  return (
    <section id="habilidades" className="py-20 px-4 bg-light-bg dark:bg-[#181819] transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-16 text-light-text-main dark:text-white uppercase tracking-widest transition-colors duration-300">
          Skills
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

// Education Section
const EducationSection = () => {
  return (
    <section id="formacion" className="py-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">

      {/* Decoración de fondo opcional */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-center text-light-text-main dark:text-white uppercase tracking-widest transition-colors duration-300">
          Formación Académica
        </h3>

        <div className="relative border-l-4 border-primary-200 dark:border-primary-900 ml-3 md:ml-6 space-y-12">

          {/* Item de Educación */}
          <div className="relative pl-8 md:pl-12">
            {/* Punto en la línea de tiempo */}
            <div className="absolute -left-[11px] top-0 w-6 h-6 bg-primary-600 rounded-full border-4 border-light-bg dark:border-dark-bg transition-colors duration-300"></div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h4 className="text-xl font-bold text-light-text-main dark:text-white transition-colors duration-300">
                Ingeniería en Desarrollo de Software
              </h4>
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 transition-colors duration-300">
                4º Año (Concluido)
              </span>
            </div>

            <p className="text-light-text-muted dark:text-gray-400 font-medium mb-4 transition-colors duration-300">
              Universidad de El Salvador (UES)
            </p>

            <p className="text-light-text-muted dark:text-gray-300 leading-relaxed text-lg transition-colors duration-300">
              Mi formación combina la ingeniería de software tradicional con tecnologías web modernas.
              Mantengo un enfoque principal en el <strong className="text-primary-600 dark:text-primary-400">desarrollo Frontend</strong>,
              creando interfaces que no solo son funcionales, sino intuitivas y centradas en el usuario.
            </p>
            <p className="text-light-text-muted dark:text-gray-300 leading-relaxed text-lg mt-3 transition-colors duration-300">
              Paralelamente, fortalezco mi perfil con <strong className="text-primary-600 dark:text-primary-400">tecnologías Backend</strong> (APIs REST, Bases de Datos),
              lo que me permite comprender el ciclo de vida completo del dato y facilitar una integración sólida entre el cliente y el servidor.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

// ProjectCard: Tarjetas adaptables
const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="bg-light-card dark:bg-dark-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-100 dark:border-[#3E3E42] flex flex-col h-full group transition-all duration-300"
  >
    {/* encabezado visual */}
    <div className="h-48 relative overflow-hidden bg-gray-100 dark:bg-[#252526] flex items-center justify-center group-hover:bg-primary-50 dark:group-hover:bg-primary-900/10 transition-colors duration-500">

      {/* Fondo decorativo sutil (Gradiente) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-500/5 to-primary-500/10 opacity-100"></div>

      {/* Icono Grande (Escala al pasar el mouse) */}
      <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500 text-primary-500 dark:text-primary-400">
        <div className="scale-150">
          {project.icon}
        </div>
      </div>

      {/* Badge de Estado (Posicionado sobre la imagen/header) */}
      {project.status === "En desarrollo" && (
        <span className="absolute top-4 right-4 px-3 py-1 text-[10px] font-bold bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300 rounded-full uppercase tracking-wider shadow-sm z-20">
          En proceso
        </span>
      )}
    </div>

    {/* contenido */}
    <div className="p-8 flex flex-col justify-between flex-grow bg-white dark:bg-dark-card relative">

      <div>
        <h4 className="text-2xl font-bold mb-3 text-light-text-main dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors uppercase tracking-tight">
          {project.title}
        </h4>

        {project.subtitle && (
          <p className="text-primary-600 dark:text-primary-400 font-bold uppercase tracking-widest text-[11px] mb-3">
            {project.subtitle}
          </p>
        )}

        <p className="text-light-text-muted dark:text-gray-400 mb-6 text-sm leading-relaxed">
          {project.desc}
        </p>

        {/* Tags con diseño más limpio */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 text-[10px] font-bold bg-gray-50 dark:bg-[#1E1E1F] text-gray-500 dark:text-gray-400 rounded-md border border-gray-100 dark:border-gray-700 uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* botones de accion */}
      <div className="pt-6 border-t border-gray-50 dark:border-gray-800">
        {project.link ? (
          <a href={project.link} target="_blank" rel="noreferrer" className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-300 font-bold rounded-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-all uppercase tracking-widest text-xs group/btn">
            Visitar Proyecto <ArrowLeft size={16} className="rotate-180 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        ) : (
          <div className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-[#1E1E1F] text-gray-400 dark:text-gray-500 font-bold rounded-lg uppercase tracking-widest text-xs cursor-not-allowed">
            <Code2 size={16} /> Código Privado
          </div>
        )}
      </div>

    </div>
  </motion.div>
);

// Footer
const Footer = () => {
  return (
    <footer id="contacto" className="pt-20 pb-10 bg-light-bg dark:bg-dark-bg transition-colors duration-300">

      {/* tarjeta flotante de contacto */}
      <div className="max-w-4xl mx-auto px-4 mb-20">
        <div className="bg-white dark:bg-dark-card rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-[#3E3E42] text-center relative overflow-hidden group transition-colors duration-300">

          {/* Decoración de fondo (Glow effect) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl -z-10 scale-50 group-hover:scale-100 transition-transform duration-700"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-light-text-main dark:text-white mb-6 uppercase tracking-tight">
            ¿Tienes un proyecto en mente?
          </h2>

          <p className="text-light-text-muted dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Actualmente estoy disponible para nuevas oportunidades laborales y colaboraciones.
            Si buscas un desarrollador comprometido con la calidad, ¡hablemos!
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Botón Principal */}
            <a
              href="mailto:frann2022gonzalez@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-500/30 hover:-translate-y-1 uppercase tracking-widest text-sm"
            >
              <Mail size={20} /> Enviar Correo
            </a>

            {/* Separador visual en Desktop */}
            <span className="hidden md:block text-gray-300 dark:text-gray-600">|</span>

            {/* Redes Sociales (Iconos grandes) */}
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

      {/* Copyright */}
      <div className="border-t border-gray-200 dark:border-[#3E3E42] pt-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Marca */}
          <a href="#inicio" className="text-xl font-bold text-light-text-main dark:text-white tracking-wider flex items-center gap-2">
            Frann<span className="text-primary-500">.</span>Dev
          </a>

          {/* Texto Legal */}
          <p className="text-light-text-muted dark:text-gray-500 text-sm uppercase tracking-wider text-center md:text-right">
            © {new Date().getFullYear()} Franklin Avila <br className="md:hidden" />
            Hecho con <span className="text-primary-500">React</span> & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  // Lógica de estado para el tema
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text-main dark:text-gray-300 font-sans selection:bg-primary-500/30 selection:text-white transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <HeroSection />

        <SkillsSection />

        <EducationSection />

        <section id="proyectos" className="py-20 px-4 bg-light-bg dark:bg-[#181819] transition-colors duration-300">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold mb-16 text-center text-light-text-main dark:text-white uppercase tracking-widest transition-colors duration-300">
              Proyectos Destacados
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;