/*const form = document.querySelector("#form");
console.log(form); */
const DOMSelectors= {
    form: document.querySelector("#form"),
    name: document.querySelector(".name"),
    //grab the text input
    //grab ALL the h2s
    h2: document.querySelectorAll("h2"),
};
//console.log(DOMSelectors.h2);
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.name.value);
    DOMSelectors.h2.forEach(
        (e1) => e1.textContent = DOMSelectors.name.value);
});