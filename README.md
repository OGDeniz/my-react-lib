
# My React Library

Eine vielseitige React-Komponentenbibliothek, die speziell für die dynamische Darstellung von UI-Elementen entwickelt wurde. Diese Bibliothek nutzt modernste Technologien wie React, Material-UI und TypeScript.

## 🚀 Features

- **Dynamische Komponenten**: Anpassbare Kartenkomponenten (`CardBild`, `CardEinfach`).
- **State-Management**: React Context API für globale Zustände.
- **Modularität**: Sauber strukturierte Projektarchitektur.
- **Styling**: Material-UI und CSS-Module für konsistente Designs.
- **TypeScript-Unterstützung**: Typensicherheit und bessere Code-Wartbarkeit.

## 📂 Projektstruktur

```plaintext
.
├── public/
├── src/
│   ├── assets/               # Statische Ressourcen (Bilder, etc.)
│   ├── components/           # Wiederverwendbare UI-Komponenten
│   │   └── UI/
│   │       ├── Cards/        # Kartenkomponenten
│   │           ├── CardEinfach.tsx
│   │           └── CardBild.tsx
│   └── context/              # Globale Zustandshandhabung
│   ├── styles/               # CSS-Stile
│   └── pages/                # Hauptseiten
├── package.json              # Projektkonfiguration
└── README.md                 # Dokumentation
```

## 🔧 Installation

1. **Repository klonen**:
   ```bash
   git clone https://github.com/OGDeniz/my-react-lib.git
   cd my-react-lib
   ```

2. **Abhängigkeiten installieren**:
   ```bash
   npm install
   ```

3. **Entwicklungsserver starten**:
   ```bash
   npm start
   ```

## 💡 Verwendung

Beispiel: CardBild-Komponente

```javascript
import CardBild from './components/UI/Cards/CardBild';

function App() {
  const handleShare = () => alert('Geteilt!');
  const handleLearnMore = () => alert('Mehr erfahren!');

  return (
    <CardBild
      src="https://via.placeholder.com/150"
      title="Beispielkarte"
      description="Dies ist eine Beispielkarte mit dynamischem Inhalt."
      onShare={handleShare}
      onLearnMore={handleLearnMore}
    />
  );
}

export default App;
```

## 📜 Technologien

- **React**: Frontend-Bibliothek für interaktive Benutzeroberflächen.
- **Material-UI**: Designsystem für React-Komponenten.
- **TypeScript**: Typensicheres JavaScript.
- **CSS Modules**: Lokalisierte Stile für Komponenten.

## 📈 Roadmap

- [ ] Integration von Tests mit Jest.
- [ ] Erweiterung der Komponentenbibliothek.
- [ ] Veröffentlichung als npm-Paket.

## 👥 Mitwirken

Beiträge sind willkommen! Öffne ein Issue oder erstelle einen Pull Request.

## 📄 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert – siehe die Datei LICENSE für Details.

---

