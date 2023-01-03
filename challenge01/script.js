const displayText = (text) => {
  const p = document.querySelector(".text");
  p.innerHTML = text;
};

const encrypt = (e) => {
  e.preventDefault();
  let text = document.getElementById("text").value;
  var newStr = "";
  for (let i = 0; i < text.length; i++) {
    switch (text.charAt(i)) {
      case "a":
        newStr += "ai";
        break;
      case "e":
        newStr += "enter";
        break;
      case "i":
        newStr += "imes";
        break;
      case "o":
        newStr += "ober";
        break;
      case "u":
        newStr += "ufat";
        break;
      default:
        newStr += text.charAt(i);
    }
  }
  const copy = document.getElementById("copy");
  const message = document.querySelector(".message");
  const pikachu = document.querySelector(".pikachu");
  const span = document.querySelector(".span");
  span.style.display = "none";
  pikachu.style.display = "none";
  message.style.display = "none";
  copy.style.display = "block";
  displayText(newStr);
};

const decrypt = (e) => {
  e.preventDefault();
  let text = document.getElementById("text").value;
  if (text.includes("ai")) text = text.replaceAll("ai", "a");
  if (text.includes("enter")) text = text.replaceAll("enter", "e");
  if (text.includes("imes")) text = text.replaceAll("imes", "i");
  if (text.includes("ober")) text = text.replaceAll("ober", "o");
  if (text.includes("ufat")) text = text.replaceAll("ufat", "u");
  displayText(text);
};

const copy = async () => {
  try {
    const text = document.querySelector(".text");
    navigator.clipboard.writeText(text.innerHTML);
  } catch {
    alert("Couldn't copy text");
  }
};

const encryptText = document.querySelector(".encrypt");
const decryptText = document.querySelector(".decrypt");
const copyBtn = document.querySelector("#copy");

encryptText.onclick = encrypt;
decryptText.onclick = decrypt;
copyBtn.onclick = copy;
