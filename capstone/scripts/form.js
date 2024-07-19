const productArray = [
    {
      id: 'fc-1888',
      name: "Sell",
      
    },
    {
      id: 'fc-2050',
      name: "Renting",
      
    },
    {
      id: 'fs-1987',
      name: "Buy",
      
    }
    
  ];
  
  document.addEventListener('DOMContentLoaded', loadProduct);
  
/**
 * Loads the products into the product dropdown list when the DOM is fully loaded.
 * The function creates an option element for each product in the productArray
 * and appends it to the select element.
 */
function loadProduct() {
  // Get the select element from the HTML document
  const selectElement = document.getElementById('product');

  // Iterate over each product in the productArray
  productArray.forEach(function(product) {
    // Create a new option element
    const option = document.createElement('option');

    // Set the value of the option to the average rating of the product
    option.value = product.averagerating;

    // Set the text content of the option to the name of the product
    option.textContent = product.name;

    // Append the option element to the select element
    selectElement.appendChild(option);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const reviewForm = document.getElementById('reviewForm');
 

  reviewForm.addEventListener('submit', (event) => {
      console.log("entre");
      event.preventDefault();// Prevent the form from submitting the traditional way
      let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
      reviewCount++;  
      localStorage.setItem('reviewCount', reviewCount);
      
     
  });
});
