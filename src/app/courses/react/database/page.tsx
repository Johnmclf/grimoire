// src/app/courses/react/database/page.tsx
import { getItems, addItem, deleteItem } from "@/lib/db";
import { revalidatePath } from "next/cache";
import CodeBlock from "@/components/ui/CodeBlock";

export default function DatabasePage() {
  const items = getItems();

  // Actions côté serveur
  async function handleAdd(formData: FormData) {
    "use server";
    const name = formData.get("name")?.toString();
    if (name) {
      addItem(name);
      revalidatePath("/courses/react/database");
    }
  }

  async function handleDelete(formData: FormData) {
    "use server";
    const id = Number(formData.get("id"));
    deleteItem(id);
    revalidatePath("/courses/react/database");
  }

  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-3xl space-y-12">

        <h1 className="text-3xl font-bold">Bases de données avec SQLite</h1>
        <p className="text-gray-600">
          Suis ce guide étape par étape pour installer, configurer et utiliser
          une base <b>SQLite</b> avec Next.js.  
           Toute la logique de base de données doit rester côté serveur,
          car SQLite dépend du module <code>fs</code>.
        </p>

        {/* --- Étape 1 : Installation --- */}
        <section>
          <h2 className="text-2xl font-semibold mb-4"> Installation</h2>
          <CodeBlock
            code={`npm install better-sqlite3
npm install --save-dev @types/better-sqlite3`}
          />
        </section>

        {/* --- Étape 2 : Architecture --- */}
        <section>
          <h2 className="text-2xl font-semibold mb-4"> Architecture</h2>
          <div className="bg-gray-100 text-gray-800 p-4 rounded-lg font-mono text-sm whitespace-pre shadow">
{`/src
 ├── app
 │   └──  page.tsx 
 └── lib
     └── db.ts                  #La base de données`}
          </div>
        </section>

        {/* --- Étape 3 : db.ts --- */}
        <section>
          <h2 className="text-2xl font-semibold mb-4"> Fichier db.ts</h2>
          <details className="bg-gray-100 rounded-lg shadow mb-4">
            <summary className="cursor-pointer px-4 py-2 font-semibold">
              lib/db.ts
            </summary>
            <div className="p-4">
              <CodeBlock
                code={`import Database from "better-sqlite3";

const db = new Database("data.sqlite");

db.prepare(\`
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  )
\`).run();

const row = db.prepare("SELECT COUNT(*) as count FROM items").get() as { count: number };
if (row.count === 0) {
  const insert = db.prepare("INSERT INTO items (name) VALUES (?)");
  insert.run("Apprendre React");
  insert.run("Créer une carte 3D");
  insert.run("Comprendre SQLite");
}

export function getItems() {
  return db.prepare("SELECT * FROM items").all() as { id: number; name: string }[];
}
export function addItem(name: string) {
  db.prepare("INSERT INTO items (name) VALUES (?)").run(name);
}
export function deleteItem(id: number) {
  db.prepare("DELETE FROM items WHERE id = ?").run(id);
}`}
              />
            </div>
          </details>
        </section>

        {/* --- Étape 4 : Exemple côté serveur --- */}
        <section>
          <h2 className="text-2xl font-semibold mb-4"> Exemple côté serveur</h2>
          <details className="bg-gray-100 rounded-lg shadow mb-4">
            <summary className="cursor-pointer px-4 py-2 font-semibold">
              Exemple d’utilisation dans une page
            </summary>
            <div className="p-4">
              <CodeBlock
                code={`export default function DatabasePage() {
  const items = getItems();

  async function handleAdd(formData: FormData) {
    "use server";
    const name = formData.get("name")?.toString();
    if (name) addItem(name);
  }

  return (
    <form action={handleAdd}>
      <input name="name" />
      <button type="submit">Ajouter</button>
    </form>
  );
}`}
              />
            </div>
          </details>
        </section>

        {/* --- Étape 5 : Résultat interactif --- */}
        <section>
          <h2 className="text-2xl font-semibold mb-4"> Résultat interactif</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            {/* Formulaire d’ajout */}
            <form action={handleAdd} className="flex gap-2">
              <input
                type="text"
                name="name"
                placeholder="Nouvel item..."
                className="flex-1 px-3 py-2 border rounded"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Ajouter
              </button>
            </form>

            {/* Liste des items */}
            <ul className="space-y-2 mt-6">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded"
                >
                  <span>{item.name}</span>
                  <form action={handleDelete}>
                    <input type="hidden" name="id" value={item.id} />
                    <button type="submit" className="text-red-500 hover:underline">
                      Supprimer
                    </button>
                  </form>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
