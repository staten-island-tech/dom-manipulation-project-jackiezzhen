const DOMSelectors= {
    form: document.querySelector("#form"),
    name: document.querySelector(".name"),
    type: document.querySelector(".type"),
    move: document.querySelector(".move"),
    h2: document.querySelectorAll("h2"),
};
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.name.value);
    DOMSelectors.h2.forEach(
        (e1) => e1.textContent = DOMSelectors.name.value);
});