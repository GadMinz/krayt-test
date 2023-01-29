// Dropdown-menu
const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    selectBtnText = optionMenu.querySelector(".select-btn-text");

let selectedOption = optionMenu.querySelector(".option.selected");
selectBtnText.innerText = selectedOption.innerText;

selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("open");
});

options.forEach((option) => {
    option.addEventListener("click", () => {
        selectedOption.classList.remove("selected");
        option.classList.add("selected");
        selectedOption = option;
        selectBtnText.innerText = selectedOption.innerText;
        optionMenu.classList.remove("open");
    });
});
