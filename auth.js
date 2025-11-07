document.addEventListener("DOMContentLoaded", () => {
    // === KHAI BÁO BIẾN ===
    const USER_STORAGE_KEY = 'auto69Users'; // Key để lưu user trong localStorage
    
    // Form đăng nhập
    const loginForm = document.getElementById("loginForm");
    const loginUsernameInput = document.getElementById("login-username");
    const loginPasswordInput = document.getElementById("login-password");
    const loginError = document.getElementById("loginError");
    
    // Form đăng ký
    const registerForm = document.getElementById("registerForm");
    const regUsernameInput = document.getElementById("reg-username");
    const regPasswordInput = document.getElementById("reg-password");
    const registerError = document.getElementById("registerError");
    const registerSuccess = document.getElementById("registerSuccess");

    // === HÀM QUẢN LÝ USER (DÙNG LOCALSTORAGE) ===

    /**
     * Lấy cơ sở dữ liệu user từ localStorage
     * Nếu không có, tạo một CSDL mới với tài khoản 'admin'
     */
    function getUserDatabase() {
        let users = localStorage.getItem(USER_STORAGE_KEY);
        if (!users) {
            // Nếu chưa có CSDL, tạo tài khoản admin mặc định
            const defaultUsers = {
                "admin": "123" // Tài khoản mặc định
            };
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(defaultUsers));
            return defaultUsers;
        }
        return JSON.parse(users);
    }
    
    /**
     * Lưu CSDL user vào localStorage
     */
    function saveUserDatabase(users) {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
    }

    // === XỬ LÝ LOGIC ===

    // 1. Xử lý Form Đăng nhập
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            loginError.classList.add("d-none"); // Ẩn lỗi cũ
            
            const username = loginUsernameInput.value;
            const password = loginPasswordInput.value;
            const users = getUserDatabase();
            
            // Kiểm tra xem user có tồn tại VÀ mật khẩu có khớp không
            if (users[username] && users[username] === password) {
                // ĐĂNG NHẬP THÀNH CÔNG
                sessionStorage.setItem("isLoggedIn", "true");
                window.location.href = "admin.html";
            } else {
                // ĐĂNG NHẬP THẤT BẠI
                loginError.classList.remove("d-none");
            }
        });
    }
    
    // 2. Xử lý Form Đăng ký
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            // Ẩn các thông báo cũ
            registerError.classList.add("d-none");
            registerSuccess.classList.add("d-none");

            const username = regUsernameInput.value;
            const password = regPasswordInput.value;
            
            if (!username || !password) {
                 registerError.textContent = "Vui lòng nhập đủ tên đăng nhập và mật khẩu.";
                 registerError.classList.remove("d-none");
                 return;
            }
            
            const users = getUserDatabase();
            
            // Kiểm tra tên đăng nhập đã tồn tại chưa
            if (users[username]) {
                // ĐÃ TỒN TẠI
                registerError.textContent = "Tên đăng nhập này đã tồn tại!";
                registerError.classList.remove("d-none");
            } else {
                // CHƯA TỒN TẠI -> Tạo user mới
                users[username] = password;
                saveUserDatabase(users); // Lưu CSDL mới
                
                // Hiển thị thành công
                registerSuccess.classList.remove("d-none");
                registerForm.reset(); // Xóa form
            }
        });
    }
});