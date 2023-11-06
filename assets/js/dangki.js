document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn chặn việc gửi form

    // Lấy giá trị từ các trường input
    var fullName = document.getElementById('fullName').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;

    // Kiểm tra mật khẩu và xác nhận mật khẩu
    if (password !== confirmPassword) {
        alert("Mật khẩu và Xác nhận mật khẩu không khớp");
        return; // Dừng việc xử lý và không lưu thông tin đăng ký
    } else {
        // Tạo đối tượng chứa thông tin đăng ký
        var user = {
            fullName: fullName,
            username: username,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
            gender: gender
        };

        // Lưu thông tin đăng ký vào localStorage
        localStorage.setItem('user', JSON.stringify(user));
        alert('đăng kí thành công😄😄😄😄')
        // Chuyển hướng đến trang khác (ví dụ: trang chủ)
        window.location.href = 'http://127.0.0.1:5500/MinShop-main/dang-nhap.html';
    }


});
