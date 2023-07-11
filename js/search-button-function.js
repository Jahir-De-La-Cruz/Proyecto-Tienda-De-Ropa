window.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const productCards = document.getElementsByClassName('productos__ropa-cards');

  // Obtener todos los productos
  const allProducts = Array.from(productCards);

  // Evento de escucha para el campo de entrada
  searchInput.addEventListener('input', () => {
    const searchTerms = searchInput.value.toLowerCase().split(' ');

    // Filtrar productos según los términos de búsqueda
    const filteredProducts = allProducts.filter((product) => {
      const productCategory = product.getAttribute('data-category').toLowerCase();
      return searchTerms.every((term) => productCategory.includes(term));
    });

    // Mostrar los productos filtrados y ocultar los demás
    Array.from(productCards).forEach((product) => {
      if (filteredProducts.includes(product)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });

  // Evento de escucha para el campo de entrada
  searchInput.addEventListener('input', () => {
    const searchTerms = searchInput.value ? searchInput.value.toLowerCase().split(' ') : [];

    // Filtrar productos según los términos de búsqueda
    const filteredProducts = allProducts.filter((product) => {
      const productCategory = product.getAttribute('data-category') || ''; // Asegúrate de tener un valor predeterminado en caso de que el atributo sea nulo
      return searchTerms.every((term) => productCategory.toLowerCase().includes(term));
    });

    // Mostrar los productos filtrados y ocultar los demás
    Array.from(productCards).forEach((product) => {
      if (filteredProducts.includes(product)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });

  // Evento de escucha para borrar el contenido del campo de entrada
  searchInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 8 && searchInput.value === '') {
      // Mostrar todos los productos nuevamente
      Array.from(productCards).forEach((product) => {
        product.style.display = 'block';
      });
    }
  });
});
