import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900">
        {/* Navbar */}
        <header className="flex justify-between items-center px-8 py-4 border-b">
          <Link href="/" className="font-bold text-xl text-red-600">Grimoire</Link>
          <nav className="flex gap-6">
            <Link 
              href="/" 
              className="hover:text-red-500 transition-colors duration-200"
            >
              Accueil
            </Link>
            <Link 
              href="/courses" 
              className="hover:text-red-500 transition-colors duration-200"
            >
              Cours
            </Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
