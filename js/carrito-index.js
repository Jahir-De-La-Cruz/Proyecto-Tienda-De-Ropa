const cartButton = document.querySelector('.cart-shopping');
const cartItemsContainer = document.querySelector('.cart-items');
const cartItemsTable = document.getElementById('cart-items-table');
const cartItemsBody = cartItemsTable.getElementsByTagName('tbody')[0];
const cartTotalPrice = document.getElementById('cart-total-price');
const cartButtonBuy = document.getElementById('cart-button-buy');
const cartButtonClear = document.getElementById('cart-button-clear');
const cartCloseButton = document.querySelector('.cart-close-button');
const precioNormalSpan = document.getElementById('precio_normal_span');
const precioNormalInput = document.getElementById('precio_normal_input');

cartButton.addEventListener('click', toggleCart);
cartCloseButton.addEventListener('click', toggleCart);

function toggleCart() {
  cartItemsContainer.classList.toggle('show');
}

const addToCartButtons = document.querySelectorAll('.btnComprar');
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Declarar variable global para almacenar el precio normal y el precio con descuento
let precioNormal = 0;
let totalDiscountedPrice = 0;

function addToCart(event) {
  const productCard = event.target.closest('.productos__ropa-cards');
  const productTitle = productCard.querySelector('.productos__ropa-titulo').textContent;
  const productImageSrc = productCard.querySelector('.productos__ropa-img').src;
  const productPrice = productCard.querySelector('.productos__ropa-precio').textContent;
  const productDiscount = productCard.querySelector('span.descuento-span');

  let discountedPrice;
  let normalPrice;
  if (productDiscount) {
    discountedPrice = calculateDiscountedPrice(productPrice, productDiscount.textContent);
    normalPrice = productPrice;
  } else {
    discountedPrice = add50Percent(productPrice);
    normalPrice = discountedPrice;
    productDiscount.textContent = '50% de descuento'; // Agregar mensaje "50% de descuento"
  }

  // Asignar el valor del precio normal y el precio con descuento a las variables globales
  precioNormal += parseFloat(normalPrice.replace('$', ''));
  totalDiscountedPrice += parseFloat(discountedPrice.replace('$', ''));

  const cartItem = document.createElement('tr');
  cartItem.innerHTML = `
    <td><img src="${productImageSrc}" alt="Producto" width="50" height="50"></td>
    <td>${productTitle}</td>
    <td class="precio-normal-input">${normalPrice}</td>
    <td>${discountedPrice}</td>
    <td>${productDiscount.textContent}</td>
  `;

  cartItemsBody.appendChild(cartItem);
  updateCartTotal();
}

function calculateDiscountedPrice(price, discountText) {
  const discount = parseFloat(discountText.split(' ')[1].replace('%', ''));
  const priceNumber = parseFloat(price.replace('$', ''));
  const discountedPrice = priceNumber - (priceNumber * discount / 100);
  return "$" + discountedPrice.toFixed(2);
}

function add50Percent(price) {
  const priceNumber = parseFloat(price.replace('$', ''));
  const newPrice = priceNumber + (priceNumber * 0.5); // Agregar el 50% adicional
  return "$" + newPrice.toFixed(2);
}

function updateCartTotal() {
  const cartItems = cartItemsBody.getElementsByTagName('tr');
  let totalPrice = 0;
  let totalPriceWithoutDiscount = 0;

  for (let i = 0; i < cartItems.length; i++) {
    const priceCell = cartItems[i].querySelector('.precio-normal-input');
    const price = parseFloat(priceCell.textContent.replace('$', ''));
    totalPrice += price;

    const discountCell = cartItems[i].getElementsByTagName('td')[3];
    const discount = parseFloat(discountCell.textContent.replace('$', ''));
    totalPriceWithoutDiscount += discount;

    const normalPriceCell = cartItems[i].querySelector('.precio-normal-input');
    normalPriceCell.textContent = "$" + price.toFixed(2); // Asigna el precio normal al elemento td
  }

  cartTotalPrice.textContent = "Precio total: $" + totalPriceWithoutDiscount.toFixed(2);
  precioNormalInput.value = "$" + totalPrice.toFixed(2); // Asigna la suma de los precios al input "precio_normal_input"
}

cartButtonClear.addEventListener('click', clearCart);

function clearCart() {
  while (cartItemsBody.firstChild) {
    cartItemsBody.removeChild(cartItemsBody.firstChild);
  }
  updateCartTotal();
  // Restablecer los valores de las variables globales
  precioNormal = 0;
  totalDiscountedPrice = 0;
}

cartButtonBuy.addEventListener('click', () => {
  const cartItems = cartItemsBody.getElementsByTagName('tr');
  let productList = "";

  for (let i = 0; i < cartItems.length; i++) {
    const productCell = cartItems[i].getElementsByTagName('td')[1];
    const productName = productCell.textContent;
    productList += " / " + productName + "\n";
  }

  Swal.fire({
    title: '¿Estás seguro de realizar la compra?',
    text: 'Productos en el carrito:\n' + productList,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      const form = document.createElement('form');
      form.method = 'GET';
      form.action = 'paginas/confirmar-compra.php'; // Reemplaza con la ruta correcta hacia tu archivo PHP
      document.body.appendChild(form);

      const inputProductos = document.createElement('input');
      inputProductos.type = 'text';
      inputProductos.name = 'productos';
      inputProductos.value = productList;
      form.appendChild(inputProductos);

      const inputPrecioDescuento = document.createElement('input');
      inputPrecioDescuento.type = 'text';
      inputPrecioDescuento.name = 'precio_descuento';
      inputPrecioDescuento.value = totalDiscountedPrice.toFixed(2);
      form.appendChild(inputPrecioDescuento);

      const inputPrecioNormal = document.createElement('input');
      inputPrecioNormal.type = 'text';
      inputPrecioNormal.name = 'precio_normal';
      inputPrecioNormal.value = precioNormal.toFixed(2);
      form.appendChild(inputPrecioNormal);

      form.submit();
    }
  });
});
