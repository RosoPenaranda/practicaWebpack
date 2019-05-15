function makeMessage(msg) {
  var elem = document.createElement("p");
  elem.textContent = msg;
  return elem;
}

export default makeMessage;
