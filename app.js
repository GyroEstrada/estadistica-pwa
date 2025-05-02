function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay-bg");
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  }
  
  function closeSidebar() {
    document.getElementById("sidebar").classList.remove("active");
    document.getElementById("overlay-bg").classList.remove("active");
  }

  function calcularZ() {
    const n1 = parseFloat(document.getElementById("n1").value);
    const x1 = parseFloat(document.getElementById("x1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const x2 = parseFloat(document.getElementById("x2").value);
  
    // Validación simple
    if (n1 <= 0 || n2 <= 0 || x1 < 0 || x2 < 0 || x1 > n1 || x2 > n2) {
      document.getElementById("resultadoZ").textContent = "⚠️ Verifica que los valores sean válidos.";
      return;
    }
  
    const p1 = x1 / n1;
    const p2 = x2 / n2;
  
    const s1_2 = p1 * (1 - p1);
    const s2_2 = p2 * (1 - p2);
  
    const numerador = p1 - p2;
    const denominador = Math.sqrt((s1_2 / n1) + (s2_2 / n2));
    const z = numerador / denominador;
  
    let conclusion = "";
    const alpha = 0.05;
    const zCritico = 1.96;
  
    if (Math.abs(z) > zCritico) {
      conclusion = "✅ El valor de z está en el área de rechazo. Existe suficiente evidencia para rechazar la hipótesis nula.";
    } else {
      conclusion = "❌ El valor de z no está en el área de rechazo. No hay suficiente evidencia para rechazar la hipótesis nula.";
    }
  
    const resultado = `Z = ${z.toFixed(4)}\n${conclusion}`;
    document.getElementById("resultadoZ").textContent = resultado;
  }

  // Mostrar el botón cuando se hace scroll
window.onscroll = function () {
    const btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  
  // Función para subir al inicio
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function calcularF() {
    const s1 = parseFloat(document.getElementById("s1").value);
    const s2 = parseFloat(document.getElementById("s2").value);
  
    // Validación simple
    if (s1 <= 0 || s2 <= 0) {
      document.getElementById("resultadoF").textContent = "⚠️ Las varianzas deben ser mayores que 0.";
      return;
    }
  
    // Calcular F
    const F = s1 / s2;
  
    // Valores críticos aproximados para gl1 = gl2 = 96 y α = 0.05
    const FcritSuperior = 1.60;
    const FcritInferior = 1 / FcritSuperior; // ≈ 0.625
  
    let conclusion = "";
  
    if (F < FcritInferior || F > FcritSuperior) {
      conclusion = "✅ El valor de F está en el área de rechazo. Existe evidencia suficiente para concluir que las varianzas son diferentes.";
    } else {
      conclusion = "❌ El valor de F no está en el área de rechazo. No existe evidencia suficiente para concluir que las varianzas son diferentes.";
    }
  
    const resultado = `F = ${F.toFixed(4)}\n${conclusion}`;
    document.getElementById("resultadoF").textContent = resultado;
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(() => console.log('Service Worker registrado'))
      .catch(error => console.log('Error al registrar Service Worker:', error));
  }