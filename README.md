# Ruta Venezuela — Fase 1

Web/PWA de Ruta Venezuela. Home con destinos destacados, ficha por destino
(Qué visitar, Dónde comer, Dónde dormir, Dónde vivir) y sistema de contenido
basado en archivos, sin backend ni base de datos.

## Instalar y correr en local

```
npm install
npm run dev
```

Abre http://localhost:3000

## Subir a GitHub

```
git init
git add .
git commit -m "Fase 1: esqueleto de Ruta Venezuela"
git branch -M main
git remote add origin <URL_DE_TU_REPO_VACIO_EN_GITHUB>
git push -u origin main
```

## Desplegar

Este proyecto está listo para Vercel (gratis para este tamaño de app):

1. Entra a vercel.com, conecta tu cuenta de GitHub.
2. Importa este repositorio.
3. Vercel detecta que es Next.js solo y no pide configuración.
4. Cada push a `main` actualiza el sitio en vivo automáticamente.

## Cómo agregar un destino nuevo

No hace falta escribir código. Crea un archivo nuevo en `content/destinos/`,
usando el nombre del destino en minúsculas y sin espacios como nombre de
archivo (ej. `canaima.json`), con esta forma:

```json
{
  "slug": "canaima",
  "name": "Canaima",
  "region": "Bolívar",
  "tags": ["Naturaleza", "Aventura"],
  "destacado": true,
  "heroGradient": ["#4A2A5C", "#E8A93C"],
  "resumen": "...",
  "queVisitar": [{ "title": "...", "description": "..." }],
  "dondeComer": [{ "title": "...", "description": "..." }],
  "dondeDormir": [{ "title": "...", "description": "..." }],
  "dondeVivir": {
    "enabled": false,
    "partner": "Propiedash",
    "description": "",
    "stats": [],
    "ctaLabel": "",
    "url": ""
  }
}
```

Guarda, haz commit y push. El destino aparece solo en la home y en `/explora`.

## Sobre "Dónde vivir" y Propiedash

La sección está desacoplada a propósito: cada destino decide si la muestra
con el campo `dondeVivir.enabled`.

- Si `enabled` es `false`, la pestaña "Dónde vivir" ni siquiera aparece en
  ese destino.
- Si `enabled` es `true`, se completan `description`, `stats` (los números
  que se muestran, ej. cantidad de propiedades) y `url` (el enlace de salida
  hacia Propiedash, con los parámetros UTM que definan para medir tráfico).
- El campo `partner` no está encadenado a Propiedash por nombre: si en algún
  momento cambia el patrocinador de esa sección, se edita el JSON, no el
  código.

`merida.json` está activado como ejemplo funcional. `margarita.json` y
`los-roques.json` están desactivados a propósito, porque hoy Propiedash
todavía no confirmó el patrocinio.

## Fotos de destino (`heroImage`)

Cada destino puede llevar un campo opcional `heroImage` con la URL de una
foto real. Si no está presente, la ficha usa el degradado de `heroGradient`
como respaldo.

Margarita y Los Roques ya llevan una foto real de Unsplash (licencia
Unsplash: uso comercial libre, sin necesidad de permiso ni atribución
obligatoria) como muestra de cómo se ve con fotografía real. El campo
`credit` guarda el crédito del fotógrafo, visible discreto en la esquina
del hero, como buena práctica aunque no sea obligatorio.

Para Mérida no se encontró una foto de Unsplash con licencia clara del
lugar exacto, así que se dejó el degradado. En cuanto tengan fotos propias
del Roadtrip, lo ideal es reemplazar estas URLs por las suyas: se pueden
subir a `public/images/destinos/` y usar una ruta local (ej.
`"/images/destinos/merida.jpg"`) en vez de una URL externa.

## Estructura

```
app/                 páginas (App Router de Next.js)
  page.js            home
  destinos/[slug]/   ficha de destino, una por cada archivo en content/
  explora/           listado completo de destinos
components/          piezas de UI reutilizables
content/destinos/    el contenido real, en JSON — esto es lo que se edita a diario
lib/destinos.js      funciones que leen los archivos de content/
public/manifest.json configuración de PWA (instalable en el teléfono)
```

## Pendiente para que esto sea instalable como app de verdad

Faltan los íconos reales en `public/icons/` (192x192 y 512x512, con el logo
definitivo) para que el manifest funcione al 100%. Por ahora el manifest
apunta a esos archivos aunque todavía no existen.
