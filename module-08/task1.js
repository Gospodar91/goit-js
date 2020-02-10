"use strict";

import galleryImages from "./gallery-items.js";

const galleryContainer = document.querySelector(".js-gallery");
const gelleryLayout = generateGalleryLayout(galleryImages);
const lightboxImg = document.querySelector(".lightbox__image");
const lightbox = document.querySelector(".js-lightbox");
function generateGalleryLayout(array) {
  return array
    .map(
      image => `<li class="gallery__item">
    <a
    class="gallery__link"
    href="#">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
    </li>`
    )
    .join("");
}
galleryContainer.insertAdjacentHTML("afterbegin", gelleryLayout);
galleryContainer.addEventListener("click", openFullSize);
function openFullSize(e) {
  if (e.target.classList.contains("gallery__image")) {
    const fullImg = e.target;
    lightbox.classList.add("is-open");
    lightboxImg.src = fullImg.dataset.source;
    lightboxImg.alt = fullImg.alt;
    lightbox.addEventListener("click", onClose);
    window.addEventListener("keydown", onEscape);
  }
}
function onClose(e) {
  if (!e.target.classList.contains("lightbox__image")) {
    lightbox.classList.remove("is-open");
    lightbox.removeEventListener("click", onClose);
    window.removeEventListener("keydown", onEscape);
  }
}
function onEscape(e) {
  if (e.code === "Escape") {
    lightbox.classList.remove("is-open");
    lightbox.removeEventListener("click", onClose);
    window.removeEventListener("keydown", onEscape);
  }
}
