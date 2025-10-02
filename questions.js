const QUESTIONS = {
    easy: [
        {
            question: "Which band released the album 'OK Computer' in 1997?",
            answers: ["Oasis", "Radiohead", "Blur", "Pulp"],
            correct: "Radiohead"
        },
        {
            question: "What is the capital of Bhutan?",
            answers: ["Kathmandu", "Thimphu", "Dhaka", "Colombo"],
            correct: "Thimphu"
        },
        {
            question: "In which language is the word 'Schadenfreude' originally from?",
            answers: ["Dutch", "Swedish", "German", "Danish"],
            correct: "German"
        },
        {
            question: "What particle gives objects mass according to the Standard Model?",
            answers: ["Photon", "Higgs boson", "Electron", "Neutrino"],
            correct: "Higgs boson"
        },
        {
            question: "Which country has the most UNESCO World Heritage Sites?",
            answers: ["France", "China", "Italy", "Spain"],
            correct: "Italy"
        },
        {
            question: "What is the runtime complexity of binary search?",
            answers: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
            correct: "O(log n)"
        },
        {
            question: "Who directed the 1982 film 'Blade Runner'?",
            answers: ["Stanley Kubrick", "Ridley Scott", "Steven Spielberg", "James Cameron"],
            correct: "Ridley Scott"
        },
        {
            question: "What is the official language of Ethiopia?",
            answers: ["Swahili", "Amharic", "Tigrinya", "Oromo"],
            correct: "Amharic"
        },
        {
            question: "Which celestial body has the most moons in our solar system?",
            answers: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            correct: "Saturn"
        },
        {
            question: "What does the acronym JPEG stand for?",
            answers: ["Joint Photo Experts Group", "Java Picture Extension Group", "Joint Pixel Encoding Grid", "Just Pretty Electronic Graphics"],
            correct: "Joint Photo Experts Group"
        },
        {
            question: "In which ocean is the Mariana Trench located?",
            answers: ["Atlantic", "Indian", "Pacific", "Arctic"],
            correct: "Pacific"
        },
        {
            question: "What is the smallest country in Africa by land area?",
            answers: ["Gambia", "Seychelles", "Mauritius", "Comoros"],
            correct: "Seychelles"
        },
        {
            question: "Which programming paradigm does Haskell primarily support?",
            answers: ["Object-oriented", "Functional", "Procedural", "Logic"],
            correct: "Functional"
        },
        {
            question: "Who composed the opera 'The Magic Flute'?",
            answers: ["Bach", "Mozart", "Beethoven", "Wagner"],
            correct: "Mozart"
        },
        {
            question: "What is the term for a word that reads the same backwards?",
            answers: ["Anagram", "Palindrome", "Homophone", "Acronym"],
            correct: "Palindrome"
        },
        {
            question: "Which element has the highest melting point?",
            answers: ["Iron", "Titanium", "Tungsten", "Carbon"],
            correct: "Tungsten"
        },
        {
            question: "What is the capital of Kazakhstan?",
            answers: ["Almaty", "Astana", "Bishkek", "Tashkent"],
            correct: "Astana"
        },
        {
            question: "In music theory, what interval is an octave?",
            answers: ["6 semitones", "8 semitones", "10 semitones", "12 semitones"],
            correct: "12 semitones"
        },
        {
            question: "What type of cloud computing model is Dropbox an example of?",
            answers: ["IaaS", "PaaS", "SaaS", "FaaS"],
            correct: "SaaS"
        },
        {
            question: "Which strait separates Europe from Africa?",
            answers: ["Bosphorus", "Gibraltar", "Hormuz", "Dover"],
            correct: "Gibraltar"
        }
    ],
    medium: [
        {
            question: "What is the only mammal capable of true flight?",
            answers: ["Flying squirrel", "Sugar glider", "Bat", "Colugo"],
            correct: "Bat"
        },
        {
            question: "Which neurotransmitter is associated with Parkinson's disease?",
            answers: ["Serotonin", "Dopamine", "GABA", "Acetylcholine"],
            correct: "Dopamine"
        },
        {
            question: "What is the oldest continuously inhabited city in the world?",
            answers: ["Athens", "Damascus", "Jerusalem", "Jericho"],
            correct: "Damascus"
        },
        {
            question: "In which year was the Linux kernel first released?",
            answers: ["1989", "1991", "1993", "1995"],
            correct: "1991"
        },
        {
            question: "What is the national instrument of Scotland?",
            answers: ["Fiddle", "Bagpipes", "Harp", "Accordion"],
            correct: "Bagpipes"
        },
        {
            question: "Which Japanese term means 'continuous improvement'?",
            answers: ["Kaizen", "Kanban", "Ikigai", "Wabi-sabi"],
            correct: "Kaizen"
        },
        {
            question: "What is the SI unit of electrical resistance?",
            answers: ["Ampere", "Volt", "Ohm", "Watt"],
            correct: "Ohm"
        },
        {
            question: "Which country was NOT part of Yugoslavia?",
            answers: ["Albania", "Bosnia", "Croatia", "Slovenia"],
            correct: "Albania"
        },
        {
            question: "Who wrote the novella 'The Metamorphosis'?",
            answers: ["Franz Kafka", "Albert Camus", "Jean-Paul Sartre", "Hermann Hesse"],
            correct: "Franz Kafka"
        },
        {
            question: "What is the hexadecimal equivalent of decimal 255?",
            answers: ["EE", "FF", "F0", "FE"],
            correct: "FF"
        },
        {
            question: "Which layer of the atmosphere contains the ozone layer?",
            answers: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
            correct: "Stratosphere"
        },
        {
            question: "What is the capital of Kyrgyzstan?",
            answers: ["Bishkek", "Dushanbe", "Tashkent", "Ashgabat"],
            correct: "Bishkek"
        },
        {
            question: "Which bassist was a founding member of both Led Zeppelin and The Yardbirds?",
            answers: ["John Paul Jones", "Jack Bruce", "John Entwistle", "Paul McCartney"],
            correct: "John Paul Jones"
        },
        {
            question: "What does REST stand for in web APIs?",
            answers: ["Remote Execution State Transfer", "Representational State Transfer", "Remote State Execution Tool", "Resource State Transfer"],
            correct: "Representational State Transfer"
        },
        {
            question: "Which ancient civilization created the first known writing system?",
            answers: ["Egyptians", "Phoenicians", "Sumerians", "Greeks"],
            correct: "Sumerians"
        },
        {
            question: "What is the process by which plants lose water vapor called?",
            answers: ["Osmosis", "Diffusion", "Transpiration", "Evapotranspiration"],
            correct: "Transpiration"
        },
        {
            question: "Which sea separates Italy from the Balkans?",
            answers: ["Ionian Sea", "Adriatic Sea", "Aegean Sea", "Tyrrhenian Sea"],
            correct: "Adriatic Sea"
        },
        {
            question: "What is the fourth dimension in spacetime?",
            answers: ["Energy", "Time", "Mass", "Velocity"],
            correct: "Time"
        },
        {
            question: "Which protocol operates on port 22 by default?",
            answers: ["HTTP", "FTP", "SSH", "SMTP"],
            correct: "SSH"
        },
        {
            question: "Who composed the opera 'Carmen'?",
            answers: ["Verdi", "Puccini", "Bizet", "Rossini"],
            correct: "Bizet"
        },
        {
            question: "What is the name of the deepest point in the Atlantic Ocean?",
            answers: ["Challenger Deep", "Puerto Rico Trench", "Java Trench", "Tonga Trench"],
            correct: "Puerto Rico Trench"
        },
        {
            question: "In linguistics, what is a false cognate called?",
            answers: ["Homophone", "False friend", "Pseudo-word", "Loan word"],
            correct: "False friend"
        },
        {
            question: "Which vitamin is also known as ascorbic acid?",
            answers: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
            correct: "Vitamin C"
        },
        {
            question: "What is the longest-running scripted TV show in history?",
            answers: ["Doctor Who", "The Simpsons", "Guiding Light", "General Hospital"],
            correct: "Guiding Light"
        },
        {
            question: "Which sorting algorithm has the best average time complexity?",
            answers: ["Bubble sort", "Insertion sort", "Merge sort", "Selection sort"],
            correct: "Merge sort"
        }
    ],
    hard: [
        {
            question: "What is the Roche limit?",
            answers: ["Maximum distance for tidal locking", "Distance where tidal forces destroy satellites", "Minimum orbital velocity", "Maximum escape velocity"],
            correct: "Distance where tidal forces destroy satellites"
        },
        {
            question: "Which album contains the song 'Us and Them' by Pink Floyd?",
            answers: ["Wish You Were Here", "The Wall", "The Dark Side of the Moon", "Animals"],
            correct: "The Dark Side of the Moon"
        },
        {
            question: "What is the time complexity of the A* pathfinding algorithm?",
            answers: ["O(n)", "O(n log n)", "O(b^d)", "O(n²)"],
            correct: "O(b^d)"
        },
        {
            question: "In which language family does Finnish belong?",
            answers: ["Indo-European", "Uralic", "Altaic", "Finno-Ugric subset of Indo-European"],
            correct: "Uralic"
        },
        {
            question: "What is the name of the hadron collider at CERN?",
            answers: ["Large Electron Collider", "Super Proton Synchrotron", "Large Hadron Collider", "Relativistic Heavy Ion Collider"],
            correct: "Large Hadron Collider"
        },
        {
            question: "Which country has the highest Gini coefficient (income inequality)?",
            answers: ["United States", "South Africa", "Brazil", "China"],
            correct: "South Africa"
        },
        {
            question: "What is the busiest shipping lane in the world?",
            answers: ["Panama Canal", "Suez Canal", "Strait of Malacca", "English Channel"],
            correct: "English Channel"
        },
        {
            question: "Who proved Fermat's Last Theorem in 1995?",
            answers: ["Grigori Perelman", "Andrew Wiles", "Terence Tao", "Alexander Grothendieck"],
            correct: "Andrew Wiles"
        },
        {
            question: "What is the formal name for the study of mushrooms?",
            answers: ["Bryology", "Mycology", "Phycology", "Lichenology"],
            correct: "Mycology"
        },
        {
            question: "Which Byzantine emperor reconquered much of the Western Roman Empire?",
            answers: ["Constantine XI", "Justinian I", "Basil II", "Heraclius"],
            correct: "Justinian I"
        },
        {
            question: "What does CAP theorem stand for in distributed systems?",
            answers: ["Capacity, Availability, Persistence", "Consistency, Availability, Partition tolerance", "Concurrency, Atomicity, Persistence", "Consistency, Atomicity, Performance"],
            correct: "Consistency, Availability, Partition tolerance"
        },
        {
            question: "In which constellation is the star Betelgeuse located?",
            answers: ["Taurus", "Orion", "Canis Major", "Gemini"],
            correct: "Orion"
        },
        {
            question: "What is the Mohs hardness of corundum (ruby/sapphire)?",
            answers: ["7", "8", "9", "10"],
            correct: "9"
        },
        {
            question: "Who developed the lambda calculus?",
            answers: ["Alan Turing", "Alonzo Church", "Kurt Gödel", "John von Neumann"],
            correct: "Alonzo Church"
        },
        {
            question: "What is the longest river in Asia?",
            answers: ["Ganges", "Mekong", "Yangtze", "Yellow River"],
            correct: "Yangtze"
        },
        {
            question: "Which scale measures the perceived loudness of sound?",
            answers: ["Decibel", "Phon", "Hertz", "Pascal"],
            correct: "Phon"
        },
        {
            question: "What was the first artificial satellite to orbit Earth?",
            answers: ["Explorer 1", "Vanguard 1", "Sputnik 1", "Telstar 1"],
            correct: "Sputnik 1"
        },
        {
            question: "In chess, what is a zugzwang?",
            answers: ["Forced checkmate", "Position where any move worsens your position", "Stalemate position", "Opening trap"],
            correct: "Position where any move worsens your position"
        },
        {
            question: "Which economist wrote 'The General Theory of Employment, Interest and Money'?",
            answers: ["Adam Smith", "Karl Marx", "John Maynard Keynes", "Milton Friedman"],
            correct: "John Maynard Keynes"
        },
        {
            question: "What is the name of the effect where light bends around massive objects?",
            answers: ["Doppler effect", "Gravitational lensing", "Cherenkov radiation", "Rayleigh scattering"],
            correct: "Gravitational lensing"
        },
        {
            question: "Which programming language uses 'monads' as a core concept?",
            answers: ["Lisp", "Haskell", "Prolog", "Erlang"],
            correct: "Haskell"
        },
        {
            question: "What is the capital of Turkmenistan?",
            answers: ["Ashgabat", "Dushanbe", "Bishkek", "Tashkent"],
            correct: "Ashgabat"
        },
        {
            question: "Who wrote the opera cycle 'Der Ring des Nibelungen'?",
            answers: ["Mozart", "Verdi", "Wagner", "Strauss"],
            correct: "Wagner"
        },
        {
            question: "What is the name of the boundary beyond which nothing can escape a black hole?",
            answers: ["Photon sphere", "Event horizon", "Schwarzschild radius", "Singularity"],
            correct: "Event horizon"
        },
        {
            question: "In linguistics, what is the Sapir-Whorf hypothesis about?",
            answers: ["Language evolution", "Language influences thought", "Universal grammar", "Phonetic drift"],
            correct: "Language influences thought"
        },
        {
            question: "Which mountain range separates Europe from Asia?",
            answers: ["Caucasus", "Urals", "Altai", "Hindu Kush"],
            correct: "Urals"
        },
        {
            question: "What is the halting problem in computer science?",
            answers: ["Bug that stops execution", "Problem of determining if a program terminates", "Race condition", "Memory leak"],
            correct: "Problem of determining if a program terminates"
        },
        {
            question: "Which particle mediates the electromagnetic force?",
            answers: ["Gluon", "W boson", "Photon", "Graviton"],
            correct: "Photon"
        },
        {
            question: "What is the name of the treaty that created the European Union?",
            answers: ["Treaty of Rome", "Maastricht Treaty", "Lisbon Treaty", "Paris Treaty"],
            correct: "Maastricht Treaty"
        },
        {
            question: "Who discovered the structure of benzene in a dream?",
            answers: ["Dmitri Mendeleev", "August Kekulé", "Linus Pauling", "Robert Bunsen"],
            correct: "August Kekulé"
        }
    ]
};
