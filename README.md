# sottosopra.com — produzione

Questo repo è **ciò che è live** su sottosopra.com (GitHub Pages, branch `main`).

## I tre rami
- **`main`** = quello che il mondo vede adesso
- **`costruzione`** = pagina "sito in costruzione"
- **`sito-completo`** = il sito completo (build Astro)

## Il bottone
**Actions → "Pubblica su sottosopra.com" → Run workflow** → scegli
`sito-completo` (go-live) o `costruzione` (torna alla pagina di attesa).
Live in ~1 minuto. Reversibile sempre.

## Aggiornamenti al sito completo
Il sorgente vive in `~/Workspace/sottosopra/03_sottosopra_website` (Astro).
Ogni nuova versione approvata viene buildata e pushata sul branch
`sito-completo` (se ne occupa Claude in sessione).
