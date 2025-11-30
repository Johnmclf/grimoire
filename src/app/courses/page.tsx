"use client";

import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function CoursesPage() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Tous les Cours</h1>
        <p className="text-gray-600 mb-8">
          Choisissez un thème ci-dessous pour explorer les chapitres disponibles.
        </p>

        <Accordion type="single" collapsible className="w-full">
        
          {/* React */}
          <AccordionItem value="react">
            <AccordionTrigger>React</AccordionTrigger>
            <AccordionContent>
              {/* Partie cours */}
              <h3 className="text-lg font-semibold mt-2 mb-1"> Cours</h3>
              <ul className="flex flex-col gap-2 pl-4 mb-4">
                <li>
                  <Link href="/courses/react/presentation" className="hover:text-red-500 transition-colors">
                    Présentation
                  </Link>
                </li>
                <li>
                  <Link href="/courses/react/installation" className="hover:text-red-500 transition-colors">
                    Installation
                  </Link>
                </li>
                <li>
                  <Link href="/courses/react/syntaxe" className="hover:text-red-500 transition-colors">
                    Syntaxe de base
                  </Link>
                </li>
                <li>
                  <Link href="/courses/react/hooks" className="hover:text-red-500 transition-colors">
                    Hooks
                  </Link>
                </li>
                <li>
                  <Link href="/courses/react/pitfalls" className="hover:text-red-500 transition-colors">
                    Composent serveur & composent client
                  </Link>
                </li>
                <li>
                  <Link href="/courses/react/routing" className="hover:text-red-500 transition-colors">
                    Le routing (Next.js)
                  </Link>
                </li>
                <li>
                  <Link href="/courses/react/style" className="hover:text-red-500 transition-colors">
                    Styles Tailwind CSS
                  </Link>
                </li>
              </ul>

              {/* Partie pagination */}
              <h3 className="text-lg font-semibold mt-2 mb-1"> Exemples</h3>
              <ul className="flex flex-col gap-2 pl-4">
                <li>
                  <Link href="/courses/react/pagination" className="hover:text-red-500 transition-colors">
                    Pagination
                  </Link>
                </li>
                <li>
                  <Link href="/courses/react/darkmode" className="hover:text-red-500 transition-colors">
                    Mode clair/sombre
                  </Link>
                </li>
                <li>
                  <Link href="/courses/react/database" className="hover:text-red-500 transition-colors">
                    Base de données
                  </Link>
                </li>
                <li>
                  <Link href="/courses/react/artifact-ui" className="hover:text-red-500 transition-colors">
                    Carte 3D
                  </Link>
                </li>
              </ul>
              <h3 className="text-lg font-semibold mt-2 mb-1"> Exercices</h3>
              <ul className="flex flex-col gap-2 pl-4">
                <li>
                  <Link href="/courses/react/exercice1" className="hover:text-red-500 transition-colors">
                    Exercice 1
                  </Link>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="modelisation">
            <AccordionTrigger>Modélisation</AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-2 pl-4">
                <li>
                  <Link href="/courses/modelisation/algoRecherche" className="hover:text-red-500 transition-colors">
                    Algorithmes de recherche non-informés
                  </Link>
                </li>
                <li>
                  <Link href="/courses/modelisation/heuristique" className="hover:text-red-500 transition-colors">
                    Les heuristiques
                  </Link>
                </li>
                <li>
                  <Link href="/courses/modelisation/minimax" className="hover:text-red-500 transition-colors">
                    Minimax
                  </Link>
                </li>
                <li>
                  <Link href="/courses/modelisation/regressionLineaire" className="hover:text-red-500 transition-colors">
                    Régression linéaire
                  </Link>
                </li>
                <li>
                  <Link href="/courses/modelisation/annexe" className="hover:text-red-500 transition-colors">
                    Annexe
                  </Link>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Symfony */}
          <AccordionItem value="symfony">
            <AccordionTrigger>Symfony</AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-2 pl-4">
                <li>
                  <Link href="/courses/symfony/presentation" className="hover:text-red-500 transition-colors">
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link href="/courses/symfony/installation" className="hover:text-red-500 transition-colors">
                    Installation
                  </Link>
                </li>
                <li>
                  <Link href="/courses/symfony/commande" className="hover:text-red-500 transition-colors">
                    Commande de base
                  </Link>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Python */}
          <AccordionItem value="python">
            <AccordionTrigger>Python</AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-2 pl-4">
                <li>
                  <Link href="/courses/python/syntaxe" className="hover:text-red-500 transition-colors">
                    Syntaxe
                  </Link>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </div>
  );
}
