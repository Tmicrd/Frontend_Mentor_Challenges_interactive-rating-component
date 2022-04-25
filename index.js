// button 按钮的效果
const input = document.querySelector("input");

input.addEventListener("click", (e) => {
  location.href = "../html/thankyou.html";
});

input.addEventListener("mouseenter", (e) => {
  e.target.style.backgroundColor = "#E45826";
  e.target.style.cursor = "pointer";
});

input.addEventListener("mouseout", (e) => {
  e.target.style.backgroundColor = "#f76e11";
});

// 评分效果
const star1 = document.querySelector(".star1");
const star2 = document.querySelector(".star2");
const star3 = document.querySelector(".star3");
const star4 = document.querySelector(".star4");
const star5 = document.querySelector(".star5");

// console.log(star1);

star1.addEventListener("click", (e) => {
  console.log("star1")
  e.target.style.opacity = 1;
});

star2.addEventListener("click", (e) => {
  console.log(star1)
  e.target.style.opacity = 1;
  star1.style.opacity = 1;
});

star3.addEventListener("click", (e) => {
  console.log("star3")
});

star4.addEventListener("click", (e) => {
  console.log("star4")

});

star5.addEventListener("click", (e) => {
  console.log("star5")

});