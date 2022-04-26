// button 按钮的效果
const input = document.querySelector("input");

input.addEventListener("click", e => {
  // location.href = "../html/thankyou.html";
  // TODO: psuedo code
  // 1. hide rating-board
  // 2. show thankyou-board
  // 3. change the text of thankyou-board to rating
});

input.addEventListener("mouseenter", e => {
  e.target.style.backgroundColor = "#E45826";
  e.target.style.cursor = "pointer";
});

input.addEventListener("mouseout", e => {
  e.target.style.backgroundColor = "#f76e11";
});

// // 评分效果
// const star1 = document.querySelector(".star1");
// const star2 = document.querySelector(".star2");
// const star3 = document.querySelector(".star3");
// const star4 = document.querySelector(".star4");
// const star5 = document.querySelector(".star5");

// // console.log(star1);

// star1.addEventListener("click", e => {
//   star1.classList.toggle("active");
// });

// star2.addEventListener("click", e => {
//   star1.classList.toggle("active");
//   star2.classList.toggle("active");
// });

// star3.addEventListener("click", e => {
//   star1.classList.toggle("active");
//   star2.classList.toggle("active");
//   star3.classList.toggle("active");
// });

// star4.addEventListener("click", e => {
//   star1.classList.toggle("active");
//   star2.classList.toggle("active");
//   star3.classList.toggle("active");
//   star4.classList.toggle("active");
// });

// star5.addEventListener("click", e => {
//   star1.classList.toggle("active");
//   star2.classList.toggle("active");
//   star3.classList.toggle("active");
//   star4.classList.toggle("active");
//   star5.classList.toggle("active");
// });

let rating = 0;
console.log("rating: ", rating);

const stars = document.querySelectorAll(".rating .star");

for (let index = 0; index < stars.length; index++) {
  const star = stars[index];
  star.addEventListener("click", e => {
    rating = index + 1;
    console.log("rating: ", rating);

    for (let i = 0; i < stars.length; i++) {
      if (i <= index) {
        stars[i].classList.add("active");
      } else {
        stars[i].classList.remove("active");
      }
    }
  });
}
