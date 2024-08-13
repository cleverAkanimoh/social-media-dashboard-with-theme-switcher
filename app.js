import { createOverviewCard } from "./createOverviewCard.js";

import { overview } from "./overview.js";

const overviewContainerElement =
  document.getElementsByClassName("overview-container")[0];
const overviewTodayElement = document.getElementsByClassName(
  "overview-today-container"
)[0];

overview.forEach((value, _) => {
  const card = createOverviewCard(value);

  const newEl = document.createElement("div");

  newEl.innerHTML = card;
  newEl.classList.add("card");

  overviewContainerElement.append(newEl);
});
