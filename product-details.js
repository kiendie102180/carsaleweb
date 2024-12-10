const productName = document.querySelector('h2');
const productPrice = document.querySelector('p');
const productImage = document.querySelector('img');

const urlParams = new URLSearchParams(window.location.search);
const product_name = urlParams.get('name');
const product_price = urlParams.get('price');
const product_image = `img/${urlParams.get('name')}.jpg`;

productName.textContent = product_name;
productPrice.textContent = `Price: ${product_price}`;
productImage.src = product_image;

const addToCartButton = document.querySelector('button');
addToCartButton.addEventListener('click', () => {
  const product = {
    name: product_name,
    price: product_price,
  };

  addToCart(product);
});

function addToCart(product) {
  // Lấy danh sách sản phẩm từ Local Storage (nếu có)
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
  const existingProduct = cartItems.find(item => item.name === product.name);

  if (existingProduct) {
    // Nếu sản phẩm đã tồn tại, tăng số lượng
    existingProduct.quantity += 1;
  } else {
    // Nếu sản phẩm chưa tồn tại, thêm mới vào giỏ hàng
    product.quantity = 1;
    cartItems.push(product);
  }

  // Lưu danh sách sản phẩm mới vào Local Storage
  localStorage.setItem('cart', JSON.stringify(cartItems));

  // Chuyển hướng đến trang Cart.html
  window.location.href = '';
}