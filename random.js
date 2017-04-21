
var bod = document.getElementById("bod");
var righty = document.getElementById("right-arrow");
var lefty = document.getElementById("left-arrow");

bod.addEventListener("mousedown", clearArrow);
function clearArrow() {
    righty.classList.add("hidden");
    lefty.classList.add("hidden");
}
bod.addEventListener("mouseup", showRandomArrow);
function showRandomArrow() {
    var random = Math.floor(Math.random() * 10 + 1);
    if (random > 5) {
        righty.classList.remove("hidden");
        lefty.classList.add("hidden");
    } else {
        lefty.classList.remove("hidden");
        righty.classList.add("hidden");
    }
}
