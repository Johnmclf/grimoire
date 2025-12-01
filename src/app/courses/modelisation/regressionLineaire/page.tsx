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
            <li><a href="#presentation" className="hover:underline"> Présentation générale</a></li>
            <li><a href="#statistique" className="hover:underline">Méthode Statistique</a></li>
            <li><a href="#gradient" className="hover:underline">Descente de Gradient</a></li>
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
              <code>n = 5</code><br />
              <code>Moyenne(X) = 850 / 5 = 170</code><br />
              <code>Moyenne(Y) = 325 / 5 = 65</code>
            </div>
          </li>

          <li>
            <strong>Calcul de la covariance</strong>
            <div className="bg-gray-100 rounded-lg p-3 my-2">
              <code>Cov(X, Y) = (1/n) × Σ[(Xᵢ - X̄) × (Yᵢ - Ȳ)]</code>
            </div>
            <p className="text-gray-600">Exemple détaillé (tableau des étapes) :</p>
            <table className="border border-gray-300 text-sm text-center mb-4 w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">X</th>
                  <th className="border p-2">Y</th>
                  <th className="border p-2">(X - X̄)</th>
                  <th className="border p-2">(Y - Ȳ)</th>
                  <th className="border p-2">(X - X̄)(Y - Ȳ)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border p-2">150</td><td className="border p-2">50</td><td className="border p-2">-20</td><td className="border p-2">-15</td><td className="border p-2">300</td></tr>
                <tr><td className="border p-2">160</td><td className="border p-2">58</td><td className="border p-2">-10</td><td className="border p-2">-7</td><td className="border p-2">70</td></tr>
                <tr><td className="border p-2">170</td><td className="border p-2">65</td><td className="border p-2">0</td><td className="border p-2">0</td><td className="border p-2">0</td></tr>
                <tr><td className="border p-2">180</td><td className="border p-2">72</td><td className="border p-2">10</td><td className="border p-2">7</td><td className="border p-2">70</td></tr>
                <tr><td className="border p-2">190</td><td className="border p-2">80</td><td className="border p-2">20</td><td className="border p-2">15</td><td className="border p-2">300</td></tr>
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
              Exemple de prédiction : X = 175 → Y = 0.74 × 175 - 60.8 = 68.9
            </p>
          </li>
        </ol>

        <CodeBlock code={`// TODO: Implémenter le calcul analytique de la régression linéaire`} />

        {/* ----------------------------------------------------- */}
        <h2 id="gradient" className="text-2xl font-semibold mt-10 mb-4">3. Méthode par Descente de Gradient</h2>

        <p><strong>Étape 0 — Initialiser les paramètres</strong></p>
        <p>
          Exemple :<br/>
          w = 0<br/>
          b = 0<br/>
          α = 0.1 (taux d’apprentissage)
        </p>

        <p><strong>Étape 1 — Calculer les prédictions</strong></p>
        <p>Pour chaque point on calcule : wx + b</p>

        <p>Exemple (fonction à apprendre : y = 2x + 1)</p>

        <table className="border border-gray-300 text-sm text-center mb-4 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">X</th>
              <th className="border p-2">Y</th>
              <th className="border p-2">wx + b</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">1</td><td className="border p-2">3</td><td className="border p-2">0</td></tr>
            <tr><td className="border p-2">2</td><td className="border p-2">5</td><td className="border p-2">0</td></tr>
            <tr><td className="border p-2">3</td><td className="border p-2">7</td><td className="border p-2">0</td></tr>
          </tbody>
        </table>

        <p><strong>Étape 2 — Calculer l'erreur</strong></p>
        <p>L’erreur se calcule : erreur = (wx + b) – y</p>

        <table className="border border-gray-300 text-sm text-center mb-4 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">X</th>
              <th className="border p-2">Y</th>
              <th className="border p-2">wx+b</th>
              <th className="border p-2">wx + b – y (Erreur)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">1</td><td className="border p-2">3</td><td className="border p-2">0</td><td className="border p-2">-3</td></tr>
            <tr><td className="border p-2">2</td><td className="border p-2">5</td><td className="border p-2">0</td><td className="border p-2">-5</td></tr>
            <tr><td className="border p-2">3</td><td className="border p-2">7</td><td className="border p-2">0</td><td className="border p-2">-7</td></tr>
          </tbody>
        </table>

        <p><strong>Étape 3 — Calculer le gradient</strong></p>

        <p>Formules :</p>
        <p>
          dw = (1/n) Σ (erreur × x)<br/>
          db = (1/n) Σ erreur
        </p>

        <p>Calcul :</p>
        <p>dw = (1/3) [ (-3×1) + (-5×2) + (-7×3) ] = -32/3 ≈ -10.6667</p>
        <p>db = (1/3) [ -3 + (-5) + (-7) ] = -15/3 = -5</p>

        <p><strong>Étape 4 — Mettre à jour les paramètres</strong></p>

        <p>Formules :</p>
        <p>
          w = w - α × dw<br/>
          b = b - α × db
        </p>

        <p>Avec α = 0.1 :</p>
        <p>w = 0 - 0.1 × (-10.6667) = 1.06667</p>
        <p>b = 0 - 0.1 × (-5) = 0.5</p>

        <p><strong>Étape 5 — Répéter les étapes 1 à 4 (itération 2)</strong></p>

        <p>On recommence les calculs avec w = 1.06667 et b = 0.5</p>

        <p><strong>Prédictions :</strong></p>

        <table className="border border-gray-300 text-sm text-center mb-4 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">X</th>
              <th className="border p-2">Y</th>
              <th className="border p-2">wx+b</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">1</td><td className="border p-2">3</td><td className="border p-2">1.56667</td></tr>
            <tr><td className="border p-2">2</td><td className="border p-2">5</td><td className="border p-2">2.63334</td></tr>
            <tr><td className="border p-2">3</td><td className="border p-2">7</td><td className="border p-2">3.70001</td></tr>
          </tbody>
        </table>

        <p><strong>Erreurs :</strong></p>

        <table className="border border-gray-300 text-sm text-center mb-4 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">X</th>
              <th className="border p-2">Y</th>
              <th className="border p-2">wx+b</th>
              <th className="border p-2">wx + b – y (Erreur)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border p-2">1</td><td className="border p-2">3</td><td className="border p-2">1.56667</td><td className="border p-2">-1.43333</td></tr>
            <tr><td className="border p-2">2</td><td className="border p-2">5</td><td className="border p-2">2.63334</td><td className="border p-2">-2.36666</td></tr>
            <tr><td className="border p-2">3</td><td className="border p-2">7</td><td className="border p-2">3.70001</td><td className="border p-2">-3.29999</td></tr>
          </tbody>
        </table>

        <p><strong>Gradient :</strong></p>
        <p>dw = (1/3)[ (-1.43333×1) + (-2.36666×2) + (-3.29999×3 ) ] ≈ -17.0666/3 ≈ -5.6889</p>
        <p>db = (1/3)[ -1.43333 + -2.36666 + -3.29999 ] = -7.1/3 ≈ -2.3667</p>

        <p><strong>Mise à jour :</strong></p>
        <p>w = 1.06667 - 0.1 × (-5.6889) = 1.63556</p>
        <p>b = 0.5 - 0.1 × (-2.3667) = 0.73667</p>

        <p><strong>Étape 6 — Répéter encore une fois (itération 3)</strong></p>

        <p>On calcule encore une fois les prédictions, erreurs, gradients… et on met à jour.</p>
        <p>Après 3 itérations, on se rapproche encore plus de la vraie droite y = 2x + 1.</p>

        <p><strong>Pourquoi on s’arrête ?</strong></p>
        <p>
        On s’arrête lorsque :<br/>
        • les valeurs de w et b ne changent presque plus<br/>
        • l’erreur devient très petite. (&lt;ε)<br/><br/>
        Cela signifie que la descente de gradient a trouvé une bonne approximation de la solution.
        </p>

      </div>
    </div>
  );
}
