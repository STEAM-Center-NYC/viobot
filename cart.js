document.addEventListener("DOMContentLoaded", function () {
  // Function to handle adding a product to the cart
  function addToCart(productName, productPrice) {
    // Create a new cart item element
    var cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    // Create elements for product name, price, quantity, and remove button
    cartItem.innerHTML = `
      <span class="product-name">${productName}</span>
      <span class="product-price">${productPrice}</span>
      <input type="number" class="quantity" value="1" min="1">
      <button class="remove-btn">Remove</button>
    `;

    // Append the cart item to the cart
    document.querySelector('.cart').appendChild(cartItem);

    // Update the total price
    updateTotal();
  }

  // Function to update the total price in the cart
  function updateTotal() {
    var total = 0;
    var cartItems = document.querySelectorAll('.cart-item');

    cartItems.forEach(function (item) {
      var price = parseFloat(item.querySelector('.product-price').textContent.replace('$', ''));
      var quantity = parseInt(item.querySelector('.quantity').value);
      total += price * quantity;
    });

    // Update the total price in the cart
    document.querySelector('.total-price').textContent = '$' + total.toFixed(2);
  }

  // Event listener for clicking "Add to Cart" buttons
  var addToCartButtons = document.querySelectorAll('.btn-primary');
  addToCartButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();

      // Get product details from the card
      var card = button.closest('.card');
      var productName = card.querySelector('.card-title').textContent.trim();
      var productPrice = card.querySelector('.card-price').textContent.trim();

      // Add the product to the cart
      addToCart(productName, productPrice);

      // Change button text and color
      button.textContent = "Added";
      button.classList.remove('btn-primary');
      button.classList.add('btn-success');
      button.disabled = true;
    });
  });

  // Event listener for removing items from the cart
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('remove-btn')) {
      var item = event.target.closest('.cart-item');
      item.remove();
      updateTotal();
    }
  });

  // Event listener for changing quantity
  document.addEventListener('change', function (event) {
    if (event.target.classList.contains('quantity')) {
      updateTotal();
    }
  });
});