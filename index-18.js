/* START OF HW-18 */
/* TASKS 1-4: READY */

/* TASK 1 */
const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");
console.log(`У списку ${categoriesItems.length} категорії.`);

categoriesItems.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("ul li").length;

  console.log(`Категорія: ${title}\nКількість елементів: ${elementsCount}`);
});

/* TASK 2 */
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  ingredientsList.append(li);
});

/* TASK 3 */
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector("#gallery");
const galleryElements = images
  .map(
    (img) => `
    <li>
      <img src="${img.url}" alt="${img.alt}"/>
    </li>`,
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryElements);

/* TASK 4 */
let counterValue = 0;
const valueSpan = document.querySelector("#value");
const incrementButton = document.querySelector(
  'button[data-action="increment"]',
);
const decrementButton = document.querySelector(
  'button[data-action="decremenet"]',
);

const updateCounter = () => (valueSpan.textContent = counterValue);
function increment() {
  counterValue += 1;
  updateCounter();
}

function decrement() {
  counterValue -= 1;
  updateCounter();
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
