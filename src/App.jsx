import { useState, useEffect } from 'react';
import { Github, Linkedin, Moon, Sun, ExternalLink, Code2, Server, Layout, BookOpen, Database, Terminal, Cpu, Globe, ArrowLeft, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Componente para la Tarjeta de Proyecto
const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col justify-between overflow-hidden"
  >
    {/* Efecto de borde degradado al hacer hover (Toque Premium) */}
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/20 rounded-2xl transition-colors duration-300 pointer-events-none"></div>

    <div>
      <div className="flex justify-between items-start mb-6">
        {/* Icono con fondo degradado */}
        <div className="p-3 bg-gradient-to-br from-primary-500 to-blue-600 rounded-xl shadow-lg shadow-primary-500/20">
          {project.icon}
        </div>

        {/* Badge de Estado */}
        {project.status === "En desarrollo" ? (
          <span className="px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full border border-yellow-200 dark:border-yellow-800">
            En desarrollo
          </span>
        ) : (
          <span className="px-3 py-1 text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full border border-emerald-200 dark:border-emerald-800">
            Completado
          </span>
        )}
      </div>

      <h4 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {project.title}
      </h4>

      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map(tag => (
          <span key={tag} className="px-3 py-1 text-xs font-medium bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-lg border border-gray-100 dark:border-gray-700">
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Lógica de Botones */}
    <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold hover:gap-3 transition-all group/link"
        >
          Visitar Sitio Web
          <ExternalLink size={18} className="group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      ) : (
        <div className="flex items-center gap-2 text-gray-400 text-sm italic">
          <Code2 size={16} /> Código en desarrollo privado
        </div>
      )}
    </div>
  </motion.div>
);

