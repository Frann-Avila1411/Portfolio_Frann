import { useState, useEffect } from 'react';
import { Github, Linkedin, Moon, Sun, ExternalLink, Code2, Server, Layout, BookOpen, Database, Terminal, Cpu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Componente para la Tarjeta de Proyecto
const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col justify-between"
  >
    <div>
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
          {project.icon}
        </div>
        {project.status === "En desarrollo" && (
          <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 rounded-full">En proceso</span>
        )}
      </div>

      <h4 className="text-xl font-bold mb-2">{project.title}</h4>
      <p className="text-gray-600 dark:text-gray-400 mb-4 h-20 text-sm">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
          <span key={tag} className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Usamos el componente Link de React Router para simular una navegación */}
    <Link to={`/project/${project.slug}`} className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline text-sm mt-4">
      Ver detalles <ExternalLink size={16} className="ml-1" />
    </Link>
  </motion.div>
);

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
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Identidad */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-2">
            Franklin Avila
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Frontend Developer & Backend Enthusiast
          </p>
        </div>

        {/* Contacto Directo */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <a
            href="mailto:frann2022gonzalez@gmail.com" // email para que me contacten
            className="inline-flex items-center gap-2 px-6 py-2 bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300 rounded-full font-medium hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors"
          >
            📧 Contáctame por correo
          </a>

          <div className="flex gap-4 text-gray-500 dark:text-gray-400">
            <a href="https://github.com/Frann-Avila1411" target="_blank" rel="noreferrer" className="hover:text-primary-500 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/franklinavila/" target="_blank" rel="noreferrer" className="hover:text-primary-500 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

      </div>

      <div className="text-center mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Franklin Avila. Hecho con React & Tailwind.
        </p>
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
        {/* h-24 hace el navbar más alto (96px) para mayor presencia */}
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="group">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Franklin<span className="text-primary-600">.Dev</span>
            </h1>
            {/* Pequeña línea animada bajo el nombre */}
            <div className="h-1 w-0 bg-primary-600 group-hover:w-full transition-all duration-300 rounded-full"></div>
          </Link>

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
    <main className="max-w-6xl mx-auto px-4 pt-32 pb-20">
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
            <a href="https://www.linkedin.com/in/franklinavila/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-700 transition-all hover:-translate-y-1 shadow-lg shadow-primary-500/20">
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
      <SkillsSection />
      {/* -------------------------------------- */}

      {/* Proyectos */}
      <div className="mt-20">
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
      icon: <BookOpen className="w-6 h-6" />,
      status: "En desarrollo",
      slug: "ionosfera" // Usado para la URL
    },
    {
      title: "Música y Emociones",
      desc: "Blog personal interactivo explorando la psicología de la música. Diseño responsive centrado en la experiencia de lectura.",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      icon: <Layout className="w-6 h-6" />,
      status: "Finalizado",
      slug: "musica-emociones"
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