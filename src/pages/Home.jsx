import { Link } from "react-router-dom";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Section Hero */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Salut, je suis <span className="text-blue-600">Marc</span> 👋
            </h1>
            <p className="text-2xl text-gray-600 mb-8">
              Étudiant en informatique (2ème année)
            </p>
            <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
              Passionné par le développement web et la création d'applications.
              Je transforme des idées en code fonctionnel.
            </p>

            <div className="flex justify-center gap-4">
              <Link
                to="/projects"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Voir mes projets
              </Link>
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium border-2 border-blue-600 hover:bg-blue-50 transition"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences rapides */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ce que je fais
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Développement Frontend</h3>
              <p className="text-gray-600">
                Création d'interfaces utilisateur avec React, HTML, CSS et
                JavaScript
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLaptopCode className="text-purple-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Développement Backend</h3>
              <p className="text-gray-600">
                Construction d'APIs et de serveurs avec Node.js, Python et PHP
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Apprentissage Continu</h3>
              <p className="text-gray-600">
                Toujours à la recherche de nouvelles technologies et compétences
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
