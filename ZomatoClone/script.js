document.addEventListener('DOMContentLoaded', () => {
  const restaurants = [
    { name: 'Restaurant 1', address: 'Address 1', cuisine: 'Italian', rating: 4.5 },
    { name: 'Restaurant 2', address: 'Address 2', cuisine: 'Chinese', rating: 4.0 },
    { name: 'Restaurant 3', address: 'Address 3', cuisine: 'Indian', rating: 5.0 },
    { name: 'Restaurant 4', address: 'Address 4', cuisine: 'Mexican', rating: 3.5 },
    // Add more restaurants as needed
  ];

  const restaurantList = document.getElementById('restaurant-list');

  function displayRestaurants(data) {
    restaurantList.innerHTML = '';
    data.forEach(restaurant => {
      const restaurantElement = document.createElement('div');
      restaurantElement.classList.add('restaurant');
      restaurantElement.innerHTML = `
        <h2>${restaurant.name}</h2>
        <p>${restaurant.address}</p>
        <p>Cuisine: ${restaurant.cuisine}</p>
        <p>Rating: ${restaurant.rating}</p>
      `;
      restaurantList.appendChild(restaurantElement);
    });
  }

  displayRestaurants(restaurants);

  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRestaurants = restaurants.filter(restaurant => 
      restaurant.name.toLowerCase().includes(searchTerm)
    );
    displayRestaurants(filteredRestaurants);
  });
});
