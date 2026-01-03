import { Link } from "react-router-dom";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50">
      {/* ============ SECTION HERO AVEC VIDÉO (RÉDUITE) ============ */}
      {/* ============ SECTION HERO AVEC VIDÉO ============ */}
      <section className="h-[600px] md:h-[500px] flex items-center relative overflow-hidden">
        {/* VIDÉO DE FOND (fonctionne sur mobile et desktop) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          webkit-playsinline="true"
          x5-playsinline="true"
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedMetadata={(e) => {
            e.target
              .play()
              .catch((err) => console.log("Autoplay bloqué:", err));
          }}
        >
          {/* TON URL CLOUDINARY ICI */}
          <source
            src="https://res.cloudinary.com/demo/video/upload/dog.mp4"
            type="video/mp4"
            type="video/mp4"
          />
          Votre navigateur ne supporte pas la vidéo.
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* CONTENU */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 w-full">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
              Salut, je suis <span className="text-blue-400">Marc</span> 👋
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-6 md:mb-8">
              Étudiant en informatique (2ème année)
            </p>
            <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
              Passionné par le développement web et la création d'applications.
              Je transforme des idées en code fonctionnel.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <Link
                to="/projects"
                className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Voir mes projets
              </Link>
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium border-2 border-white hover:bg-gray-100 transition"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ============ SECTION COMPÉTENCES RAPIDES ============ */}
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
