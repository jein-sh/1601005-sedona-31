const buttonSearch = document.querySelector(".button-search");
const searchPopup = document.querySelector(".search-form-popup");
const searchForm = searchPopup.querySelector(".search-form-intro");
const arrivalDate = searchPopup.querySelector("[name=arrival-date]");
const departureDate = searchPopup.querySelector("[name=departure-date]");
const numChildren = searchPopup.querySelector("[name=num-children]");
const numAdults = searchPopup.querySelector("[name=num-adults]");

document.addEventListener("DOMContentLoaded", function() {
  searchPopup.classList.remove("popup-show")
  searchPopup.classList.add("popup-close")
});

buttonSearch.addEventListener("click", function (evt) {
  if (searchPopup.classList.contains("popup-error")) {
      evt.preventDefault();
      searchPopup.classList.remove("popup-error");}
  evt.preventDefault();
  searchPopup.classList.toggle("popup-show");
  searchPopup.classList.toggle("popup-close");
  arrivalDate.focus();
});

searchForm.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !numAdults.value || !numChildren) {
    evt.preventDefault();
    searchPopup.classList.remove("popup-error")
    searchPopup.offsetWidth = searchPopup.offsetWidth;
    searchPopup.classList.add("popup-error");
    arrivalDate.focus()
   }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    if (searchPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      searchPopup.classList.remove("popup-show");
      searchPopup.classList.remove("popup-error")
      searchPopup.classList.add("popup-close");
    }
  }
});

