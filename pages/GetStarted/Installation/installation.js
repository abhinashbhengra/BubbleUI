// Code Container 01
const code01 = document.querySelector(".copy-code01");
const button01 = document.querySelector(".clipboard-btn01");
const hint01 = document.querySelector(".clipboard-hide01");
const check01 = document.querySelector(".check-copied01");
button01.addEventListener("click", () => {
  console.log("btn 01");
  navigator.clipboard.writeText(code01.textContent);
  check01.style.display = "block";
  button01.style.display = "none";
  setTimeout(() => {
    check01.style.display = "none";
    button01.style.display = "block";
  }, 5000);
});
// Code Container 02
const code02 = document.querySelector(".copy-code02");
const button02 = document.querySelector(".clipboard-btn02");
const hint02 = document.querySelector(".clipboard-hide02");
const check02 = document.querySelector(".check-copied02");
button02.addEventListener("click", () => {
  console.log("btn 02");
  navigator.clipboard.writeText(code02.textContent);
  check02.style.display = "block";
  button02.style.display = "none";
  setTimeout(() => {
    check02.style.display = "none";
    button02.style.display = "block";
  }, 5000);
});

// Scroll Event
const first = document.querySelector(".right-first");
const second = document.querySelector(".right-second");
const mainHeight = document.querySelector(".main-content");
// first.style.backgroundColor = "#1a3b5e";
// first.style.borderLeft = "1.5px solid #3697ff";
mainHeight.addEventListener("scroll", () => {
  //   const totalHeight = mainHeight.scrollHeight - window.innerHeight;
  const scrolled = mainHeight.scrollTop;
  if (scrolled > 0 && scrolled < 630) {
    first.style.color = "#ffffff";
    first.style.backgroundColor = "#1a3b5e";
    first.style.borderLeft = "1.5px solid #3697ff";
    second.style.backgroundColor = "";
    second.style.borderLeft = "";
  } else if (scrolled > 630) {
    first.style.backgroundColor = "";
    first.style.borderLeft = "";
    second.style.backgroundColor = "#1a3b5e";
    second.style.borderLeft = "1.5px solid #3697ff";
  }
  console.log(mainHeight.scrollTop);
  //   console.log(totalHeight);
});
