// Khai báo các biến
const confirmPassword = document.getElementById('confirmPassword');
const registerButton = document.getElementById('Register');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');

// Hàm xử lý đăng ký
registerButton.addEventListener('click', () => {
  const username = usernameField.value.trim();
  const password = passwordField.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  // Kiểm tra nếu không có username hoặc password
  if (username === '' || password === '') {
    alert('Please enter both username and password.');
    return;
  }

  // Kiểm tra mật khẩu và xác nhận mật khẩu
  if (password !== confirmPasswordValue) {
    alert('Password incorrect. Please re-enter.');
    return;
  }

  // Kiểm tra username chỉ chứa chữ cái
  const usernameRegex = /^[a-zA-Z]+$/;
  if (!usernameRegex.test(username)) {
    alert('Username should only contain letters.');
    return;
  }

  // Kiểm tra mật khẩu (tối thiểu 6 ký tự)
  if (password.length < 6) {
    alert('Password should be at least 6 characters long.');
    return;
  }

  // Sau khi đăng ký thành công, điều hướng về trang home
  alert('Registration successful!');
  window.location.href = 'index.html'; // Chuyển hướng đến trang chủ
});
