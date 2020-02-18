import "./styles.css";
import dataApiFetch from "./fetchCountries.js";
import template from "./template.hbs";
import CountryList from "./countryList.hbs";
import debounce from "lodash.debounce";
import PNotify from "pnotify/dist/es/PNotify.js";
import   "../node_modules/pnotify/dist/PNotifyBrightTheme.css";
const searhForm = document.querySelector("#formData");
const countryList = document.querySelector(".country-list");
let markup;
searhForm.addEventListener("input", debounce(searchDataHandler, 1000));

function searchDataHandler(event) {
  const inputEvent = event.target.value;
  if (inputEvent === "S") {
    return;
  } else {
    dataApiFetch(inputEvent, buildResult);
  }
}

function clearList() {
  countryList.innerHTML = "";
}

function buildResult(array) {
  clearList();
  if (array.length > 10) {
    PNotify.notice({ title: "Warning!", text: "Too many matches found." });
  } else if (array.length > 1 && array.length <= 10) {
    markup = array.map(result => CountryList(result)).join("");
    countryList.insertAdjacentHTML("beforeend", markup);
  } else if (array.length === 1) {
    markup = array.map(result => template(result)).join("");
    countryList.insertAdjacentHTML("beforeend", markup);
  }
  // else{
  //   PNotify.notice({ title: "Warning!", text: "Incorrect query." });

  // }
}
