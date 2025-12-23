# Deployment-Anleitung für meine_todo_app

## Schritt 1: Production Build erstellen

Öffne ein Terminal im Projektordner und führe folgenden Befehl aus:

```bash
ng build --configuration production --base-href /projects/meine_todo_app/
```

Dieser Befehl:
- Erstellt einen optimierten Production-Build
- Setzt den korrekten `base-href` für deine Domain-Struktur
- Erstellt alle Dateien im Ordner `dist/meine_todo_app/`

## Schritt 2: Dateien auf den Server hochladen

1. **Öffne FileZilla** und verbinde dich mit deinem Server

2. **Navigiere zum Zielordner:**
   - Gehe zu: `paul-gross-dev.com/projects/`
   - Erstelle dort einen Ordner namens `meine_todo_app` (falls noch nicht vorhanden)

3. **Hochladen der Dateien:**
   - Öffne lokal den Ordner: `dist/meine_todo_app/`
   - **WICHTIG:** Lade ALLE Dateien und Ordner aus diesem Verzeichnis hoch:
     - `index.html`
     - `favicon.ico`
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
https://paul-gross-dev.com/projects/meine_todo_app/
```

Die App sollte jetzt erreichbar sein!

## Wichtige Hinweise

- **Bei Änderungen:** Führe immer wieder `ng build --configuration production --base-href /projects/meine_todo_app/` aus und lade die neuen Dateien hoch
- **Cache leeren:** Falls Änderungen nicht sichtbar sind, leere den Browser-Cache (Strg+Shift+R)
- **Routing:** Die `.htaccess` Datei sorgt dafür, dass das Angular Routing funktioniert

## Troubleshooting

**Problem:** 404 Fehler beim Aufruf
- Prüfe, ob die `.htaccess` Datei hochgeladen wurde
- Prüfe, ob der `base-href` korrekt gesetzt ist

**Problem:** Styles oder Scripts werden nicht geladen
- Prüfe, ob alle Dateien hochgeladen wurden
- Prüfe die Browser-Konsole auf Fehler
- Stelle sicher, dass die Pfade in der `index.html` korrekt sind

