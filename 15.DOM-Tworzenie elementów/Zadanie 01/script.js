
function createDiv() {
  var gen = document.createDocumentFragment();
    let divElement = document.createElement("div");

    let divElementText = document.createTextNode(
      "To jest nowy element"
    );

    divElement.appendChild(divElementText);

    document.body.appendChild(divElement);
  
}
createDiv();
