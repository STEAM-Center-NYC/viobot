// Waits for the DOM to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function () {
  // Gets all the "Add to Cart" buttons
  var addToCartButtons = document.querySelectorAll('.btn-primary');

  // Iterates over each button and adds a click event listener
  addToCartButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      // Prevents the default behavior of the button (e.g., form submission)
      event.preventDefault();

      // Gets the product details from the clicked button's parent card
      var card = button.closest('.card');
      var productName = card.querySelector('.card-title').textContent.trim();
      var productPrice = card.querySelector('.card-price').textContent.trim();

      // Creates an object representing the product
      var product = {
        name: productName,
        price: productPrice
      };

      // Adds the product to the cart (you can replace this with your own cart implementation)
      addToCart(product);

      // Updates the button text to "Added to Cart"
      button.textContent = "Added to Cart";
      button.classList.remove('btn-primary');
      button.classList.add('btn-success');
      button.disabled = true;
    });
  });

  // Function to add the product to the cart (you can replace this with your own cart implementation)
  function addToCart(product) {
    // Here you can implement the logic to add the product to the cart
    // For demonstration purposes, you can log the product details to the console
    console.log("Product added to cart:", product);
  }
});
