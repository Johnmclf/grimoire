import CodeBlock from "@/components/ui/CodeBlock";

export default function ReactSyntaxPage() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Syntaxe de base en React</h1>
        <p className="text-gray-600 mb-8">
          Avant d’aller plus loin, voyons la syntaxe fondamentale utilisée en React : JSX, 
          les composants, les props et les fonctions, les types, et les boucles.
        </p>

        <h2 className="text-xl font-semibold mb-2">JSX</h2>
        <p className="text-gray-600 mb-2">
          C'est une extension de JavaScript qui permet d'écrire du HTML dans du code JS.
        </p>
        <CodeBlock code={`<h1>Salut !</h1>`} />
        <br />

        <h2 className="text-xl font-semibold mb-2">Un composant React</h2>
        <p className="text-gray-600 mb-2">
          Un composant est une fonction qui retourne du JSX.
        </p>
        <CodeBlock code={`function Bonjour() {\nreturn <h1>Salut !</h1>;\n}`} />

        <p className="text-gray-600 mb-2">
          Ce composant peut ensuite être utilisé comme une balise.
        </p>
        <CodeBlock code={`function App() {\nreturn <Bonjour />;\n}`} />
        <br />

        <h2 className="text-xl font-semibold mb-2"> Props</h2>
        <p className="text-gray-600 mb-2">
          Les props permettent de transmettre des données aux composants. C'est comme un paramètre dans une fonction.
        </p>
        <CodeBlock code={`function Bonjour(props: { nom: string }) {\nreturn <h1>Salut {props.nom} !</h1>;\n}`}/>

        <p className="text-gray-600 mb-2">
          Ou 
        </p>
        <CodeBlock code={`function Bonjour({nom}: { nom: string }) {\nreturn <h1>Salut {nom} !</h1>;\n}`}/>

        <p className="text-gray-600 mb-2">
          On peut aussi créer un type séparé pour les props.
        </p>
        <CodeBlock code={`type BonjourProps = {\n nom: string;\n};\n\nfunction Bonjour({ nom }: BonjourProps) {\n  return <h1>Salut {nom} !</h1>;\n}`}/>

        <p className="text-gray-600 mb-2">
          Pour utiliser le composant avec la props. <code>{"{}"}</code>.
        </p>
        <CodeBlock code={`export default function App() {\nreturn <Bonjour nom="John" />;\n}`} />
        <br />

        <h2 className="text-xl font-semibold mb-2"> Les fonctions</h2>
        <p className="text-gray-600 mb-2">
          Les fonctions classique
        </p>
        <CodeBlock code={`function Bonjour() {\n}`}/>
        <p className="text-gray-600 mb-2">
          Les fonctions fléchées
        </p>
        <CodeBlock code={`const Bonjour = () => {\n}`}/>
        <br />

        <h2 className="text-xl font-semibold mb-2"> Les types</h2>
        <p className="text-gray-600 mb-2">
          Les types se déclare de la manière suivante. Le ? veut dire que c'est optionnel.
        </p>
        <CodeBlock code={`type BonjourProps = {\n nom: string;\n age?: number;\n};`}/>
        <br />

        <h2 className="text-xl font-semibold mb-2"> Conditions</h2>
        <p className="text-gray-600 mb-2">
          On peut afficher du contenu en fonction d’une condition. Dans l'exemple si dessous estConnecte est une props.
        </p>
        <CodeBlock code={`<p>{estConnecte ? "Bienvenue !" : "Veuillez vous connecter."}</p>`}/>
        <br />

        <h2 className="text-xl font-semibold mb-2"> Les boucles</h2>
        <p className="text-gray-600 mb-2">
          On ne fait pas de boucle for directement dans le JSX, on utilise souvent map().
        </p>
        <CodeBlock code={`const fruits = ["Pomme", "Banane", "Cerise"];\n<ul>\n  {fruits.map((fruit, index) => (\n    <li key={index}>{fruit}</li>\n  ))}\n</ul>`}/>
        
        <p className="text-gray-600 mb-2">
          Si on veux utilisé une boucle classique il faut la faire en dehors du JSX.
        </p>
        <CodeBlock code={`function Nombres() {\n  const items = [];\n  for (let i = 1; i <= 5; i++) {\n    items.push(<li key={i}>{i}</li>);\n  }\n\n  return <ul>{items}</ul>;\n}`}/>
        
        <p className="text-gray-600 mb-2">
          Exemple avec map pour voir la différence.
        </p>
        <CodeBlock code={`function Nombres() {\n  const nombres = [1, 2, 3, 4, 5];\n  return (\n    <ul>\n      {nombres.map((n) => (\n        <li key={n}>{n}</li>\n      ))}\n    </ul>\n  );\n}`}/>
        
      </div>
    </div>
  );
}
