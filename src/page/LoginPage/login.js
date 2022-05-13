let grayout = document.getElementsByClassName("grayout");

let grayOutSelect = function () {
  if (this.value === "") {
    this.classList.add("gray");
  } else {
    this.classList.remove("gray");
  }
};

for (let i = 0; i < grayout.length; i++) {
  grayout[i].addEventListener("change", grayOutSelect);
  if (grayout[i].value === "") {
    grayout[i].classList.add("gray");
  } else {
    grayout[i].classList.remove("gray");
  }
}
