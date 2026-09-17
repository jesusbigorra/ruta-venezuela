import fs from "fs";
import path from "path";

const DESTINOS_DIR = path.join(process.cwd(), "content", "destinos");

/**
 * Lee todos los destinos publicados en content/destinos/*.json
 * Para agregar un destino nuevo: crea un archivo ahí con la misma forma
 * que merida.json y haz commit + push. No hace falta tocar código.
 */
export function getAllDestinos() {
  const files = fs.readdirSync(DESTINOS_DIR).filter((f) => f.endsWith(".json"));

  const destinos = files.map((file) => {
    const raw = fs.readFileSync(path.join(DESTINOS_DIR, file), "utf-8");
    return JSON.parse(raw);
  });

  // destinos destacados primero, luego alfabético
  return destinos.sort((a, b) => {
    if (a.destacado && !b.destacado) return -1;
    if (!a.destacado && b.destacado) return 1;
    return a.name.localeCompare(b.name);
  });
}

export function getDestinoBySlug(slug) {
  const filePath = path.join(DESTINOS_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

export function getAllSlugs() {
  const files = fs.readdirSync(DESTINOS_DIR).filter((f) => f.endsWith(".json"));
  return files.map((f) => f.replace(".json", ""));
}
