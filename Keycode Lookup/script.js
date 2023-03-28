function toggle() {
  const firstC = document.querySelector(".first-container");
  const secondC = document.querySelector(".second-container");

  firstC.classList.add("hide");
  secondC.classList.remove("hide");
}

window.addEventListener("keydown", setKeyCodes);

function setKeyCodes(e) {
  toggle();
  let { keyCode, key, code } = e;

  // Handle unsupported key codes
  if (key === "Unidentified") {
    key = "(Unsupported key)";
    code = "(Unsupported code)";
  } else if (key === " ") {
    key = "(Blank_space)";
    keyCode = 32;
    code = "Space";
  }

  console.log(keyCode, key, code);

  const upperText = document.querySelector(".upper-text");
  const keycode = document.querySelector(".keycode_");
  const eventKeyContent = document.querySelector(".keyEventContent");
  const eventKeyCode = document.querySelector(".keyEventCode");
  const eventKey = document.querySelector(".keyEvent");

  keycode.textContent = keyCode;
  upperText.textContent = `JavaScript Key Code ${e.keyCode}`;
  eventKeyContent.textContent = key;
  eventKeyCode.textContent = code;
  eventKey.textContent = keyCode;
}
