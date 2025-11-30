import CodeBlock from "@/components/ui/CodeBlock";

export default function HooksPage() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Les Hooks React</h1>
        <p className="text-gray-600 mb-8">
          Les hooks sont des fonctions spéciales qui permettent d’utiliser des 
          fonctionnalités de React (comme l’état ou le cycle de vie) dans des composants fonctionnels.
        </p>

        <h2 className="text-xl font-semibold mb-2"> useState</h2>
        <p className="text-gray-600 mb-2">
          Permet de gérer l’état local dans un composant fonctionnel.
        </p>
        <CodeBlock code={`import { useState } from "react";\n\nfunction Compteur() {\n  const [compte, setCompte] = useState(0);\n  return (\n    <div>\n      <p>Valeur : {compte}</p>\n      <button onClick={() => setCompte(compte + 1)}>+1</button>\n    </div>\n  );\n}`} />

        <h2 className="text-xl font-semibold mb-2"> useEffect</h2>
        <p className="text-gray-600 mb-2">
          Permet d’exécuter du code lors du rendu initial ou quand des dépendances changent.
        </p>
        <CodeBlock code={`import { useEffect, useState } from "react";\n\nfunction Horloge() {\n  const [heure, setHeure] = useState(new Date());\n\n  useEffect(() => {\n    const timer = setInterval(() => setHeure(new Date()), 1000);\n    return () => clearInterval(timer); // Nettoyage\n  }, []);\n\n  return <p>{heure.toLocaleTimeString()}</p>;\n}`} />

        <h2 className="text-xl font-semibold mb-2"> Exemple combiné : useState + useEffect</h2>
        <p className="text-gray-600 mb-2">
          Ici, on gère un compteur (<code>useState</code>) et on utilise 
          <code>useEffect</code> pour mettre à jour le titre de la page à chaque changement.
        </p>
        <CodeBlock code={`import { useState, useEffect } from "react";\n\nfunction CompteurAvecTitre() {\n  const [compte, setCompte] = useState(0);\n\n  useEffect(() => {\n    document.title = \`Compteur : \${compte}\`;\n  }, [compte]);\n\n  return (\n    <div>\n      <p>Valeur : {compte}</p>\n      <button onClick={() => setCompte(compte + 1)}>+1</button>\n    </div>\n  );\n}`} />
      
      
      </div>
    </div>
  );
}
