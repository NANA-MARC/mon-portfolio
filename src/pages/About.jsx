// Import des icônes depuis react-icons
import {
  FaGraduationCap,
  FaLaptopCode,
  FaLightbulb,
  FaHeart,
} from "react-icons/fa";

function About() {
  return (
    // Conteneur principal avec hauteur minimum et fond gris clair
    <div className="min-h-screen bg-gray-50 py-20">
      {/* Conteneur centré avec largeur maximale */}
      <div className="max-w-4xl mx-auto px-4">
        {/* ============ EN-TÊTE DE LA PAGE ============ */}
        <div className="text-center mb-12">
          {/* Titre principal */}
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            À propos de moi
          </h1>
          {/* Sous-titre */}
          <p className="text-xl text-gray-600">
            Étudiant passionné par l'informatique et le développement
          </p>
        </div>

        {/* ============ CARTE PRINCIPALE ============ */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          {/* Section : Qui suis-je ? */}
          <div className="mb-8">
            {/* Titre de section avec icône */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              {/* Icône dans un cercle coloré */}
              <span className="bg-blue-100 p-2 rounded-full">
                <FaGraduationCap className="text-blue-600" />
              </span>
              Qui suis-je ?
            </h2>

            {/* Paragraphes de texte */}
            <p className="text-gray-700 leading-relaxed mb-4">
              Je m'appelle{" "}
              <span className="font-bold text-blue-600">NANA Marc</span>,
              étudiant en 2ème année d'informatique à Burkina Institut of
              Technology (<span className="font-bold text-blue-600">BIT</span>).
              Passionné par la technologie depuis mon plus jeune âge, j'ai
              décidé d'en faire mon métier.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Mon parcours universitaire me permet d'explorer différents
              domaines de l'informatique : développement web, programmation
              orientée objet, algorithmes, et bien plus encore. Chaque jour est
              une opportunité d'apprendre quelque chose de nouveau.
            </p>
          </div>

          {/* Ligne de séparation */}
          <hr className="my-8 border-gray-200" />

          {/* Section : Mon parcours */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="bg-purple-100 p-2 rounded-full">
                <FaLaptopCode className="text-purple-600" />
              </span>
              Mon parcours
            </h2>

            {/* Liste avec puces personnalisées */}
            <ul className="space-y-3">
              {/* Chaque élément de liste */}
              <li className="flex items-start gap-3">
                {/* Puce personnalisée (point bleu) */}
                <span className="bg-blue-500 w-2 h-2 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">
                  <strong>2023-Présent :</strong> 2ème année de Licence en
                  Informatique
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="bg-blue-500 w-2 h-2 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">
                  <strong>2022-2023 :</strong> 1ère année - Découverte des
                  langages C, Python, Java
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="bg-blue-500 w-2 h-2 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">
                  <strong>2024 :</strong> Début de l'apprentissage du
                  développement web (HTML/CSS/JS, React)
                </span>
              </li>
            </ul>
          </div>

          <hr className="my-8 border-gray-200" />

          {/* Section : Ce qui me motive */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="bg-green-100 p-2 rounded-full">
                <FaLightbulb className="text-green-600" />
              </span>
              Ce qui me motive
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Ce qui me passionne le plus dans l'informatique, c'est la capacité
              de <strong>créer des solutions</strong> à partir de lignes de
              code. Transformer une idée en une application fonctionnelle est
              extrêmement gratifiant.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Je suis particulièrement intéressé par le{" "}
              <strong>développement web full-stack</strong>, car il combine la
              créativité du frontend avec la logique du backend. Mon objectif
              est de devenir un développeur polyvalent capable de créer des
              applications complètes de A à Z.
            </p>
          </div>
        </div>

        {/* ============ CARTES DE VALEURS ============ */}
        {/* Grille responsive : 1 colonne sur mobile, 3 sur desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Carte 1 : Apprentissage */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            {/* Icône dans un grand cercle */}
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaGraduationCap className="text-blue-600 text-3xl" />
            </div>
            {/* Titre de la carte */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Apprentissage continu
            </h3>
            {/* Description */}
            <p className="text-gray-600 text-sm">
              Toujours curieux d'apprendre de nouvelles technologies et concepts
            </p>
          </div>

          {/* Carte 2 : Résolution de problèmes */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaLaptopCode className="text-purple-600 text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Résolution de problèmes
            </h3>
            <p className="text-gray-600 text-sm">
              J'aime relever des défis et trouver des solutions créatives
            </p>
          </div>

          {/* Carte 3 : Passion */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHeart className="text-red-600 text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Passion pour le code
            </h3>
            <p className="text-gray-600 text-sm">
              Le développement est plus qu'un métier, c'est une passion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export du composant pour pouvoir l'utiliser ailleurs
export default About;
