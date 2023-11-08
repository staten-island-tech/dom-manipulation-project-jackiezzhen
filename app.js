const DOMSelectors = {
  form: document.querySelector(".form"),
  image: document.getElementById("image"),
  name: document.getElementById("name"),
  desc: document.getElementById("desc"),
  card: document.querySelector(".card"),
};

  function createobject() {
    const nameValue = DOMSelectors.name.value;
    const descValue = DOMSelectors.desc.value;
    const imageurl = DOMSelectors.image.value;
  
    return {
      name: nameValue,
      desc: descValue,
      imageurl: imageurl,
    };
  }
  
  function injectobject(object) {
    const cardHTML = `<div class=newcard>
    <p>${object.name}</p>
      <img src="${object.imageurl}" alt="Image/Error">
      <p>${object.desc}</p>
  
      <button class="removebutton">Remove</button>
      </div>`;
      DOMSelectors.card.insertAdjacentHTML("beforeend", cardHTML);
      removebtn();
  } 
  
  function ClearInputFields() { 
    DOMSelectors.image.value = "";
    DOMSelectors.name.value = "";
    DOMSelectors.desc.value = "";
  
  }

  function removebtn() {
    let removeButtons = document.querySelectorAll(".removebutton");
    removeButtons.forEach((btn) => {
      btn.addEventListener("click", remove);
    });
  }
  
  function remove(event) {
    event.target.parentElement.remove();
  }
  
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    const newobject = createobject();
    injectobject(newobject);
    ClearInputFields();
  });