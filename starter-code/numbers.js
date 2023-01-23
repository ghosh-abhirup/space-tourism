const numbersList = document.querySelector('[role = "number-list"]');
const numbers = numbersList.querySelectorAll('[role = "numbers"]');

const techs = document.querySelectorAll('[role = "tech"]');

const techImgs = document.querySelectorAll('[role="tech-img"]');

const techSwitch = (i) => {
  techs.forEach((tech) => {
    tech.setAttribute("hidden", "hidden");
  });

  numbers.forEach((number) => {
    number.setAttribute("aria-selected", "false");
  });

  techImgs.forEach((img) => {
    img.style.display = "none";
  });

  techs[i].removeAttribute("hidden");
  numbers[i].setAttribute("aria-selected", "true");
  techImgs[i].style.display = "block";
};

numbers.forEach((number, i) => {
  number.addEventListener("click", () => {
    techSwitch(i);
  });
});
