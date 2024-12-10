// Khai báo các biến
const username = document.getElementById("userName"); // Đổi tên để đồng bộ với HTML
const password = document.getElementById("password");
const loginBtn = document.getElementById("login"); // Nút Login
const registerButton = document.querySelector('a[href="register.html"]'); // Nút Register

// Hàm kiểm tra đăng nhập
function checkLogin(user, pass) {
    // Giả lập thông tin đăng nhập hợp lệ
    if (user === "admin" && pass === "123") {
        // Điều hướng sang trang Home nếu đăng nhập thành công
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        // Báo lỗi nếu sai thông tin đăng nhập
        alert("Wrong login credentials. Please try again!");
        username.value = ""; // Reset trường nhập username
        password.value = ""; // Reset trường nhập password
    }
}

// Gán sự kiện khi nhấn nút Login
loginBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của nút (submit form)
    const user = username.value;
    const pass = password.value;
    checkLogin(user, pass);
});

// Xử lý chuyển hướng nút Register
if (registerButton) {
    registerButton.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn hành động mặc định của link
        window.location.href = "register.html"; // Điều hướng sang trang đăng ký
    });
}
