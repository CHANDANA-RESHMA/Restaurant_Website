// Order Form Function
function orderForm(itemName) {
    const name = prompt(`Enter your name for ordering "${itemName}"`);
    if(!name) return alert("Order cancelled.");

    const email = prompt("Enter your email:");
    if(!email) return alert("Order cancelled.");

    const quantity = prompt("Enter quantity:");
    if(!quantity || isNaN(quantity) || quantity <= 0) return alert("Invalid quantity, order cancelled.");

    alert(`Thank you ${name}! Your order for ${quantity} x "${itemName}" has been placed successfully.`);
}

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill all fields.');
    }
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');
window
