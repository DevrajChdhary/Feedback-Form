document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var feedback = document.getElementById('feedback').value;

    var confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerHTML = `
        <h3>Thank you, ${name}!</h3>
        <p>We appreciate your feedback:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Feedback:</strong> ${feedback}</p>
    `;
});
