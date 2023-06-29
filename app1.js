const colors = [
  "green",
  "blue",
  "red",
  "yellow",
  "rgba(133,122,200)",
  "#f15025",
];
const btn = document.getElementById("btn");
const span = document.querySelector(".color");
console.log(btn, span);

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  span.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
