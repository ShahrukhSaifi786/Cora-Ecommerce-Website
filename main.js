const bar = document.querySelector("#bar");
const navbar = document.querySelector("#navbar");
const close = document.querySelector("#close");
if (bar) {
  bar.addEventListener("click", () => {
    navbar.classList.add("active");
  });
}
window.addEventListener("scroll", () => {
  navbar.classList.remove("active");
});
if (close) {
  close.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}

/* Image Click to direct sproduct.html refer */

const pro = document.querySelectorAll(".pro");
pro.forEach((ele) => {
  const img = ele.querySelector("img");
  img.addEventListener("click", () => {
    window.location.href = "sproduct.html";
  });
});

/* Cart click to direct refer to shop.html */

// const cart = document.querySelector("#cart");
pro.forEach((element) => {
  const price = element.querySelector("h4");
  const title = element.querySelector("h5");
  const anchor = element.querySelector("a");
  const img = element.querySelector("img");
  // console.log(img.src + "\n" + title.innerText + "\n" + price.innerText);
  anchor.addEventListener("click", () => {
    func(price, title, img);
    // window.location.href = "cart.html";
  });
});
function func(a, b, c) {
  console.log(a.innerText, b.innerText, c.src);
}

// const cart = document.querySelector('#cart')
