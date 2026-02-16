function verificarResposta() {
      const resposta = document.querySelector('input[name="resposta"]:checked');
      const resultado = document.getElementById("resultado");

      if (!resposta) {
        resultado.textContent = "Seleciona antes né.";
        resultado.className = "resultado errado";
        return;
      }

      if (resposta.value === "F") {
        resultado.textContent = "✅ Acertouuuu, ta dentro da minha cabeça por acaso?";
        resultado.className = "resultado correto";
      } else {
        resultado.textContent = "❌ Ixi, me conhece mesmo? Errou feio.";
        resultado.className = "resultado errado";
      }
    }

    
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  document.querySelectorAll(".hidden").forEach(el => observer.observe(el));