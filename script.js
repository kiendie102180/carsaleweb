document.addEventListener('DOMContentLoaded', () => {
    const cartTable = document.getElementById('cart-table');
    const totalPrice = document.getElementById('total-price');
    // Lấy danh sách sản phẩm từ Local Storage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Hiển thị sản phẩm trong giỏ hàng
    cartItems.forEach(item => {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${item.price}</td>
        <td>${item.quantity * parseFloat(item.price.replace(/[^\d.]/g, ''))}$</td>
      `;
      cartTable.appendChild(newRow);
    });
  
    // Tính tổng giá trị giỏ hàng
    const total = cartItems.reduce((acc, item) => {
        const totalValue = item.quantity * parseFloat(item.price.replace(/[^\d.]/g, ''));
        return acc + totalValue;
      }, 0);
  
    totalPrice.textContent = `Tổng giá trị: ${total}$`;
   // Thêm sự kiện cho nút Làm mới giỏ hàng
  const refreshCartButton = document.getElementById('refresh-cart');
  refreshCartButton.addEventListener('click', () => {
    const confirmRefresh = confirm('Bạn có chắc chắn muốn làm mới giỏ hàng?');
    if (confirmRefresh) {
      // Làm mới giỏ hàng bằng cách xóa tất cả sản phẩm
      cartItems.length = 0;

      // Lưu danh sách sản phẩm mới vào Local Storage
      localStorage.setItem('cart', JSON.stringify(cartItems));

      // Cập nhật lại bảng giỏ hàng
      displayCartItems();
    }
  });

  // ... (các phần khác)

  function displayCartItems() {
    // Xóa tất cả các dòng trong bảng
    while (cartTable.lastElementChild) {
      cartTable.removeChild(cartTable.lastElementChild);
    }

    // Hiển thị lại sản phẩm trong giỏ hàng
    cartItems.forEach((item, index) => {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td><input type="checkbox" class="product-checkbox" data-index="${index}"></td>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${item.price}</td>
        <td>${item.quantity * parseFloat(item.price.replace(/[^\d.]/g, ''))}$</td>
      `;
      cartTable.appendChild(newRow);
    });

    // Tính lại tổng giá trị giỏ hàng
    const total = cartItems.reduce((acc, item) => {
      return acc + item.quantity * parseFloat(item.price.replace(/[^\d.]/g, ''));
    }, 0);

    totalPrice.textContent = `Tổng giá trị: ${total}$`;
  }

  // Thêm sự kiện cho nút Thanh toán
  const checkoutButton = document.getElementById('Thanh Toan');
  checkoutButton.addEventListener('click', () => {
    const confirmPurchase = confirm('Bạn có chắc chắn muốn mua sản phẩm của chúng tôi?');
    if (confirmPurchase) {
      // Xóa hết sản phẩm trong giỏ hàng khi thanh toán
      cartItems.length = 0;

      // Lưu giỏ hàng trống vào Local Storage
      localStorage.setItem('cart', JSON.stringify(cartItems));

      // Hiển thị giỏ hàng sau khi đã xóa
      displayCartItems();
      alert('Cảm ơn bạn đã mua hàng!');
    } else {
      // Khách hàng chọn "Hủy"
    }
  });
  });