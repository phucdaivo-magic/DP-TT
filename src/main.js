import './scss/main.scss';
import logoImg from './assets/images/sample.png';

const app = document.querySelector('#app');

if (app) {
  const img = document.createElement('img');
  img.src = logoImg;
  img.alt = 'Sample image from src/assets';
  img.className = 'sample-image';
  app.appendChild(img);
}

console.log('DP-TT project ready');
