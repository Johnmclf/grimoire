import CodeBlock from "@/components/ui/CodeBlock";

export default function StylesPage() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-3xl space-y-12">
        <h1 className="text-3xl font-bold">Cours complet sur les utilitaires Tailwind CSS</h1>
        <p className="text-gray-600">
          Tailwind fournit des centaines de classes utilitaires pour appliquer rapidement des styles.  
          Voici un guide complet des plus importantes, avec exemples et démonstrations.
        </p>

        {/* Couleurs */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Couleurs</h2>
          <CodeBlock
            code={`<div className="bg-blue-500 text-white p-4">Fond bleu</div>
<div className="bg-red-100 text-red-700 p-4">Fond rouge clair</div>
<div className="bg-green-600 text-white p-4">Fond vert</div>`}
          />
          <div className="space-y-2 mt-4">
            <div className="bg-blue-500 text-white p-4 rounded">Fond bleu</div>
            <div className="bg-red-100 text-red-700 p-4 rounded">Fond rouge clair</div>
            <div className="bg-green-600 text-white p-4 rounded">Fond vert</div>
          </div>
        </section>

        {/* Espacements */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Marges et paddings</h2>
          <CodeBlock
            code={`<div className="m-4 p-4 bg-gray-200">m-4 + p-4</div>
<div className="mt-8 ml-2 bg-gray-200 p-2">mt-8 + ml-2</div>
<div className="px-6 py-2 bg-gray-200">px-6 + py-2</div>`}
          />
          <div className="space-y-2 mt-4">
            <div className="m-4 p-4 bg-gray-200 rounded">m-4 + p-4</div>
            <div className="mt-8 ml-2 p-2 bg-gray-200 rounded">mt-8 + ml-2</div>
            <div className="px-6 py-2 bg-gray-200 rounded">px-6 + py-2</div>
          </div>
        </section>

        {/* Texte */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Texte</h2>
          <CodeBlock
            code={`<p className="text-xl font-bold">Texte grand et gras</p>
<p className="text-sm italic">Petit texte en italique</p>
<p className="text-center uppercase">Texte centré en majuscules</p>
<p className="text-gray-500 line-through">Texte barré gris</p>`}
          />
          <div className="space-y-2 mt-4">
            <p className="text-xl font-bold">Texte grand et gras</p>
            <p className="text-sm italic">Petit texte en italique</p>
            <p className="text-center uppercase">Texte centré en majuscules</p>
            <p className="text-gray-500 line-through">Texte barré gris</p>
          </div>
        </section>

        {/* Flex */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Flexbox</h2>
          <CodeBlock
            code={`<div className="flex gap-4">
  <div className="bg-blue-200 p-4">1</div>
  <div className="bg-blue-400 p-4">2</div>
  <div className="bg-blue-600 p-4">3</div>
</div>

<div className="flex justify-between mt-4 bg-gray-200 p-2">
  <span>A gauche</span>
  <span>A droite</span>
</div>

<div className="flex items-center justify-center h-32 bg-gray-200 mt-4">
  Centré verticalement et horizontalement
</div>`}
          />
          <div className="flex gap-4 mt-4">
            <div className="bg-blue-200 p-4 rounded">1</div>
            <div className="bg-blue-400 p-4 rounded">2</div>
            <div className="bg-blue-600 text-white p-4 rounded">3</div>
          </div>
          <div className="flex justify-between mt-4 bg-gray-200 p-2 rounded">
            <span>A gauche</span>
            <span>A droite</span>
          </div>
          <div className="flex items-center justify-center h-32 bg-gray-200 mt-4 rounded">
            Centré verticalement et horizontalement
          </div>
        </section>

        {/* Grid */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Grilles</h2>
          <CodeBlock
            code={`<div className="grid grid-cols-3 gap-4">
  <div className="bg-green-200 p-4">1</div>
  <div className="bg-green-400 p-4">2</div>
  <div className="bg-green-600 p-4">3</div>
</div>

<div className="grid grid-cols-2 gap-2 mt-4">
  <div className="bg-yellow-200 p-4">A</div>
  <div className="bg-yellow-400 p-4">B</div>
</div>`}
          />
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-green-200 p-4 rounded">1</div>
            <div className="bg-green-400 p-4 rounded">2</div>
            <div className="bg-green-600 text-white p-4 rounded">3</div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="bg-yellow-200 p-4 rounded">A</div>
            <div className="bg-yellow-400 p-4 rounded">B</div>
          </div>
        </section>

        {/* Bordures */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Bordures</h2>
          <CodeBlock
            code={`<div className="border border-gray-400 p-4">Bordure simple</div>
<div className="border-2 border-red-500 rounded-lg p-4">Bordure rouge arrondie</div>
<div className="border-4 border-dashed border-blue-500 p-4">Bordure en pointillés</div>`}
          />
          <div className="space-y-2 mt-4">
            <div className="border border-gray-400 p-4 rounded">Bordure simple</div>
            <div className="border-2 border-red-500 rounded-lg p-4">Bordure rouge arrondie</div>
            <div className="border-4 border-dashed border-blue-500 p-4 rounded">Bordure en pointillés</div>
          </div>
        </section>

        {/* Ombres */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Ombres</h2>
          <CodeBlock
            code={`<div className="shadow p-4 bg-white">Ombre par défaut</div>
<div className="shadow-lg p-4 bg-white">Grande ombre</div>
<div className="shadow-inner p-4 bg-white">Ombre intérieure</div>`}
          />
          <div className="space-y-2 mt-4">
            <div className="shadow p-4 bg-white rounded">Ombre par défaut</div>
            <div className="shadow-lg p-4 bg-white rounded">Grande ombre</div>
            <div className="shadow-inner p-4 bg-white rounded">Ombre intérieure</div>
          </div>
        </section>

        {/* Dimensions */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tailles</h2>
          <CodeBlock
            code={`<div className="w-32 h-16 bg-purple-300">w-32 h-16</div>
<div className="w-full h-12 bg-purple-500">w-full h-12</div>`}
          />
          <div className="space-y-2 mt-4">
            <div className="w-32 h-16 bg-purple-300 flex items-center justify-center rounded">w-32 h-16</div>
            <div className="w-full h-12 bg-purple-500 text-white flex items-center justify-center rounded">w-full h-12</div>
          </div>
        </section>

        {/* Position */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Positionnement</h2>
          <CodeBlock
            code={`<div className="relative bg-gray-200 h-24">
  <div className="absolute top-2 right-2 bg-red-400 px-2">Absolu</div>
</div>`}
          />
          <div className="relative bg-gray-200 h-24 rounded mt-4">
            <div className="absolute top-2 right-2 bg-red-400 px-2 rounded">Absolu</div>
          </div>
        </section>

        {/* Display */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Display</h2>
          <CodeBlock
            code={`<span className="block bg-gray-200">Block</span>
<span className="inline bg-gray-400">Inline</span>
<span className="hidden">Caché</span>`}
          />
          <div className="space-y-2 mt-4">
            <span className="block bg-gray-200 rounded px-2">Block</span>
            <span className="inline bg-gray-400 rounded px-2">Inline</span>
            <span className="hidden">Caché</span>
          </div>
        </section>

        {/* Overflow */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overflow</h2>
          <CodeBlock
            code={`<div className="w-32 h-16 overflow-hidden bg-gray-200">
  Texte très long qui dépasse
</div>
<div className="w-32 h-16 overflow-auto bg-gray-200">
  Texte très long qui dépasse
</div>`}
          />
          <div className="space-y-2 mt-4">
            <div className="w-32 h-16 overflow-hidden bg-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatem.
            </div>

            <div className="w-32 h-16 overflow-auto bg-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatem.
            </div>

          </div>
        </section>

        {/* Z-index */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Z-index</h2>
          <CodeBlock
            code={`<div className="relative h-24 bg-gray-200">
  <div className="absolute inset-0 bg-blue-400 z-10">Devant</div>
  <div className="absolute inset-0 bg-red-400 z-0">Derrière</div>
</div>`}
          />
          <div className="relative h-24 bg-gray-200 mt-4 rounded overflow-hidden">
            <div className="absolute inset-0 bg-blue-400 z-10 flex items-center justify-center">
              Devant
            </div>
            <div className="absolute inset-0 bg-red-400 z-0 flex items-center justify-center">
              Derrière
            </div>
          </div>
        </section>

        {/* Transitions */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Transitions et hover</h2>
          <CodeBlock
            code={`<button className="bg-blue-500 text-white px-4 py-2 rounded transition hover:bg-blue-700">
  Bouton
</button>`}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded transition hover:bg-blue-700 mt-4">
            Bouton
          </button>
        </section>

        {/* Responsive */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Responsive</h2>
          <p className="mb-2">
            Utilise les préfixes <code>sm:</code>, <code>md:</code>, <code>lg:</code>, <code>xl:</code> pour adapter le style selon la taille d’écran.
          </p>
          <CodeBlock
            code={`<div className="bg-red-400 sm:bg-yellow-400 md:bg-green-400 lg:bg-blue-400 xl:bg-purple-400 p-4 text-white">
  Change de couleur selon la taille d'écran
</div>`}
          />
          <div className="bg-red-400 sm:bg-yellow-400 md:bg-green-400 lg:bg-blue-400 xl:bg-purple-400 p-4 text-white rounded mt-4">
            Change de couleur selon la taille d'écran
          </div>
        </section>
      </div>
    </div>
  );
}
