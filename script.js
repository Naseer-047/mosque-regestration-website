const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuBtn.textContent = mobileMenu.classList.contains('hidden') ? '☰' : '✕';
    });