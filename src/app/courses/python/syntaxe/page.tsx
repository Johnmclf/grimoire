import CodeBlock from "@/components/ui/CodeBlock";

export default function PythonSyntaxPage() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Syntaxe de Python</h1>
        <p className="text-gray-600 mb-8">
          Python est connu pour sa syntaxe simple et lisible, ce qui en fait un 
          excellent choix pour les débutants.
        </p>

        <h2 className="text-xl font-semibold mb-2"> Variables</h2>
        <CodeBlock code={`x = 10\nnom = "Alice"\nprint(x, nom)`} />

        <h2 className="text-xl font-semibold mb-2"> Conditions</h2>
        <CodeBlock code={`age = 18\nif age >= 18:\n    print("Majeur")\nelse:\n    print("Mineur")`} />

        <h2 className="text-xl font-semibold mb-2"> Boucles</h2>
        <CodeBlock code={`for i in range(5):\n    print(i)\n\nn = 0\nwhile n < 3:\n    print(n)\n    n += 1`} />

        <h2 className="text-xl font-semibold mb-2"> Fonctions</h2>
        <CodeBlock code={`def addition(a, b):\n    return a + b\n\nprint(addition(2, 3))`} />
      </div>
    </div>
  );
}
