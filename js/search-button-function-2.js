window.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const productCards = document.querySelectorAll('.productos__ropa-cards');
  const productoInfo = document.querySelector('.productos');

  // Verificar que se encuentren los elementos buscados
  if (!searchInput || !productCards || !productoInfo) {
    console.error('No se encontraron los elementos necesarios.');
    return;
  }

  // Obtener todos los productos
  const allProducts = Array.from(productCards);

  // Evento de escucha para el campo de búsqueda
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    // Filtrar productos según el término de búsqueda
    const filteredProducts = allProducts.filter((product) => {
      const productCategory = product.getAttribute('data-category');
      return productCategory && productCategory.toLowerCase().includes(searchTerm);
    });

    // Mostrar u ocultar los productos según la búsqueda
    Array.from(productCards).forEach((product) => {
      const productTitle = product.querySelector('.Producto__titulo');
      const productDescription = product.querySelector('.Producto__descripcion');

      if (filteredProducts.includes(product)) {
        product.style.display = 'block';
        if (productTitle) {
          productTitle.style.display = 'block';
        }
        if (productDescription) {
          productDescription.style.display = 'block';
        }
      } else {
        product.style.display = 'none';
        if (productTitle) {
          productTitle.style.display = 'none';
        }
        if (productDescription) {
          productDescription.style.display = 'none';
        }
      }
    });

    // Ocultar la sección 'Producto__info' si no hay productos visibles
    const visibleProducts = Array.from(productCards).filter((product) => {
      return product.style.display !== 'none';
    });

    if (visibleProducts.length === 0) {
      productoInfo.style.display = 'none';
    } else {
      productoInfo.style.display = 'block';
    }
  });

  // Evento de escucha para borrar el contenido del campo de búsqueda
  searchInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 8 && searchInput.value === '') {
      // Mostrar todos los productos nuevamente
      Array.from(productCards).forEach((product) => {
        product.style.display = 'block';
        const productTitle = product.querySelector('.Producto__titulo');
        const productDescription = product.querySelector('.Producto__descripcion');
        if (productTitle) {
          productTitle.style.display = 'block';
        }
        if (productDescription) {
          productDescription.style.display = 'block';
        }
      });
      productoInfo.style.display = 'block';
    }
  });
});
