document.addEventListener('DOMContentLoaded', function() {
    const trackButton = document.getElementById('track-button');
    const trackingDate = document.getElementById('tracking-date');
    const trackingStatus = document.getElementById('tracking-status');

    trackButton.addEventListener('click', function() {
        const productId = document.getElementById('product-id').value;

        // Dummy product tracking data (replace with actual data retrieval logic)
        const trackingData = {
            date: '2024-03-15',
            status: 'In transit'
        };

        // Display tracking information
        trackingDate.textContent = trackingData.date;
        trackingStatus.textContent = trackingData.status;
    });
});
