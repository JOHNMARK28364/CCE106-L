
document.getElementById('searchIcon').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    
    
    if (searchInput.innerHTML === "fi fi-rs-search") {
        searchInput.style.display = "block";
    } else {
        searchInput.style.display = "none";
    }
});
