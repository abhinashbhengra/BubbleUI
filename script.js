const install = document.querySelector(".install");
const color = document.querySelector(".color");
const sidebar = document.querySelector(".sidebar");
const btn = document.querySelector(".in-btn");

const changeContent = document.querySelector(".main-content");

let current_location = document.location;

console.log(current_location.pathname);

install.addEventListener("click", () => {
  fetch("check.html").then((res) => {
    console.log(res);
    let arr = res.url.split("/");
    let new_location = arr[3];
    document.location = new_location;
  });
  // .then((data) => {
  //   changeContent.innerHTML = data;
  // });
});
