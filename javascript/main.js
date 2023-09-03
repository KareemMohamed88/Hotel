const menu = document.getElementById("menu")
const open = document.getElementById("open")
const close = document.getElementById("close")

open.onclick = () => {
  menu.classList.add("open")
}

close.addEventListener("click", () => {
  menu.classList.remove("open")
})
