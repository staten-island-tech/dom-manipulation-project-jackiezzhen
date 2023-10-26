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
  const cardHTML = `<div class="card">
    <img src="${object.imageUrl}" alt="Image/Error">
    <p>Name: ${object.name}</p>
    <p>Type: ${object.type}</p>
    <p>Moves: ${object.move}</p>

    <button class="remove">Remove</button>
    </div>`;

  DOMSelectors.container.insertAdjacentHTML("beforeend", cardHTML);
}

function ClearInputFields() {
  nameValue.value = "";
  typeValue.value = "";
  moveValue.value = "";
  imageurl.value = "";
}
/*
function removeObject(event) {
  }
*/
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
