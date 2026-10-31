// Seleciona os elementos principais do menu e botões
const nav = document.querySelector('.nav');
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');

// Função para abrir o menu
function openMenu() {
  nav.classList.add('is-open');
  menuToggle.setAttribute('aria-expanded', 'true');
}

// Função para fechar o menu
function closeMenu() {
  nav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

// Eventos de clique
menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);

// Fecha o menu ao clicar em qualquer link de navegação (opcional, melhora a experiência)
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});