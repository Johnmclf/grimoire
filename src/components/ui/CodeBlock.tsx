"use client";

import { useState } from "react";

export default function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-gray-900 text-gray-100 rounded-lg p-4 mb-4">
      <pre className="overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-2 py-1 text-xs rounded bg-gray-700 hover:bg-gray-600"
      >
        {copied ? "Copié !" : "Copier"}
      </button>
    </div>
  );
}
