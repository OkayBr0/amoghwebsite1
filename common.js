let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let total = 0;

function addToCart(productName, price) {
    cartItems.push({ productName, price });
    total += price;
    updateCart();
    saveCartToStorage();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cartItems');
    const totalElement = document.getElementById('total');

    cartItemsElement.innerHTML = '';

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - ₹${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });

    totalElement.textContent = total.toFixed(2);
}


function checkout() {
    console.log('Checkout button clicked');
    alert('Thank you for your purchase!');
    cartItems = [];
    total = 0;
    updateCart();
    saveCartToStorage();
    window.location.href='deliver.html';
}

function saveCartToStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

document.addEventListener('DOMContentLoaded', function() {
    updateCart();
});