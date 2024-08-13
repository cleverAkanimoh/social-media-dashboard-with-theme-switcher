import { iconDown, iconUp } from "./icons/iconDirection.js";

export function createOverviewCard(overview) {
  return `
            <div class="social-wrapper">
            
              ${overview.icon}
              <b>${overview.hashtag}</b>
            </div>
  
            <div>
              <h1 class="big-number">${overview.followers}</h1>
              <small class="card-title">${overview.title}</small>
            </div>
            <p class="update-wrapper">
  
              ${overview.up ? iconUp() : iconDown()}
  
              <span class="day" style="color: ${
                overview.up ? "hsl(163, 72%, 41%)" : " hsl(356, 69%, 56%)"
              };" >${overview.rating}</span>
            </p>
         `;
}
