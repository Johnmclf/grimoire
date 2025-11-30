// src/lib/db.ts
import Database from "better-sqlite3";

// On crée/ouvre une base SQLite locale dans le fichier data.sqlite
const db = new Database("data.sqlite");

// Création de la table "items" si elle n'existe pas
db.prepare(`
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  )
`).run();

// Vérifier si la table est vide → insérer quelques données par défaut
const row = db.prepare("SELECT COUNT(*) as count FROM items").get() as { count: number };
if (row.count === 0) {
  const insert = db.prepare("INSERT INTO items (name) VALUES (?)");
  insert.run("Apprendre React");
  insert.run("Créer une carte 3D");
  insert.run("Comprendre SQLite");
}

// --- Fonctions exportées pour interagir avec la DB ---
export function getItems() {
  return db.prepare("SELECT * FROM items").all() as { id: number; name: string }[];
}

export function addItem(name: string) {
  db.prepare("INSERT INTO items (name) VALUES (?)").run(name);
}

export function deleteItem(id: number) {
  db.prepare("DELETE FROM items WHERE id = ?").run(id);
}
