//menu
const menu = document.querySelector(".menu-icon");
const sideMenu = document.querySelector(".left-container");
console.log(menu);

// Scroll Event
const first = document.querySelector(".right-first");
const second = document.querySelector(".right-second");
const mainHeight = document.querySelector(".main-content");

menu.addEventListener("click", () => {
  sideMenu.style.position = "absolute";
  sideMenu.style.display = "block";
});

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
