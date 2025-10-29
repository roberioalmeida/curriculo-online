const btnNext = document.getElementById('nextSlide');
const btnPrev = document.getElementById('prevSlide');
const slider = document.querySelector('.slider');

const { width: sliderWidth } = window.getComputedStyle(slider) /* pega o tamanho do obj slider definido no css */ 

function controlSlide({ target: { id } }) {
    console.log(sliderWidth);
    switch (id) {
        case 'nextSlide':
            return slider.scrollLeft += parseInt(sliderWidth);
            break;
        case 'prevSlide':
            slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
            break;
    }
}

btnNext.addEventListener('click', controlSlide)
btnPrev.addEventListener('click', controlSlide)
