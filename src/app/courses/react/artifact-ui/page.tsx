"use client";

import { useState } from "react";
import ThreeDCard from "@/components/ui/ThreeDCard";
import CodeBlock from "@/components/ui/CodeBlock";

export default function ArtifactDemoPage() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="px-8 py-12 flex justify-center">
      <div className="w-full max-w-3xl space-y-12">
        <h1 className="text-3xl font-bold">Cartes 3D avec Artifact UI</h1>
        <p className="text-gray-600">
          Suis ce guide étape par étape pour installer, utiliser et personnaliser le composant{" "}
          <b>ThreeDCard</b>.
        </p>

        {/* --- Étape 1 : Installation --- */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <p className="mb-2">
            Copie ces fichiers dans ton projet :
          </p>

          {/* Accordion pour ThreeDCard */}
          <details className="bg-gray-100 rounded-lg shadow mb-4">
            <summary className="cursor-pointer px-4 py-2 font-semibold">
               components/ui/ThreeDCard.tsx
            </summary>
            <div className="p-4">
              <CodeBlock
                code={`"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function ThreeDCard({
  title,
  imageUrl,
  backgroundUrl,
  variant = "default",
  className,
  children,
}) {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;
    setParallax({ x, y });
  };

  const transformStyle = {
    transform: \`rotateX(\${-parallax.y}deg) rotateY(\${parallax.x}deg)\`,
  };

  return (
    <div
      className={cn("relative rounded-xl overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setParallax({ x: 0, y: 0 })}
    >
      {backgroundUrl && (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            style={{
              transform: \`translate3d(\${parallax.x / 6}px, \${parallax.y / 6}px, 0)\`,
              transition: "transform 0.2s",
              width: "100%",
              height: "100%",
            }}
          >
            <Image src={backgroundUrl} alt={title ?? "background"} fill className="object-cover" />
          </div>
        </div>
      )}

      <div style={transformStyle} className="relative w-full h-full transform-gpu">
        {imageUrl ? (
          <div className="relative w-full h-0 pt-[56%]">
            <Image
              src={imageUrl}
              alt={title ?? ""}
              fill
              className="object-contain object-bottom rounded-xl scale-150 translate-y-20"
            />
          </div>
        ) : (
          <div className="w-full h-48 bg-gray-800/60" />
        )}

        <div className="absolute inset-0 flex items-end p-4 pointer-events-none">
          <div className="bg-black/40 backdrop-blur-sm rounded px-3 py-1 pointer-events-auto">
            {title && <h3 className="text-white text-lg font-semibold leading-tight">{title}</h3>}
          </div>
        </div>

        {children}

        {variant === "shine" && (
          <div className="pointer-events-none absolute inset-0">
            <div
              style={{
                transform: \`translate3d(\${parallax.x / 2}px, \${parallax.y / 2}px, 0)\`,
                transition: "transform 0.2s",
              }}
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-30 mix-blend-screen"
            />
          </div>
        )}
      </div>
    </div>
  );
}`}
              />
            </div>
          </details>

          {/* Accordion pour utils */}
          <details className="bg-gray-100 rounded-lg shadow mb-4">
            <summary className="cursor-pointer px-4 py-2 font-semibold">
               lib/utils.ts
            </summary>
            <div className="p-4">
              <CodeBlock
                code={`import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}`}
              />
            </div>
          </details>

          {/* Arborescence non copiable */}
          <div className="bg-gray-200 text-gray-900 rounded-lg p-4 text-sm leading-relaxed">
            <pre>{`/src
 ├── app
 │   └── page.tsx   
 ├── components
 │   └── ui
 │       └── ThreeDCard.tsx
 └── lib
     └── utils.ts`}</pre>
          </div>
        </section>

        {/* --- Étape 2 : Exemple --- */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Exemple basique</h2>
          <CodeBlock
            code={`<ThreeDCard
  title="Coucher de soleil"
  imageUrl="/images/sunset.jpg"
  backgroundUrl="/images/sky-background.jpg"
  variant="shine"
  className="w-96 h-64"
>
  <p className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-lg">
    Magnifique coucher de soleil
  </p>
</ThreeDCard>`}
          />
          <h2 className="text-2xl font-semibold mb-4">Résultat</h2>
          <div className="flex justify-center mt-6">
            <ThreeDCard
              title=""
              imageUrl="/images/luffy.png"
              backgroundUrl="/images/background3Dcard.jpg"
              variant="shine"
              className="w-80 h-[300px]"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <p className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-lg">
                Monkey D Luffy
              </p>
            </ThreeDCard>
          </div>
        </section>

        {/* --- Étape 3 : Personnalisation --- */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Personnalisation</h2>

          <h3 className="text-xl font-semibold mt-4"> Changer les images</h3>
          <p className="text-gray-600 mb-2">
            Mets tes images dans <code>/public/images/</code> et change les props :
          </p>
          <CodeBlock
            code={`imageUrl="/images/mon-image.jpg"
backgroundUrl="/images/fond.jpg"`}
          />

          <h3 className="text-xl font-semibold mt-4"> Taille de la carte</h3>
          <p className="text-gray-600 mb-2">
            Modifie la classe Tailwind <code>w-XX h-XX</code> dans <code>className</code>.
          </p>
          <CodeBlock
            code={`className="w-80 h-60" 
className="w-[500px] h-[300px]"   # taille personnalisée`}
          />

          <h3 className="text-xl font-semibold mt-4"> Ajuster l'image</h3>
          <p className="text-gray-600 mb-2">
            Dans <code>ThreeDCard.tsx</code>, tu peux modifier la classe de l’image :
          </p>
          <CodeBlock
            code={`<Image
  src={imageUrl}
  alt={title ?? ""}
  fill
  className="object-cover object-bottom scale-150 translate-y-20 rounded-xl"
/>`}
          />
          <ul className="list-disc list-inside text-gray-700">
            <li><code>object-cover</code> → rogne l’image pour remplir</li>
            <li><code>object-bottom</code> → colle l’image vers le bas</li>
            <li><code>scale-150</code> → zoom x1.5</li>
            <li><code>translate-y-20</code> → décale vers le bas</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4"> Texte</h3>
          <p className="text-gray-600 mb-2">
            Change la position et le style avec Tailwind :
          </p>
          <CodeBlock
            code={`<p className="absolute top-4 right-4 text-yellow-300 text-lg font-semibold">
  Mon texte personnalisé
</p>`}
          />

          <h3 className="text-xl font-semibold mt-4"> Variantes</h3>
          <p className="text-gray-600 mb-2">
            Tu peux utiliser différentes variantes visuelles :
          </p>
          <CodeBlock
            code={`variant="default"
variant="shine"
variant="border"`}
          />
        </section>
      </div>
    </div>
  );
}
