document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchResultsContainer = document.getElementById("searchResults");

    // Check if elements exist to prevent errors
    if (!searchInput || !searchResultsContainer) {
        console.error("Search input or results container not found!");
        return;
    }

    // Sample product data
    const products = [
        "Moisturizer",
        "Serum",
        "Sunscreen",
        "Face Mask",
        "Cleanser",
        "Exfoliator",
        "Toner",
        "Body Lotion",
        "Eye Cream",
        "Lip Balm"
    ];

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.trim().toLowerCase();

        // Clear previous results
        searchResultsContainer.innerHTML = "";

        if (query === "") {
            return;
        }

        // Check if any product matches the search
        const matchingProduct = products.find(product =>
            product.toLowerCase().includes(query)
        );

        if (matchingProduct) {
            searchResultsContainer.innerHTML = `<p style="color: green; font-weight: bold;">
                <i class="fas fa-check-circle"></i> ${matchingProduct} is available!
            </p>`;
        } else {
            searchResultsContainer.innerHTML = `<p style="color: red; font-weight: bold;">
                <i class="fas fa-times-circle"></i> Product Not Found ❌
            </p>`;
        }
    });
});
