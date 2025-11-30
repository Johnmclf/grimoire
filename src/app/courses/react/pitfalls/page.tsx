import CodeBlock from "@/components/ui/CodeBlock";

export default function BonnesPratiquesPage() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Le routing avec Next.js</h1>
        <p className="text-gray-600 mb-8">
          Next.js mélange deux types de composants : les <strong>Server Components</strong> (par défaut) 
          et les <strong>Client Components</strong>.  
          Comprendre la différence évite beaucoup d’erreurs.
        </p>

        {/* Différence */}
        <h2 className="text-xl font-semibold mb-2"> Server Components (par défaut)</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
          <li>Rendus côté serveur, avant d’envoyer la page au navigateur.</li>
          <li>Excellents pour le SEO (référencement Google).</li>
          <li>Peuvent être <code>async</code> et donc exécuter directement du code serveur (ex: <code>fetch</code> vers une base de données).</li>
          <li> N’ont pas accès aux hooks React (<code>useState</code>, <code>useEffect</code>).</li>
        </ul>

        <CodeBlock
          code={`// Exemple Server Component
export default async function Users() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <ul>
      {users.map((u) => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}`}
        />

        <h2 className="text-xl font-semibold mb-2"> Client Components</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
          <li>Rendus dans le navigateur après réception de la page.</li>
          <li>Nécessaires si tu veux de l’interactivité (boutons, formulaires, états dynamiques, animations).</li>
          <li> Tu dois ajouter <code>"use client"</code> en haut du fichier.</li>
          <li> Un Client Component ne peut pas être <code>async</code>.</li>
        </ul>

        <CodeBlock
          code={`"use client";

import { useState } from "react";

export default function Compteur() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Compteur : {count}
    </button>
  );
}`}
        />

        <h2 className="text-xl font-semibold mb-2"> Server Components et Client Components</h2>
        <p>Dans une vraie app, on combine toujours des composants serveur et client. Attention, si un composant serveur est rendu dans un composant client,
        alors le composant serveur devient lui aussi client. </p>
        <p>Server component</p>
        <CodeBlock
          code={`// Fichier : app/users/page.tsx
import UsersList from "./UsersList";

export default async function UsersPage() {
  const res = await fetch("https://toto.com/users");
  const users = await res.json();
  return <UsersList users={users} />;
}
`}
        />
        <p>Client component</p>
        <CodeBlock
          code={`// Fichier : app/users/UsersList.tsx
"use client";

import { useState } from "react";

export default function UsersList({ users }: { users: any[] }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div>
      <h2>Liste des utilisateurs :</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id} onClick={() => setSelected(u.name)}>
            {u.name}
          </li>
        ))}
      </ul>
      {selected && <p>Utilisateur sélectionné : {selected}</p>}
    </div>
  );
}
`}
        />
      </div>
    </div>
  );
}
