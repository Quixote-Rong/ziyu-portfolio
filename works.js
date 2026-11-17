/* Adapted from the supplied Cargo carousel; no inline event handlers. */
(function () {
  'use strict';
  const films = [
    {
      title: 'The Star on the Cake',
      desc: 'A short animated film exploring childhood emotion, imagination and dream imagery.',
      src: 'https://freight.cargo.site/m/J3009044932718610819298615645618/final.mp4'
    },
    {
      title: 'Adventure',
      desc: 'A 3D animated short about a lost Lego pendant that comes to life and begins a playful journey.',
      src: 'https://freight.cargo.site/m/N2908785516238375610225592391090/advanture.mp4'
    },
    {
      title: 'Trapped',
      desc: 'A mixed-media film reflecting on confinement, control and female experience.',
      src: 'https://freight.cargo.site/m/Q2908799151905574199662760973746/trapped.mp4'
    }
  ];
  const video = document.getElementById('portfolioVideo');
  const title = document.getElementById('filmTitle');
  const desc = document.getElementById('filmDesc');
  const counter = document.getElementById('filmCounter');
  const previous = document.getElementById('film-prev');
  const next = document.getElementById('film-next');
  if (!video || !title || !desc || !previous || !next) return;

  let currentFilm = 0;
  function showFilm(index) {
    currentFilm = (index + films.length) % films.length;
    const film = films[currentFilm];
    video.pause();
    video.querySelector('source').src = film.src;
    video.load();
    title.textContent = film.title;
    desc.textContent = film.desc;
    counter.textContent = String(currentFilm + 1).padStart(2, '0') + ' / ' + String(films.length).padStart(2, '0');
  }
  previous.addEventListener('click', () => showFilm(currentFilm - 1));
  next.addEventListener('click', () => showFilm(currentFilm + 1));
})();
