const controls = document.querySelectorAll(".control")
const item = document.querySelectorAll(".item")
const MaxItems = item.length

let currentItem = 0

item.forEach(item => {})

controls.forEach(control => {
  control.addEventListener("click", () => {
    const isLeft = control.classList.contains("arrow-left")

    console.log(control.classList.value, isLeft)

    isLeft ? currentItem-- : currentItem++

    if (currentItem >= MaxItems) currentItem = 0
    if (currentItem < 0) currentItem = MaxItems - 1

    console.log(currentItem)

    item.forEach((item, index) => {
      item.classList.remove("current-item")

      if (index === currentItem) {
        item.scrollIntoView({
          inline: "center",
          behavior: "smooth"
        })

        item.classList.add("current-item")
      }
    })

    /* --- OBS: other response  --------------------  

      item[currentItem].scrollIntoView({
        inline: "center",
        behavior: "smooth",
      block: "nearest"
      })

      item[currentItem].classList.add("current-item")
    
    */
  })
})
