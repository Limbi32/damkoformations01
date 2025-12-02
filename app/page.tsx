import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-200 text-center px-4">
      <Image
        src="/logoquizz.jpeg"
        alt="DamkoFormations"
        width={120}
        height={120}
        className="mb-6"
      />

      <h1 className="text-3xl font-bold text-blue-700 mb-2">
        Bienvenue sur DamkoFormations 📚
      </h1>

      <p className="text-gray-700 mb-6 max-w-md">
        Formez-vous facilement avec notre application mobile. Téléchargez
        maintenant et accédez à des cours pratiques, et quiz interactifs.
      </p>

      <div className="flex gap-4">
        {/* 🔹 Lien pour Android */}
        <a
          href="/apk/damko.apk"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition"
        >
          📱 Télécharger pour Androids
        </a>

        {/* 🔹 Lien pour iOS (App Store, facultatif) */}
       
      </div>

      <footer className="mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Damko Formations. Tous droits réservés.
      </footer>
    </main>
  );
}
