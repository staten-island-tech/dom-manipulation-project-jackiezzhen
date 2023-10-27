const DOMSelectors = {
  form: document.querySelector(".form"),
  image: document.getElementById("image"),
  name: document.getElementById("name"),
  type: document.getElementById("type"),
  move1: document.getElementById("move1"),
  move2: document.getElementById("move2"),
  container: document.querySelector(".card"),
};



DOMSelectors.form.addEventListener("submit", function (event) {
  function createobject() {
    const nameValue = DOMSelectors.name.value;
    const typeValue = DOMSelectors.type.value;
    const move1Value = DOMSelectors.move1.value;
    const move2Value = DOMSelectors.move2.value;
    const imageurl = DOMSelectors.image.value;
  
    return {
      name: nameValue,
      type: typeValue,
      move1: move1Value,
      move2: move2Value,
      imageurl: imageurl,
    };
  }
  
  function injectobject(object) {
    const cardHTML = `<div class="card">
      <img src="${object.imageurl}" alt="Image/Error">
      <p>Name:${object.name}</p>
      <p>Type:${object.type}</p>
      <p>Move1${object.move1}</p>
      <p>Move2${object.move2}</p>
  
      <button class="removebutton">Remove</button>
      </div>`;
      DOMSelectors.container.insertAdjacentHTML("beforeend", cardHTML);
  }
  
  function ClearInputFields() { 
    DOMSelectors.image.value = "";
    DOMSelectors.name.value = "";
    DOMSelectors.type.value = "";
    DOMSelectors.move1.value = "";
    DOMSelectors.move2.value = "";
  
  }
  
  function removeCard(event) {
    if (event.target.classList.contains("removebutton")) {
      const card = event.target.closest(".card");
      card.remove();
    }
  }
  
  DOMSelectors.container.addEventListener("click", removeCard);
  event.preventDefault();
  const newobject = createobject();
  injectobject(newobject);
  ClearInputFields();
  
});


/*
    console.log(DOMSelectors.name.value);
    DOMSelectors.h2.forEach(
        (e1) => e1.textContent = DOMSelectors.name.value);
});
*/
