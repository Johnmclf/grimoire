import CodeBlock from "@/components/ui/CodeBlock";

export default function PrismaPageBase() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Les bases de Prisma</h1>
        <p className="text-gray-600 mb-8">
          Prisma est un ORM moderne pour Node.js qui permet d&#39;intéragir facilement
          avec une base de données SQL à l&#39;aide d&#39;un schéma déclaratif et d&#39;une API
          intuitive. Dans cette page, nous allons voir les notions essentielles pour
          démarrer avec Prisma.
        </p>

        {/* Prérequis */}
        <h2 className="text-xl font-semibold mb-2">Prérequis</h2>
        <p className="text-gray-600 mb-4">
          Assurez-vous d&#39;avoir installé Prisma dans votre projet et de disposer d&#39;une
          base de données fonctionnelle (ici, PostgreSQL).
        </p>
        <CodeBlock
          code={`npm install prisma --save-dev
npx prisma init`}
        />

        <h3 className="text-lg font-semibold mt-6 mb-2">
          Lancer une base de données (PostgreSQL)
        </h3>
        <p className="text-gray-600 mb-4">
          Vous pouvez lancer PostgreSQL localement ou via Docker. Par exemple avec
          Docker :
        </p>

        <CodeBlock
          code={`docker run --name postgres -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres`}
        />

        {/* Connexion */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          Connexion à la base de données avec Prisma
        </h2>
        <p className="text-gray-600 mb-4">
          Dans le fichier <code>.env</code>, Prisma utilise la variable
          <code>DATABASE_URL</code> pour établir la connexion.
        </p>

        <CodeBlock
          code={`DATABASE_URL="postgresql://postgres:admin@localhost:5432/mydb?schema=public"`}
        />

        {/* Schéma */}
        <h2 className="text-xl font-semibold mt-8 mb-2">Créer le schéma Prisma</h2>
        <p className="text-gray-600 mb-4">
          Le fichier <code>schema.prisma</code> permet de définir vos modèles,
          relations, contraintes et comportements.
        </p>

        <CodeBlock
          code={`model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  authorId  Int
  author    User     @relation(fields: [authorId], references: [id], onDelete: Cascade)
}`}
        />

        <p className="text-gray-600 mb-4">
          Ici, nous avons ajouté une relation <code>User → Post</code>, un champ
          <code>@unique</code> sur l&#39;email et une règle <code>onDelete: Cascade</code>
          pour supprimer les posts liés à un utilisateur supprimé.
        </p>

        {/* db push */}
        <h2 className="text-xl font-semibold mt-8 mb-2">Appliquer le schéma : db push</h2>
        <p className="text-gray-600 mb-4">
          La commande suivante synchronise votre schéma avec la base de données sans
          créer d&#39;historique de migration.
        </p>

        <CodeBlock code={`npx prisma db push`} />

        {/* Migrations */}
        <h2 className="text-xl font-semibold mt-8 mb-2">Migration de la base de données</h2>
        <p className="text-gray-600 mb-4">
          Pour un environnement professionnel, utilisez les migrations Prisma afin de
          conserver une trace des modifications.
        </p>

        <CodeBlock code={`npx prisma migrate dev --name init`} />

        {/* Seed */}
        <h2 className="text-xl font-semibold mt-8 mb-2">Créer un seed (insertion initiale)</h2>
        <p className="text-gray-600 mb-4">
          Le fichier <code>prisma/seed.ts</code> permet d&#39;insérer des données
          initiales.
        </p>

        <CodeBlock
          code={`import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "test@example.com",
      name: "Alice",
      posts: {
        create: [{ title: "Mon premier post" }],
      },
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });`}
        />

        <p className="text-gray-600 mb-4">
          Exécutez-le avec :
        </p>
        <CodeBlock code={`npx prisma db seed`} />

        {/* CRUD */}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          Manipuler des données (CRUD)
        </h2>

        <h3 className="text-lg font-semibold mb-2">Récupérer des données</h3>
        <CodeBlock
          code={`const users = await prisma.user.findMany({
  include: { posts: true },
});`}
        /><p className="text-gray-600">
            Demande tous les utilisateurs avec leurs posts associés (les posts sont récupérés par le include).
        </p>

        <h3 className="text-lg font-semibold mb-2 mt-6">Insérer des données</h3>
        <CodeBlock
          code={`await prisma.post.create({
  data: {
    title: "Nouveau Post",
    authorId: 1,
  },
});`}
        />

        <h3 className="text-lg font-semibold mb-2 mt-6">Modifier des données</h3>
        <CodeBlock
          code={`await prisma.user.update({
  where: { id: 1 },
  data: { name: "Nouvelle Valeur" },
});`}
        />

        <h3 className="text-lg font-semibold mb-2 mt-6">Supprimer des données</h3>
        <CodeBlock
          code={`await prisma.post.delete({
  where: { id: 1 },
});`}
        />
      </div>
    </div>
  );
}