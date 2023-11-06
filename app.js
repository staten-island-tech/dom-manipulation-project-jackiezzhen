const DOMSelectors = {
  form: document.querySelector(".form"),
  image: document.getElementById("image"),
  name: document.getElementById("name"),
  desc: document.getElementById("desc"),
  card: document.querySelector(".card"),
};



DOMSelectors.form.addEventListener("submit", function (event) {
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
      <img src="${object.imageurl}" alt="Image/Error">
      <p>${object.name}</p>
      <p>${object.desc}</p>
  
      <button class="removebutton">Remove</button>
      </div>`;
      DOMSelectors.card.insertAdjacentHTML("beforeend", cardHTML);
  } 
  
  function ClearInputFields() { 
    DOMSelectors.image.value = "";
    DOMSelectors.name.value = "";
    DOMSelectors.desc.value = "";
  
  }
  function remove(event){
    let removebtn = document.querySelectorAll(".removebutton")
    event.target.parentElement.remove()
  }
  injectobject.removebutton.forEach((btn) => 
    btn.addEventListener("click", remove));



  /*
  function removeCard(event) {
    if (event.target.classList.contains("removebutton")) {
      event.target.closest(".newcard").remove();
    }
  }
  DOMSelectors.card.addEventListener("click", removeCard);
*/

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