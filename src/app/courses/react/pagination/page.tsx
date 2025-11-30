"use client";

import { useState } from "react";
import CodeBlock from "@/components/ui/CodeBlock";

export default function PaginationPage() {
  const [page, setPage] = useState(1);
  const totalPages = 5;

  const items = ["React", "Vue", "Angular", "Svelte", "Next.js", "Nuxt", "Remix"];
  const [pageListe, setPageListe] = useState(1);
  const itemsPerPage = 3;
  const start = (pageListe - 1) * itemsPerPage;
  const paginated = items.slice(start, start + itemsPerPage);

  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Pagination en React</h1>
        <p className="text-gray-600 mb-8">
          La pagination permet de diviser de longues listes de données en pages plus petites.
          Voici deux exemples concrets.
        </p>

        {/* Exemple simple */}
        <h2 className="text-xl font-semibold mb-2"> Exemple simple</h2>
        <CodeBlock
          code={`import { useState } from "react";\n\nfunction Pagination() {\n  const [page, setPage] = useState(1);\n  const totalPages = 5;\n\n  return (\n    <div>\n      <p>Page actuelle : {page}</p>\n      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Précédent</button>\n      <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>Suivant</button>\n    </div>\n  );\n}`}
        />
        {/* Résultat en live */}
        <div className="border rounded p-4 mb-8">
          <p>Page actuelle : {page}</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Précédent
            </button>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Suivant
            </button>
          </div>
        </div>

        {/* Exemple avec liste */}
        <h2 className="text-xl font-semibold mb-2"> Exemple avec liste</h2>
        <CodeBlock
          code={`const items = ["React", "Vue", "Angular", "Svelte", "Next.js", "Nuxt", "Remix"];\n\nfunction PaginationListe() {\n  const [page, setPage] = useState(1);\n  const itemsPerPage = 3;\n\n  const start = (page - 1) * itemsPerPage;\n  const paginated = items.slice(start, start + itemsPerPage);\n\n  return (\n    <div>\n      <ul>\n        {paginated.map((item, index) => <li key={index}>{item}</li>)}\n      </ul>\n      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Précédent</button>\n      <button onClick={() => setPage(page + 1)} disabled={start + itemsPerPage >= items.length}>Suivant</button>\n    </div>\n  );\n}`}
        />
        {/* Résultat en live */}
        <div className="border rounded p-4">
          <ul className="list-disc pl-5">
            {paginated.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setPageListe(pageListe - 1)}
              disabled={pageListe === 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Précédent
            </button>
            <button
              onClick={() => setPageListe(pageListe + 1)}
              disabled={start + itemsPerPage >= items.length}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
