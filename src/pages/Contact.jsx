import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  // État du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // État pour les messages (succès, erreur, chargement)
  const [status, setStatus] = useState({
    submitted: false,
    error: false,
    loading: false,
  });

  // Gestion des changements dans les champs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Active l'état de chargement
    setStatus({ submitted: false, error: false, loading: true });

    // ⚠️ REMPLACE CES VALEURS PAR LES TIENNES ⚠️
    const serviceID = "service_7xm95jb"; // Ex: service_abc123
    const templateID = "template_vin13bm"; // Ex: template_xyz789
    const publicKey = "TaluCdeV5OaSbdBG9c"; // Ex: ABCdef123GHI456

    // Prépare les données pour EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: "nanamarc5547@gmail.com", // ⚠️ TON EMAIL ICI
    };

    // Envoi de l'email via EmailJS
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log(
          "Email envoyé avec succès!",
          response.status,
          response.text
        );

        // Affiche le message de succès
        setStatus({ submitted: true, error: false, loading: false });

        // Réinitialise le formulaire après 3 secondes
        setTimeout(() => {
          setStatus({ submitted: false, error: false, loading: false });
          setFormData({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi:", error);

        // Affiche le message d'erreur
        setStatus({ submitted: false, error: true, loading: false });

        // Cache le message d'erreur après 5 secondes
        setTimeout(() => {
          setStatus({ submitted: false, error: false, loading: false });
        }, 5000);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* EN-TÊTE */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Me Contacter
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à me contacter !
          </p>
        </div>

        {/* GRILLE : FORMULAIRE + INFORMATIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FORMULAIRE */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-moi un message
            </h2>

            {/* MESSAGE DE SUCCÈS */}
            {status.submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center gap-2">
                <span className="text-xl">✅</span>
                <span>
                  Message envoyé avec succès ! Je vous répondrai bientôt.
                </span>
              </div>
            )}

            {/* MESSAGE D'ERREUR */}
            {status.error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 flex items-center gap-2">
                <span className="text-xl">❌</span>
                <span>
                  Une erreur est survenue. Réessayez ou contactez-moi
                  directement par email.
                </span>
              </div>
            )}

            {/* FORMULAIRE */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* CHAMP NOM */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status.loading}
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                />
              </div>

              {/* CHAMP EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status.loading}
                  placeholder="votre.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                />
              </div>

              {/* CHAMP MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status.loading}
                  rows="5"
                  placeholder="Écrivez votre message ici..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none disabled:bg-gray-100"
                ></textarea>
              </div>

              {/* BOUTON ENVOYER */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:bg-blue-300 disabled:cursor-not-allowed"
              >
                {status.loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* INFORMATIONS DE CONTACT */}
          <div className="space-y-6">
            {/* Carte : Email */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaEnvelope className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Email</h3>
                  <a
                    href="mailto:ton.email@example.com"
                    className="text-blue-600 hover:underline"
                  >
                    ton.email@example.com
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
                    href="https://github.com/ton-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    github.com/ton-username
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
                    href="https://linkedin.com/in/ton-profil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    linkedin.com/in/ton-profil
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
