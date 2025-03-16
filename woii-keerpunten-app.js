// WOII KEERPUNTEN APP - CONCEPTUEEL ONTWERP

// App-structuur
const appStructure = {
  name: "Keerpunten WOII",
  primaryFeatures: [
    "Interactieve Tijdlijn",
    "Keerpunten Quiz",
    "Mythes vs. Feiten",
    "Interactieve Kaart",
    "Wat Als? Scenario's",
    "Prestatie Tracker"
  ],
  
  // Belangrijkste keerpunten in de oorlog die besproken worden
  keyEvents: [
    {
      id: 1,
      name: "Operatie Barbarossa",
      date: "22 juni 1941",
      description: "Duitse invasie van de Sovjet-Unie",
      significance: "Opende het Oostfront, wat Duitse middelen verdeelde",
      commonMyth: "De Sovjets wonnen alleen door hun getalsmatige overmacht",
      reality: "Superieure strategie en industriële capaciteit waren cruciaal"
    },
    {
      id: 2,
      name: "Slag om Stalingrad",
      date: "23 augustus 1942 - 2 februari 1943",
      description: "Beslissende Sovjet-overwinning die het Duitse 6e leger vernietigde",
      significance: "Eerste grote nederlaag voor Duitsland; strategisch keerpunt aan het Oostfront",
      commonMyth: "Alleen de winter versloeg de Duitsers",
      reality: "Sovjet-tactiek en strategische fouten van Hitler waren doorslaggevend"
    },
    {
      id: 3,
      name: "D-Day",
      date: "6 juni 1944",
      description: "Geallieerde landing in Normandië",
      significance: "Opende een cruciaal tweede front in West-Europa",
      commonMyth: "Was het belangrijkste keerpunt van de oorlog",
      reality: "Kwam pas toen de Sovjet-Unie al het strategische initiatief had heroverd"
    },
    {
      id: 4,
      name: "Slag om Koersk",
      date: "5 juli - 23 augustus 1943",
      description: "Grootste tankslag in de geschiedenis",
      significance: "Na deze slag verloor Duitsland definitief het initiatief aan het Oostfront",
      commonMyth: "Minder bekend dan D-Day maar strategisch belangrijker",
      reality: "Sovjet-overwinning maakte Duitse offensieve capaciteit in het oosten onherstelbaar kapot"
    }
  ],
  
  // Speltypen in de app
  gameTypes: [
    {
      type: "Tijdlijn Ordening",
      description: "Sleep gebeurtenissen naar de juiste plaats op de tijdlijn",
      learningGoal: "Chronologisch begrip van de oorlog versterken"
    },
    {
      type: "Mythe vs. Feit",
      description: "Beoordeel uitspraken over WOII op hun juistheid",
      learningGoal: "Kritisch denken over historische narratieven stimuleren"
    },
    {
      type: "Keerpunt Analyse",
      description: "Analyseer waarom bepaalde gebeurtenissen als keerpunten worden beschouwd",
      learningGoal: "Dieper inzicht in strategische impact van gebeurtenissen"
    },
    {
      type: "Geografische Verkenning",
      description: "Identificeer locaties van belangrijke veldslagen en offensieven",
      learningGoal: "Begrip van de geografische context van de oorlog"
    }
  ],
  
  // Progressiesysteem
  progressSystem: {
    levels: ["Rekruut", "Korporaal", "Sergeant", "Luitenant", "Kapitein", "Majoor", "Kolonel", "Generaal", "Historicus"],
    achievements: [
      "Tijdlijn Meester", 
      "Mythenjager", 
      "Strategisch Inzicht", 
      "Geografisch Genie",
      "WOII Expert"
    ],
    learningPath: "Adaptief systeem dat nieuwe content aanbeveelt op basis van kennishiaten"
  }
};

// Voorbeeld van een quizmodule
const mythVsFactQuiz = {
  questions: [
    {
      id: "q1",
      question: "D-Day was het beslissende keerpunt van de Tweede Wereldoorlog",
      correctAnswer: false,
      explanation: "Hoewel D-Day belangrijk was, waren eerdere gebeurtenissen zoals de Slag om Stalingrad en Koersk strategisch belangrijker. Tegen de tijd van D-Day was de Duitse nederlaag al waarschijnlijk door verliezen aan het Oostfront."
    },
    {
      id: "q2",
      question: "De Sovjets leverden een cruciale bijdrage aan de overwinning op Nazi-Duitsland",
      correctAnswer: true,
      explanation: "De Sovjet-Unie vernietigde ongeveer 80% van de Duitse strijdkrachten en leed veruit de meeste verliezen van alle geallieerden. Hun rol was cruciaal in het verslaan van Nazi-Duitsland."
    },
    {
      id: "q3",
      question: "De winter was de belangrijkste factor in de Duitse nederlaag bij Stalingrad",
      correctAnswer: false,
      explanation: "Hoewel de winter hielp, waren Sovjet-tactieken, strategische fouten van Hitler en logistieke problemen minstens zo belangrijk voor de Duitse nederlaag."
    }
  ]
};

// Voorbeeld van een interactieve kaartmodule
const interactiveMapModule = {
  mapFeatures: [
    "Zoombare kaart van Europa en Noord-Afrika",
    "Tijdlijn-schuifregelaar om fronten te zien veranderen",
    "Markering van belangrijke keerpunten en veldslagen",
    "Animaties van troepenverplaatsingen",
    "Vergelijking van geallieerde en asmacht-gebied over tijd"
  ],
  keyLocations: [
    "Stalingrad", "Normandië", "Koersk", "Berlijn", "Moskou",
    "El Alamein", "Midway", "Leningrad", "Ardennes"
  ]
};

// Educatieve doelen van de app
const learningObjectives = [
  "Nuanceren van populaire misvattingen over de Tweede Wereldoorlog",
  "Begrip ontwikkelen voor de complexe factoren die bijdroegen aan de geallieerde overwinning",
  "Kritisch denken over historische narratieven bevorderen",
  "Inzicht geven in de werkelijke strategische keerpunten van de oorlog",
  "Waardering voor de bijdragen van alle geallieerde naties"
];
