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
        author: "Павел Федотов",
        name: "Сватовство майора",
        year: "1852",
        // imageNum: "0",
        imageNum: require(`../assets/img/0.jpg`),
      },
      {
        author: "Эдгар Дега",
        name: "Голубые танцовщицы",
        year: "1897",
        imageNum: "1",
      },
      {
        author: "Веронезе",
        name: "Пир в доме Левия",
        year: "1563",
        imageNum: "2",
      },
      {
        author: "Илья Репин",
        name: "Иван Грозный и сын его Иван",
        year: "1885",
        imageNum: "3",
      },
      {
        author: "Константин Маковский",
        name: "Портрет графини Софьи",
        year: "1890",
        imageNum: "4",
      },
      {
        author: "Василий Перов",
        name: "Приезд гувернантки в купеческий дом",
        year: "1866",
        imageNum: "5",
      },
      {
        author: "Микеланджело",
        name: "Сотворение Адама",
        year: "1511",
        imageNum: "6",
      },
      {
        author: "Пьер Огюст Ренуар",
        name: "Прогулка в Булонском лесу",
        year: "1873",
        imageNum: "7",
      },
      {
        author: "Ян Вермеер",
        name: "Хозяйка и служанка",
        year: "1667",
        imageNum: "8",
      },
      {
        author: "Василий Поленов",
        name: "Московский дворик",
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
        author: "Фёдор Васильев",
        name: "Мокрый луг",
        year: "1872",
        imageNum: "10",
      },
      {
        author: "Илья Репин",
        name: "Проводы новобранца",
        year: "1879",
        imageNum: "11",
      },
      {
        author: "Веронезе",
        name: "Марс и Венера",
        year: "1560",
        imageNum: "12",
      },
      {
        author: "Виктор Васнецов",
        name: "Аленушка",
        year: "1881",
        imageNum: "13",
      },
      {
        author: "Клод Лоррен",
        name: "Отплытие святой Урсулы",
        year: "1614",
        imageNum: "14",
      },
      {
        author: "Илья Репин",
        name: "Вечорници",
        year: "1881",
        imageNum: "15",
      },
      {
        author: "Жан Фрагонар",
        name: "Качели",
        year: "1767",
        imageNum: "16",
      },
      {
        author: "Архип Куинджи",
        name: "Берёзовая роща",
        year: "1879",
        imageNum: "17",
      },
      {
        author: "Пабло Пикассо",
        name: "Герника",
        year: "1937",
        imageNum: "18",
      },
      {
        author: "Поль Гоген",
        name: "Откуда мы пришли ? Кто мы? Куда мы идём?",
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
        author: "Бартоломео Мурильо",
        name: "Мадонна с четками",
        year: "1655",
        imageNum: "20",
      },
      {
        author: "Питер Брейгель",
        name: "Фламандские пословицы",
        year: "1559",
        imageNum: "21",
      },
      {
        author: "Ян ван Эйк",
        name: "Портрет четы Арнольфини",
        year: "1434",
        imageNum: "22",
      },
      {
        author: "Питер Брейгель",
        name: "Избиение младенцев",
        year: "1567",
        imageNum: "23",
      },
      {
        author: "Константин Маковский",
        name: "Дети, бегущие от грозы",
        year: "1872",
        imageNum: "24",
      },
      {
        author: "Рембрандт",
        name: "Даная",
        year: "1647",
        imageNum: "25",
      },
      {
        author: "Рафаэль",
        name: "Мадонна в кресле",
        year: "1514",
        imageNum: "26",
      },
      {
        author: "Василий Суриков",
        name: "Взятие снежного городка",
        year: "1891",
        imageNum: "27",
      },
      {
        author: "Иван Шишкин",
        name: "Ручей в берёзовом лесу",
        year: "1883",
        imageNum: "28",
      },
      {
        author: "Василий Суриков",
        name: "Покорение Сибири Ермаком Тимофеевичем",
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
        author: "Владимир Боровиковский",
        name: "Портрет Лопухиной",
        year: "1797",
        imageNum: "30",
      },
      {
        author: "Рене Магритт",
        name: "Сын человеческий",
        year: "1964",
        imageNum: "31",
      },
      {
        author: "Веласкес",
        name: "Венера с зеркалом",
        year: "1651",
        imageNum: "32",
      },
      {
        author: "Иван Богданов",
        name: "За расчётом",
        year: "1890",
        imageNum: "33",
      },
      {
        author: "Рембрандт",
        name: "Христос и грешница",
        year: "1644",
        imageNum: "34",
      },
      {
        author: "Джон Уильям Уотерхаус",
        name: "Волшебница Шалот",
        year: "1888",
        imageNum: "35",
      },
      {
        author: "Пьер Огюст Ренуар",
        name: "Большие купальщицы",
        year: "1887",
        imageNum: "36",
      },
      {
        author: "Бартоломео Мурильо",
        name: "Мальчик с собакой",
        year: "1650",
        imageNum: "37",
      },
      {
        author: "Василий Перов",
        name: "Тройка",
        year: "1866",
        imageNum: "38",
      },
      {
        author: "Николай Богданов-Бельский",
        name: "Устный счёт",
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
        author: "Виктор Васнецов",
        name: "Три царевны подземного царства",
        year: "1884",
        imageNum: "40",
      },
      {
        author: "Анри Матисс",
        name: "Танец",
        year: "1910",
        imageNum: "41",
      },
      {
        author: "Эдвард Мунк",
        name: "Мадонна",
        year: "1894",
        imageNum: "42",
      },
      {
        author: "Марк Шагал",
        name: "Прогулка",
        year: "1918",
        imageNum: "43",
      },
      {
        author: "Василий Перов",
        name: "Сельский крестный ход на Пасхе",
        year: "1861",
        imageNum: "44",
      },
      {
        author: "Иероним Босх",
        name: "Страшный суд",
        year: "1504",
        imageNum: "45",
      },
      {
        author: "Карл Лемох",
        name: "Варька",
        year: "1893",
        imageNum: "46",
      },
      {
        author: "Жан Фрагонар",
        name: "Поцелуй украдкой",
        year: "1788",
        imageNum: "47",
      },
      {
        author: "Франсуа Буше",
        name: "Венера, утешающая Амура",
        year: "1751",
        imageNum: "48",
      },
      {
        author: "Иван Шишкин",
        name: "Корабельная роща",
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
        author: "Густав Климт",
        name: "Золотая Адель",
        year: "1907",
        imageNum: "50",
      },
      {
        author: "Виктор Васнецов",
        name: "Богатыри",
        year: "1898",
        imageNum: "51",
      },
      {
        author: "Вильгельм фон Каульбах",
        name: "Разрушение Иерусалима",
        year: "1846",
        imageNum: "52",
      },
      {
        author: "Веронезе",
        name: "Брак в Кане Галилейской",
        year: "1562",
        imageNum: "53",
      },
      {
        author: "Андрей Рублев",
        name: "Троица",
        year: "1411",
        imageNum: "54",
      },
      {
        author: "Василий Суриков",
        name: "Утро стрелецкой казни",
        year: "1881",
        imageNum: "55",
      },
      {
        author: "Тициан",
        name: "Вакханалия",
        year: "1526",
        imageNum: "56",
      },
      {
        author: "Веласкес",
        name: "Вилла Медичи в Риме. Полдень",
        year: "1630",
        imageNum: "57",
      },
      {
        author: "Эдуард Мане",
        name: "Ланч на траве",
        year: "1863",
        imageNum: "58",
      },
      {
        author: "Сальвадор Дали",
        name: "Постоянство памяти",
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
        author: "Пьер Огюст Ренуар",
        name: "Две девушки",
        year: "1892",
        imageNum: "60",
      },
      {
        author: "Александр Маковский",
        name: "Надоела",
        year: "1897",
        imageNum: "61",
      },
      {
        author: "Веласкес",
        name: "Менины",
        year: "1656",
        imageNum: "62",
      },
      {
        author: "Антонис ван Дейк",
        name: "Самсон и Далила",
        year: "1628",
        imageNum: "63",
      },
      {
        author: "Пабло Пикассо",
        name: "Девочка на шаре",
        year: "1905",
        imageNum: "64",
      },
      {
        author: "Джованни Беллини",
        name: "Пир богов",
        year: "1514",
        imageNum: "65",
      },
      {
        author: "Леонардо да Винчи",
        name: "Дама с горностаем",
        year: "1490",
        imageNum: "66",
      },
      {
        author: "Веласкес",
        name: "Бахус",
        year: "1628",
        imageNum: "67",
      },
      {
        author: "Бартоломео Мурильо",
        name: "Непорочное зачатие",
        year: "1678",
        imageNum: "68",
      },
      {
        author: "Теодор Жерико",
        name: 'Плот "Медузы"',
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
        author: "Иван Шишкин",
        name: "Утро в сосновом лесу",
        year: "1889",
        imageNum: "70",
      },
      {
        author: "Жан Этьен Лиотар",
        name: "Шоколадница",
        year: "1745",
        imageNum: "71",
      },
      {
        author: "Рембрандт",
        name: "Автопортрет с Саскией",
        year: "1635",
        imageNum: "72",
      },
      {
        author: "Илья Репин",
        name: "Крестный ход",
        year: "1883",
        imageNum: "73",
      },
      {
        author: "Алексей Венецианов",
        name: "Спящий пастушок",
        year: "1826",
        imageNum: "74",
      },
      {
        author: "Иван Богданов",
        name: "Новичок",
        year: "1893",
        imageNum: "75",
      },
      {
        author: "Анри де Тулуз-Лотрек",
        name: "Угол Мулен де ла Галет",
        year: "1892",
        imageNum: "76",
      },
      {
        author: "Тициан",
        name: "Кающаяся Марина Магдалина",
        year: "1565",
        imageNum: "77",
      },
      {
        author: "Веласкес",
        name: "Инфанта Маргарита",
        year: "1654",
        imageNum: "78",
      },
      {
        author: "Тициан",
        name: "Динарий Кесаря",
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
        author: "Карл Брюллов",
        name: "Всадница",
        year: "1832",
        imageNum: "80",
      },
      {
        author: "Василий Верещагин",
        name: "Апофеоз войны",
        year: "1817",
        imageNum: "81",
      },
      {
        author: "Леонардо да Винчи",
        name: "Благовещение",
        year: "1475",
        imageNum: "82",
      },
      {
        author: "Алексей Саврасов",
        name: "Грачи прилетели",
        year: "1871",
        imageNum: "83",
      },
      {
        author: "Тициан",
        name: "Любовь земная и Любовь небесная",
        year: "1516",
        imageNum: "84",
      },
      {
        author: "Жан Батист Грёз",
        name: "Деревенская помолвка",
        year: "1761",
        imageNum: "85",
      },
      {
        author: "Пабло Пикассо",
        name: "Авиньонские девицы",
        year: "1907",
        imageNum: "86",
      },
      {
        author: "Илья Репин",
        name: "Бурлаки на Волге",
        year: "1873",
        imageNum: "87",
      },
      {
        author: "Михаил Нестеров",
        name: "Видение отроку Варфоломею",
        year: "1890",
        imageNum: "88",
      },
      {
        author: "Рафаэль",
        name: "Мадонна Бельведерская",
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
        author: "Василий тропинин",
        name: "Девушка с горшком роз",
        year: "1850",
        imageNum: "90",
      },
      {
        author: "Караваджо",
        name: "Лютнист",
        year: "1596",
        imageNum: "91",
      },
      {
        author: "Василий Перов",
        name: "Охотники на привале",
        year: "1871",
        imageNum: "92",
      },
      {
        author: "Леонардо да Винчи",
        name: "Тайная вечеря",
        year: "1498",
        imageNum: "93",
      },
      {
        author: "Жан Батист Грёз",
        name: "Избалованное дитя",
        year: "1765",
        imageNum: "94",
      },
      {
        author: "Адольф Вильям Бугро",
        name: "Волна",
        year: "1896",
        imageNum: "95",
      },
      {
        author: "Кузьма Петров-Водкин",
        name: "Купание красного коня",
        year: "1912",
        imageNum: "96",
      },
      {
        author: "Густав Климт",
        name: "Поцелуй",
        year: "1908",
        imageNum: "97",
      },
      {
        author: "Иван Шишкин",
        name: "Рожь",
        year: "1878",
        imageNum: "98",
      },
      {
        author: "Жан-Леон Жером",
        name: "Бой гладиаторов",
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
];
