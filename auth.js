document.addEventListener("DOMContentLoaded", () => {
  const USER_STORAGE_KEY = "auto69Users";

  const loginForm = document.getElementById("loginForm");
  const loginUsernameInput = document.getElementById("login-username");
  const loginPasswordInput = document.getElementById("login-password");
  const loginError = document.getElementById("loginError");

  const registerForm = document.getElementById("registerForm");
  const regUsernameInput = document.getElementById("reg-username");
  const regPasswordInput = document.getElementById("reg-password");
  const registerError = document.getElementById("registerError");
  const registerSuccess = document.getElementById("registerSuccess");

  function getUserDatabase() {
    let users = localStorage.getItem(USER_STORAGE_KEY);
    if (!users) {
      const defaultUsers = {
        admin: "123",
      };
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(defaultUsers));
      return defaultUsers;
    }
    return JSON.parse(users);
  }

  function saveUserDatabase(users) {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      loginError.classList.add("d-none");

      const username = loginUsernameInput.value;
      const password = loginPasswordInput.value;
      const users = getUserDatabase();

      if (users[username] && users[username] === password) {
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.href = "admin.html";
      } else {
        loginError.classList.remove("d-none");
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
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

      if (users[username]) {
        registerError.textContent = "Tên đăng nhập này đã tồn tại!";
        registerError.classList.remove("d-none");
      } else {
        users[username] = password;
        saveUserDatabase(users);

        registerSuccess.classList.remove("d-none");
        registerForm.reset();
      }
    });
  }
});