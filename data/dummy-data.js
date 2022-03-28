import Category from "../models/category";
import CategoryQuiz from "../models/categoryQuiz";

export const CATEGORIES = [
  new Category(
    "c1",
    "Portrait",
    "#f5428d",
    "../assets/grey-png/category-01-grayscale.png",
    "../assets/color-png/category-01-color.png"
  ),
  new Category(
    "c2",
    "Landscape",
    "#f54242",
    "../assets/grey-png/category-02-color.png",
    "../assets/color-png/category-02-color.png"
  ),
  new Category(
    "c3",
    "Still life",
    "#f5a442",
    "../assets/grey-png/category-03-grayscale.png",
    "../assets/color-png/category-03-color.png"
  ),
  new Category(
    "c4",
    "Impressionism",
    "#f5d142",
    "../assets/grey-png/category-04-grayscale.png",
    "../assets/color-png/category-04-color.png"
  ),
  new Category(
    "c5",
    "Expressionism",
    "#368dff",
    "../assets/grey-png/category-05-grayscale.png",
    "../assets/color-png/category-05-color.png"
  ),
  new Category(
    "c6",
    "Avant-garde",
    "#41d95d",
    "../assets/grey-png/category-06-grayscale.png",
    "../assets/color-png/category-06-color.png"
  ),
  new Category(
    "c7",
    "Renaissance",
    "#9eecff",
    "../assets/grey-png/category-07-grayscale.png",
    "../assets/color-png/category-07-color.png"
  ),
  new Category(
    "c8",
    "Surrealism",
    "#b9ffb0",
    "../assets/grey-png/category-08-grayscale.png",
    "../assets/color-png/category-08-color.png"
  ),
  new Category(
    "c9",
    "Kitsch",
    "#ffc7ff",
    "../assets/grey-png/category-09-grayscale.png",
    "../assets/color-png/category-09-color.png"
  ),
  new Category(
    "c10",
    "Minimalism",
    "#47fced",
    "../assets/grey-png/category-10-grayscale.png",
    "../assets/color-png/category-10-color.png"
  ),
];

export const QUIZES = [
  new CategoryQuiz(
    0,
    "https://github.com/VeronikaBogdan/art-quiz-coursework/blob/main/assets/art-5.png?raw=true"
  ),
  new CategoryQuiz(
    1,
    "https://github.com/VeronikaBogdan/art-quiz-coursework/blob/main/assets/modern-art.png?raw=true"
  ),
];
