let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartCount();

document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', (e) => {
    const product = {
      id: e.target.dataset.productId,
      name: e.target.dataset.productName,
      price: parseFloat(e.target.dataset.productPrice),
    };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  });
});

document.querySelector('.cart-button').addEventListener('click', () => {
  if (cart.length > 0) {
    // Take user to cart page
    window.location.href = 'cart.html';
  } else {
    alert('Your cart is empty!');
  }
});

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}