// Dropdown-menu
const optionsMenus = document.querySelectorAll(".select-menu");

optionsMenus.forEach((optionMenu) => {
    const selectBtn = optionMenu.querySelector(".select-btn"),
        options = optionMenu.querySelectorAll(".option"),
        selectBtnText = optionMenu.querySelector(".select-btn-text");
    let selectedOption = optionMenu.querySelector(".option.selected");
    selectBtnText.innerText = selectedOption.innerHTML;
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
createSlider(".sale-swiper", 4, false, {
    0: {
        slidesPerView: 1,
    },
    620: {
        slidesPerView: 2,
    },
    930: {
        slidesPerView: 3,
    },
    1240: {
        slidesPerView: 4,
    },
});
createSlider(".sale-card-img-slider", 1);
createSlider(".day-product-card-img-swiper", 1, false);

// Sale Cards
const cards = document.querySelectorAll(".sale-card-wrapper");
document.onclick = (e) => {
    cards.forEach((card) => {
        card.classList.remove("active");
    });
};
cards.forEach((card) => {
    card.onclick = (e) => {
        cards.forEach((card) => {
            card.classList.remove("active");
        });
        card.classList.add("active");
        e.stopPropagation();
    };
});
