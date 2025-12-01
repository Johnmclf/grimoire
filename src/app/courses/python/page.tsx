import Link from "next/link";

export default function PythonTransitionPage() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center"> Cours sur Python</h1>

        {/* Section Cours */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2 text-blue-600">
            Cours
          </h2>
          <ul className="space-y-3 pl-4">
            <li>
              <Link
                href="/courses/python/installation"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Installation
              </Link>
            </li>
            <li>
              <Link
                href="/courses/python/presentation"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Présentation
              </Link>
            </li>
            <li>
              <Link
                href="/courses/python/syntaxe"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Syntaxe de base
              </Link>
            </li>
          </ul>
        </section>

        {/* Section librairie */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2 text-purple-600">
            Cours
          </h2>
          <ul className="space-y-3 pl-4">
            <li>
              <Link
                href="/courses/python/flask"
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                Flask (site web)
              </Link>
            </li>
            <li>
              <Link
                href="/courses/python/matplotlib"
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                Matplotlib (graphiques)
              </Link>
            </li>
          </ul>
        </section>

        {/* Section Exercices */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">
            Exercices
          </h2>
          <p className="text-gray-600 italic pl-4">
            (Aucun exercice disponible pour le moment)
          </p>
        </section>
      </div>
    </div>
  );
}
