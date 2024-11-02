document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: "fc-1888", name: "Cervical Spine", averagerating: 4.5 },
        { id: "fc-2050", name: "Thoracic Spine", averagerating: 4.7 },
        { id: "fs-1987", name: "Lumbar Spine", averagerating: 3.5 },
        { id: "ac-2000", name: "Sacrum", averagerating: 3.9 },
        { id: "jj-1969", name: "Coccyx", averagerating: 5.0 },
    ];

    const selectElement = document.getElementById("product-name");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
    document.getElementById("review-count").textContent = reviewCount;
});