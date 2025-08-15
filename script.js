// Menu filtering
function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        if(category === 'all') {
            item.style.display = 'block';
        } else {
            item.style.display = item.classList.contains(category) ? 'block' : 'none';
        }
    });
}

// Order function
function orderDish(dishName) {
    const customerName = prompt("Enter your name:");
    if(!customerName) return;
    const customerPhone = prompt("Enter your phone number:");
    if(!customerPhone) return;
    const customerAddress = prompt("Enter your address:");
    if(!customerAddress) return;
    alert(`Thank you, ${customerName}! Your order for "${dishName}" has been placed successfully.\nWe will contact you at ${customerPhone} and deliver to ${customerAddress}.`);
}
