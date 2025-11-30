import CodeBlock from "@/components/ui/CodeBlock";

export default function ReactRoutingPage() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Le routing (Next.js)</h1>

        <p className="text-gray-600 mb-4">
          Next.js utilise un file-based routing system. Cela veut dire que la structure de ton dossier détermine les URL du site. Chaque dossier correspond à une partie de l’URL,
          et chaque page.tsx définit le contenu affiché à cette adresse.
        </p>
        <br />
        <h2>Les routes statiques</h2>
        <div className="bg-gray-200 text-gray-900 rounded-lg p-4 text-sm leading-relaxed">
            <pre>{`/src
 ├── app
 │   └── page.tsx     #route "/"
 └──── about/
         └── page.tsx #route "/about"
`}</pre>
        </div>
        <br />
        <h2>Les routes dynamiques</h2>
        <div className="bg-gray-200 text-gray-900 rounded-lg p-4 text-sm leading-relaxed">
            <pre>{`/src
 ├── app
 │   └── page.tsx     #route "/"
 └──── [slug]/
         └── page.tsx #route "/monSlug"
`}</pre>
        </div>
        <br />
        <h3>Exemple de code pour naviguer vers une page avec un slug.</h3>
        <CodeBlock
        code={`import Link from "next/link";

export default function BlogList() {
  const articles = ["react", "nextjs", "javascript"];

  return (
    <div>
      <h1>Liste des articles</h1>
      <ul>
        {articles.map((slug) => (
          <li key={slug}>
            <Link href={'/blog/\${slug}'}>Lire article : {slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}`}
        />
        <br />
        <h3>Exemple de code pour récupérer le slug</h3>
        <CodeBlock
        code={`export default function BlogArticle({ params }) {
  const { slug } = params;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Article : {slug}</h1>
      <p>Bienvenue sur la page de l’article “{slug}”.</p>
    </div>
  );
}
`}
        />
        <br />

        <h3>Slug imbriqués</h3>
        <div className="bg-gray-200 text-gray-900 rounded-lg p-4 text-sm leading-relaxed">
            <pre>{`/src
 ├── app
 │   └── page.tsx 
 └──── [pays]/
         └── page.tsx #route "/france"
         └── [ville]/ 
               └── page.tsx #route "/france/paris"
`}</pre>
        </div>
        <br />
        <h3>
            Catch all (slug: ["pays", "ville"])
        </h3>
                <div className="bg-gray-200 text-gray-900 rounded-lg p-4 text-sm leading-relaxed">
            <pre>{`/src
 ├── app
 │   └── page.tsx 
 └──── [...slug]/
         └── page.tsx #route "/france/paris, ..."
`}</pre>
        </div>
      </div>
    </div>
  );
}
