import "../scss/thiep-moi-vu-quy.scss";
import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import musicUrl from '@/media/le-duong.mp3';

const viewportNode = document.querySelector(".album__container");

const emblaApi = EmblaCarousel(
    viewportNode,
    {
        axis: "x",
        loop: true,
    },
    [Autoplay({
        delay: 3000,
        playOnInit: true,
    })],
);

const params = new URLSearchParams(location.search);

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-name]").forEach((el) => {
        const names = {
            name: "Quý khách",
        };
        const value = params.get(el.dataset.name) || names[el.dataset.name] || "";
        if (value) {
            el.textContent = value;
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('music');
    if (music) {
        music.src = musicUrl;
        music?.play().catch(err => console.log(err));
    }

    document.addEventListener('click', () => {
        music?.play().catch(err => console.log(err));
    });
});
