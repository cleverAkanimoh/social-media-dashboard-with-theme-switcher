import { IconDown, IconUp } from "./icons/index.js";

export const createOverviewTodayCard = (value) => {
  return `
            <div class="social-and-title-wrapper today-wrapper">
              <h4 class="today-card-heading">${value.title}</h4>

              <span>
              ${value.icon}
              </span>
            </div>

            <div class="today-wrapper rating-statistics-wrapper">
              <h3 class="subtitle"> ${value.subtitle}</h3>
              <div class="rating-wrapper">
              ${value.up ? IconUp() : IconDown()}
              <small  style="color: ${value.up ? "hsl(163, 72%, 41%)" : " hsl(356, 69%, 56%)"
    };">${value.rating}%</small>
              </div>
            </div>
          `;
};
