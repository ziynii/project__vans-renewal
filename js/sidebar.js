const headerMenuButton = document.querySelector('.header .menu-button');
const sidebar = document.querySelector('.sidebar');
const closeButton = sidebar.querySelector('.close-button');

function openSidebar() {
  sidebar.classList.add('is-active');
}

function closeSidebar() {
  sidebar.classList.remove('is-active');
}

headerMenuButton.addEventListener('click', () => openSidebar());
closeButton.addEventListener('click', () => closeSidebar());
