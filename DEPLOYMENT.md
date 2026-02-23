# Deployment-Anleitung für meine_todo_app

## Schritt 1: Production Build erstellen

Öffne ein Terminal im Projektordner und führe folgenden Befehl aus:

```bash
ng build --configuration production --base-href /MyProjects/meine_todo_app/
```

Dieser Befehl:
- Erstellt einen optimierten Production-Build
- Setzt den korrekten `base-href` für deine Domain-Struktur
- Erstellt alle Dateien im Ordner `dist/meine_todo_app/`

## Schritt 2: Dateien auf den Server hochladen

1. **Öffne FileZilla** und verbinde dich mit deinem Server

2. **Navigiere zum Zielordner:**
   - Gehe zu: `paul-gross-dev.com/MyProjects/`
   - Erstelle dort einen Ordner namens `meine_todo_app` (falls noch nicht vorhanden)

3. **Hochladen der Dateien:**
   - Öffne lokal den Ordner: `dist/meine_todo_app/`
   - **WICHTIG:** Lade ALLE Dateien und Ordner aus diesem Verzeichnis hoch:
     - `index.html`
     - Ordner `favicon/` (mit allen Favicon-Dateien)
     - Alle `.js` Dateien
     - Alle `.css` Dateien
     - Der `assets` Ordner (falls vorhanden)
     - Alle anderen Dateien

4. **`.htaccess` Datei hochladen:**
   - Lade die `.htaccess` Datei aus dem Projekt-Root in den `meine_todo_app` Ordner auf dem Server
   - Diese Datei ist wichtig für das Angular Routing

## Schritt 3: Berechtigungen prüfen

Stelle sicher, dass die Dateien die richtigen Berechtigungen haben:
- Dateien: 644
- Ordner: 755

## Schritt 4: Testen

Öffne im Browser:
```
https://paul-gross-dev.com/MyProjects/meine_todo_app/
```

Die App sollte jetzt erreichbar sein!

## Wichtige Hinweise

- **Bei Änderungen:** Führe `npm run build:prod` aus (oder `ng build --configuration production --base-href /MyProjects/meine_todo_app/`) und lade die neuen Dateien hoch
- **Cache leeren:** Falls Änderungen nicht sichtbar sind, leere den Browser-Cache (Strg+Shift+R)
- **Routing:** Die `.htaccess` Datei sorgt dafür, dass das Angular Routing funktioniert

## Troubleshooting

**Problem:** 404 Fehler beim Aufruf
- Prüfe, ob die `.htaccess` Datei hochgeladen wurde
- Prüfe, ob der `base-href` korrekt gesetzt ist

**Problem:** Styles oder Scripts werden nicht geladen / MIME-Type-Fehler („Expected a JavaScript module script but the server responded with text/html“)
- **Ursache:** Der Server liefert `index.html` statt der angeforderten `.js`/`.css`-Dateien (meist weil die Dateien fehlen oder nicht im gleichen Ordner wie `index.html` liegen).
- **Lösung:**
  1. Einen frischen Build ausführen: `npm run build:prod`
  2. **Alle** Dateien aus `dist/meine_todo_app/` erneut hochladen – **immer gemeinsam**: `index.html` und die genannten `runtime.*.js`, `main.*.js`, `polyfills.*.js`, `styles.*.css` (die genauen Namen stehen in der aktuellen `index.html`).
  3. Nicht einen alten Build-Ordner mit neuer `index.html` mischen – die Dateinamen mit Hash müssen zusammenpassen.
  4. Auf dem Server müssen `index.html` und alle `.js`/`.css` **im selben Ordner** liegen (z. B. im Ordner, der unter `/MyProjects/meine_todo_app/` erreichbar ist).
- Die aktuelle `.htaccess` leitet Anfragen für `.js`/`.css` nicht mehr auf `index.html` um; fehlende Dateien führen dann zu 404 (statt zu einem MIME-Type-Fehler).


