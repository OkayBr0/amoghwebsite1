function getCart() {
    const cartString = localStorage.getItem('cart');
    return cartString ? JSON.parse(cartString) : [];
}

function updateCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productName, price) {
    const cart = getCart();
    cart.push({ productName, price });
    updateCart(cart);
}

function getTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => total + item.price, 0);
}

function updateCartIcon() {
    const cartIcon = document.getElementById('cart-icon');
    const cart = getCart();
    const itemCount = cart.length;
    cartIcon.innerHTML = `<a href="cart.html">Cart (${itemCount})</a>`;
}

document.addEventListener('DOMContentLoaded', updateCartIcon);
