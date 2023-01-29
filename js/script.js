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
// Nav-menu
const iconNav = document.querySelector(".nav-icon");
const nav = document.querySelector(".nav");

iconNav.addEventListener("click", () => {
    document.body.classList.toggle("lock");
    nav.classList.toggle("active");
    iconNav.classList.toggle("active");
});

//Sliders
const createSlider = (id, slidesPerView, loop = true, breakpoints = {}) => {
    const swiper = new Swiper(id, {
        loop,
        slidesPerView,
        spaceBetween: 20,
        navigation: {
            nextEl: `${id}-btn-next`,
            prevEl: `${id}-btn-prev`,
        },
        pagination: {
            el: `${id}-pagination`,
            clickable: true,
        },
        breakpoints,
    });
};

createSlider(".super-discount-swiper", 1);
