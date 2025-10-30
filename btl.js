// js/btl.js
// Logic chính cho trang quản lý (inventory)
document.addEventListener("DOMContentLoaded", () => {
  // --- Logic cho trang Quản lý Kho xe (Inventory) ---
  const carForm = document.getElementById("carForm");
  const carCardContainer = document.querySelector(".car-list-container");
  const STORAGE_KEY = "myCarInventory";
  
  // Chỉ chạy code inventory nếu tìm thấy form
  if (carForm) {
    // [CHÚ THÍCH] Lấy các phần tử của form
    const carNameInput = document.getElementById("carName");
    const carBrandInput = document.getElementById("carBrand");
    const carPriceInput = document.getElementById("carPrice");
    const carStatusInput = document.getElementById("carStatus");
    const carImageInput = document.getElementById("carImage");
    const formSubmitButton = carForm.querySelector('button[type="submit"]');

    // [CHÚ THÍCH] Lấy các phần tử của Modal Xóa
    const deleteModalElement = document.getElementById('deleteCarModal');
    // Kiểm tra modal có tồn tại không
    let deleteModal = null;
    if (deleteModalElement) {
       deleteModal = new bootstrap.Modal(deleteModalElement);
    }
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');

    // [CHÚ THÍCH] Biến để quản lý trạng thái Sửa và ID của xe cần xóa
    let isEditMode = false;
    let carToEditId = null;
    let carToDeleteId = null;

    // --- HÀM QUẢN LÝ DỮ LIỆU ---
    const getCars = () => {
      const cars = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!cars || cars.length === 0) {
        const sampleCars = generateSampleCars(); // Hàm này cần được định nghĩa
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

    // Hàm tạo dữ liệu mẫu (Bạn cần giữ lại hoặc định nghĩa hàm này)
    const generateSampleCars = () => {
        return [
            { id: 1, name: "Toyota Vios", brand: "Toyota", price: 530000000, status: "Còn hàng", imageUrl: "https://vcdn1-vnexpress.vnecdn.net/2023/04/28/Vios-G-2023-trang-jpg-16826660-3277-1110-1682666141.jpg", dateAdded: "20/10/2025" },
            { id: 2, name: "Honda City RS", brand: "Honda", price: 590000000, status: "Đang xử lý", imageUrl: "data:image/jpeg;base64,...(ảnh dài)", dateAdded: "21/10/2025" }
        ];
    };

    // --- HÀM HIỂN THỊ (RENDER) ---
    const renderCarAsCard = (car) => {
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
    const populateFormForEdit = (car) => {
      carNameInput.value = car.name;
      carBrandInput.value = car.brand;
      carPriceInput.value = car.price;
      carStatusInput.value = car.status;
      carImageInput.value = car.imageUrl;
      
      isEditMode = true;
      carToEditId = car.id;
      formSubmitButton.innerHTML = '<i class="fas fa-save me-2"></i> Cập nhật xe';
      formSubmitButton.classList.remove('btn-primary');
      formSubmitButton.classList.add('btn-success');
      
      window.scrollTo(0, 0);
    };

    const clearForm = () => {
      carForm.reset(); 
      
      isEditMode = false;
      carToEditId = null;
      formSubmitButton.innerHTML = '<i class="fas fa-plus me-2"></i> Thêm xe';
      formSubmitButton.classList.remove('btn-success');
      formSubmitButton.classList.add('btn-primary');
    };

    // --- CÁC HÀM XỬ LÝ SỰ KIỆN ---
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
                ...cars[carIndex],
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
      
      renderAllCars(); 
      clearForm(); 
    };

    const handleListClick = (e) => {
      const target = e.target.closest("button");
      if (!target) return; 

      const id = parseInt(target.dataset.id);

      if (target.classList.contains("delete-btn")) {
        carToDeleteId = id; 
        if(deleteModal) deleteModal.show(); 
      }
      
      if (target.classList.contains("edit-btn")) {
        const carToEdit = getCarById(id);
        if (carToEdit) {
            populateFormForEdit(carToEdit);
        }
      }
    };
    
    const handleDeleteConfirm = () => {
        if (carToDeleteId) {
            let cars = getCars();
            cars = cars.filter((car) => car.id !== carToDeleteId);
            saveCars(cars);
            renderAllCars(); 
            if(deleteModal) deleteModal.hide(); 
            carToDeleteId = null; 
        }
    };

    // --- KHỞI CHẠY (Chỉ chạy nếu các phần tử tồn tại) ---
    carForm.addEventListener("submit", handleFormSubmit);
    
    if (carCardContainer) {
      carCardContainer.addEventListener("click", handleListClick);
    }
    
    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', handleDeleteConfirm);
    }
    
    // Render chỉ khi có container
    if(carCardContainer) {
        renderAllCars(); 
    }
  }

  // --- Logic cho các trang khác (nếu có) ---
  console.log("btl.js đã tải.");
});