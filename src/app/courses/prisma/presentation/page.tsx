export default function PrismaPagePresentation() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Présentation de Prisma</h1>
        <p className="text-gray-600 mb-6">
          Prisma est un ORM moderne pour Node.js qui simplifie l'accès aux bases de données
          grâce à un schéma déclaratif, une CLI puissante et une API intuitive. Il permet
          de travailler efficacement avec des bases SQL comme PostgreSQL, MySQL ou SQLite.
        </p>

        <h2 className="text-xl font-semibold mb-2">Pourquoi utiliser Prisma ?</h2>
        <ul className="text-gray-600 list-disc ml-6 mb-6">
          <li>Un modèle de données centralisé avec <code>schema.prisma</code>.</li>
          <li>Une autocomplétion puissante grâce au client généré automatiquement.</li>
          <li>Une gestion robuste des migrations.</li>
          <li>Une syntaxe claire et moderne pour interagir avec les données.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">Le Workflow Prisma</h2>
        <p className="text-gray-600 mb-2">Le fonctionnement général de Prisma repose sur trois éléments :</p>
        <ul className="text-gray-600 list-disc ml-6 mb-6">
          <li><strong>Le schéma</strong> : définition des modèles et relations.</li>
          <li><strong>Les migrations</strong> : mise à jour structurée de la base de données.</li>
          <li><strong>Le client</strong> : API générée pour lire/écrire dans la base.</li>
        </ul>
      </div>
    </div>
  );
}

