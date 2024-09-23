const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    // if (e.target.id === "grey") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "orange") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "blueviolet") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "green") {
    //   body.style.backgroundColor = e.target.id;
    // }
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "orange":
        body.style.backgroundColor = e.target.id;
        break;
      case "blueviolet":
        body.style.backgroundColor = e.target.id;
        break;
      case "green":
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});
