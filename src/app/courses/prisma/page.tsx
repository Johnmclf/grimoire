import Link from "next/link";

export default function ModelisationTransitionPage() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center"> Cours de Modélisation</h1>

        {/* Section Cours */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2 text-blue-600">
            Cours
          </h2>
          <ul className="space-y-3 pl-4">
            <li>
              <Link
                href="/courses/prisma/presentation"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Présentation de Prisma
              </Link>
            </li>
             <li>
              <Link
                href="/courses/prisma/base"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Les bases de Prisma
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
