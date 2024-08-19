const card = document.querySelectorAll(".card-container");

card.forEach((item) => {
  item.addEventListener("click", toggleCard);
});

function toggleCard(event) {
  card.forEach((item) => {
    item.classList.remove("active");
  });

  const target = event.currentTarget;
  target.classList.toggle("active");
}
