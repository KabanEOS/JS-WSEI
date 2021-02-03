
function generateDiv() {
  var gen = document.createDocumentFragment();
  var count = Math.floor(Math.random() * 100); 
  var i = 0;
  for (var i = 1; i < count; i++) {
    let divElement = document.createElement("div");

    // create text node
    let divElementText = document.createTextNode(
      `to jest div numer ${i}`
    );

    // append text node to div
    divElement.appendChild(divElementText);

    // append div element to document
    document.body.appendChild(divElement);
  }
}
generateDiv();
