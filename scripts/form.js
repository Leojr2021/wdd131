const productArray = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      averagerating: 5.0
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
