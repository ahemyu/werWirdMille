const QUESTIONS = {
    easy: [
        {
            question: "What is the capital of France?",
            answers: ["London", "Berlin", "Paris", "Madrid"],
            correct: "Paris"
        },
        {
            question: "How many continents are there?",
            answers: ["5", "6", "7", "8"],
            correct: "7"
        },
        {
            question: "What color do you get when you mix red and white?",
            answers: ["Pink", "Orange", "Purple", "Brown"],
            correct: "Pink"
        },
        {
            question: "How many legs does a spider have?",
            answers: ["6", "8", "10", "12"],
            correct: "8"
        },
        {
            question: "What is the largest planet in our solar system?",
            answers: ["Earth", "Mars", "Jupiter", "Saturn"],
            correct: "Jupiter"
        },
        {
            question: "What is 10 + 5?",
            answers: ["10", "15", "20", "25"],
            correct: "15"
        },
        {
            question: "Which animal is known as the King of the Jungle?",
            answers: ["Tiger", "Lion", "Elephant", "Bear"],
            correct: "Lion"
        },
        {
            question: "How many days are in a week?",
            answers: ["5", "6", "7", "8"],
            correct: "7"
        },
        {
            question: "What is the opposite of hot?",
            answers: ["Warm", "Cool", "Cold", "Freezing"],
            correct: "Cold"
        },
        {
            question: "What do bees make?",
            answers: ["Milk", "Honey", "Silk", "Wax"],
            correct: "Honey"
        },
        {
            question: "How many sides does a triangle have?",
            answers: ["2", "3", "4", "5"],
            correct: "3"
        },
        {
            question: "What is the first letter of the alphabet?",
            answers: ["A", "B", "C", "D"],
            correct: "A"
        },
        {
            question: "Which planet is closest to the Sun?",
            answers: ["Venus", "Earth", "Mercury", "Mars"],
            correct: "Mercury"
        },
        {
            question: "What is frozen water called?",
            answers: ["Steam", "Ice", "Snow", "Hail"],
            correct: "Ice"
        },
        {
            question: "How many hours are in a day?",
            answers: ["12", "24", "48", "60"],
            correct: "24"
        },
        {
            question: "What shape is a ball?",
            answers: ["Square", "Triangle", "Circle", "Rectangle"],
            correct: "Circle"
        },
        {
            question: "What is the color of the sky on a clear day?",
            answers: ["Green", "Blue", "Red", "Yellow"],
            correct: "Blue"
        },
        {
            question: "How many months are in a year?",
            answers: ["10", "11", "12", "13"],
            correct: "12"
        },
        {
            question: "What animal says 'meow'?",
            answers: ["Dog", "Cat", "Cow", "Bird"],
            correct: "Cat"
        },
        {
            question: "What is 2 + 2?",
            answers: ["2", "3", "4", "5"],
            correct: "4"
        }
    ],
    medium: [
        {
            question: "Who painted the Mona Lisa?",
            answers: ["Picasso", "Van Gogh", "Leonardo da Vinci", "Michelangelo"],
            correct: "Leonardo da Vinci"
        },
        {
            question: "What is the smallest country in the world?",
            answers: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            correct: "Vatican City"
        },
        {
            question: "In which year did World War II end?",
            answers: ["1943", "1944", "1945", "1946"],
            correct: "1945"
        },
        {
            question: "What is the chemical symbol for gold?",
            answers: ["Go", "Gd", "Au", "Ag"],
            correct: "Au"
        },
        {
            question: "How many strings does a standard guitar have?",
            answers: ["4", "5", "6", "7"],
            correct: "6"
        },
        {
            question: "What is the longest river in the world?",
            answers: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            correct: "Nile"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            answers: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
            correct: "William Shakespeare"
        },
        {
            question: "What is the capital of Australia?",
            answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            correct: "Canberra"
        },
        {
            question: "How many bones are in the human body?",
            answers: ["186", "206", "226", "246"],
            correct: "206"
        },
        {
            question: "What is the speed of light?",
            answers: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
            correct: "300,000 km/s"
        },
        {
            question: "Which element has the atomic number 1?",
            answers: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
            correct: "Hydrogen"
        },
        {
            question: "What year did the Titanic sink?",
            answers: ["1910", "1911", "1912", "1913"],
            correct: "1912"
        },
        {
            question: "How many keys are on a standard piano?",
            answers: ["76", "82", "88", "92"],
            correct: "88"
        },
        {
            question: "What is the capital of Canada?",
            answers: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
            correct: "Ottawa"
        },
        {
            question: "Who discovered penicillin?",
            answers: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"],
            correct: "Alexander Fleming"
        },
        {
            question: "What is the largest ocean on Earth?",
            answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
            correct: "Pacific"
        },
        {
            question: "How many cards are in a standard deck?",
            answers: ["48", "50", "52", "54"],
            correct: "52"
        },
        {
            question: "What is the square root of 144?",
            answers: ["10", "11", "12", "13"],
            correct: "12"
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            correct: "Carbon Dioxide"
        },
        {
            question: "What is the currency of Japan?",
            answers: ["Yuan", "Won", "Yen", "Ringgit"],
            correct: "Yen"
        },
        {
            question: "How many teeth does an adult human have?",
            answers: ["28", "30", "32", "34"],
            correct: "32"
        },
        {
            question: "What is the hardest natural substance on Earth?",
            answers: ["Gold", "Iron", "Diamond", "Platinum"],
            correct: "Diamond"
        },
        {
            question: "Who was the first person to walk on the Moon?",
            answers: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
            correct: "Neil Armstrong"
        },
        {
            question: "What is the main ingredient in guacamole?",
            answers: ["Tomato", "Avocado", "Pepper", "Onion"],
            correct: "Avocado"
        },
        {
            question: "How many players are on a soccer team?",
            answers: ["9", "10", "11", "12"],
            correct: "11"
        }
    ],
    hard: [
        {
            question: "What is the Higgs boson also known as?",
            answers: ["God particle", "Energy particle", "Mass particle", "Quantum particle"],
            correct: "God particle"
        },
        {
            question: "Who developed the theory of general relativity?",
            answers: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Stephen Hawking"],
            correct: "Albert Einstein"
        },
        {
            question: "What is the only country that borders both the Atlantic and Indian oceans?",
            answers: ["Brazil", "South Africa", "Australia", "Indonesia"],
            correct: "South Africa"
        },
        {
            question: "In which year did the Berlin Wall fall?",
            answers: ["1987", "1988", "1989", "1990"],
            correct: "1989"
        },
        {
            question: "What is the most abundant element in the universe?",
            answers: ["Oxygen", "Carbon", "Helium", "Hydrogen"],
            correct: "Hydrogen"
        },
        {
            question: "Who wrote '1984'?",
            answers: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Arthur C. Clarke"],
            correct: "George Orwell"
        },
        {
            question: "What is the derivative of x² with respect to x?",
            answers: ["x", "2x", "x²", "2x²"],
            correct: "2x"
        },
        {
            question: "Which ancient wonder of the world still exists today?",
            answers: ["Hanging Gardens", "Colossus of Rhodes", "Great Pyramid of Giza", "Lighthouse of Alexandria"],
            correct: "Great Pyramid of Giza"
        },
        {
            question: "What is the smallest prime number?",
            answers: ["0", "1", "2", "3"],
            correct: "2"
        },
        {
            question: "Who composed 'The Four Seasons'?",
            answers: ["Bach", "Mozart", "Vivaldi", "Beethoven"],
            correct: "Vivaldi"
        },
        {
            question: "What is the capital of Mongolia?",
            answers: ["Astana", "Ulaanbaatar", "Bishkek", "Dushanbe"],
            correct: "Ulaanbaatar"
        },
        {
            question: "What does DNA stand for?",
            answers: ["Deoxyribonucleic Acid", "Dinitrogen Acid", "Deoxy Nucleic Acid", "Dynamic Nuclear Acid"],
            correct: "Deoxyribonucleic Acid"
        },
        {
            question: "Which programming language was created by Guido van Rossum?",
            answers: ["Java", "C++", "Python", "Ruby"],
            correct: "Python"
        },
        {
            question: "What is the largest desert in the world?",
            answers: ["Sahara", "Arabian", "Gobi", "Antarctic"],
            correct: "Antarctic"
        },
        {
            question: "Who painted 'The Starry Night'?",
            answers: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
            correct: "Vincent van Gogh"
        },
        {
            question: "What is the name of the largest moon of Saturn?",
            answers: ["Europa", "Ganymede", "Titan", "Callisto"],
            correct: "Titan"
        },
        {
            question: "In which year was the first iPhone released?",
            answers: ["2005", "2006", "2007", "2008"],
            correct: "2007"
        },
        {
            question: "What is the rarest blood type?",
            answers: ["O-", "AB-", "B-", "A-"],
            correct: "AB-"
        },
        {
            question: "Who discovered the electron?",
            answers: ["Ernest Rutherford", "J.J. Thomson", "Niels Bohr", "James Chadwick"],
            correct: "J.J. Thomson"
        },
        {
            question: "What is the longest bone in the human body?",
            answers: ["Tibia", "Humerus", "Femur", "Radius"],
            correct: "Femur"
        },
        {
            question: "What is the currency of Switzerland?",
            answers: ["Euro", "Swiss Franc", "Krona", "Krone"],
            correct: "Swiss Franc"
        },
        {
            question: "Who is credited with inventing the World Wide Web?",
            answers: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Larry Page"],
            correct: "Tim Berners-Lee"
        },
        {
            question: "What is the chemical formula for table salt?",
            answers: ["NaCl", "KCl", "CaCl2", "MgCl2"],
            correct: "NaCl"
        },
        {
            question: "Which philosopher wrote 'The Republic'?",
            answers: ["Aristotle", "Socrates", "Plato", "Epicurus"],
            correct: "Plato"
        },
        {
            question: "What is the speed of sound in air at sea level?",
            answers: ["243 m/s", "343 m/s", "443 m/s", "543 m/s"],
            correct: "343 m/s"
        },
        {
            question: "What is the half-life of Carbon-14?",
            answers: ["4,730 years", "5,730 years", "6,730 years", "7,730 years"],
            correct: "5,730 years"
        },
        {
            question: "Who was the first woman to win a Nobel Prize?",
            answers: ["Rosalind Franklin", "Marie Curie", "Dorothy Hodgkin", "Ada Lovelace"],
            correct: "Marie Curie"
        },
        {
            question: "What is the official language of Brazil?",
            answers: ["Spanish", "Portuguese", "French", "English"],
            correct: "Portuguese"
        },
        {
            question: "What is the Planck constant approximately equal to?",
            answers: ["6.626 × 10⁻³⁴ J·s", "6.626 × 10⁻²⁴ J·s", "6.626 × 10⁻¹⁴ J·s", "6.626 × 10⁻⁴ J·s"],
            correct: "6.626 × 10⁻³⁴ J·s"
        },
        {
            question: "Which empire was ruled by Suleiman the Magnificent?",
            answers: ["Roman Empire", "Byzantine Empire", "Ottoman Empire", "Mongol Empire"],
            correct: "Ottoman Empire"
        }
    ]
};
