document.addEventListener("DOMContentLoaded", function () {
  // Cierre automático del menú colapsable de Bootstrap en dispositivos móviles al hacer clic en un enlace
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.getElementById("navbarNav");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: true,
        });
        bsCollapse.hide();
      }
    });
  });
});