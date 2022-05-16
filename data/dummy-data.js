import Category from "../models/category";
import CategoryQuiz from "../models/categoryQuiz";

export const CATEGORIES = [
  new Category(
    "c1",
    "Portrait",
    "#f5428d",
    require("../assets/grey-png/category-01-grayscale.png"),
    require("../assets/color-png/category-01-color.png"),
    [
      {
        author: "Pavel Fedotov",
        name: "Major's matchmaking",
        year: "1852",
        imageNum: "0",
      },
      {
        author: "Edgar Degas",
        name: "Blue Dancers",
        year: "1897",
        imageNum: "1",
      },
      {
        author: "Veronese",
        name: "Feast in the house of Levi",
        year: "1563",
        imageNum: "2",
      },
      {
        author: "Ilya Repin",
        name: "Ivan the Terrible and his son Ivan",
        year: "1885",
        imageNum: "3",
      },
      {
        author: "Konstantin Makovsky",
        name: "Portrait of Countess Sophia",
        year: "1890",
        imageNum: "4",
      },
      {
        author: "Vasily Perov",
        name: "Arrival of a governess in a merchant's house",
        year: "1866",
        imageNum: "5",
      },
      {
        author: "Michelangelo",
        name: "The Creation of Adam",
        year: "1511",
        imageNum: "6",
      },
      {
        author: "Pierre Auguste Renoir",
        name: "A walk in the Bois de Boulogne",
        year: "1873",
        imageNum: "7",
      },
      {
        author: "Jan Vermeer",
        name: "Mistress and maid",
        year: "1667",
        imageNum: "8",
      },
      {
        author: "Vasily Polenov",
        name: "Moscow courtyard",
        year: "1877",
        imageNum: "9",
      },
    ]
  ),
  new Category(
    "c2",
    "Landscape",
    "#f54242",
    require("../assets/grey-png/category-02-color.png"),
    require("../assets/color-png/category-02-color.png"),
    [
      {
        author: "Fedor Vasiliev",
        name: "Wet meadow",
        year: "1872",
        imageNum: "10",
      },
      {
        author: "Ilya Repin",
        name: "Seeing off a recruit",
        year: "1879",
        imageNum: "11",
      },
      {
        author: "Veronese",
        name: "Mars and Venus",
        year: "1560",
        imageNum: "12",
      },
      {
        author: "Viktor Vasnetsov",
        name: "Alyonushka",
        year: "1881",
        imageNum: "13",
      },
      {
        author: "Claude Lorrain",
        name: "Departure of Saint Ursula",
        year: "1614",
        imageNum: "14",
      },
      {
        author: "Ilya Repin",
        name: "Vechornici",
        year: "1881",
        imageNum: "15",
      },
      {
        author: "Jean Fragonard",
        name: "Swing",
        year: "1767",
        imageNum: "16",
      },
      {
        author: "Arkhip Kuindzhi",
        name: "Birch grove",
        year: "1879",
        imageNum: "17",
      },
      {
        author: "Pablo Picasso",
        name: "Guernica",
        year: "1937",
        imageNum: "18",
      },
      {
        author: "Paul Gauguin",
        name: "Where did we come from? Who are we? Where are we going?",
        year: "1898",
        imageNum: "19",
      },
    ]
  ),
  new Category(
    "c3",
    "Still life",
    "#f5a442",
    require("../assets/grey-png/category-03-grayscale.png"),
    require("../assets/color-png/category-03-color.png"),
    [
      {
        author: "Bartolomeo Murillo",
        name: "Madonna with rosary",
        year: "1655",
        imageNum: "20",
      },
      {
        author: "Pieter Brueghel",
        name: "Flemish proverbs",
        year: "1559",
        imageNum: "21",
      },
      {
        author: "Jan van Eyck",
        name: "Portrait of the Arnolfini couple",
        year: "1434",
        imageNum: "22",
      },
      {
        author: "Peter Brueghel",
        name: "Beating babies",
        year: "1567",
        imageNum: "23",
      },
      {
        author: "Konstantin Makovsky",
        name: "Children running from a thunderstorm",
        year: "1872",
        imageNum: "24",
      },
      {
        author: "Rembrandt",
        name: "Danae",
        year: "1647",
        imageNum: "25",
      },
      {
        author: "Raphael",
        name: "Madonna in the chair",
        year: "1514",
        imageNum: "26",
      },
      {
        author: "Vasily Surikov",
        name: "Taking the snow town",
        year: "1891",
        imageNum: "27",
      },
      {
        author: "Ivan Shishkin",
        name: "Stream in the birch forest",
        year: "1883",
        imageNum: "28",
      },
      {
        author: "Vasily Surikov",
        name: "The Conquest of Siberia by Ermak Timofeevich",
        year: "1895",
        imageNum: "29",
      },
    ]
  ),
  new Category(
    "c4",
    "Impressionism",
    "#f5d142",
    require("../assets/grey-png/category-04-grayscale.png"),
    require("../assets/color-png/category-04-color.png"),
    [
      {
        author: "Vladimir Borovikovsky",
        name: "Portrait of Lopukhina",
        year: "1797",
        imageNum: "30",
      },
      {
        author: "Rene Magritte",
        name: "Son of man",
        year: "1964",
        imageNum: "31",
      },
      {
        author: "Velasquez",
        name: "Venus with a mirror",
        year: "1651",
        imageNum: "32",
      },
      {
        author: "Ivan Bogdanov",
        name: "For calculation",
        year: "1890",
        imageNum: "33",
      },
      {
        author: "Rembrandt",
        name: "Christ and the sinner",
        year: "1644",
        imageNum: "34",
      },
      {
        author: "John William Waterhouse",
        name: "The Sorceress of Shallot",
        year: "1888",
        imageNum: "35",
      },
      {
        author: "Pierre Auguste Renoir",
        name: "Big bathers",
        year: "1887",
        imageNum: "36",
      },
      {
        author: "Bartolomeo Murillo",
        name: "Boy with dog",
        year: "1650",
        imageNum: "37",
      },
      {
        author: "Vasily Perov",
        name: "Troika",
        year: "1866",
        imageNum: "38",
      },
      {
        author: "Nikolai Bogdanov-Belsky",
        name: "Oral invoice",
        year: "1895",
        imageNum: "39",
      },
    ]
  ),
  new Category(
    "c5",
    "Expressionism",
    "#368dff",
    require("../assets/grey-png/category-05-grayscale.png"),
    require("../assets/color-png/category-05-color.png"),
    [
      {
        author: "Viktor Vasnetsov",
        name: "Three Princesses of the Underworld",
        year: "1884",
        imageNum: "40",
      },
      {
        author: "Henri Matisse",
        name: "Dance",
        year: "1910",
        imageNum: "41",
      },
      {
        author: "Edvard Munch",
        name: "Madonna",
        year: "1894",
        imageNum: "42",
      },
      {
        author: "Marc Chagall",
        name: "Walk",
        year: "1918",
        imageNum: "43",
      },
      {
        author: "Vasily Perov",
        name: "Rural procession at Easter",
        year: "1861",
        imageNum: "44",
      },
      {
        author: "Hieronymus Bosch",
        name: "The Last Judgment",
        year: "1504",
        imageNum: "45",
      },
      {
        author: "Karl Lemoch",
        name: "Varka",
        year: "1893",
        imageNum: "46",
      },
      {
        author: "Jean Fragonard",
        name: "Sneak kiss",
        year: "1788",
        imageNum: "47",
      },
      {
        author: "Francois Boucher",
        name: "Venus comforting Cupid",
        year: "1751",
        imageNum: "48",
      },
      {
        author: "Ivan Shishkin",
        name: "Ship grove",
        year: "1898",
        imageNum: "49",
      },
    ]
  ),
  new Category(
    "c6",
    "Avant-garde",
    "#41d95d",
    require("../assets/grey-png/category-06-grayscale.png"),
    require("../assets/color-png/category-06-color.png"),
    [
      {
        author: "Gustav Klimt",
        name: "Golden Adele",
        year: "1907",
        imageNum: "50",
      },
      {
        author: "Viktor Vasnetsov",
        name: "Heroes",
        year: "1898",
        imageNum: "51",
      },
      {
        author: "Wilhelm von Kaulbach",
        name: "Destruction of Jerusalem",
        year: "1846",
        imageNum: "52",
      },
      {
        author: "Veronese",
        name: "Marriage in Cana of Galilee",
        year: "1562",
        imageNum: "53",
      },
      {
        author: "Andrey Rublev",
        name: "Trinity",
        year: "1411",
        imageNum: "54",
      },
      {
        author: "Vasily Surikov",
        name: "Morning of the Streltsy execution",
        year: "1881",
        imageNum: "55",
      },
      {
        author: "Titian",
        name: "Bacchanal",
        year: "1526",
        imageNum: "56",
      },
      {
        author: "Velasquez",
        name: "Villa Medici in Rome. Noon",
        year: "1630",
        imageNum: "57",
      },
      {
        author: "Edouard Manet",
        name: "Lunch on the grass",
        year: "1863",
        imageNum: "58",
      },
      {
        author: "Salvador Dali",
        name: "Persistence of memory",
        year: "1931",
        imageNum: "59",
      },
    ]
  ),
  new Category(
    "c7",
    "Renaissance",
    "#9eecff",
    require("../assets/grey-png/category-07-grayscale.png"),
    require("../assets/color-png/category-07-color.png"),
    [
      {
        author: "Pierre Auguste Renoir",
        name: "Two girls",
        year: "1892",
        imageNum: "60",
      },
      {
        author: "Alexander Makovsky",
        name: "Tired",
        year: "1897",
        imageNum: "61",
      },
      {
        author: "Velasquez",
        name: "Meniny",
        year: "1656",
        imageNum: "62",
      },
      {
        author: "Antonis van Dyck",
        name: "Samson and Delilah",
        year: "1628",
        imageNum: "63",
      },
      {
        author: "Pablo Picasso",
        name: "Girl on the ball",
        year: "1905",
        imageNum: "64",
      },
      {
        author: "Giovanni Bellini",
        name: "Feast of the Gods",
        year: "1514",
        imageNum: "65",
      },
      {
        author: "Leonardo da Vinci",
        name: "Lady with ermine",
        year: "1490",
        imageNum: "66",
      },
      {
        author: "Velasquez",
        name: "Bacchus",
        year: "1628",
        imageNum: "67",
      },
      {
        author: "Bartolomeo Murillo",
        name: "Immaculate Conception",
        year: "1678",
        imageNum: "68",
      },
      {
        author: "Theodore Gericault",
        name: "Raft Jellyfish",
        year: "1819",
        imageNum: "69",
      },
    ]
  ),
  new Category(
    "c8",
    "Surrealism",
    "#b9ffb0",
    require("../assets/grey-png/category-08-grayscale.png"),
    require("../assets/color-png/category-08-color.png"),
    [
      {
        author: "Ivan Shishkin",
        name: "Morning in the pine forest",
        year: "1889",
        imageNum: "70",
      },
      {
        author: "Jean Etienne Liotard",
        name: "Chocolate maker",
        year: "1745",
        imageNum: "71",
      },
      {
        author: "Rembrandt",
        name: "Self-portrait with Saskia",
        year: "1635",
        imageNum: "72",
      },
      {
        author: "Ilya Repin",
        name: "Procession",
        year: "1883",
        imageNum: "73",
      },
      {
        author: "Alexey Venetsianov",
        name: "Sleeping Shepherd Boy",
        year: "1826",
        imageNum: "74",
      },
      {
        author: "Ivan Bogdanov",
        name: "Novice",
        year: "1893",
        imageNum: "75",
      },
      {
        author: "Henri de Toulouse-Lautrec",
        name: "Moulin de la Galette Corner",
        year: "1892",
        imageNum: "76",
      },
      {
        author: "Titian",
        name: "Penitent Marina Magdalena",
        year: "1565",
        imageNum: "77",
      },
      {
        author: "Velasquez",
        name: "Infanta Margarita",
        year: "1654",
        imageNum: "78",
      },
      {
        author: "Titian",
        name: "Caesar's Denarius",
        year: "1516",
        imageNum: "79",
      },
    ]
  ),
  new Category(
    "c9",
    "Kitsch",
    "#ffc7ff",
    require("../assets/grey-png/category-09-grayscale.png"),
    require("../assets/color-png/category-09-color.png"),
    [
      {
        author: "Karl Bryullov",
        name: "Horsewoman",
        year: "1832",
        imageNum: "80",
      },
      {
        author: "Vasily Vereshchagin",
        name: "Apotheosis of war",
        year: "1817",
        imageNum: "81",
      },
      {
        author: "Leonardo da Vinci",
        name: "Annunciation",
        year: "1475",
        imageNum: "82",
      },
      {
        author: "Alexey Savrasov",
        name: "Rooks have arrived",
        year: "1871",
        imageNum: "83",
      },
      {
        author: "Titian",
        name: "Earthly love and Heavenly Love",
        year: "1516",
        imageNum: "84",
      },
      {
        author: "Jean Baptiste Grez",
        name: "Village engagement",
        year: "1761",
        imageNum: "85",
      },
      {
        author: "Pablo Picasso",
        name: "Avignon girls",
        year: "1907",
        imageNum: "86",
      },
      {
        author: "Ilya Repin",
        name: "Boatmen on the Volga",
        year: "1873",
        imageNum: "87",
      },
      {
        author: "Mikhail Nesterov",
        name: "Vision to the boy Bartholomew",
        year: "1890",
        imageNum: "88",
      },
      {
        author: "Raphael",
        name: "Madonna of the Belvedere",
        year: "1506",
        imageNum: "89",
      },
    ]
  ),
  new Category(
    "c10",
    "Minimalism",
    "#47fced",
    require("../assets/grey-png/category-10-grayscale.png"),
    require("../assets/color-png/category-10-color.png"),
    [
      {
        author: "Vasily tropinin",
        name: "Girl with a pot of roses",
        year: "1850",
        imageNum: "90",
      },
      {
        author: "Caravaggio",
        name: "Lutenist",
        year: "1596",
        imageNum: "91",
      },
      {
        author: "Vasily Perov",
        name: "Hunters at a halt",
        year: "1871",
        imageNum: "92",
      },
      {
        author: "Leonardo da Vinci",
        name: "The Last Supper",
        year: "1498",
        imageNum: "93",
      },
      {
        author: "Jean Baptiste Grez",
        name: "Spoiled child",
        year: "1765",
        imageNum: "94",
      },
      {
        author: "Adolphe William Bouguereau",
        name: "Wave",
        year: "1896",
        imageNum: "95",
      },
      {
        author: "Kuzma Petrov-Vodkin",
        name: "Bathing the red horse",
        year: "1912",
        imageNum: "96",
      },
      {
        author: "Gustav Klimt",
        name: "Kiss",
        year: "1908",
        imageNum: "97",
      },
      {
        author: "Ivan Shishkin",
        name: "Rye",
        year: "1878",
        imageNum: "98",
      },
      {
        author: "Jean-Leon Jerome",
        name: "Gladiator Fight",
        year: "1872",
        imageNum: "99",
      },
    ]
  ),
];

export const QUIZES = [
  new CategoryQuiz(
    0,
    "Artists Quiz",
    "https://github.com/VeronikaBogdan/art-quiz-coursework/blob/main/assets/art-5.png?raw=true"
  ),
  new CategoryQuiz(
    1,
    "Pictures Quiz",
    "https://github.com/VeronikaBogdan/art-quiz-coursework/blob/main/assets/modern-art.png?raw=true"
  ),
  new CategoryQuiz(
    2,
    "Blitz Quiz",
    "https://github.com/VeronikaBogdan/art-quiz-coursework/blob/main/assets/art-9.png?raw=true"
  ),
  new CategoryQuiz(
    3,
    "Museum Quiz",
    "https://github.com/VeronikaBogdan/art-quiz-coursework/blob/main/assets/art-1.png?raw=true"
  ),
];
