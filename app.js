const DOMSelectors = {    
    form: document.querySelector(".form"),
    image: document.getElementById("image"),
    name: document.getElementById("name"),
    type: document.getElementById("type"),
    move: document.getElementById("move"),
    container: document.querySelector(".card"),
};

function createObject() {
  const nameValue = DOMSelectors.name.value;
  const typeValue = DOMSelectors.type.value;
  const moveValue = DOMSelectors.move.value;
  const imageurl = DOMSelectors.image.value;

  return {
    names: nameValue,
    types: typeValue,
    moves: moveValue,
    imageurls: imageurl,
  };
}

function injectObject(object) {
  const CardHTML = `<div class="card">
    <img src="${object.imageurls}" alt="Image/Error">
    <p>Name: ${object.names}</p>
    <p>Type: ${object.types}</p>
    <p>Moves: ${object.moves}</p>

    <button class="remove">Remove</button>
    </div>`;
  
  DOMSelectors.container.insertAdjacentHTML("beforeend", CardHTML);
}

function ClearInputFields() {
  document.querySelector(".form").reset();
}

function removeObject() {
  CardHTML.addEventListener("submit", function (event) {
    this.CardHTML.remove();
  });
  
}

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  const newobject = createObject();
  injectObject(newobject);
  ClearInputFields();
});

/*
    console.log(DOMSelectors.name.value);
    DOMSelectors.h2.forEach(
        (e1) => e1.textContent = DOMSelectors.name.value);
});
*/
