let isOpen = false
function openMenu() {
    const openMobile = document.getElementById("container-mobile")
    if (isOpen){
      openMobile.style.display = "none"
      isOpen = false
    } else {
        openMobile.style.display = "flex"
        isOpen = true
    }


}