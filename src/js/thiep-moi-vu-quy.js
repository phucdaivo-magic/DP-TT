import '../scss/thiep-moi-vu-quy.scss';

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