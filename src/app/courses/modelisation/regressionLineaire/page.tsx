import CodeBlock from "@/components/ui/CodeBlock";

export default function RegressionLineairePage() {
  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-3xl">
        {/* ----------------------------------------------------- */}
        <h1 className="text-3xl font-bold mb-6">Régression Linéaire</h1>

        {/* SOMMAIRE */}
        <div className="bg-gray-100 p-4 rounded-xl mb-8">
          <h2 className="text-xl font-semibold mb-2">Sommaire</h2>
          <ul className="list-decimal pl-6 text-gray-700">
            <li><a href="#presentation"> Présentation générale</a></li>
            <li><a href="#statistique">Méthode Statistique</a></li>
            <li><a href="#gradient">Descente de Gradient</a></li>
          </ul>
        </div>

        {/* ----------------------------------------------------- */}
        <h2 className="text-2xl font-semibold mb-4">1. Présentation générale</h2>
        <p className="text-gray-600 mb-8">
          La régression linéaire est une méthode mathématique utilisée pour modéliser une relation entre des variables numériques, en supposant que la sortie est une combinaison linéaire des paramètres du modèle. Dans sa forme la plus simple, elle cherche une droite, mais elle peut aussi s’appliquer à des modèles plus complexes comme les polynômes.
        </p>

        {/* ----------------------------------------------------- */}
        <h2 id="statistique" className="text-2xl font-semibold mb-4">2. Méthode Statistique</h2>
        <p className="text-gray-600 mb-4">Méthode statistique complète avec explications et exemples.</p>

        <ol className="list-decimal pl-6 text-gray-700 mb-10">
          <li>
            <strong>Calcul des moyennes</strong>
            <div className="bg-gray-100 rounded-lg p-3 my-2">
              <code>Moyenne(X) = (1/n) × ΣXᵢ</code><br />
              <code>Moyenne(Y) = (1/n) × ΣYᵢ</code>
            </div>
            <p className="text-gray-600">Exemple détaillé :</p>
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <code>ΣX = 150 + 160 + 170 + 180 + 190 = 850</code><br />
              <code>ΣY = 50 + 58 + 65 + 72 + 80 = 325</code><br />
              <code>n (nombre de points) = 5</code><br />
              <code>Moyenne(X) = 850 / 5 = 170</code><br />
              <code>Moyenne(Y) = 325 / 5 = 65</code>
            </div>
          </li>

          <li>
            <strong>Calcul de la covariance</strong>
            <div className="bg-gray-100 rounded-lg p-3 my-2">
              <code>Cov(X, Y) = (1/n) × Σ[(Xᵢ - X̄) × (Yᵢ - Ȳ)]</code>
            </div>
            <p className="text-gray-600">Tableau détaillé :</p>
            <table className="border border-gray-300 text-sm text-center mb-4 w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">X</th>
                  <th className="border p-2">(X̄)</th>
                  <th className="border p-2">(X - X̄)</th>
                  <th className="border p-2">Y</th>
                  <th className="border p-2">(Ȳ)</th>
                  <th className="border p-2">(Y - Ȳ)</th>
                  <th className="border p-2">(X - X̄)(Y - Ȳ)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border p-2">150</td><td className="border p-2">170</td><td className="border p-2">-20</td><td className="border p-2">50</td><td className="border p-2">65</td><td className="border p-2">-15</td><td className="border p-2">300</td></tr>
                <tr><td className="border p-2">160</td><td className="border p-2">170</td><td className="border p-2">-10</td><td className="border p-2">58</td><td className="border p-2">65</td><td className="border p-2">-7</td><td className="border p-2">70</td></tr>
                <tr><td className="border p-2">170</td><td className="border p-2">170</td><td className="border p-2">0</td><td className="border p-2">65</td><td className="border p-2">65</td><td className="border p-2">0</td><td className="border p-2">0</td></tr>
                <tr><td className="border p-2">180</td><td className="border p-2">170</td><td className="border p-2">10</td><td className="border p-2">72</td><td className="border p-2">65</td><td className="border p-2">7</td><td className="border p-2">70</td></tr>
                <tr><td className="border p-2">190</td><td className="border p-2">170</td><td className="border p-2">20</td><td className="border p-2">80</td><td className="border p-2">65</td><td className="border p-2">15</td><td className="border p-2">300</td></tr>
              </tbody>
            </table>
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <code>Σ((X - X̄)(Y - Ȳ)) = 300 + 70 + 0 + 70 + 300 = 740</code><br />
              <code>Cov(X, Y) = 740 / 5 = 148</code>
            </div>
          </li>

          <li>
            <strong>Calcul de la variance</strong>
            <div className="bg-gray-100 rounded-lg p-3 my-2">
              <code>Var(X) = (1/n) × Σ[(Xᵢ - X̄)²]</code>
            </div>
            <p className="text-gray-600">Exemple détaillé :</p>
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <code>(X - X̄)² : 400, 100, 0, 100, 400</code><br />
              <code>Σ = 400 + 100 + 0 + 100 + 400 = 1000</code><br />
              <code>Var(X) = 1000 / 5 = 200</code>
            </div>
          </li>

          <li>
            <strong>Calcul des coefficients</strong>
            <div className="bg-gray-100 rounded-lg p-3 my-2 text-center">
              <code>a = Cov(X,Y) / Var(X) = 148 / 200 = 0.74</code><br />
              <code>b = Moyenne(Y) - a × Moyenne(X) = 65 - 0.74 × 170 = 65 - 125.8 = -60.8</code>
            </div>

            <p className="text-gray-600 mb-4">Droite finale :</p>
            <div className="bg-gray-200 rounded-lg text-center py-2 mb-6">
              <code>Y = 0.74 × X - 60.8</code>
            </div>

            <p className="text-gray-600 mb-6">
              Exemple de prédiction : Si X = 175 alors Y = 0.74 × 175 - 60.8 = 68.9
            </p>
          </li>
        </ol>

        <CodeBlock code={`// TODO: Implémenter le calcul analytique de la régression linéaire`} />

        {/* ----------------------------------------------------- */}
        <h2 id="gradient" className="text-2xl font-semibold mt-10 mb-4">3. Méthode par Descente de Gradient</h2>


        <h2>To Do !</h2>

      </div>
    </div>
  );
}
