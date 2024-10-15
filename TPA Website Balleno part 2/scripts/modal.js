function openFormModal() {
  document.getElementById("formModal").style.display = "block";
}

function closeFormModal() {
  document.getElementById("formModal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  if (event.target === document.getElementById("formModal")) {
    closeFormModal();
  }
}