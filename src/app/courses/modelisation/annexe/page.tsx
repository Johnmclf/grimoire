import CodeBlock from "@/components/ui/CodeBlock";


export default function algoRecherchePage() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Annexe</h1>
        <p className="text-gray-600 mb-8">
          Code: Empiler, Depiler, Enfiler, Defiler.
        </p>

        <h2>Empiler</h2>
        <CodeBlock code={`def empile(pile, element):
    pile.append(element)
`} />
        <h2>Depiler</h2>
        <CodeBlock code={`def depile(pile):
    if pile:
        return pile.pop()
    else:
        return None
`} />

        <h2>Enfiler</h2>
        <CodeBlock code={`def enfile(file, element):
    file.append(element)
`} />

        <h2>Defiler</h2>
        <CodeBlock code={`def defile(file):
    if file:
        return file.pop(0)
    else:
        return None
`} />
      </div>
    </div>
  );
}
