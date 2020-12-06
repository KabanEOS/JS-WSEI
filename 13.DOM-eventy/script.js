function elements(element) {
    console.log(element);
}

elements(document.querySelectorAll("li"));
elements(document.querySelectorAll("ul"));
elements(document.querySelectorAll("span"));
elements(document.querySelectorAll("div.list span"));
elements(document.querySelectorAll("div#spans span"));