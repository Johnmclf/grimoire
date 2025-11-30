"use client";

import { useState } from "react";

export default function DarkModePage() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        dark ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="px-8 py-12 flex justify-center">
        <div className="w-full max-w-3xl space-y-12">
          <h1 className="text-3xl font-bold">Mode clair / sombre</h1>
          <div>
            <p className="text-gray-500 dark:text-gray-400">
                Cette page montre comment mettre en place un <b>mode clair / sombre</b> dans
                ton projet. On utilise un <code>useState</code> pour stocker l’état du thème
                (<code>true</code> pour sombre, <code>false</code> pour clair), puis on applique
                des classes <code>Tailwind</code> conditionnelles sur le conteneur principal.
                <br />
            </p>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Par défaut :</p>
            <ul className="list-disc list-inside mt-2 text-gray-500 dark:text-gray-400">
                <li><code>bg-gray-100 text-gray-900</code> → en mode clair</li>
                <li><code>bg-gray-900 text-gray-100</code> → en mode sombre</li>
                <li>Un bouton permet de basculer entre les deux modes</li>
                <li>Tous les éléments de la page héritent automatiquement du thème</li>
            </ul>
          </div>


          <section>
            <h2 className="text-2xl font-semibold mb-4">Le code</h2>
            <div
              className="relative w-full rounded-lg overflow-hidden shadow 
                         bg-[#1e1e1e] text-gray-100"
            >
              {/* ✅ Bouton copier */}
              <button
                onClick={() =>
                  navigator.clipboard.writeText(`"use client";

import { useState } from "react";

export default function DarkModePage() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={\`min-h-screen transition-colors duration-500 \${dark ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}\`}
    >
      <button
        onClick={() => setDark(!dark)}
        className="px-4 py-2 rounded-lg shadow bg-indigo-600 text-white mt-6 ml-6"
      >
        {dark ? " Mode clair" : " Mode sombre"}
      </button>

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Hello World</h1>
        <p>Ceci est un exemple de contenu affecté par le thème.</p>
      </div>
    </div>
  );
}`)}
                className="absolute top-2 right-2 px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-white rounded"
              >
                Copier
              </button>

              <pre className="p-4 text-sm whitespace-pre-wrap overflow-x-auto">
                <code>{`"use client";

import { useState } from "react";

export default function DarkModePage() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={\`min-h-screen transition-colors duration-500 \${dark ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}\`}
    >
      <button
        onClick={() => setDark(!dark)}
        className="px-4 py-2 rounded-lg shadow bg-indigo-600 text-white mt-6 ml-6"
      >
        {dark ? " Mode clair" : " Mode sombre"}
      </button>

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Hello World</h1>
        <p>Ceci est un exemple de contenu affecté par le thème.</p>
      </div>
    </div>
  );
}`}</code>
              </pre>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4"> Le bouton</h2>
            <button
              onClick={() => setDark(!dark)}
              className={`px-4 py-2 rounded-lg shadow ${
                dark ? "bg-purple-700 text-gray-100" : "bg-green-700 text-gray-100"
              }`}
            >
              {dark ? " Mode clair" : " Mode sombre"}
            </button>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4"> Résultat</h2>
            <div
              className={`p-6 rounded-lg shadow ${
                dark ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
              }`}
            >
              <h1 className="text-2xl font-bold mb-2">Hello World</h1>
              <p>Ceci est un exemple de contenu affecté par le thème.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
