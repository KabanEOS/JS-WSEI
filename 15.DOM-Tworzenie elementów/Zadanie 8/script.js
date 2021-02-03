let type;
let content;
let color;
let backgroundColor;
let howMany;

function onSubmit(event) {
  let form = document.forms["myForm"];

  let formData = new FormData(form);

  type = formData.get("elementType");
  content = formData.get("content");
  color = formData.get("color");
  backgroundColor = formData.get("backgroundColor");
  howMany = formData.get("howMany");


  console.log(type);
  console.log(content);
  console.log(color);
  console.log(backgroundColor);
  console.log(howMany);
  
  createElement();
}

function createElement() {
  let createArea = document.querySelector("#createArea");
  for (i = 1; i <= howMany; i++) {
      const element = document.createElement(`div`);
      element.innerHTML = `<${type} style = "color:${color};background-color: ${backgroundColor};">${content}</${type}>`;
      console.log(i);
    createArea.appendChild(element);
  }
}
