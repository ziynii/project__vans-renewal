const cardList = document.querySelectorAll('.info-card');

cardList.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('is-flip');
  });
});
