const overviewContainerElement =
  document.getElementsByClassName("overview-container")[0];

const overviewTodayElement = document.getElementsByClassName(
  "overview-today-wrapper"
)[0];

const themeSwitcher = document.getElementById("theme-switcher");
// get modules
import { createOverviewCard } from "./createOverviewCard.js";
import { createOverviewTodayCard } from "./createOverviewTodayCard.js";

import { overview } from "./overview.js";
import { overviewToday } from "./overviewToday.js";

const themeKey = "theme";
let theme = "light";

const themeInStorage = localStorage.getItem(themeKey) || "light";
console.log("themeInStorage", themeInStorage);

if (themeInStorage === "dark") {
  document.body.classList.add("dark-body");
}

themeSwitcher.onclick = () => {
  if (theme == "light") {
    document.body.classList.add("dark-body");
    theme = "dark";
  } else {
    document.body.classList.remove("dark-body");
    theme = "light";
  }
  console.log("onclick theme:", theme);

  localStorage.setItem("theme", theme);
};

const appendNewElement = (value, element, className, callback) => {
  const card = callback(value);

  const newEl = document.createElement("div");

  newEl.innerHTML = card;
  newEl.classList.add(className);

  element.appendChild(newEl);
};

// add the social overview cards
overview.forEach((value, _) => {
  appendNewElement(value, overviewContainerElement, "card", createOverviewCard);
});

// add the overview today cards
overviewToday.forEach((value, _) => {
  appendNewElement(
    value,
    overviewTodayElement,
    "today-card",
    createOverviewTodayCard
  );
});
