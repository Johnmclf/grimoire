import CodeBlock from "@/components/ui/CodeBlock";
import Link from "next/link";

export default function algoRecherchePage() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Les algorithmes de recherche non-informés</h1>
        <p className="text-gray-600 mb-8">
          Les stratégies aveugles utilisent seulement l’information disponible dans la définition du problème. 
        </p>

        
        <h2 className="text-xl font-semibold mb-2"> Recherche en largeur d’abord</h2>
        <p className="text-gray-600 mb-2">
         On part d’un nœud de départ qu’on enfile (on le met dans la file).
         Tant que la file n’est pas vide.
         On défile le nœud en tête de file.
         On enfile tous ses voisins non encore visités.
         On marque le nœud comme visité.
         Attention : il permet d’obtenir un parcours, mais pour reconstruire un chemin, il faut garder une trace du prédécesseur de chaque nœud.
        </p>
        <br />

        <h2>Exemple de parcour en largeur</h2>
        <div className="bg-gray-200 text-gray-900 rounded-lg p-4 text-sm leading-relaxed">
            <pre>{`        1
       / \\
      2   3
     / \\
    4   5
`}</pre>
        </div>

        <p>Parcours: 1, 2, 3, 4, 5</p>
        <br />
        <h2>Code parcour en largeur (<Link href={"/courses/modelisation/annexe"} style={{ color: "blue"}}>voir Annexe</Link> )</h2>
        <CodeBlock code={`def parcours_largeur(graphe, debut):
    visite = []
    file = [debut]

    while file:
        sommet = defile(file)
        if sommet not in visite:
            visite.append(sommet)
            for voisin in graphe[sommet]:
                if voisin not in visite:
                    enfile(file, voisin)
    return visite
`} />
<br />

        <h2 className="text-xl font-semibold mb-2"> Recherche cout uniforme</h2>
        <p className="text-gray-600 mb-2">
         On part d’un nœud de départ qu’on enfile (on le met dans la file).
         Tant que la file n’est pas vide.
         <strong> On trie la file par coût. </strong>
         On défile le nœud en tête de file.
         On enfile tous ses voisins non encore visités.
         On marque le nœud comme visité.
         Attention : il permet d’obtenir un parcours, mais pour reconstruire un chemin, il faut garder une trace du prédécesseur de chaque nœud.
        </p>
        <br />

        <h2>Exemple de parcour en profodeur</h2>
        <div className="bg-gray-200 text-gray-900 rounded-lg p-4 text-sm leading-relaxed">
            <pre>{`
           1
       (3)/ \\(1)
         2   3
     (2)/ \\(1)
       4   5

() = cout
`}</pre>
        </div>

        <p>Parcours: 1, 3, 2, 5, 4</p>
        <br />

        <h2>Code cout uniforme (<Link href={"/courses/modelisation/annexe"} style={{ color: "blue"}}>voir Annexe</Link> )</h2>
        <CodeBlock code={`def parcours_cout_uniforme(graphe, debut):
    visite = []
    file = [(0, debut)] 

    while file:
        file.sort() 
        cout, sommet = defile(file)
        if sommet not in visite:
            visite.append(sommet)
            for voisin, poids in graphe[sommet]:
                if voisin not in visite:
                    enfile(file, (cout + poids, voisin))
    return visite
`} />
<br />

        <h2 className="text-xl font-semibold mb-2"> Recherche en profondeur d’abord</h2>
        <p className="text-gray-600 mb-2">
         On part d’un nœud de départ qu’on empile (on le met dans la pile).
         Tant que la pile n’est pas vide.
         On dépile le nœud en tête de pile. (Donc le dernier empilé)
         On empile tous ses voisins non encore visités.
         On marque le nœud comme visité.
         Attention : il permet d’obtenir un parcours, mais pour reconstruire un chemin, il faut garder une trace du prédécesseur de chaque nœud.
        </p>
        <br />

        <h2>Exemple de parcour en profodeur</h2>
        <div className="bg-gray-200 text-gray-900 rounded-lg p-4 text-sm leading-relaxed">
            <pre>{`        1
       / \\
      2   3
     / \\
    4   5
`}</pre>
        </div>

        <p>Parcours: 1, 2, 4, 5, 3</p>
        <br />

        <h2>Code parcour en profondeur(<Link href={"/courses/modelisation/annexe"} style={{ color: "blue"}}>voir Annexe</Link> )</h2>
        <CodeBlock code={`def parcours_profondeur(graphe, debut): 
    visite = []
    pile = [debut]

    while pile:
        sommet = depile(pile)
        if sommet not in visite:
            visite.append(sommet)
            for voisin in graphe[sommet]:
                if voisin not in visite:
                    empile(pile, voisin)
    return visite
`} />
<br />

        <h2 className="text-xl font-semibold mb-2"> Recherche en profondeur limité</h2>
        <p className="text-gray-600 mb-2">
         Algorithme de profondeur d’abord, mais avec une limite de l sur la profondeur. 
        </p>
        <br />

        <h2>Exemple de parcour en profodeur limité à 2</h2>
        <div className="bg-gray-200 text-gray-900 rounded-lg p-4 text-sm leading-relaxed">
            <pre>{`        1
       / \\
      2   3
     / \\
    4   5
   / \\
  6   7
`}</pre>
        </div>
        <p>Parcours: 1, 2, 4, 5, 3 (on ne parcour pas 6 et 7 car la limite est 2)</p>
        <br />

        <h2>Code parcour en profondeur limité(<Link href={"/courses/modelisation/annexe"} style={{ color: "blue"}}>voir Annexe</Link> )</h2>
        <CodeBlock code={`def parcours_profondeur_limite(graphe, debut, limite):
    visite = []
    pile = [(debut, 0)] 

    while pile:
        sommet, profondeur = depile(pile)
        if sommet not in visite:
            visite.append(sommet)
            if profondeur < limite:
                for voisin in graphe[sommet]:
                    if voisin not in visite:
                        empile(pile, (voisin, profondeur + 1))
    return visite
`} />
<br />





        <h2 className="text-xl font-semibold mb-2"> Recherche en profondeur itérative</h2>
        <p className="text-gray-600 mb-2">
         Profondeur limitée, mais en essayant toutes les profondeurs: 0, 1, 2, 3, ...
        </p>
        <br />

        <h2>Exemple de parcour en profodeur itérative</h2>
        <div className="bg-gray-200 text-gray-900 rounded-lg p-4 text-sm leading-relaxed">
            <pre>{`        1
       / \\
      2   3
     / \\
    4   5
   / \\
  6   7
`}</pre>
        </div>
        <p>Parcours: <br />Limite = 0 : 1 <br />
                     Limite = 1 : 1, 2, 3 <br />
                     Limite = 2 : 1, 2, 4, 5, 3 <br />
                     Limite = 3 : 1, 2, 4, 6, 7, 5, 3
        </p>
        <br />

        <h2>Code parcour en profondeur itérative(<Link href={"/courses/modelisation/annexe"} style={{ color: "blue"}}>voir Annexe</Link> )</h2>
        <CodeBlock code={`def parcours_profondeur_iteratif(graphe, debut):
    visite = []
    pile = [debut]

    while pile:
        sommet = depile(pile)
        if sommet not in visite:
            visite.append(sommet)
            for voisin in reversed(graphe[sommet]):
                if voisin not in visite:
                    empile(pile, voisin)
    return visite
`} />
<br />

      </div>
    </div>
  );
}
