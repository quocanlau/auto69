document.addEventListener("DOMContentLoaded", () => {
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

  const carDescriptionInput = document.getElementById("carDescription");
  const carSpecsInput = document.getElementById("carSpecs");

  let currentCars = getCarDatabase();
  let editingId = null;

  function parseSpecs(specsString) {
    const specs = {};
    const lines = specsString.split("\n");
    for (const line of lines) {
      const parts = line.split(":");
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

  function formatSpecs(specsObject) {
    if (!specsObject) return "";
    let specsString = "";
    for (const [key, value] of Object.entries(specsObject)) {
      specsString += `${key}: ${value}\n`;
    }
    return specsString.trim();
  }

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

  function clearForm() {
    form.reset();
    carIdInput.disabled = false;
    formTitle.textContent = "Thêm xe mới";
    editingId = null;
    carDescriptionInput.value = "";
    carSpecsInput.value = "";
  }

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
    carImageInput.value = car.images && car.images[0] ? car.images[0] : "";

    carDescriptionInput.value = car.description || "";
    carSpecsInput.value = formatSpecs(car.specs);

    editingId = id;
    window.scrollTo(0, 0);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const id = carIdInput.value;

    const carData = {
      name: carNameInput.value,
      price: carPriceInput.value,
      year: carYearInput.value,
      km: carKmInput.value,
      transmission: "Số tự động",
      images: [carImageInput.value],
      description: carDescriptionInput.value,
      specs: parseSpecs(carSpecsInput.value),
    };

    if (!carData.specs["Năm sản xuất"]) {
      carData.specs["Năm sản xuất"] = carYearInput.value;
    }
    if (!carData.specs["Số km đã đi"]) {
      carData.specs["Số km đã đi"] = carKmInput.value;
    }

    if (editingId) {
      currentCars[editingId] = carData;
    } else {
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

  clearBtn.addEventListener("click", clearForm);

  resetDataBtn.addEventListener("click", () => {
    const dataKey = "auto69CarData";
    if (
      confirm(
        "CẢNH BÁO: Thao tác này sẽ XÓA SẠCH mọi thay đổi của bạn và khôi phục dữ liệu gốc. Bạn có chắc không?"
      )
    ) {
      localStorage.removeItem(dataKey);
      currentCars = getCarDatabase();
      renderCarList();
    }
  });

  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      sessionStorage.removeItem("isLoggedIn");
      window.location.href = "login.html";
    });
  }

  renderCarList();
});