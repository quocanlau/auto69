document.addEventListener("DOMContentLoaded", () => {
  // === LẤY CÁC THÀNH PHẦN DOM ===
  const form = document.getElementById("carForm");
  const formTitle = document.getElementById("formTitle");
  const carIdInput = document.getElementById("carId");
  const carNameInput = document.getElementById("carName");
  const carPriceInput = document.getElementById("carPrice");
  const carYearInput = document.getElementById("carYear");
  const carKmInput = document.getElementById("carKm");
  const carImageInput = document.getElementById("carImage");
  const tableBody = document.getElementById("carListTableBody");
  const clearBtn = document.getElementById("clearBtn");
  const resetDataBtn = document.getElementById("resetDataBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  // [MỚI] Lấy 2 ô nhập liệu mới
  const carDescriptionInput = document.getElementById("carDescription");
  const carSpecsInput = document.getElementById("carSpecs");

  let currentCars = getCarDatabase(); // Lấy dữ liệu từ data-manager
  let editingId = null; 

  // === CÁC HÀM XỬ LÝ ===

  // [MỚI] Hàm chuyển chuỗi "Key: Value" thành Object
  function parseSpecs(specsString) {
    const specs = {};
    const lines = specsString.split('\n'); // Tách chuỗi thành từng dòng
    for (const line of lines) {
        const parts = line.split(':'); // Tách dòng thành Key và Value
        if (parts.length === 2) {
            const key = parts[0].trim();
            const value = parts[1].trim();
            if (key && value) {
                specs[key] = value;
            }
        }
    }
    return specs;
  }

  // [MỚI] Hàm chuyển Object specs thành chuỗi "Key: Value"
  function formatSpecs(specsObject) {
    if (!specsObject) return "";
    let specsString = "";
    for (const [key, value] of Object.entries(specsObject)) {
        specsString += `${key}: ${value}\n`; // Nối lại thành chuỗi
    }
    return specsString.trim(); // Xóa dòng trống cuối cùng
  }

  // Hàm: Hiển thị danh sách xe ra bảng
  function renderCarList() {
    tableBody.innerHTML = ""; 
    for (const [id, car] of Object.entries(currentCars)) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><strong>${id}</strong></td>
        <td>${car.name}</td>
        <td>${car.price}</td>
        <td>
          <button class="btn btn-sm btn-outline-primary edit-btn" data-id="${id}">Sửa</button>
          <button class="btn btn-sm btn-outline-danger delete-btn" data-id="${id}">Xóa</button>
        </td>
      `;
      tableBody.appendChild(row);
    }
  }

  // Hàm: Xóa form
  function clearForm() {
    form.reset();
    carIdInput.disabled = false;
    formTitle.textContent = "Thêm xe mới";
    editingId = null;
    // [CẬP NHẬT] Xóa cả 2 ô textarea
    carDescriptionInput.value = "";
    carSpecsInput.value = "";
  }

  // Hàm: Tải dữ liệu xe vào form để sửa
  // (ĐÂY LÀ PHẦN SỬA LỖI QUAN TRỌNG NHẤT)
  function loadCarForEditing(id) {
    const car = currentCars[id];
    if (!car) return;

    formTitle.textContent = `Sửa xe: ${id}`;
    carIdInput.value = id;
    carIdInput.disabled = true;
    carNameInput.value = car.name || "";
    carPriceInput.value = car.price || "";
    carYearInput.value = car.year || "";
    carKmInput.value = car.km || "";
    carImageInput.value = (car.images && car.images[0]) ? car.images[0] : "";
    
    // [CẬP NHẬT] Hiển thị mô tả và thông số
    carDescriptionInput.value = car.description || "";
    carSpecsInput.value = formatSpecs(car.specs); // Chuyển object thành chuỗi
    
    editingId = id;
    window.scrollTo(0, 0); 
  }

  // === CÁC EVENT LISTENER ===

  // Xử lý khi submit form (Thêm hoặc Sửa)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const id = carIdInput.value;
    
    // [CẬP NHẬT] Tạo đối tượng xe đầy đủ
    const carData = {
        name: carNameInput.value,
        price: carPriceInput.value,
        year: carYearInput.value,
        km: carKmInput.value,
        transmission: "Số tự động", // Tạm thời
        images: [carImageInput.value],
        description: carDescriptionInput.value, // Lấy từ textarea
        specs: parseSpecs(carSpecsInput.value) // Chuyển chuỗi thành object
    };
    
    // Tự động thêm một vài thông số nếu chưa có
    if (!carData.specs["Năm sản xuất"]) {
        carData.specs["Năm sản xuất"] = carYearInput.value;
    }
    if (!carData.specs["Số km đã đi"]) {
        carData.specs["Số km đã đi"] = carKmInput.value;
    }


    if (editingId) {
      // Đang SỬA
      currentCars[editingId] = carData;
    } else {
      // Đang THÊM MỚI
      if (currentCars[id]) {
        alert("LỖI: ID xe này đã tồn tại. Vui lòng chọn ID khác.");
        return;
      }
      currentCars[id] = carData;
    }

    saveCarDatabase(currentCars); 
    renderCarList(); 
    clearForm();
  });

  // Xử lý nút Xóa / Sửa
  tableBody.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (!id) return;

    if (e.target.classList.contains("delete-btn")) {
      if (confirm(`Bạn có chắc muốn xóa xe có ID: ${id} không?`)) {
        delete currentCars[id]; 
        saveCarDatabase(currentCars); 
        renderCarList(); 
      }
    } else if (e.target.classList.contains("edit-btn")) {
      loadCarForEditing(id);
    }
  });
  
  // Nút Hủy (Clear form)
  clearBtn.addEventListener("click", clearForm);

  // Nút Reset dữ liệu
  resetDataBtn.addEventListener("click", () => {
      // Sử dụng key thật từ data-manager.js để đảm bảo
      const dataKey = 'auto69CarData';
      if (confirm("CẢNH BÁO: Thao tác này sẽ XÓA SẠCH mọi thay đổi của bạn và khôi phục dữ liệu gốc. Bạn có chắc không?")) {
          localStorage.removeItem(dataKey); 
          currentCars = getCarDatabase(); 
          renderCarList();
      }
  });

  // Nút Đăng xuất
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        sessionStorage.removeItem("isLoggedIn");
        window.location.href = "login.html";
    });
  }

  // Chạy lần đầu khi tải trang
  renderCarList();
});