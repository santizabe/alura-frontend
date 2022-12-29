const encryptText = (e) => {
  e.preventDefault();
  const textToEncrypt = document.getElementById("encrypt").value;
  const encrypted = encrypt(textToEncrypt);
  const p = document.querySelector(".text");
  p.innerHTML = encrypted;
  console.log(encrypted);
};

const encrypt = (text) => {
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
  return newStr;
};

const button = document.querySelector(".encrypt");
button.onclick = encryptText;
