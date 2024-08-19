const cardButton = document.querySelector("#toast");

cardButton.addEventListener("click", handleToast);

function handleToast() {
  cardButton.removeEventListener("click", handleToast);
  showToast("Notification test !");
}

function showToast(message, duration = 3000) {
  const toastContainer = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.remove("show");

    setTimeout(() => {
      toast.remove();
    }, 300);
    cardButton.addEventListener("click", handleToast);
  }, duration);
}
