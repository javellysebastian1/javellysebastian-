# AUXO: app independiente

App web instalable (PWA): se abre a pantalla completa con su propio ícono, sin pasar por Claude, y funciona sin internet con la última edición descargada.

## Qué contiene esta carpeta

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app completa |
| `manifest.webmanifest` | Nombre, colores e ícono para instalarla |
| `sw.js` | Permite usarla sin conexión |
| `icons/` | Íconos de AUXO |
| `editions/` | Una edición por día (`AAAA-MM-DD.json`) y la lista `index.json` |
| `meta/temporadas.json` | Temporadas y episodios |
| `.nojekyll` | Necesario para GitHub Pages |

## Publicarla gratis con GitHub Pages (unos 15 minutos)

1. Crea una cuenta gratuita en github.com (si no tienes).
2. Toca **New repository**. Nombre: `auxo`. Elige **Public** (GitHub Pages gratis requiere repositorio público; el contenido son solo las ediciones, tu progreso nunca se sube). Toca **Create repository**.
3. Toca **uploading an existing file** y arrastra **todo el contenido** de esta carpeta (no la carpeta en sí): `index.html`, `manifest.webmanifest`, `sw.js`, `.nojekyll`, y las carpetas `icons`, `editions` y `meta`. Toca **Commit changes**.
4. Ve a **Settings → Pages**. En **Source** elige **Deploy from a branch**, rama **main**, carpeta **/ (root)**, y toca **Save**.
5. En uno o dos minutos tu app queda en: `https://TU-USUARIO.github.io/auxo/`

## Instalarla en el iPhone

1. Abre `https://TU-USUARIO.github.io/auxo/` en **Safari**.
2. Toca **Compartir → Agregar a pantalla de inicio → Agregar**.
3. Ábrela desde el ícono: se ve a pantalla completa, como cualquier app.

## Tus datos

- Tu progreso, tu bitácora y tus tarjetas de repaso se guardan **solo en tu teléfono**.
- En **Ajustes → Descargar mis datos** sacas una copia; con **Importar datos** la pasas a otro dispositivo. Esto también sirve para traer lo que hayas hecho en la versión de AUXO dentro de Claude.

## Ediciones diarias

Para que llegue una edición nueva cada mañana, conecta GitHub en claude.ai (**Configuración → Conectores → GitHub**) y dile a Claude el nombre del repositorio. Claude ajustará la tarea programada de las 06:25 para que, además de publicar en la app de Claude, suba `editions/<fecha>.json` y actualice `editions/index.json` y `meta/temporadas.json` en tu repositorio. La app los toma al abrirse.

## Diferencias con la versión dentro de Claude

- **Pregúntale a AUXO** no está en esta versión: necesita un servidor con una clave de la API de Claude. Se puede agregar después.
- La versión de Claude guarda tu progreso en tu cuenta y el editor lo usa para adaptar el contenido; esta versión lo guarda en el teléfono.
