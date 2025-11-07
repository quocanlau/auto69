document.addEventListener("DOMContentLoaded", () => {
  const carListContainerRow = document.querySelector(".car-listings .row");
  
  // ----- PHẦN 1: VẼ DANH SÁCH XE -----
  function renderCarList() {
    if (!carListContainerRow) {
      console.error("Không tìm thấy container .car-listings .row");
      return;
    }
    
    const carDb = getCarDatabase(); // Lấy dữ liệu từ data-manager.js
    carListContainerRow.innerHTML = ""; // Xóa sạch các xe tĩnh (nếu có)

    if (Object.keys(carDb).length === 0) {
        carListContainerRow.innerHTML = "<p>Không có xe nào để hiển thị.</p>";
        return;
    }

    for (const [id, car] of Object.entries(carDb)) {
      const cardHtml = `
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow-sm">
            <img
              src="${car.images[0]}"
              class="card-img-top car-card-img"
              alt="${car.name}"
              onerror="this.src='img/aboutus.png';"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${car.name}</h5>
              <p class="card-text fw-bold text-primary fs-5">
                ${car.price}
              </p>
              <p class="card-text text-muted">
                ${car.year} | ${car.km} | ${car.transmission}
              </p>
              <a
                href="detail.html?id=${id}"
                class="btn btn-outline-primary mt-auto"
                >Xem chi tiết</a
              >
            </div>
          </div>
        </div>
      `;
      carListContainerRow.insertAdjacentHTML('beforeend', cardHtml);
    }
  }
  
  // Chạy hàm vẽ xe ngay lập tức
  renderCarList();

  // ----- PHẦN 2: LOGIC LỌC TỪ FILE filter.js (ĐÃ DI CHUYỂN VÀO ĐÂY) -----
  const searchForm = document.querySelector(".search-bar form.row");
  const brandSelect = document.getElementById("brand");
  const priceSelect = document.getElementById("price");

  if (!searchForm || !brandSelect || !priceSelect || !carListContainerRow) {
    console.warn("Thiếu các yếu tố để lọc. Bộ lọc sẽ không hoạt động.");
    return;
  }

  // Lấy TẤT CẢ các thẻ xe MÀ CHÚNG TA VỪA VẼ RA
  const allCarCards = carListContainerRow.querySelectorAll(".col-md-4");

  const filterCars = () => {
    const selectedBrand = brandSelect.value.toLowerCase();
    const selectedPriceRange = priceSelect.value.toLowerCase();
    let visibleCount = 0;

    allCarCards.forEach((cardCol) => {
      let brandMatches = false;
      let priceMatches = false;

      const titleElement = cardCol.querySelector(".card-title");
      const priceElement = cardCol.querySelector(".text-primary");

      if (!titleElement || !priceElement) {
        cardCol.style.display = "none";
        return;
      }

      const cardTitle = titleElement.textContent.toLowerCase();
      const cardPriceText = priceElement.textContent;
      const cardPrice = parseInt(cardPriceText.replace(/[^0-9]/g, ""));

      // Kiểm tra hãng xe
      if (
        selectedBrand === "" ||
        selectedBrand === "tất cả hãng xe" ||
        cardTitle.includes(selectedBrand)
      ) {
        brandMatches = true;
      }

      // Kiểm tra giá
      if (
        selectedPriceRange === "" ||
        selectedPriceRange === "tất cả mức giá"
      ) {
        priceMatches = true;
      } else if (selectedPriceRange === "1" && cardPrice < 500000000) {
        priceMatches = true;
      } else if (
        selectedPriceRange === "2" &&
        cardPrice >= 500000000 &&
        cardPrice <= 800000000
      ) {
        priceMatches = true;
      } else if (selectedPriceRange === "3" && cardPrice > 800000000) {
        priceMatches = true;
      }

      if (brandMatches && priceMatches) {
        cardCol.style.display = "block";
        visibleCount++;
      } else {
        cardCol.style.display = "none";
      }
    });
  };

  const applyFilterFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    const brandFromURL = params.get("brand");
    const priceFromURL = params.get("price");

    if (brandFromURL) {
      brandSelect.value = brandFromURL;
    }
    if (priceFromURL) {
      priceSelect.value = priceFromURL;
    }

    if (brandFromURL || priceFromURL) {
      filterCars();
    }
  };

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    filterCars();
  });

  applyFilterFromURL();
});