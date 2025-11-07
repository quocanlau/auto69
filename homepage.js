document.addEventListener("DOMContentLoaded", () => {
  const carDb = getCarDatabase();
  const allCars = Object.entries(carDb);

  const featuredCars = allCars.slice(0, 3);

  const carouselInner = document.querySelector(
    "#featuredCarousel .carousel-inner"
  );
  const carouselIndicators = document.querySelector(
    "#featuredCarousel .carousel-indicators"
  );

  if (carouselInner && carouselIndicators) {
    carouselInner.innerHTML = "";
    carouselIndicators.innerHTML = "";

    featuredCars.forEach(([id, car], index) => {
      const isActive = index === 0 ? "active" : "";

      carouselIndicators.insertAdjacentHTML(
        "beforeend",
        `
        <button
          type="button"
          data-bs-target="#featuredCarousel"
          data-bs-slide-to="${index}"
          class="${isActive}"
          aria-current="${isActive ? "true" : "false"}"
          aria-label="Slide ${index + 1}"
        ></button>
      `
      );

      carouselInner.insertAdjacentHTML(
        "beforeend",
        `
        <div class="carousel-item ${isActive}">
          <img
            src="${car.images[0]}"
            class="d-block w-100 car-card-img"
            alt="${car.name}"
            onerror="this.src='img/aboutus.png';"
          />
          <div
            class="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded p-3"
          >
            <h5>${car.name}</h5>
            <p>${car.price} | ${car.year} | ${car.km}</p>
            <a href="detail.html?id=${id}" class="btn btn-sm btn-outline-light"
              >Xem chi tiết</a
            >
          </div>
        </div>
      `
      );
    });
  }

  const latestListingsRow = document.querySelector(".latest-listings .row");

  if (latestListingsRow) {
    latestListingsRow.innerHTML = "";

    featuredCars.forEach(([id, car]) => {
      const cardHtml = `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100 shadow-sm">
            <img
              src="${car.images[0]}"
              class="card-img-top car-card-img"
              alt="${car.name}"
              onerror="this.src='img/aboutus.png';"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${car.name}</h5>
              <p class="card-text text-muted">${
                car.specs["Kiểu dáng"] || "Sedan"
              } | ${car.year} | ${car.km}</p>
              <h5 class="card-text text-primary fw-bold mb-3">
                ${car.price}
              </h5>
              <div class="mt-auto">
                <a href="detail.html?id=${id}" class="btn btn-outline-primary w-100"
                  >Xem chi tiết</a
                >
              </div>
            </div>
          </div>
        </div>
      `;
      latestListingsRow.insertAdjacentHTML("beforeend", cardHtml);
    });
  }
});