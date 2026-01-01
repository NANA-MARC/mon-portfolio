// Import de useState pour gérer l'état du formulaire
import { useState } from "react";
// Import des icônes
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  // ============ GESTION DE L'ÉTAT DU FORMULAIRE ============

  // State pour stocker les données du formulaire
  // formData est un objet avec 3 propriétés : name, email, message
  const [formData, setFormData] = useState({
    name: "", // Nom de l'utilisateur
    email: "", // Email de l'utilisateur
    message: "", // Message de l'utilisateur
  });

  // State pour afficher un message de succès après l'envoi
  const [submitted, setSubmitted] = useState(false);

  // ============ FONCTION POUR GÉRER LES CHANGEMENTS DANS LES CHAMPS ============

  // Cette fonction est appelée à chaque fois qu'on tape dans un champ
  const handleChange = (e) => {
    // e.target = l'élément HTML qui a déclenché l'événement (input ou textarea)
    // e.target.name = le nom du champ (ex: "name", "email", "message")
    // e.target.value = la valeur tapée par l'utilisateur

    setFormData({
      ...formData, // Copie toutes les valeurs existantes de formData
      [e.target.name]: e.target.value, // Met à jour seulement le champ modifié
    });

    // Exemple : Si on tape "Marc" dans le champ name
    // formData devient : { name: 'Marc', email: '', message: '' }
  };

  // ============ FONCTION POUR GÉRER LA SOUMISSION DU FORMULAIRE ============

  const handleSubmit = (e) => {
    // e.preventDefault() empêche le rechargement de la page (comportement par défaut)
    e.preventDefault();

    // Ici, normalement tu enverrais les données à un serveur
    // Pour l'instant, on affiche juste un message de succès
    console.log("Données du formulaire:", formData);

    // Affiche le message de succès
    setSubmitted(true);

    // Réinitialise le formulaire après 3 secondes
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    // Conteneur principal
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* ============ EN-TÊTE ============ */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Me Contacter
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à me contacter !
          </p>
        </div>

        {/* ============ GRILLE : FORMULAIRE + INFORMATIONS ============ */}
        {/* 1 colonne sur mobile, 2 colonnes sur écrans larges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ========== COLONNE GAUCHE : FORMULAIRE ========== */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-moi un message
            </h2>

            {/* Message de succès (affiché seulement si submitted = true) */}
            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
              </div>
            )}

            {/* FORMULAIRE */}
            {/* onSubmit appelle handleSubmit quand on clique sur "Envoyer" */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* ===== CHAMP NOM ===== */}
              <div>
                {/* Label (étiquette) du champ */}
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Nom complet
                </label>
                {/* Input pour le nom */}
                <input
                  type="text" // Type texte
                  id="name" // ID pour le lier au label
                  name="name" // Nom utilisé dans handleChange
                  value={formData.name} // Valeur contrôlée par React (state)
                  onChange={handleChange} // Fonction appelée à chaque modification
                  required // Champ obligatoire
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* ===== CHAMP EMAIL ===== */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Adresse email
                </label>
                <input
                  type="email" // Type email (validation automatique)
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* ===== CHAMP MESSAGE ===== */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Votre message
                </label>
                {/* Textarea pour un texte multiligne */}
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5" // Hauteur de 5 lignes
                  placeholder="Écrivez votre message ici..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              {/* ===== BOUTON ENVOYER ===== */}
              <button
                type="submit" // Type submit pour soumettre le formulaire
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Envoyer le message
              </button>
            </form>
          </div>

          {/* ========== COLONNE DROITE : INFORMATIONS DE CONTACT ========== */}
          <div className="space-y-6">
            {/* Carte : Email */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              {/* Flex pour aligner icône + texte horizontalement */}
              <div className="flex items-center gap-4">
                {/* Icône dans un cercle bleu */}
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaEnvelope className="text-blue-600 text-2xl" />
                </div>
                {/* Texte */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Email</h3>
                  <a
                    href="mailto:votre.email@example.com"
                    className="text-blue-600 hover:underline"
                  >
                    votre.email@example.com
                  </a>
                </div>
              </div>
            </div>

            {/* Carte : GitHub */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-4 rounded-full">
                  <FaGithub className="text-gray-800 text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">GitHub</h3>
                  <a
                    href="https://github.com/NANA-MARC"
                    target="_blank" // Ouvre dans un nouvel onglet
                    rel="noopener noreferrer" // Sécurité
                    className="text-blue-600 hover:underline"
                  >
                    https://github.com/NANA-MARC
                  </a>
                </div>
              </div>
            </div>

            {/* Carte : LinkedIn */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaLinkedin className="text-blue-700 text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/marc-nana-93349838a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.linkedin.com/in/marc-nana-93349838a
                  </a>
                </div>
              </div>
            </div>

            {/* Carte : Localisation */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <FaMapMarkerAlt className="text-green-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Localisation
                  </h3>
                  <p className="text-gray-600">Ouagadougou, Burkina Faso</p>
                </div>
              </div>
            </div>

            {/* Message d'encouragement */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">
                Travaillons ensemble ! 🚀
              </h3>
              <p className="opacity-90">
                Je suis ouvert à des stages, projets collaboratifs et
                opportunités d'apprentissage. N'hésitez pas à me contacter !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
