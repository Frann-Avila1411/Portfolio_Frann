import { useState, useEffect } from 'react';
import { Github, Linkedin, Moon, Sun, ExternalLink, Code2, Server, Layout, BookOpen } from 'lucide-react';
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

// Componente de la Página Principal (Home)
const Home = ({ theme, toggleTheme, projects }) => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
    
    {/* Navbar */}
    <nav className="fixed w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
          Franklin Avila
        </h1>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>

    {/* Hero Section */}
    <main className="max-w-6xl mx-auto px-4 pt-32 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium">
          <Code2 size={16} /> Frontend Dev & Backend Enthusiast
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
          Transformando código en <span className="text-primary-600 dark:text-primary-400">soluciones reales</span>
        </h2>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          "Comprometido con el aprendizaje continuo, el código limpio y el crecimiento profesional en el desarrollo de software."
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <a href="https://github.com/Frann-Avila1411" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:opacity-90 transition-opacity">
            <Github size={20} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/franklinavila/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </motion.div>

      {/* Tech Stack Preview */}
      <div className="mt-20 py-10 border-y border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Stack Principal</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-xl font-bold flex items-center gap-2"><Code2 /> React</span>
              <span className="text-xl font-bold flex items-center gap-2"><Server /> Django</span>
              <span className="text-xl font-bold flex items-center gap-2"><Layout /> Tailwind</span>
              <span className="text-xl font-bold flex items-center gap-2"><Server /> PostgreSQL</span>
          </div>
      </div>

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
            desc: "Sistema integral web y móvil para gestión bibliotecaria de una ONG ambientalista. Arquitectura escalable y moderna. Demuestra tu conocimiento en Full Stack.",
            tags: ["Django REST", "React", "React Native", "PostgreSQL", "Tailwind"],
            icon: <BookOpen className="w-6 h-6" />,
            status: "En desarrollo",
            slug: "ionosfera" // Usado para la URL
        },
        {
            title: "Música y Emociones",
            desc: "Blog personal interactivo explorando la psicología de la música. Diseño responsive centrado en la experiencia de lectura. Demuestra tu base en Front.",
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