export default function Exercice1Page() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-3xl space-y-8">
        <h1 className="text-3xl font-bold">Exercice 1 – Compteur personnalisé</h1>
        <p className="text-gray-600">
          Dans cet exercice, tu vas créer une petite page React avec deux fonctionnalités :
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Un <strong>compteur</strong> qui démarre à 0 et s’incrémente quand on clique sur un bouton.</li>
          <li>Un <strong>champ texte</strong> qui permet de changer dynamiquement le titre affiché au-dessus du compteur.</li>
        </ul>

        <h2 className="text-xl font-semibold">Objectifs :</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Utiliser <code>useState</code> pour gérer l’état du compteur.</li>
          <li>Utiliser <code>useState</code> pour gérer le texte du titre.</li>
          <li>Afficher le titre et le compteur sur la page.</li>
        </ul>

        <h2 className="text-xl font-semibold">Instructions :</h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>Crée un composant <code>Exercice1</code>.</li>
          <li>Ajoute un champ texte qui modifie le titre affiché.</li>
          <li>Ajoute un bouton qui incrémente le compteur.</li>
          <li>Affiche le résultat sous forme : <code>Titre – Compteur : X</code>.</li>
        </ol>

        <p className="text-gray-500 mt-4">
           Quand tu penses avoir terminé, compare ta solution avec la{" "}
          <a
            href="/courses/react/correction1"
            className="text-indigo-600 hover:underline"
          >
            correction ici
          </a>.
        </p>
      </div>
    </div>
  );
}
