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

// ventana de requisitos

// Esperar a que cargue todo y ocultar el splash
window.addEventListener('load', function () {
  setTimeout(function () {
    const splash = document.getElementById('splash');
    splash.classList.add('fade-out');

    splash.addEventListener('animationend', function () {
      splash.style.display = 'none';
      // mostrar modal después del splash
      document.getElementById('intro-modal').style.display = 'flex';
    });
  }, 3000);
});

// Mostrar contenido principal al hacer clic en "Aceptar"
document.addEventListener('DOMContentLoaded', function () {
  const startBtn = document.getElementById('start-btn');
  const modal = document.getElementById('intro-modal');
  const mainContent = document.getElementById('main-content');

  if (startBtn && modal && mainContent) {
    startBtn.addEventListener('click', function () {
      modal.style.display = 'none';
      document.body.classList.add('loaded');
    });
  }
});
