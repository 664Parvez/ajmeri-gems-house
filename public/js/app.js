const offerImg = document.querySelectorAll("#offer_img")
const popup = document.getElementById("popup")
const popupImg = document.getElementById("popup_img")

offerImg.forEach((items) => {
    items.addEventListener("click", () => {
        popupImg.src = items.src
        popup.style.display = "flex"
        console.log(items.src)
    })
})

const popupClose = document.getElementById("popup_close")

popupClose.addEventListener("click", () => {
    popup.style.display = "none"
})