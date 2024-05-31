const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".container__left h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container__left .container__btn", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".location", {
  ...scrollRevealOption,
  origin: "left",
  delay: 5000,
});

ScrollReveal().reveal(".container__right h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".container__right h2", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".container__right h3", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".container__right p", {
  ...scrollRevealOption,
  delay: 2500,
});

ScrollReveal().reveal(".container__right .tent-1", {
  duration: 1000,
  delay: 1500,
});

ScrollReveal().reveal(".container__right .tent-2", {
  duration: 1000,
  delay: 2600,
});

ScrollReveal().reveal(".socials span", {
  ...scrollRevealOption,
  origin: "top",
  delay: 3000,
  interval: 500,
});

ScrollReveal().reveal(".container__section", {
  ...scrollRevealOption,
  origin: "top",
  delay: 100,
  interval: 100,
});

ScrollReveal().reveal(".logo", {
  duration: 1000,
  delay: 500,
});


// LOGIN

document.addEventListener("DOMContentLoaded", function () {
  // Seleciona os elementos necessários
  const btn = document.querySelector(".btnlog");
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close-btn");

  // Função para abrir o popup
  function openPopup() {
    popup.style.display = "flex";
  }

  // Função para fechar o popup
  function closePopup() {
    popup.style.display = "none";
  }

  // Adiciona evento de clique ao botão para abrir o popup
  btn.addEventListener("click", openPopup);

  // Adiciona evento de clique ao botão de fechar para fechar o popup
  closeBtn.addEventListener("click", closePopup);

  // Fecha o popup ao clicar fora dele
  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      closePopup();
    }
  });

  document.getElementById('popup').addEventListener('submit', function (event) {
    event.preventDefault();

    // Dados de login pré-definidos
    const correctUsername = 'admin@email.com';
    const correctPassword = '123321';

    // Obter valores do formulário
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificar dados de login
    if (username === correctUsername && password === correctPassword) {
      alert('Login bem-sucedido!');
      closePopup();

      const btnlogin = document.querySelector('.btnlog');
      const btnlogout = document.createElement('buttonlogout');
      btnlogout.innerHTML = '<i class="ri-logout-circle-line"></i>';
      btnlogout.classList.add('btnlogout');
      btnlogin.replaceWith(btnlogout);

      btnlogout.addEventListener('click', function () {
        btnlogout.replaceWith(btnlogin);
        alert('Logout bem-sucedido!');
      });
    } else {
      alert('Usuário ou senha incorretos.');
    }
  });
});
