document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.querySelector(".search-bar form.row");
  const brandSelect = document.getElementById("brand");
  const priceSelect = document.getElementById("price");

  // Sửa lại querySelector để chỉ chọn card xe trong .car-listings
  // (Tránh chọn nhầm card xe trong .featured-listings của trang chủ)
  const carListContainer = document.querySelector(".car-listings");

  // Chỉ chạy code nếu có form tìm kiếm và container danh sách xe
  if (!searchForm || !brandSelect || !priceSelect || !carListContainer) {
    // Nếu ở trang chủ (btl.html), carListContainer sẽ không có
    // Bạn có thể xử lý riêng cho trang chủ nếu muốn
    // Hiện tại, code này sẽ chỉ chạy đúng trên listing.html
    return;
  }

  const allCarCards = carListContainer.querySelectorAll(".col-md-4");

  const handleSearch = (e) => {
    e.preventDefault(); // Ngăn trang tải lại

    const selectedBrand = brandSelect.value;
    const selectedPriceRange = priceSelect.value;
    let visibleCount = 0;

    allCarCards.forEach((cardCol) => {
      let brandMatches = false;
      let priceMatches = false;

      // 1. Lấy thông tin từ card
      const titleElement = cardCol.querySelector(".card-title");
      const priceElement = cardCol.querySelector(".text-primary");

      if (!titleElement || !priceElement) {
        cardCol.style.display = "none"; // Ẩn card nếu thiếu thông tin
        return;
      }

      const cardTitle = titleElement.textContent.toLowerCase();
      const cardPriceText = priceElement.textContent;
      // Chuyển "530.000.000 VND" thành số 530000000
      const cardPrice = parseInt(cardPriceText.replace(/[^0-9]/g, ""));

      // 2. Kiểm tra Hãng xe
      if (
        selectedBrand === "Tất cả hãng xe" ||
        cardTitle.includes(selectedBrand)
      ) {
        brandMatches = true;
      }

      // 3. Kiểm tra Khoảng giá
      if (selectedPriceRange === "Tất cả mức giá") {
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

      // 4. Ẩn/Hiện card
      if (brandMatches && priceMatches) {
        cardCol.style.display = "block"; // Hiện card
        visibleCount++;
      } else {
        cardCol.style.display = "none"; // Ẩn card
      }
    });
  };

  // Gán sự kiện 'submit' cho form
  searchForm.addEventListener("submit", handleSearch);
});