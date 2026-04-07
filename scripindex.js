// ── Pequeña animación de entrada escalonada para los links ──
document.addEventListener('DOMContentLoaded', () => {

  // Stagger de los links al cargar
  const links = document.querySelectorAll('.nav-links li');
  links.forEach((li, i) => {
    li.style.opacity = '0';
    li.style.transform = 'translateY(12px)';
    li.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    setTimeout(() => {
      li.style.opacity = '1';
      li.style.transform = 'translateY(0)';
    }, 300 + i * 100);
  });

  // Efecto de confeti de corazones al hacer clic en el título
  const title = document.querySelector('h1');
  if (title) {
    title.style.cursor = 'pointer';
    title.addEventListener('click', spawnHearts);
  }

  function spawnHearts() {
    const count = 14;
    for (let i = 0; i < count; i++) {
      const heart = document.createElement('span');
      heart.textContent = '♡';
      heart.style.cssText = `
        position: fixed;
        pointer-events: none;
        font-size: ${12 + Math.random() * 18}px;
        color: hsl(${270 + Math.random() * 40}deg, 70%, 65%);
        left: ${20 + Math.random() * 60}vw;
        top: ${30 + Math.random() * 30}vh;
        z-index: 9999;
        animation: heartFloat 1.2s ease-out forwards;
        opacity: 1;
      `;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1300);
    }

    // Inyectar keyframes una sola vez
    if (!document.getElementById('heart-keyframes')) {
      const style = document.createElement('style');
      style.id = 'heart-keyframes';
      style.textContent = `
        @keyframes heartFloat {
          0%   { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-120px) scale(0.5); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
  }

});
