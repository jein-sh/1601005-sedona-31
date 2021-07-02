const buttonSearch = document.querySelector(".button-search");
const searchPopup = document.querySelector(".search-form-popup");
const arrivalDate = searchPopup.querySelector("[name=arrival-date]")

buttonSearch.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchPopup.classList.toggle("popup-show");
    searchPopup.classList.toggle("popup-close")
    arrivalDate.focus()

  });

