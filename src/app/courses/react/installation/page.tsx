"use client";

import { useState } from "react";

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-gray-900 text-gray-100 rounded-lg p-4 mb-4">
      <pre className="overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-2 py-1 text-xs rounded bg-gray-700 hover:bg-gray-600"
      >
        {copied ? "Copié !" : "Copier"}
      </button>
    </div>
  );
}

export default function ReactInstallationPage() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Installation de React avec Next.js</h1>

        <h2 className="text-xl font-semibold mb-2">Étape 1 - Vérifier Node.js</h2>
        <CodeBlock code={`node -v`} />

        <h2 className="text-xl font-semibold mb-2">Étape 2 - Créer le projet</h2>
        <CodeBlock code={`npx create-next-app@latest foldername --ts --tailwind --eslint --src-dir --app --no-import-alias`} />

        <h2 className="text-xl font-semibold mb-2">Étape 3 - Naviguer dans le dossier</h2>
        <CodeBlock code={`cd foldername`} />

        <h2 className="text-xl font-semibold mb-2">Étape 4 - Lancer le serveur</h2>
        <CodeBlock code={`npm run dev`} />

        <h2 className="text-xl font-semibold mb-2">Structure des fichiers</h2>
        <CodeBlock code={`app/\n ├─ page.tsx\n ├─ layout.tsx\n ├─ globals.css\n ├─ components/\n └─ ...`} />
      </div>
    </div>
  );
}
