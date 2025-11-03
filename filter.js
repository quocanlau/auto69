document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.querySelector(".search-bar form.row");
  const brandSelect = document.getElementById("brand");
  const priceSelect = document.getElementById("price");
  const carListContainer = document.querySelector(".car-listings");

  if (!searchForm || !brandSelect || !priceSelect || !carListContainer) {
    return;
  }

  const allCarCards = carListContainer.querySelectorAll(".col-md-4");

  const filterCars = () => {
    const selectedBrand = brandSelect.value.toLowerCase();
    const selectedPriceRange = priceSelect.value;
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

      if (
        selectedBrand === "" ||
        selectedBrand === "tất cả hãng xe" ||
        cardTitle.includes(selectedBrand)
      ) {
        brandMatches = true;
      }

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