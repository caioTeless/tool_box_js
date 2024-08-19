const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');

accordionList.forEach((item) => {
  item.addEventListener("click", () => {
    handleAccordion(item);
  });
});

function handleAccordion(item) {
  accordionList.forEach((accordion) => {
    if (accordion !== item) {
      accordion.classList.remove("active-accordion");
      accordion.nextElementSibling.classList.remove("active-accordion");
    }
  });
  item.classList.toggle("active-accordion");
  item.nextElementSibling.classList.toggle("active-accordion");
}
