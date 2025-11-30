import CodeBlock from "@/components/ui/CodeBlock";

export default function MinimaxPage() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Algorithme Minimax</h1>

        <p className="text-gray-600 mb-8">
          L’algorithme Minimax est utilisé dans les jeux à deux joueurs.
          Il permet de déterminer le meilleur coup possible en supposant que l’adversaire joue lui aussi parfaitement.
        </p>

        <h2>Principe général</h2>
        <p className="text-gray-600 mb-4">
          Le joueur MAX cherche à maximiser le score, tandis que le joueur MIN cherche à le minimiser.  
          L’arbre de jeu est exploré jusqu’à une certaine profondeur, et chaque nœud terminal reçoit une valeur d’évaluation.
        </p>

        <div className="bg-gray-200 text-gray-900 rounded-lg p-4 text-sm leading-relaxed mb-4">
          <pre>{`
                MAX
               /   \\
             MIN   MIN
            / \\    / \\
           3   5  2   9
`}</pre>
        </div>

        <p className="text-gray-600 mb-6"> 
          - Le joueur MIN choisit le plus petit (entre 3 et 5 → <strong>3</strong>, entre 2 et 9 → <strong>2</strong>).  <br />
          - Le joueur MAX choisit le plus grand score possible (ici, entre 3 et 2 → <strong>3</strong>). 
        </p>

        <h2>Exemple de code de l'algorithme Minimax</h2>
        <CodeBlock
          code={`def minimax(noeud, profondeur, maximisant):
    if profondeur == 0 or noeud.est_terminal():
        return noeud.valeur()

    if maximisant:
        meilleur_score = float('-inf')
        for enfant in noeud.enfants():
            score = minimax(enfant, profondeur - 1, False)
            meilleur_score = max(meilleur_score, score)
        return meilleur_score
    else:
        meilleur_score = float('inf')
        for enfant in noeud.enfants():
            score = minimax(enfant, profondeur - 1, True)
            meilleur_score = min(meilleur_score, score)
        return meilleur_score
`}
        />
        <br />

        <h2> Élagage Alpha-Beta</h2>
        <p className="text-gray-600 mb-2">
          L’élagage Alpha-Beta permet de ne pas explorer les branches de l’arbre
          qui ne peuvent pas influencer le résultat final.  
          Cela améliore fortement les performances sans changer le résultat.
        </p>
        <br />
        <h2>Exemple de code de l'élagage Alpha-Beta</h2>
        <CodeBlock
          code={`def alphabeta(noeud, profondeur, alpha, beta, maximisant):
    if profondeur == 0 or noeud.est_terminal():
        return noeud.valeur()

    if maximisant:
        valeur = float('-inf')
        for enfant in noeud.enfants():
            valeur = max(valeur, alphabeta(enfant, profondeur - 1, alpha, beta, False))
            alpha = max(alpha, valeur)
            if beta <= alpha:
                break  
        return valeur
    else:
        valeur = float('inf')
        for enfant in noeud.enfants():
            valeur = min(valeur, alphabeta(enfant, profondeur - 1, alpha, beta, True))
            beta = min(beta, valeur)
            if beta <= alpha:
                break  
        return valeur
`}
        />
      </div>
    </div>
  );
}
