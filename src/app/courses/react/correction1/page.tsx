"use client";

import { useState } from "react";
import CodeBlock from "@/components/ui/CodeBlock";

export default function Exercice1CorrectionPage() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Mon compteur");

  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-3xl space-y-8">
        <h1 className="text-3xl font-bold">Correction – Exercice 1</h1>
        <p className="text-gray-600">
          Voici une solution possible pour l’exercice demandé.
        </p>

        {/* Code */}
        <CodeBlock
          code={`"use client";

import { useState } from "react";

export default function Exercice1() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Mon compteur");

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">{title} – Compteur : {count}</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Modifier le titre..."
        className="px-3 py-2 border rounded w-full"
      />

      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Incrémenter
      </button>
    </div>
  );
}`}
        />

        {/* Résultat */}
        <h2 className="text-xl font-semibold">Résultat :</h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold">
            {title} – Compteur : {count}
          </h2>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Modifier le titre..."
            className="px-3 py-2 border rounded w-full mt-4"
          />

          <button
            onClick={() => setCount(count + 1)}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Incrémenter
          </button>
        </div>
      </div>
    </div>
  );
}
