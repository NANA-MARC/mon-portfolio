import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  // Tableau de projets (tu pourras modifier avec tes vrais projets)
  const projects = [
    {
      id: 1,
      title: "Exercice Python - Calculatrice",
      description:
        "Calculatrice simple en Python avec interface console permettant les opérations de base.",
      technologies: ["Python"],
      github: "https://github.com/ton-username/calculatrice",
      demo: null,
      image:
        "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Python+Project",
    },
    {
      id: 2,
      title: "Page Web Responsive",
      description:
        "Page d'atterrissage responsive créée avec HTML, CSS et JavaScript vanilla.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/ton-username/landing-page",
      demo: "https://demo-example.com",
      image:
        "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Web+Project",
    },
    {
      id: 3,
      title: "Gestionnaire de Tâches",
      description:
        "Application de gestion de tâches avec ajout, suppression et marquage comme complété.",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/ton-username/todo-app",
      demo: null,
      image:
        "https://via.placeholder.com/400x250/10B981/FFFFFF?text=JavaScript+App",
    },
    {
      id: 4,
      title: "Algorithme de Tri - Java",
      description:
        "Implémentation de différents algorithmes de tri (bubble sort, quick sort) en Java.",
      technologies: ["Java"],
      github: "https://github.com/ton-username/sorting-algorithms",
      demo: null,
      image:
        "https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Java+Algorithm",
    },
    {
      id: 5,
      title: "API REST Simple",
      description:
        "API REST basique avec Node.js et Express pour gérer des utilisateurs.",
      technologies: ["Node.js", "Express"],
      github: "https://github.com/ton-username/simple-api",
      demo: null,
      image:
        "https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Node.js+API",
    },
    {
      id: 6,
      title: "Portfolio Personnel",
      description:
        "Ce portfolio créé avec React, Tailwind CSS et déployé sur Vercel.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      github: "https://github.com/ton-username/portfolio",
      demo: "https://ton-portfolio.vercel.app",
      image:
        "https://via.placeholder.com/400x250/6366F1/FFFFFF?text=React+Portfolio",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Mes Projets</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une collection de projets et exercices que j'ai réalisés pendant mes
            études
          </p>
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image du projet */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Contenu de la carte */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Liens */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                    >
                      <FaGithub size={20} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                    >
                      <FaExternalLinkAlt size={18} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message si pas de projets */}
        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Aucun projet pour le moment</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
