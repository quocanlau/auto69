// js/inventory.js
document.addEventListener("DOMContentLoaded", () => {
  const carForm = document.getElementById("carForm");
  const carCardContainer = document.querySelector(".car-list-container");
  const STORAGE_KEY = "myCarInventory";
  
  // [CHÚ THÍCH] Lấy các phần tử của form
  const carNameInput = document.getElementById("carName");
  const carBrandInput = document.getElementById("carBrand");
  const carPriceInput = document.getElementById("carPrice");
  const carStatusInput = document.getElementById("carStatus");
  const carImageInput = document.getElementById("carImage");
  const formSubmitButton = carForm.querySelector('button[type="submit"]');

  // [CHÚ THÍCH] Lấy các phần tử của Modal Xóa
  const deleteModalElement = document.getElementById('deleteCarModal');
  const deleteModal = new bootstrap.Modal(deleteModalElement);
  const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');

  // [CHÚ THÍCH] Biến để quản lý trạng thái Sửa và ID của xe cần xóa
  let isEditMode = false;
  let carToEditId = null;
  let carToDeleteId = null;

  // --- HÀM QUẢN LÝ DỮ LIỆU ---

  const getCars = () => {
    const cars = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!cars || cars.length === 0) {
      const sampleCars = generateSampleCars();
      saveCars(sampleCars);
      return sampleCars;
    }
    return cars;
  };

  const saveCars = (cars) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cars));
  };
  
  // [CHÚ THÍCH] Hàm tìm một xe theo ID
  const getCarById = (id) => {
      return getCars().find(car => car.id === id);
  };

  const generateSampleCars = () => { /* ... (Giữ nguyên hàm này) ... */ };

  // --- HÀM HIỂN THỊ (RENDER) ---

  const renderCarAsCard = (car) => {
    // ... (Giữ nguyên logic render card của bạn) ...
    // ... Chỉ đảm bảo 2 nút Sửa và Xóa có class và data-id chính xác ...
    let statusClass = "";
    switch (car.status) {
        case "Còn hàng": statusClass = "status-completed"; break;
        case "Đang xử lý": statusClass = "status-pending"; break;
        case "Hết hàng": statusClass = "status-cancelled"; break;
        default: statusClass = "bg-secondary text-white";
    }

    const cardCol = document.createElement("div");
    cardCol.className = "col-md-6 col-lg-4 mb-4"; 
    cardCol.setAttribute("data-id", car.id);
    
    cardCol.innerHTML = `
      <div class="card h-100 shadow-sm car-card">
        <img src="${car.imageUrl}" class="card-img-top car-card-img" alt="${car.name}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${car.name}</h5>
          <p class="card-text text-muted mb-2">${car.brand}</p>
          <p class="card-text h5 text-primary fw-bold mb-3">${car.price.toLocaleString("vi-VN")} VND</p>
          <div class="mt-auto d-flex justify-content-between align-items-center">
            <span class="status ${statusClass}">${car.status}</span>
            <div class="btn-group">
              <button class="btn btn-sm btn-outline-secondary edit-btn" data-id="${car.id}">
                <i class="fas fa-edit me-1"></i> Sửa
              </button>
              <button class="btn btn-sm btn-outline-danger delete-btn" data-id="${car.id}">
                <i class="fas fa-trash me-1"></i> Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    if (carCardContainer) {
      carCardContainer.appendChild(cardCol);
    }
  };

  const renderAllCars = () => {
    if (!carCardContainer) return;
    
    carCardContainer.innerHTML = ""; 
    const cars = getCars();
    cars.forEach(renderCarAsCard);
  };

  // --- [CHÚ THÍCH] CÁC HÀM MỚI CHO VIỆC SỬA ---

  // [CHÚ THÍCH] Đổ dữ liệu xe vào form để sửa
  const populateFormForEdit = (car) => {
    carNameInput.value = car.name;
    carBrandInput.value = car.brand;
    carPriceInput.value = car.price;
    carStatusInput.value = car.status;
    carImageInput.value = car.imageUrl;
    
    // Đổi trạng thái form
    isEditMode = true;
    carToEditId = car.id;
    formSubmitButton.innerHTML = '<i class="fas fa-save me-2"></i> Cập nhật xe';
    formSubmitButton.classList.remove('btn-primary');
    formSubmitButton.classList.add('btn-success');
    
    // Cuộn lên đầu trang để thấy form
    window.scrollTo(0, 0);
  };

  // [CHÚ THÍCH] Xóa trắng form và reset về trạng thái 'Thêm mới'
  const clearForm = () => {
    carForm.reset(); // Xóa trắng các input
    
    isEditMode = false;
    carToEditId = null;
    formSubmitButton.innerHTML = '<i class="fas fa-plus me-2"></i> Thêm xe';
    formSubmitButton.classList.remove('btn-success');
    formSubmitButton.classList.add('btn-primary');
  };

  // --- CÁC HÀM XỬ LÝ SỰ KIỆN ---

  // [CHÚ THÍCH] Sửa lại hàm Submit để xử lý cả THÊM MỚI và CẬP NHẬT
  const handleFormSubmit = (e) => {
    e.preventDefault(); 

    const name = carNameInput.value;
    const brand = carBrandInput.value;
    const price = parseInt(carPriceInput.value);
    const status = carStatusInput.value;
    let imageUrl = carImageInput.value;

    if (!name || !brand || !price) {
      alert("Vui lòng nhập đầy đủ Tên xe, Hãng xe và Giá.");
      return;
    }
    
    if (!imageUrl) {
      imageUrl = `https://placehold.co/600x400/EEE/333?text=${encodeURIComponent(name)}`;
    }

    const cars = getCars();

    if (isEditMode) {
      // --- Logic CẬP NHẬT XE ---
      const carIndex = cars.findIndex(car => car.id === carToEditId);
      if (carIndex > -1) {
          const updatedCar = {
              ...cars[carIndex], // Giữ lại ID và ngày thêm cũ
              name,
              brand,
              price,
              status,
              imageUrl
          };
          cars[carIndex] = updatedCar;
          saveCars(cars);
          alert("Cập nhật xe thành công!");
      }
    } else {
      // --- Logic THÊM XE (Giữ nguyên) ---
      const newCar = {
        id: Date.now(),
        name,
        brand,
        price,
        status,
        dateAdded: new Date().toLocaleDateString("vi-VN"),
        imageUrl,
      };
      cars.push(newCar);
      saveCars(cars);
    }
    
    renderAllCars(); // Render lại toàn bộ danh sách
    clearForm(); // Xóa trắng form và reset trạng thái
  };

  // [CHÚ THÍCH] Sửa lại hàm click để xử lý Sửa và Mở Modal Xóa
  const handleListClick = (e) => {
    const target = e.target.closest("button");
    if (!target) return; 

    const id = parseInt(target.dataset.id);

    // Xử lý nút XÓA
    if (target.classList.contains("delete-btn")) {
      // [CHÚ THÍCH] Thay vì confirm(), giờ chúng ta mở Modal
      carToDeleteId = id; // Lưu ID xe sẽ xóa
      deleteModal.show(); // Hiển thị Modal [cite: 180]
    }
    
    // Xử lý nút SỬA
    if (target.classList.contains("edit-btn")) {
      const carToEdit = getCarById(id);
      if (carToEdit) {
          populateFormForEdit(carToEdit);
      }
    }
  };
  
  // [CHÚ THÍCH] Hàm xử lý khi nhấn nút "Xác nhận Xóa" trên Modal
  const handleDeleteConfirm = () => {
      if (carToDeleteId) {
          let cars = getCars();
          cars = cars.filter((car) => car.id !== carToDeleteId);
          saveCars(cars);
          renderAllCars(); // Render lại danh sách
          deleteModal.hide(); // Ẩn Modal đi
          carToDeleteId = null; // Reset ID
      }
  };

  // --- KHỞI CHẠY ---
  if (carForm) {
    carForm.addEventListener("submit", handleFormSubmit);
  }
  if (carCardContainer) {
    carCardContainer.addEventListener("click", handleListClick);
  }
  
  // [CHÚ THÍCH] Gán sự kiện cho nút "Xác nhận Xóa" trong Modal
  if (confirmDeleteBtn) {
      confirmDeleteBtn.addEventListener('click', handleDeleteConfirm);
  }
  
  renderAllCars(); 
});