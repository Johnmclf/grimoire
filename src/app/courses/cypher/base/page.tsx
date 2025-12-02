import CodeBlock from "@/components/ui/CodeBlock";

export default function CypherPagePresentation() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">
          Les bases du langage Cypher (Neo4j)
        </h1>

        <p className="text-gray-600 mb-8">
          Cypher est un langage de requête conçu pour manipuler les bases de données
          orientées graphes comme Neo4j. Il permet de chercher, créer et supprimer
          des nœuds et des relations à l’aide d’une syntaxe visuelle très simple.
        </p>

        {/* SECTION 1 : Noeuds */}
        <h2 className="text-xl font-semibold mb-2">1. Les nœuds</h2>
        <p className="text-gray-600 mb-4">
          Les nœuds représentent des entités : personnes, villes, produits, etc.
          Ils sont définis par un label (ex: <code>Person</code>) et des propriétés.
        </p>

        <CodeBlock
          code={`CREATE (:Person {name: "Alice", age: 25});`}
        />

        <p className="text-gray-600 mb-4">
          Ici, on crée un nœud <code>Person</code> avec deux propriétés.
        </p>

        {/* SECTION 2 : Relations */}
        <h2 className="text-xl font-semibold mt-8 mb-2">2. Les relations</h2>
        <p className="text-gray-600 mb-4">
          Les relations connectent les nœuds. Elles peuvent être orientées ou non
          lorsqu'on les interroge, mais doivent être orientées lors de leur création.
        </p>

        <CodeBlock
          code={`MATCH (a:Person {name: "Alice"}), (b:Person {name: "Bob"})
CREATE (a)-[:FRIEND]->(b);`}
        />

        <p className="text-gray-600 mb-4">
          Même si la relation est stockée dans un sens, on peut l'interroger dans les
          deux sens grâce au motif non orienté :
        </p>

        <CodeBlock code={`MATCH (n)-[:FRIEND]-(m) RETURN n, m;`} />

        {/* SECTION 3 : MATCH */}
        <h2 className="text-xl font-semibold mt-8 mb-2">3. MATCH : rechercher dans le graphe</h2>
        <p className="text-gray-600 mb-4">
          MATCH sert à “dessiner” une forme du graphe pour récupérer ce qui correspond.
        </p>

        <CodeBlock code={`MATCH (p:Person) RETURN p;`} />

        <p className="text-gray-600 mb-4">
          Récupère tous les nœuds <code>Person</code>.
        </p>

        <h3 className="text-lg font-semibold mb-2">Exemple : trouver les amis de Flora</h3>

        <CodeBlock
          code={`MATCH (:Person {name: "Flora"})-[:FRIEND]-(amis)
RETURN amis.name;`}
        />

        <p className="text-gray-600 mb-4">
          On cherche un nœud de type Person dont la propriété name vaut "Flora".
          On cherche tous les nœuds connectés à Flora par une relation de type FRIEND
          Le nœud relié est capturé dans la variable amis. On retourne la propriété name de tous les nœuds trouvés dans la variable amis.
        </p>

        {/* SECTION 4 : WHERE */}
        <h2 className="text-xl font-semibold mt-8 mb-2">4. WHERE : filtrer les résultats</h2>

        <CodeBlock
          code={`MATCH (p:Person)
WHERE p.age > 18
RETURN p.name;`}
        />

        <p className="text-gray-600 mb-4">
          WHERE s’utilise exactement comme en SQL : pour filtrer.
        </p>

        {/* SECTION 5 : COUNT */}
        <h2 className="text-xl font-semibold mt-8 mb-2">5. COUNT : compter les éléments</h2>
        <p className="text-gray-600 mb-4">
          COUNT compte le nombre de lignes trouvées par MATCH.
        </p>

        <CodeBlock
          code={`MATCH (p:Person)-[:FRIEND]-()
RETURN p.name, COUNT(*) AS nbAmis
ORDER BY nbAmis DESC;`}
        />

        <p className="text-gray-600 mb-4">
          Pour chaque personne, Neo4j retrouve une ligne par relation FRIEND, et 
          <code> COUNT(*)</code> les additionne.
        </p>

        {/* SECTION 6 : Modification */}
        <h2 className="text-xl font-semibold mt-8 mb-2">6. Modifier des données</h2>

        <h3 className="text-lg font-semibold mb-2">Mettre à jour un nœud</h3>
        <CodeBlock
          code={`MATCH (p:Person {name: "Alice"})
SET p.age = 30;`}
        />

        <h3 className="text-lg font-semibold mb-2 mt-6">Supprimer un nœud</h3>
        <CodeBlock
          code={`MATCH (p:Person {name: "Bob"})
DETACH DELETE p;`}
        />

        <p className="text-gray-600 mb-4">
          <code>DETACH DELETE</code> supprime aussi les relations connectées au nœud.
        </p>

        {/* SECTION 7 : Créer un graphe simple */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          7. Exemple : créer un mini-réseau social
        </h2>

        <CodeBlock
          code={`CREATE 
  (a:Person {name: "Alice"}),
  (b:Person {name: "Bob"}),
  (c:Person {name: "Carla"});`}
        />

        <CodeBlock
          code={`MATCH (a:Person {name:"Alice"}),(b:Person {name:"Bob"})
CREATE (a)-[:FRIEND]->(b);`}
        />

        <p className="text-gray-600 mb-4">
          Une fois ces relations créées, vous pouvez interroger librement le graphe.
        </p>

        {/* CONCLUSION */}
        <h2 className="text-xl font-semibold mt-8 mb-2">Conclusion</h2>
        <p className="text-gray-600 mb-4">
          Cypher est un langage extrêmement intuitif une fois qu’on comprend le
          principe clé : <strong>on dessine la forme du graphe que l’on veut interroger</strong>.
          MATCH sert à trouver cette forme, CREATE à l’ajouter, WHERE à filtrer, et
          COUNT à mesurer.
        </p>
      </div>
    </div>
  );
}
