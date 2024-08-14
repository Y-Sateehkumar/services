document.addEventListener('DOMContentLoaded', (event) => {
    // Function to toggle the visibility of service details
    function toggleServiceDetails(serviceId) {
        const serviceDetails = document.getElementById(serviceId);
        if (serviceDetails.style.display === "none" || serviceDetails.style.display === "") {
            serviceDetails.style.display = "block";
        } else {
            serviceDetails.style.display = "none";
        }
    }

    // Adding event listeners to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const detailsId = card.getAttribute('data-details-id');
            toggleServiceDetails(detailsId);
        });
    });
});

