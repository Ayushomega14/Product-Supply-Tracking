document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('auth-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const userId = document.getElementById('user-id').value;
        const password = document.getElementById('password').value;

        // Dummy authentication logic (replace with actual authentication)
        if (userId === 'user123' && password === 'password123') {
            // Redirect to tracking page after successful authentication
            window.location.href = 'tracking.html';
        } else {
            alert('Invalid user ID or password. Please try again.');
        }
    });
});
