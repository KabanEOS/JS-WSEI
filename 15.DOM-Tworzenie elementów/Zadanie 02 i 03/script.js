function delFruit() {
  let fList = document.getElementById("fList");
  let toDelete = [];
  for (i = 0; i < fList.childElementCount; i++) {
    console.log(i);
    if (i % 2 != 0) {
      toDelete.push(fList.children[i]);
    }
  }
  toDelete.forEach((el) => el.remove());
}
