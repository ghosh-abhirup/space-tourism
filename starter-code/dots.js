const dotList = document.querySelector('[role="dot-list"]');
const dots = dotList.querySelectorAll('[role = "dots"]');

const contents = document.querySelectorAll('[role="content"]');

const crewImgs = document.querySelectorAll('[role="crew-img"]');

const contentSwitch = (i) => {
  contents.forEach((content) => {
    content.setAttribute("hidden", "hidden");
  });

  dots.forEach((dot) => {
    dot.setAttribute("aria-selected", "false");
  });

  crewImgs.forEach((img) => {
    img.style.display = "none";
  });

  contents[i].removeAttribute("hidden");
  dots[i].setAttribute("aria-selected", "true");
  crewImgs[i].style.display = "block";
};

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    contentSwitch(i);
  });
});
