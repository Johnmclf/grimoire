import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Section Héro */}
      <section className="flex items-center justify-center bg-gray-50 py-16">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">
            Cours d'informatique John
          </h1>
          <br />
          <Link href={"/courses"} className="px-6 py-3 rounded-lg bg-red-500 text-white">Parcourir les cours</Link>
        </div>
      </section>

      {/* Cours Populaires */}
      <section className="px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">Cours Populaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href={"/courses/react"}>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">React (Next.js)</h3>
              <p className="text-gray-600">Les composants, les props, les hooks, ...</p>
            </CardContent>
          </Card>
          </Link>
          <Link href={"/courses/modelisation"}>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">Modélisation</h3>
              <p className="text-gray-600">A *, Recherche en profondeur, ...</p>
            </CardContent>
          </Card>
          </Link>
        </div>
      </section>
    </div>
  );
}
