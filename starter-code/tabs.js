const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

const contents = document.querySelectorAll('[role="content"]');

const planetImgs = document.querySelectorAll('[role="planet-img"]');

const contentSwitch = (i) => {
  contents.forEach((content) => {
    content.setAttribute("hidden", "hidden");
  });

  tabs.forEach((tab) => {
    tab.setAttribute("aria-selected", "false");
  });

  planetImgs.forEach((img) => {
    img.style.display = "none";
  });

  contents[i].removeAttribute("hidden");
  tabs[i].setAttribute("aria-selected", "true");
  planetImgs[i].style.display = "block";
};

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    contentSwitch(i);
  });
});
