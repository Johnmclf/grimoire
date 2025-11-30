export default function ReactPresentationPage() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Présentation de React</h1>

        <p className="text-gray-600 mb-4">
          React est une bibliothèque JavaScript (pas un framework complet)
          créée par Facebook (Meta) en 2013.
          Elle sert à construire des interfaces utilisateur (UI) modernes,
          surtout pour les applications web dynamiques (où le contenu change sans recharger la page).
        </p>

        <p className="mb-4">
          React repose sur le concept de composants :
          chaque partie de l&apos;interface (bouton, carte, menu, page, etc.) est un petit morceau indépendant.
        </p>

        <p className="mb-2">Chaque composant :</p>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>reçoit des props (paramètres)</li>
          <li>peut avoir un state (état interne)</li>
          <li>retourne du JSX (une syntaxe qui ressemble à du HTML)</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Les avantages</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Rapide et réactif, grâce au Virtual DOM, React ne recharge pas toute la page, il ne
            met à jour que les éléments modifiés.
          </li>
          <li>Composants réutilisables.</li>
          <li>
            Écosystème gigantesque, des milliers de librairies, outils et frameworks autour de React.
          </li>
        </ul>
      </div>
    </div>
  );
}
