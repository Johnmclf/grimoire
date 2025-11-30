import Link from "next/link";

export default function ReactTransitionPage() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center"> Cours React</h1>

        {/* Section Cours */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2 text-blue-600">Cours</h2>
          <ul className="space-y-3 pl-4">
            <li>
              <Link
                href="/courses/react/presentation"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Présentation
              </Link>
            </li>
            <li>
              <Link
                href="/courses/react/installation"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Installation
              </Link>
            </li>
            <li>
              <Link
                href="/courses/react/syntaxe"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Syntaxe de base
              </Link>
            </li>
            <li>
              <Link
                href="/courses/react/hooks"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Hooks
              </Link>
            </li>
            <li>
              <Link
                href="/courses/react/pitfalls"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Composant serveur & composant client
              </Link>
            </li>
            <li>
              <Link
                href="/courses/react/routing"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Le routing (Next.js)
              </Link>
            </li>
            <li>
              <Link
                href="/courses/react/style"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Styles Tailwind CSS
              </Link>
            </li>
          </ul>
        </section>

        {/* Section Exemples */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2 text-green-600">Exemples</h2>
          <ul className="space-y-3 pl-4">
            <li>
              <Link
                href="/courses/react/pagination"
                className="text-green-600 hover:text-green-800 transition-colors"
              >
                Pagination
              </Link>
            </li>
            <li>
              <Link
                href="/courses/react/darkmode"
                className="text-green-600 hover:text-green-800 transition-colors"
              >
                Mode clair / sombre
              </Link>
            </li>
            <li>
              <Link
                href="/courses/react/database"
                className="text-green-600 hover:text-green-800 transition-colors"
              >
                Base de données
              </Link>
            </li>
            <li>
              <Link
                href="/courses/react/artifact-ui"
                className="text-green-600 hover:text-green-800 transition-colors"
              >
                Carte 3D
              </Link>
            </li>
          </ul>
        </section>

        {/* Section Exercices */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2 text-purple-600">Exercices</h2>
          <ul className="space-y-3 pl-4">
            <li>
              <Link
                href="/courses/react/exercice1"
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                Exercice 1
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
