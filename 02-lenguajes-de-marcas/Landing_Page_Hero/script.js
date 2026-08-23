// ==========================================================================
// 7. INTERACTIVIDAD DEL MENÚ MÓVIL
// ==========================================================================

// 1. Seleccionamos los elementos del DOM necesarios
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// 2. Escuchamos el evento 'click' en el botón hamburguesa
menuToggle.addEventListener('click', () => {
  // Alterna (añade o quita) la clase 'is-active'
  navMenu.classList.toggle('is-active');

  // Actualizamos el atributo de accesibilidad
  const isExpanded = navMenu.classList.contains('is-active');
  menuToggle.setAttribute('aria-expanded', isExpanded);
});

// 3. Opcional: Cerrar el menú al hacer clic en cualquier enlace
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-active');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});