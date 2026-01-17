// questions.js — 50 relativ leichte Reihenfolge-Fragen (A–D anklicken in richtiger Reihenfolge)
// Format:
// {
//   question: "…",
//   answers: ["...", "...", "...", "..."],      // bestimmt A,B,C,D in dieser Reihenfolge
//   correctOrder: ["...", "...", "...", "..."]  // dieselben Items wie answers, aber in korrekter Reihenfolge
// }

window.QUESTION_BANK = [
  // ---- Zeit / Alltag ----
  {
    question: "Ordne die Zeiteinheiten (kürzeste → längste).",
    answers: ["Stunde", "Sekunde", "Tag", "Minute"],
    correctOrder: ["Sekunde", "Minute", "Stunde", "Tag"]
  },
  {
    question: "Ordne die Wochentage chronologisch (früh → spät).",
    answers: ["Freitag", "Montag", "Sonntag", "Mittwoch"],
    correctOrder: ["Montag", "Mittwoch", "Freitag", "Sonntag"]
  },
  {
    question: "Ordne die Monate (früh im Jahr → spät).",
    answers: ["Oktober", "Januar", "Mai", "März"],
    correctOrder: ["Januar", "März", "Mai", "Oktober"]
  },
  {
    question: "Ordne die Tageszeiten (früh → spät).",
    answers: ["Abend", "Morgen", "Mittag", "Nacht"],
    correctOrder: ["Morgen", "Mittag", "Abend", "Nacht"]
  },
  {
    question: "Ordne diese Zahlen aufsteigend (klein → groß).",
    answers: ["12", "3", "25", "7"],
    correctOrder: ["3", "7", "12", "25"]
  },
  {
    question: "Ordne diese Temperaturen aufsteigend (kalt → warm).",
    answers: ["20°C", "0°C", "10°C", "30°C"],
    correctOrder: ["0°C", "10°C", "20°C", "30°C"]
  },

  // ---- Größen / Maße ----
  {
    question: "Ordne Längeneinheiten (kleinste → größte).",
    answers: ["Kilometer", "Zentimeter", "Meter", "Millimeter"],
    correctOrder: ["Millimeter", "Zentimeter", "Meter", "Kilometer"]
  },
  {
    question: "Ordne Gewichtseinheiten (kleinste → größte).",
    answers: ["Kilogramm", "Gramm", "Tonne", "Milligramm"],
    correctOrder: ["Milligramm", "Gramm", "Kilogramm", "Tonne"]
  },
  {
    question: "Ordne Volumeneinheiten (kleinste → größte).",
    answers: ["Liter", "Milliliter", "Kubikmeter", "Zentiliter"],
    correctOrder: ["Milliliter", "Zentiliter", "Liter", "Kubikmeter"]
  },
  {
    question: "Ordne Speichergrößen (kleinste → größte).",
    answers: ["Gigabyte", "Kilobyte", "Terabyte", "Megabyte"],
    correctOrder: ["Kilobyte", "Megabyte", "Gigabyte", "Terabyte"]
  },
  {
    question: "Ordne Datenübertragungsraten (kleinste → größte).",
    answers: ["Gbps", "Kbps", "Mbps", "bps"],
    correctOrder: ["bps", "Kbps", "Mbps", "Gbps"]
  },

  // ---- Natur / Wissenschaft leicht ----
  {
    question: "Ordne die Aggregatzustände nach Teilchenbewegung (wenig → viel).",
    answers: ["Gas", "Fest", "Flüssig", "Plasma"],
    correctOrder: ["Fest", "Flüssig", "Gas", "Plasma"]
  },
  {
    question: "Ordne diese Materialien nach typischer Härte (weich → hart).",
    answers: ["Stahl", "Gummi", "Holz", "Glas"],
    correctOrder: ["Gummi", "Holz", "Glas", "Stahl"]
  },
  {
    question: "Ordne Farben im Regenbogen (früh → spät).",
    answers: ["Grün", "Rot", "Blau", "Gelb"],
    correctOrder: ["Rot", "Gelb", "Grün", "Blau"]
  },
  {
    question: "Ordne Planeten nach Abstand zur Sonne (nah → fern).",
    answers: ["Mars", "Merkur", "Jupiter", "Erde"],
    correctOrder: ["Merkur", "Erde", "Mars", "Jupiter"]
  },
  {
    question: "Ordne diese Planeten nach Größe (klein → groß).",
    answers: ["Jupiter", "Mars", "Neptun", "Erde"],
    correctOrder: ["Mars", "Erde", "Neptun", "Jupiter"]
  },
  {
    question: "Ordne diese Lebewesen nach Größe (klein → groß).",
    answers: ["Elefant", "Ameise", "Hund", "Maus"],
    correctOrder: ["Ameise", "Maus", "Hund", "Elefant"]
  },

  // ---- Geografie leicht (Fläche/Größe) ----
  {
    question: "Ordne die Länder nach Fläche (kleinste → größte).",
    answers: ["Russland", "China", "USA", "Kanada"],
    correctOrder: ["USA", "China", "Kanada", "Russland"]
  },
  {
    question: "Ordne die Länder nach Fläche (größte → kleinste).",
    answers: ["Deutschland", "Ukraine", "Spanien", "Frankreich"],
    correctOrder: ["Ukraine", "Frankreich", "Spanien", "Deutschland"]
  },
  {
    question: "Ordne diese Länder nach Fläche (kleinste → größte).",
    answers: ["Schweiz", "Polen", "Österreich", "Italien"],
    correctOrder: ["Schweiz", "Österreich", "Italien", "Polen"]
  },
  {
    question: "Ordne diese Länder nach Fläche (größte → kleinste).",
    answers: ["Japan", "Indien", "Deutschland", "Italien"],
    correctOrder: ["Indien", "Japan", "Deutschland", "Italien"]
  },
  {
    question: "Ordne Kontinente nach Fläche (größte → kleinste).",
    answers: ["Afrika", "Europa", "Asien", "Südamerika"],
    correctOrder: ["Asien", "Afrika", "Südamerika", "Europa"]
  },
  {
    question: "Ordne Inseln nach Fläche (kleinste → größte).",
    answers: ["Grönland", "Island", "Madagaskar", "Borneo"],
    correctOrder: ["Island", "Madagaskar", "Borneo", "Grönland"]
  },

  // ---- Städte / grobe Einwohnerzahl (leicht, bekannte Größenordnung) ----
  {
    question: "Ordne diese Länder grob nach Einwohnerzahl (wenigste → meiste).",
    answers: ["China", "Deutschland", "USA", "Indien"],
    correctOrder: ["Deutschland", "USA", "Indien", "China"]
  },
  {
    question: "Ordne diese Länder grob nach Einwohnerzahl (meiste → wenigste).",
    answers: ["Indonesien", "USA", "Indien", "Deutschland"],
    correctOrder: ["Indien", "USA", "Indonesien", "Deutschland"]
  },
  {
    question: "Ordne diese Städte grob nach Größe (klein → groß).",
    answers: ["Berlin", "Hamburg", "München", "Köln"],
    correctOrder: ["Köln", "München", "Hamburg", "Berlin"]
  },
  {
    question: "Ordne diese Städte grob nach Einwohnerzahl (meiste → wenigste).",
    answers: ["Paris", "Rom", "Berlin", "Madrid"],
    correctOrder: ["Paris", "Madrid", "Rom", "Berlin"]
  },

  // ---- Technik / Computer leicht ----
  {
    question: "Ordne diese Geräte nach typischer Bildschirmgröße (klein → groß).",
    answers: ["Fernseher", "Smartphone", "Laptop", "Tablet"],
    correctOrder: ["Smartphone", "Tablet", "Laptop", "Fernseher"]
  },
  {
    question: "Ordne diese Dateitypen nach typischer Größe (klein → groß).",
    answers: ["Textdatei", "Bild", "Audio", "Video"],
    correctOrder: ["Textdatei", "Bild", "Audio", "Video"]
  },
  {
    question: "Ordne diese Speichermedien nach typischer Kapazität (klein → groß).",
    answers: ["USB-Stick", "MicroSD", "Externe HDD", "DVD"],
    correctOrder: ["DVD", "USB-Stick", "MicroSD", "Externe HDD"]
  },
  {
    question: "Ordne diese Anschlüsse nach typischer Übertragungsrate (langsam → schnell).",
    answers: ["USB 2.0", "USB-C (modern)", "Bluetooth", "USB 3.x"],
    correctOrder: ["Bluetooth", "USB 2.0", "USB 3.x", "USB-C (modern)"]
  },
  {
    question: "Ordne Programmiersprachen nach Erscheinungsjahr (früh → spät).",
    answers: ["Python", "C", "JavaScript", "Java"],
    correctOrder: ["C", "Python", "Java", "JavaScript"]
  },

  // ---- Essen / Küche ----
  {
    question: "Ordne diese Küchenutensilien nach Größe (klein → groß).",
    answers: ["Topf", "Teelöffel", "Pfanne", "Esslöffel"],
    correctOrder: ["Teelöffel", "Esslöffel", "Pfanne", "Topf"]
  },
  {
    question: "Ordne diese Getränke nach typischer Temperatur (kalt → heiß).",
    answers: ["Tee", "Eiswasser", "Kaffee", "Milch"],
    correctOrder: ["Eiswasser", "Milch", "Tee", "Kaffee"]
  },
  {
    question: "Ordne Obst nach typischer Größe (klein → groß).",
    answers: ["Apfel", "Traube", "Wassermelone", "Banane"],
    correctOrder: ["Traube", "Apfel", "Banane", "Wassermelone"]
  },

  // ---- Schule / Basics ----
  {
    question: "Ordne Schulnoten (beste → schlechteste).",
    answers: ["4", "1", "3", "2"],
    correctOrder: ["1", "2", "3", "4"]
  },
  {
    question: "Ordne diese Brüche aufsteigend (klein → groß).",
    answers: ["1/2", "3/4", "1/4", "2/3"],
    correctOrder: ["1/4", "1/2", "2/3", "3/4"]
  },
  {
    question: "Ordne diese Dezimalzahlen aufsteigend (klein → groß).",
    answers: ["0,8", "0,2", "1,5", "1,1"],
    correctOrder: ["0,2", "0,8", "1,1", "1,5"]
  },
  {
    question: "Ordne diese Operationen nach Ergebnis (kleinstes → größtes).",
    answers: ["2+2", "10-3", "3×3", "8÷2"],
    correctOrder: ["2+2", "8÷2", "10-3", "3×3"]
  },

  // ---- Natur / Tiere (leicht) ----
  {
    question: "Ordne diese Tiere nach Geschwindigkeit (langsam → schnell).",
    answers: ["Gepard", "Schnecke", "Hase", "Pferd"],
    correctOrder: ["Schnecke", "Hase", "Pferd", "Gepard"]
  },
  {
    question: "Ordne diese Tiere nach typischer Größe (klein → groß).",
    answers: ["Katze", "Mücke", "Kuh", "Hund"],
    correctOrder: ["Mücke", "Katze", "Hund", "Kuh"]
  },
  {
    question: "Ordne diese Dinge nach Lebensdauer (kurz → lang).",
    answers: ["Schmetterling", "Hund", "Mensch", "Eintagsfliege"],
    correctOrder: ["Eintagsfliege", "Schmetterling", "Hund", "Mensch"]
  },

  // ---- Verkehr / Alltag ----
  {
    question: "Ordne Verkehrsmittel nach typischer Geschwindigkeit (langsam → schnell).",
    answers: ["Fahrrad", "Auto", "ICE-Zug", "Flugzeug"],
    correctOrder: ["Fahrrad", "Auto", "ICE-Zug", "Flugzeug"]
  },
  {
    question: "Ordne diese Strecken nach Länge (kurz → lang).",
    answers: ["1 km", "100 m", "10 km", "500 m"],
    correctOrder: ["100 m", "500 m", "1 km", "10 km"]
  },
  {
    question: "Ordne diese Kosten grob (billig → teuer).",
    answers: ["Kaugummi", "Pizza", "Fahrrad", "Auto"],
    correctOrder: ["Kaugummi", "Pizza", "Fahrrad", "Auto"]
  },

  // ---- Musik / Medien ----
  {
    question: "Ordne diese Medien nach typischer Dateigröße (klein → groß).",
    answers: ["MP3-Song", "Foto", "Textdokument", "Film"],
    correctOrder: ["Textdokument", "Foto", "MP3-Song", "Film"]
  },
  {
    question: "Ordne Audioqualitäten nach Datenrate (niedrig → hoch).",
    answers: ["320 kbps", "128 kbps", "64 kbps", "192 kbps"],
    correctOrder: ["64 kbps", "128 kbps", "192 kbps", "320 kbps"]
  },

  // ---- Sport / Rekorde (leicht) ----
  {
    question: "Ordne diese Distanzen (kurz → lang).",
    answers: ["Marathon", "100 m", "10 km", "1 km"],
    correctOrder: ["100 m", "1 km", "10 km", "Marathon"]
  },
  {
    question: "Ordne diese Zeiten (schnell → langsam).",
    answers: ["30 s", "2 min", "10 s", "1 min"],
    correctOrder: ["10 s", "30 s", "1 min", "2 min"]
  },

  // ---- Zuhause / Dinge ----
  {
    question: "Ordne Möbel nach typischer Größe (klein → groß).",
    answers: ["Schrank", "Stuhl", "Tisch", "Bett"],
    correctOrder: ["Stuhl", "Tisch", "Bett", "Schrank"]
  },
  {
    question: "Ordne diese Räume nach typischer Größe (klein → groß).",
    answers: ["Wohnzimmer", "Abstellkammer", "Schlafzimmer", "Küche"],
    correctOrder: ["Abstellkammer", "Küche", "Schlafzimmer", "Wohnzimmer"]
  },
  {
    question: "Ordne diese Behälter nach Volumen (klein → groß).",
    answers: ["Eimer", "Glas", "Badewanne", "Flasche"],
    correctOrder: ["Glas", "Flasche", "Eimer", "Badewanne"]
  },

  // ---- Reihenfolgen / Alphabet ----
  {
    question: "Ordne diese Wörter alphabetisch (A → Z).",
    answers: ["Banane", "Apfel", "Dattel", "Kirsche"],
    correctOrder: ["Apfel", "Banane", "Dattel", "Kirsche"]
  },
  {
    question: "Ordne diese Buchstaben alphabetisch (A → Z).",
    answers: ["D", "A", "C", "B"],
    correctOrder: ["A", "B", "C", "D"]
  },

  // ---- Geografie: Berge/Flüsse/Seen (leicht, grob) ----
  {
    question: "Ordne Berge nach Höhe (niedrig → hoch).",
    answers: ["Mount Everest", "Zugspitze", "Mont Blanc", "Matterhorn"],
    correctOrder: ["Zugspitze", "Matterhorn", "Mont Blanc", "Mount Everest"]
  },
  {
    question: "Ordne Flüsse nach Länge (kurz → lang).",
    answers: ["Nil", "Rhein", "Amazonas", "Donau"],
    correctOrder: ["Rhein", "Donau", "Amazonas", "Nil"]
  },
  {
    question: "Ordne Seen nach Fläche (größte → kleinste).",
    answers: ["Viktoriasee", "Kaspisches Meer", "Aralsee", "Oberer See"],
    correctOrder: ["Kaspisches Meer", "Oberer See", "Viktoriasee", "Aralsee"]
  },

  // ---- Farben / Temperatur / Helligkeit ----
  {
    question: "Ordne diese Farben nach Helligkeit (dunkel → hell).",
    answers: ["Weiß", "Schwarz", "Grau", "Gelb"],
    correctOrder: ["Schwarz", "Grau", "Gelb", "Weiß"]
  },
  {
    question: "Ordne diese Temperaturen (warm → kalt).",
    answers: ["0°C", "30°C", "10°C", "20°C"],
    correctOrder: ["30°C", "20°C", "10°C", "0°C"]
  },

  // ---- Arbeit / Bildung ----
  {
    question: "Ordne Bildungsstufen (früh → spät).",
    answers: ["Master", "Grundschule", "Bachelor", "Abitur"],
    correctOrder: ["Grundschule", "Abitur", "Bachelor", "Master"]
  },
  {
    question: "Ordne diese Job-Stufen (Einsteiger → Senior).",
    answers: ["Senior", "Praktikum", "Junior", "Mid-Level"],
    correctOrder: ["Praktikum", "Junior", "Mid-Level", "Senior"]
  },

  // ---- Internet / Protokolle (leicht) ----
  {
    question: "Ordne diese Internet-Teile grob (Client → Server).",
    answers: ["Webserver", "Browser", "Internet", "Website"],
    correctOrder: ["Browser", "Internet", "Webserver", "Website"]
  },
  {
    question: "Ordne diese Begriffe nach Dateisystem-Hierarchie (klein → groß).",
    answers: ["Datei", "Ordner", "Laufwerk", "Unterordner"],
    correctOrder: ["Datei", "Unterordner", "Ordner", "Laufwerk"]
  },

  // ---- Extra leichte Logik ----
  {
    question: "Ordne diese Größen (klein → groß).",
    answers: ["klein", "riesig", "mittel", "groß"],
    correctOrder: ["klein", "mittel", "groß", "riesig"]
  },
  {
    question: "Ordne diese Mengen (wenig → viel).",
    answers: ["sehr viel", "wenig", "mittel", "viel"],
    correctOrder: ["wenig", "mittel", "viel", "sehr viel"]
  }
];
