let buscar = () => {
    let input_search = document.getElementById("buscador");

    if (input_search.classList.contains("oculto")) {
        input_search.classList.remove("oculto");
        input_search.classList.add("visible");
    } else{
        input_search.classList.remove("visible");
        input_search.classList.add("oculto");
    }
}


const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}