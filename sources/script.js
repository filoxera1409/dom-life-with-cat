const content = [
  {
    id: "0",
    img: "./images/image1.1.jpg",
    imgHover: "./images/image1.2.jpg",
    text: `відчувати себе героєм фільму "Кладовище домашніх тварин" (ps а за вікном, на хвилиночку, другий поверх)`,
  },
  {
    id: "1",
    img: "./images/image2.1.jpg",
    imgHover: "./images/image2.2.jpg",
    text: "отримувати вельми специфічний сніданок, зате впольований лапками і з любов'ю",
  },
  {
    id: "2",
    img: "./images/image3.1.jpg",
    imgHover: "./images/image3.2.jpg",
    text: "вдавати, що кіт на даху твого дому не твій кіт, і що він зовсім не кричить на всю вулицю",
  },
  {
    id: "3",
    img: "./images/image4.1.jpg",
    imgHover: "./images/image4.2.jpg",
    text: "прокидаєшся, а тут...",
  },
  {
    id: "4",
    img: "./images/image5.1.jpg",
    imgHover: "./images/image5.2.jpg",
    text: "забути, що таке приватна власність",
  },
  {
    id: "5",
    img: "./images/image6.1.jpg",
    imgHover: "./images/image6.2.jpg",
    text: "ніколи не забувати, що миле котятко - лютий хижак",
  },
  {
    id: "6",
    img: "./images/image7.1.jpg",
    imgHover: "./images/image7.2.jpg",
    text: "рятувати живу мишку по даху",
  },
  {
    id: "7",
    img: "./images/image8.1.jpg",
    imgHover: "./images/image8.2.jpg",
    text: "жизнь-боль-тлєн",
  },
  {
    id: "8",
    img: '"./images/image9.1.jpg"',
    imgHover: '"./images/image9.2.jpg"',
    text: "дуже багато милоти... і крінжі",
  },
];

let imageReplace = document.querySelector(".image");
let textReplace = document.querySelector("p");
let navClass = document.getElementsByClassName("header__item");

for (let i = 0; i < navClass.length; i++) {
  navClass[i].addEventListener("click", () => {
    textReplace.innerText = content[i].text;
    imageReplace.style.backgroundImage = `url(${content[i].img})`;
    imageReplace.addEventListener("mouseover", () => {
      imageReplace.style.backgroundImage = `url(${content[i].imgHover})`;
    });
    imageReplace.addEventListener("mouseout", () => {
      imageReplace.style.backgroundImage = `url(${content[i].img})`;
    });
  });
}
