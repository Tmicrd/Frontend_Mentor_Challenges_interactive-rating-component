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
const rating = document.querySelector(".rating");

