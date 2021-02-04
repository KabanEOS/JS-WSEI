
function generateDiv() {
  var gen = document.createDocumentFragment();
  var count = Math.floor(Math.random() * 100); 
  var i = 0;
  for (var i = 1; i < count; i++) {
    let divElement = document.createElement("div");

    let divElementText = document.createTextNode(
      `to jest div numer ${i}`
    );

    divElement.appendChild(divElementText);

    document.body.appendChild(divElement);
  }
}
generateDiv();
