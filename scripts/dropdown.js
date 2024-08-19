const dropdown = document.querySelectorAll("[data-dropdown]");

dropdown.forEach((item) => {
  item.addEventListener("mouseenter", handleClick);
  item.addEventListener("mouseleave", handleMouseLeave);
});

function handleClick(event) {
  const target = event.currentTarget;
  target.classList.add("dropdown-active");
}

function handleMouseLeave(event) {
  const target = event.currentTarget;

  setTimeout(() => {
    if (!target.contains(document.activeElement)) {
      target.classList.remove("dropdown-active");
    }
  }, 100);
}
