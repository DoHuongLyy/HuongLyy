document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Ngăn chặn việc gửi form

  // Lấy giá trị từ các trường input
  var email = document.getElementById('emailInput').value;
  var password = document.getElementById('passwordInput').value;

  // Kiểm tra xem email và mật khẩu có khớp với dữ liệu trong localStorage hay không
  var storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUser && storedUser.email === email && storedUser.password === password) {
    // Đăng nhập thành công, chuyển hướng đến trang khác (ví dụ: trang chủ)
    window.location.href = 'http://127.0.0.1:5500/MinShop-main/index.html';
  }
  else if (email =='admin' && password =='admin') {
    window.location.href = 'http://127.0.0.1:5500/MinShop-main/admin.html';
  }
  else {
    // Đăng nhập thất bại, hiển thị thông báo lỗi
    alert('Email hoặc mật khẩu không chính xác');
  }
});
