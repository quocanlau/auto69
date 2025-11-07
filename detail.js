document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("mainDetailContent");
  const errorContent = document.getElementById("errorContent");

  const params = new URLSearchParams(window.location.search);
  const carId = params.get("id");

  const allCars = getCarDatabase(); // Lấy data từ data-manager
  const car = allCars[carId];

  if (car) {
    
    mainContent.style.display = "block";
    errorContent.style.display = "none";

    document.title = `Chi tiết ${car.name} - Auto69`;

    document.getElementById("carName").textContent = car.name;
    document.getElementById("carPrice").textContent = car.price;
    document.getElementById("carYear").textContent = car.year;
    document.getElementById("carKm").textContent = car.km;
    document.getElementById("carTransmission").textContent = car.transmission;

    const carouselInner = document.getElementById("carCarouselInner");
    const carouselIndicators = document.getElementById("carCarouselIndicators");

    carouselInner.innerHTML = ""; 
    carouselIndicators.innerHTML = ""; 

    car.images.forEach((imageSrc, index) => {
      const indicator = document.createElement("button");
      indicator.type = "button";
      indicator.dataset.bsTarget = "#carImageCarousel";
      indicator.dataset.bsSlideTo = index;
      indicator.setAttribute("aria-label", `Slide ${index + 1}`);
      if (index === 0) {
        indicator.className = "active";
        indicator.setAttribute("aria-current", "true");
      }
      carouselIndicators.appendChild(indicator);

      const carouselItem = document.createElement("div");
      carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`;
      carouselItem.innerHTML = `
        <img src="${imageSrc}" class="d-block w-100 car-card-img" alt="Ảnh ${
        car.name
      } ${index + 1}">
      `;
      carouselInner.appendChild(carouselItem);
    });

    document.getElementById("desc-content").innerHTML = car.description;

    const specTableBody = document.getElementById("specTableBody");
    specTableBody.innerHTML = ""; 
    for (const [key, value] of Object.entries(car.specs)) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <th>${key}</th>
        <td>${value}</td>
      `;
      specTableBody.appendChild(row);
    }
  } else {
    mainContent.style.display = "none";
    errorContent.style.display = "block";
  }
});