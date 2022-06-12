// Lyd
// Lyt efter klik på element
document.querySelector("body").addEventListener("mousedown", click);

// lyd til klik
function click() {
    console.log("lyd");
    document.querySelector("#klikLyd").play();
}


