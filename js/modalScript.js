
// Open the modal when "Contact Us" is clicked
document.getElementById('contactLink').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link action
    var modal = new bootstrap.Modal(document.getElementById('contactModal'));
    modal.show(); // Show the modal
});
