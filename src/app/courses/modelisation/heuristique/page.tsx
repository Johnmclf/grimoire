import CodeBlock from "@/components/ui/CodeBlock";

export default function algoRecherchePage() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Les heuristiques</h1>
        <p className="text-gray-600 mb-8">
          Utilisent une fonction d’évaluation pour choisir quel nœud développer en priorité. Attention un heurisque est admissible si h(n) ≤ h*(n) où h*(n) est le coût réel pour aller de n 
jusqu’à l’état final.
        </p>

        <h2>Recherche gloutonne</h2>
        <p className="text-gray-600 mb-2">
         On part d’un nœud de départ.
         On regarde les nœuds voisins (successeurs).
         On choisit celui avec la plus petite valeur heuristique h(n), c’est-à-dire celui qui semble le plus proche du but.
         On répète ce processus jusqu’à atteindre l’objectif (si possible).
        </p>
        <br />

        <h2>Exemple de recherche gloutonne</h2>
        <div className="bg-gray-200 text-gray-900 rounded-lg p-4 text-sm leading-relaxed">
            <pre>{`        1
       / \\
      2   3
     / \\
    4   5
`}</pre>
        </div>
        <br />
        <p>Heuristique</p>
        <table style={{ borderCollapse: "collapse", border: "1px solid black", textAlign: "center" }}>
        <thead>
            <tr>
            <th style={{ border: "1px solid black", padding: "10px" }}>nœud</th>
            <td style={{ border: "1px solid black", padding: "10px" }}>1</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>2</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>3</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>4</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>5</td>
            </tr>
            <tr>
            <th style={{ border: "1px solid black", padding: "10px" }}>cout</th>
            <td style={{ border: "1px solid black", padding: "10px" }}>3</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>4</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>2</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>1</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>0</td>
            </tr>
        </thead>
        </table>
<br />
        <p>Objectif : nœud 5</p>
        <p>Parcours: 1,3(impasse),2,5</p>
        <br />
        <h2>Code recherche gloutonne</h2>
        <CodeBlock code={`def recherche_gloutonne(graph, heuristic, depart, objectif):
    regarder = [depart]
    visites = []
    chemin = []
    while regarder:
        ville_actuelle = regarder.pop(0)
        chemin.append(ville_actuelle)
        visites.append(ville_actuelle)
        if ville_actuelle == objectif:
            return chemin
        voisins = graph.get(ville_actuelle, []) 
        candidats = []
        for voisin in voisins:
            if voisin not in visites and voisin not in regarder:
                candidats.append(voisin)
        candidats.sort(key=lambda v: heuristic[v]) 
        regarder = candidats + regarder
    return None 
`} />
<br />



        <h2>A *</h2>
        <p className="text-gray-600 mb-2">
        Fonction d’évaluation : f (n) = g(n) + h(n), avec g(n) est le coût de l’état initial à l’état n
        et h(n) est le coût estimé pour atteindre l’état final. Attention il faut prendre la cout total depuis le départ et pas que le cout pour aller au nœud. De plus f(n) d'un nœud proche plus haut dans l'arbre, peu être plus petit que f(n) des nœuds voisin, donc on peut faire des retours en arrière.
        </p>
        <br />

        <h2>Exemple de A *</h2>
        <div className="bg-gray-200 text-gray-900 rounded-lg p-4 text-sm leading-relaxed">
            <pre>{`
           1
       (3)/ \\(1)
         2   3
     (2)/ \\(1)
       4   5

() = cout réel
`}</pre>
        </div>
        <br />
        <p>Heuristique</p>
        <table style={{ borderCollapse: "collapse", border: "1px solid black", textAlign: "center" }}>
        <thead>
            <tr>
            <th style={{ border: "1px solid black", padding: "10px" }}>nœud</th>
            <td style={{ border: "1px solid black", padding: "10px" }}>1</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>2</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>3</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>4</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>5</td>
            </tr>
            <tr>
            <th style={{ border: "1px solid black", padding: "10px" }}>cout</th>
            <td style={{ border: "1px solid black", padding: "10px" }}>3</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>4</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>2</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>1</td>
            <td style={{ border: "1px solid black", padding: "10px" }}>0</td>
            </tr>
        </thead>
        </table>
<br />
        <p>Objectif : nœud 5</p>
        <p>Parcours : 1, 3 (car 1+2), impasse, 2(car 3+4), 5(car 3+1+0)</p>
        <br />
        <h2>Code A *</h2>
        <CodeBlock code={`def a_star(graph, heuristic, depart, objectif):
    regarder = [depart]
    visites = []
    coutReel = {depart: 0}
    parents = {depart: None} 
    while regarder:
        scores = []
        for ville in regarder:
            g = coutReel[ville]
            h = heuristic[ville]
            f = g + h
            scores.append((ville, f, g, h))
        meilleur_score = scores[0][1]
        ville_actuelle = scores[0][0]
        for ville, f, g, h in scores: 
            if f < meilleur_score:
                meilleur_score = f
                ville_actuelle = ville       
        if ville_actuelle == objectif:
            chemin = []
            while ville_actuelle:
                chemin.insert(0, ville_actuelle)
                ville_actuelle = parents[ville_actuelle]
            return chemin
        regarder.remove(ville_actuelle)
        visites.append(ville_actuelle)
        for voisin, cout in graph[ville_actuelle].items():
            if voisin in visites:
                continue
            nouveau_coup = coutReel[ville_actuelle] + cout
            if voisin not in coutReel or nouveau_coup < coutReel[voisin]:
                coutReel[voisin] = nouveau_coup
                parents[voisin] = ville_actuelle
                if voisin not in regarder:
                    regarder.append(voisin)
    return None 
`} />
<br />

      </div>
    </div>
  );
}