const content = [
  {
    img: "./images/image1.1.jpg",
    imgHover: "./images/image1.2.jpg",
    text: `відчувати себе героєм фільму "Кладовище домашніх тварин" (ps а за вікном, на хвилиночку, другий поверх)`,
  },
  {
    img: "./images/image2.1.jpg",
    imgHover: "./images/image2.2.jpg",
    text: "отримувати вельми специфічний сніданок, зате впольований лапками і з любов'ю",
  },
  {
    img: "./images/image3.1.jpg",
    imgHover: "./images/image3.2.jpg",
    text: "вдавати, що кіт на даху твого дому не твій кіт, і що він зовсім не кричить на всю вулицю",
  },
  {
    img: "./images/image4.1.jpg",
    imgHover: "./images/image4.2.jpg",
    text: "прокидаєшся, а тут...",
  },
  {
    img: "./images/image5.1.jpg",
    imgHover: "./images/image5.2.jpg",
    text: "забути, що таке приватна власність",
  },
  {
    img: "./images/image6.1.jpg",
    imgHover: "./images/image6.2.jpg",
    text: "ніколи не забувати, що миле котятко - лютий хижак",
  },
  {
    img: "./images/image7.1.jpg",
    imgHover: "./images/image7.2.jpg",
    text: "рятувати живу мишку по даху",
  },
  {
    img: "./images/image8.1.jpg",
    imgHover: "./images/image8.2.jpg",
    text: "жизнь-боль-тлєн",
  },
  {
    img: "./images/image9.1.jpg",
    imgHover: "./images/image9.2.jpg",
    text: "дуже багато милоти... і крінжі",
  }
];
let imageReplace = document.querySelector(".container__image");
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
