// Menú compartido para todas las páginas
document.addEventListener("DOMContentLoaded", function () {
  const menuHTML = `
    <nav>
      <span class="logo">🎰 Servicios Generales Casino Paradiso</span>
      <a href="index.html">Inicio</a>
      <a href="horarios.html">Horarios</a>      
      <a href="tareas.html">Tareas</a>
      <a href="compras.html">Compras</a>
      <a href="acerca.html">Acerca de</a>
    </nav>
  `;
  const contenedor = document.getElementById("menu");
  if (contenedor) contenedor.innerHTML = menuHTML;
});

// Botón volver arriba
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btnArriba");
  if (!btn) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});