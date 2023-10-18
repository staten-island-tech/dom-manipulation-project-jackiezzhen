/*const form = document.querySelector("#form");
console.log(form); */
const DOMSelectors = {
  form: document.querySelector("#form"),
  firstName: document.querySelector(".firstName"),

  h2: document.querySelectorAll("h2"), //grab the text input, grab ALL the h2s
};
//console.log(DOMSelectors.h2);
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(DOMSelectors.firstName.value);
  DOMSelectors.h2.forEach(
    (h2) => (h2.textContent = DOMSelectors.firstName.value)
  );
});
