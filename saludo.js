// splash.js

window.addEventListener('load', function () {
  setTimeout(function () {
    const splash = document.getElementById('splash');
    splash.classList.add('fade-out');

    splash.addEventListener('animationend', function () {
      splash.style.display = 'none';
      document.body.classList.add('loaded');
    });
  }, 3000);
});
