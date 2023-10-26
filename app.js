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
    name: nameValue,
    type: typeValue,
    move: moveValue,
    imageurl: imageurl,
  };
}

function injectObject(object) {
  const CardHTML = `<div class="card">
    <img src="${object.imageurl}" alt="Image/Error">
    <p>Name: ${object.name}</p>
    <p>Type: ${object.type}</p>
    <p>Moves: ${object.move}</p>

    <button class="remove">Remove</button>
    </div>`;

  DOMSelectors.container.insertAdjacentHTML("beforeend", CardHTML);
  return CardHTML;
}

function ClearInputFields() {
  createObject.nameValue = "";
  createObject.typeValue = "";
  createObject.moveValue = "";
  createObject.imageurl = "";
}

function removeObject() {
  
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
