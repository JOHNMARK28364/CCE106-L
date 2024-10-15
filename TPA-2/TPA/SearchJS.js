// Function to toggle the search input visibility when the search icon is clicked
document.getElementById('searchIcon').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    
    // Toggle visibility: if it's hidden, show it; if it's visible, hide it
    if (searchInput.innerHTML === "fi fi-rs-search") {
        searchInput.style.display = "block"; // Show the search input
    } else {
        searchInput.style.display = "none"; // Hide the search input
    }
});