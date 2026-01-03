import {
  FaCode,
  FaServer,
  FaTools,
  FaDatabase,
  FaMoneyBillWave,
  FaWallet,
  FaCoins,
  FaCreditCard,
  FaChartLine,
  FaLaptopCode,
  FaPalette,
  FaPaintBrush,
  FaPencilRuler,
} from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";

function Skills() {
  // Compétences par catégorie
  const skillsData = {
    frontend: [
      { name: "HTML/CSS", level: 75 },
      { name: "JavaScript", level: 65 },
      { name: "React", level: 50 },
      { name: "Tailwind CSS", level: 60 },
      { name: "Bootstrap", level: 45 },
    ],
    backend: [
      { name: "Node.js", level: 45 },
      { name: "Python", level: 70 },
      { name: "PHP", level: 40 },
      { name: "Express", level: 35 },
    ],
    languages: [
      { name: "C", level: 65 },
      { name: "Java", level: 55 },
      { name: "Python", level: 70 },
      { name: "JavaScript", level: 65 },
    ],
    design: [
      { name: "Figma", level: 45 },
      { name: "Excalidraw", level: 70 },
      { name: "Penpot ", level: 40 },
      { name: "Canva ", level: 60 },
    ],
    tools: [
      { name: "Git/GitHub", level: 60 },
      { name: "VS Code", level: 80 },
      { name: "Linux", level: 55 },
      { name: "npm", level: 50 },
    ],
  };

  // Composant pour afficher une compétence avec barre de progression
  const SkillBar = ({ name, level }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-500 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Mes Compétences
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies et outils que j'ai appris et utilisés durant mes études
          </p>
        </div>

        {/* Grille de catégories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Frontend */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FaCode className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Frontend</h2>
            </div>
            {skillsData.frontend.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
          {/* Backend */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 p-3 rounded-lg">
                <FaServer className="text-purple-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Backend</h2>
            </div>
            {skillsData.backend.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
          {/* Langages de programmation */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-3 rounded-lg">
                <FaDatabase className="text-green-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Langages</h2>
            </div>
            {skillsData.languages.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>{" "}
          {/* les Design */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-3 rounded-lg">
                <FaPalette className="text-green-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Design</h2>
            </div>
            {skillsData.design.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
          {/* Outils */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-100 p-3 rounded-lg">
                <FaTools className="text-orange-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Outils</h2>
            </div>
            {skillsData.tools.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>

        {/* Section supplémentaire : Niveau général */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            En apprentissage continu 🚀
          </h3>
          <p className="text-lg opacity-90">
            Étudiant en 2ème année, je développe constamment mes compétences à
            travers des projets académiques et personnels
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
