import '../scss/thiep-moi-vu-quy.scss';

import EmblaCarousel from 'embla-carousel'
// import { addDotButtonAndClickHandlers } from './EmblaCarouselDotButton'
// import { addPrevNextButtonClickHandlers } from './EmblaCarouselArrowButtons'
// import '../css/base.css'
// import '../css/sandbox.css'
// import '../css/embla.css'

const OPTIONS = { axis: 'x' }

const viewportNode = document.querySelector('.album__container')

const emblaApi = EmblaCarousel(viewportNode, OPTIONS)


const params = new URLSearchParams(location.search);


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll("[data-name]").forEach(el => {
        const names = {
            name: 'Quý khách'
        }
        const value = params.get(el.dataset.name) || names[el.dataset.name] || '';
        if (value) {
            el.textContent = value;
        }
    });
});
