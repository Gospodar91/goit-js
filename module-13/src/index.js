import "./styles.css";
import pixiApi from "./apiService";
import listPhoto from "./template.hbs";
import debounce from "lodash.debounce";
import "material-design-icons/iconfont/material-icons.css";
import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";
let currentPage = 0;
let inpValue;
const classDiv = document.querySelector("#div-section");
const classBtn = document.querySelector("#btn-load-more");
const searchInput = document.querySelector("#search");
classBtn.addEventListener("click", onClickBtn);
classDiv.addEventListener("click", mainInstance);

function onClickBtn(event) {
  classBtn.setAttribute("disabled", true);
  if (currentPage >= 1 && inpValue === searchInput.value) {
    currentPage = currentPage++;
  } else if (currentPage >= 1 && inpValue !== searchInput.value) {
    currentPage = 0;
    classDiv.innerHTML = "";
  }
  pixiApi(searchInput.value, ++currentPage, parseData);
  inpValue = searchInput.value;
}
function parseData(data) {
  const buildPage = listPhoto(data);
  classDiv.insertAdjacentHTML("beforeend", buildPage);
  classBtn.removeAttribute("disabled");

  const optionScroll = {
    top: document.body.scrollHeight,
    behavior: "smooth"
  };
  window.scrollTo(optionScroll);
}
function mainInstance(e) {
  classDiv.removeEventListener("click", mainInstance);
  if (e.target.localName === "img") {
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.option}" >
    `);
    instance.show();
  }
  classDiv.addEventListener("click", mainInstance);
}
