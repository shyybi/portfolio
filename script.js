replacements = ["making the website look good", "adding fonts", "playing with animations", "struggling with styles", "trying to exit vim", "doing commits to break everything", "giving up and letting down", "watching an indian tutorial"]

const text = document.querySelector("header p").innerText.replace("[replace]", replacements[Math.floor(Math.random() * replacements.length)]);
const speed = 50;

document.querySelector("header p").innerText = "";

for (let i = 0; i < text.length; i++) {
    setTimeout(function () {
        document.querySelector("header p").innerHTML += text[i] === "&nbsp;" ? "" : text[i];
    }, speed * i);
}