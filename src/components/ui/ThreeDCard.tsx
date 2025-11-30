// components/ui/ThreeDCard.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type ThreeDCardProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: string;
  imageUrl?: string;       // chemin dans /public ou URL externe autorisée
  backgroundUrl?: string;  // optionnel : fond en parallax
  variant?: "default" | "shine" | "border";
  disabled?: boolean;
};

export default function ThreeDCard({
  title,
  imageUrl,
  backgroundUrl,
  variant = "default",
  disabled = false,
  children,
  className,
  ...props
}: ThreeDCardProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [rotation, setRotation] = React.useState({ x: 0, y: 0 });
  const [parallax, setParallax] = React.useState({ x: 0, y: 0 });
  const [hovered, setHovered] = React.useState(false);

  React.useEffect(() => {
    if (!hovered) {
      // retour progressif à la position neutre quand on quitte
      setRotation({ x: 0, y: 0 });
      setParallax({ x: 0, y: 0 });
    }
  }, [hovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || disabled) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;

    // intensité (ajuste si trop fort)
    const intensity = 10; // deg max
    const rotateY = (dx / (rect.width / 2)) * intensity;
    const rotateX = -(dy / (rect.height / 2)) * intensity;

    setRotation({ x: rotateX, y: rotateY });

    // parallax background (plus léger)
    setParallax({ x: (dx / (rect.width / 2)) * 12, y: (dy / (rect.height / 2)) * 12 });
  };

  const transformStyle: React.CSSProperties = {
    transform: `perspective(900px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
    transition: hovered ? "transform 0.08s linear" : "transform 0.5s cubic-bezier(.2,.8,.2,1)",
    transformStyle: "preserve-3d",
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative rounded-2xl overflow-hidden shadow-lg bg-gray-900/20",
        // optionally add border variant
        variant === "border" ? "ring-1 ring-white/10" : "",
        className ?? ""
      )}
      {...props}
    >
      {/* Parallax background (under the card) */}
      {backgroundUrl && (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            style={{
              transform: `translate3d(${parallax.x / 6}px, ${parallax.y / 6}px, 0)`,
              transition: "transform 0.2s",
              width: "100%",
              height: "100%",
            }}
          >
            <Image src={backgroundUrl} alt={title ?? "background"} fill className="object-cover" />
          </div>
        </div>
      )}

      {/* Card content with 3D transform */}
      <div style={transformStyle} className="relative w-full h-full transform-gpu">
        {/* Image area */}
        {imageUrl ? (
          <div className="relative w-full h-0 pt-[56%]">
            <Image src={imageUrl} alt={title ?? ""} fill className="object-contain object-bottom rounded-xl scale-150 translate-y-30" />
          </div>
        ) : (
          <div className="w-full h-48 bg-gray-800/60" />
        )}

        {/* Overlay title area */}
        <div className="absolute inset-0 flex items-end p-4 pointer-events-none">
          <div className="bg-black/40 backdrop-blur-sm rounded px-3 py-1 pointer-events-auto">
            {title && <h3 className="text-white text-lg font-semibold leading-tight">{title}</h3>}
          </div>
        </div>

        {/* Children (tu peux placer ce que tu veux à l'intérieur) */}
        {children}

        {/* Shine effect for variant='shine' */}
        {variant === "shine" && (
          <div className="pointer-events-none absolute inset-0">
            <div
              style={{
                transform: `translate3d(${parallax.x / 2}px, ${parallax.y / 2}px, 0)`,
                transition: "transform 0.2s",
              }}
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-30 mix-blend-screen"
            />
          </div>
        )}
      </div>
    </div>
  );
}
