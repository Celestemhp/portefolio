// Lyd
// Lyt efter klik på element
document.querySelector("body").addEventListener("mousedown", click);

// lyd til klik
function click() {
    console.log("lyd");
    document.querySelector("#klikLyd").play();
    document.querySelector("#klikLyd").volume = 1.5;
}

document.querySelector("body").addEventListener("mousedown", click); {
    if (click.pressure == 0) {
      // No pressure
      process_no_pressure(click);
    } else if (click.pressure == 1) {
      // Maximum pressure
      process_max_pressure(click);
    } else {
      // Default
      process_pressure(click);
    }
  }
