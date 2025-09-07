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

const search_form = document.querySelector(".search_form")
const searchIcon = document.querySelector(".searchIcon")
const faTimes = document.querySelector(".fa-times")

searchIcon.addEventListener("click", (e) => 
    {
        search_form.classList.add("search_form_hide")
        e.preventDefault()
    }
)
faTimes.addEventListener("click", (e) => 
    {
        search_form.classList.remove("search_form_hide")
        e.preventDefault()
    }
)