const EducationSection = () => {
  return (
    <section id="formacion" className="py-20 bg-gray-50 dark:bg-gray-800/30 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Formación Académica
        </h3>

        <div className="relative border-l-4 border-primary-200 dark:border-primary-900 ml-3 md:ml-6 space-y-12">

          {/* Item de Educación */}
          <div className="relative pl-8 md:pl-12">
            {/* Punto en la línea de tiempo */}
            <div className="absolute -left-[11px] top-0 w-6 h-6 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900"></div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                Ingeniería en Desarrollo de Software
              </h4>
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                4º Año (concluído)
              </span>
            </div>

            <p className="text-gray-500 dark:text-gray-400 font-medium mb-4">
              Universidad de El Salvador (UES)
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Mi formación combina la ingeniería de software tradicional con tecnologías web modernas.
              Mantengo un enfoque principal en el <strong className="text-primary-600 dark:text-primary-400">desarrollo Frontend</strong>,
              creando interfaces que no solo son funcionales, sino intuitivas y centradas en el usuario.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mt-3">
              Paralelamente, fortalezco mi perfil con <strong className="text-emerald-600 dark:text-emerald-400">tecnologías Backend</strong> (APIs REST, Bases de Datos),
              lo que me permite comprender el ciclo de vida completo del dato y facilitar una integración sólida entre el cliente y el servidor.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      subtitle: "Creación de experiencias visuales",
      icon: <Layout className="w-6 h-6 text-blue-500" />,
      skills: [
        { name: "React / Vite", level: "Avanzado" },
        { name: "Tailwind CSS", level: "Avanzado" },
        { name: "JavaScript (ES6+)", level: "Intermedio-Alto" },
        { name: "HTML5 / CSS3", level: "Avanzado" },
        { name: "Framer Motion", level: "Básico" }
      ]
    },
    {
      title: "Backend & Herramientas",
      subtitle: "Lógica de servidor y bases de datos",
      icon: <Server className="w-6 h-6 text-green-500" />,
      skills: [
        { name: "Python", level: "Intermedio" },
        { name: "Django / DRF", level: "Intermedio" },
        { name: "PostgreSQL", level: "Intermedio" },
        { name: "Git / GitHub", level: "Intermedio" },
        { name: "Docker", level: "Nociones" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Mis Habilidades Técnicas
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  {category.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{category.subtitle}</p>
                </div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}</span>
                    </div>
                    {/* Barra de progreso decorativa */}
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level === 'Avanzado' ? '90%' : skill.level === 'Intermedio' ? '65%' : skill.level === 'Intermedio-Alto' ? '75%' : '40%' }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full rounded-full ${idx === 0 ? 'bg-primary-500' : 'bg-emerald-500'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="relative bg-white dark:bg-gray-900 pt-16 pb-8 overflow-hidden transition-colors duration-300">

      {/* Línea decorativa superior con gradiente */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-60"></div>

      {/* Efecto de luz ambiental sutil en el fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-4">

        {/*Sección Principal: Llamada a la acción */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

          {/* Columna Izquierda: Texto persuasivo */}
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              ¿Listo para crear algo <span className="text-primary-600 dark:text-primary-400">increíble?</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
              Estoy disponible para nuevas oportunidades laborales y proyectos freelance. Hablemos sobre cómo puedo aportar valor a tu equipo.
            </p>
          </div>

          {/* Columna Derecha: Botones de contacto y redes*/}
          <div className="flex flex-col items-center md:items-end gap-6">
            <a
              href="mailto:frann2022gonzalez@gmail.com"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/30 hover:-translate-y-1"
            >
              <span>📩 Envíame un correo</span>
              <ArrowLeft className="rotate-180 transition-transform group-hover:translate-x-1" size={20} />
            </a>

            <div className="flex flex-col items-center md:items-end gap-3">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                O encuéntrame en mis redes
              </p>

              {/* --- iconos de las redes--- */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/Frann-Avila1411"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/franklin-avila-3b5507352/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* seccion inferior*/}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Marca Personal */}
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600">
              <Code2 size={20} />
            </div>
            <span className="font-bold text-gray-900 dark:text-white text-lg">Franklin.Dev</span>
          </div>

          {/* Copyright*/}
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-right leading-relaxed">
            © {new Date().getFullYear()} Franklin Avila.
            <span className="block sm:inline sm:ml-1">Construido con buenas prácticas, React y Tailwind.</span>
          </p>

        </div>
      </div>
    </footer>
  );
};

// Componente de la Página Principal (Home)
const Home = ({ theme, toggleTheme, projects }) => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">

    {/* Navbar */}
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-24">

          {/* Logo / Nombre */}
          <a href="#inicio" className="group">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Franklin<span className="text-primary-600">.Dev</span>
            </h1>
            <div className="h-1 w-0 bg-primary-600 group-hover:w-full transition-all duration-300 rounded-full"></div>
          </a>

          {/* enlaces de navegación */}
          {/* Hidden en movil, Flex en pantallas medianas en adelante */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#habilidades" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Habilidades</a>
            <a href="#formacion" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Formación</a>
            <a href="#proyectos" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Proyectos</a>
          </div>

          {/* Botón de Tema */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
          >
            {theme === 'dark' ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-primary-600" />}
          </button>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <main id='inicio' className="max-w-6xl mx-auto px-4 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-5xl mx-auto"
      >
        {/* foto personal a la izquierda */}
        <div className="relative shrink-0 group">
          {/* Efecto de brillo trasero */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-primary-600 to-blue-300 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

          {/* Contenedor de la imagen */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
            <img
              src="/perfil.jpeg"
              alt="Franklin Avila"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/250?text=FA" }}
            />
          </div>
        </div>

        {/* Texto a la derecha en PC, centrado en movil */}
        <div className="text-center md:text-left space-y-6 max-w-2xl">

          {/* Etiqueta pequeña */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium border border-primary-200 dark:border-primary-800 mx-auto md:mx-0">
            <Code2 size={16} /> Desarrollador Frontend & Backend Enthusiast
          </div>

          {/* Nombre grande */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            Franklin Avila
          </h1>

          {/* descripción optimizada con negritas*/}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Experiencia práctica en la creación de <strong className="text-primary-600 dark:text-primary-400 font-semibold">interfaces web responsivas</strong>,
            consumo de APIs REST y desarrollo de aplicaciones web modernas.
            <br className="hidden md:block" /> {/* Salto de línea solo en PC para estética */}
            <span className="block mt-2">
              Cuento con formación y práctica continua en <strong className="text-primary-600 dark:text-primary-400 font-semibold">backend</strong>,
              lo que me permite comprender el flujo completo de una aplicación y facilitar una integración eficiente.
            </span>
          </p>

          {/* Botones alineados a la izquierda en PC */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
            <a href="https://github.com/Frann-Avila1411" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-bold hover:opacity-90 transition-all hover:-translate-y-1">
              <Github size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/franklin-avila-3b5507352/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-700 transition-all hover:-translate-y-1 shadow-lg shadow-primary-500/20">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>

        </div>
      </motion.div>

      {/* Tech Stack Preview */}
      <div className="mt-20 py-10 border-y border-gray-200 dark:border-gray-800">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Stack Principal</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-xl font-bold flex items-center gap-2"><Code2 /> React</span>
          <span className="text-xl font-bold flex items-center gap-2"><Server /> Django</span>
          <span className="text-xl font-bold flex items-center gap-2"><Layout /> Tailwind</span>
          <span className="text-xl font-bold flex items-center gap-2"><Server /> PostgreSQL</span>        </div>
      </div>

      {/* --- nueva sección de para las habilidades --- */}
      <div id="habilidades"><SkillsSection /> </div>
      {/* -------------------------------------- */}

      {/* seccion de educación */}
      <EducationSection />

      {/* Proyectos */}
      <div id="proyectos" className="mt-20">
        <h3 className="text-3xl font-bold mb-10 text-center">Proyectos Destacados</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Mapeo de proyectos usando el componente ProjectCard */}
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </main>

    {/* footer */}
    <Footer />
  </div>
);

// Componente para la página de Detalles del Proyecto (Placeholder)
const ProjectDetail = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-10">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-4">¡Página en Construcción!</h1>
      <p className="text-lg mb-8">Aquí mostraremos capturas de pantalla, diagramas de arquitectura (Back-end) y el código de este proyecto.</p>
      <Link to="/" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
        Volver al inicio
      </Link>
    </div>
  </div>
);

// Componente Principal de la Aplicación
function App() {
  // Lógica de tema (Dark/Light Mode)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

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

  // Datos del portafolio
  const projects = [
    {
      title: "Sistema Bibliotecario Ionosfera",
      desc: "Sistema integral web y móvil para gestión bibliotecaria de una ONG ambientalista. Arquitectura escalable y moderna.",
      tags: ["Django REST", "React", "React Native", "PostgreSQL", "Tailwind"],
      icon: <BookOpen className="w-6 h-6 text-white" />,
      status: "En desarrollo",
      // Sin enlace porque está en proceso
      link: null
    },
    {
      title: "Música y Emociones",
      desc: "Blog personal interactivo explorando la psicología de la música. Diseño responsive centrado en la experiencia de lectura.",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      icon: <Layout className="w-6 h-6 text-white" />,
      status: "Finalizado",
      link: "https://musica-y-emociones.netlify.app/"
    }
  ];

  return (
    <Router>
      <Routes>
        {/* Ruta de la Página Principal */}
        <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} projects={projects} />} />

        {/* Rutas de Detalles de Proyecto */}
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;