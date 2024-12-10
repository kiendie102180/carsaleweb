  // Lấy dữ liệu giỏ hàng từ localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Kiểm tra nếu giỏ hàng trống
  if (cart.length === 0) {
    document.getElementById('checkout-table').innerHTML = '<tr><td colspan="4">Your cart is empty.</td></tr>';
    document.getElementById('total-price').textContent = 'Total: 0$';
  } else {
    // Hiển thị giỏ hàng trong bảng
    const checkoutTableBody = document.querySelector('#checkout-table tbody');
    let totalPrice = 0;

    cart.forEach((product) => {
      const row = document.createElement('tr');

      // Tạo các cột cho tên, số lượng, giá đơn và tổng
      row.innerHTML = `
        <td>${product.name}</td>
        <td>1</td> <!-- Giả sử số lượng luôn là 1 -->
        <td>${product.price}$</td>
        <td>${product.price}$</td>
      `;
      checkoutTableBody.appendChild(row);
      totalPrice += parseFloat(product.price);
    });

    // Cập nhật tổng giá
    document.getElementById('total-price').textContent = `Total: ${totalPrice}$`;
  }

  // Thêm sự kiện cho nút "Confirm Payment"
  document.getElementById('confirm-payment').addEventListener('click', function() {
    // Có thể thêm các bước thanh toán ở đây

    // Ví dụ: Xóa giỏ hàng sau khi thanh toán
    localStorage.removeItem('cart');

    // Chuyển hướng đến trang xác nhận hoặc trang hoàn tất
    alert('Payment successful! Thank you for your purchase.');
    window.location.href = 'index.html'; // Chuyển về trang chủ hoặc trang khác
  });