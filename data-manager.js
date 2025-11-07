const originalCarDatabase = {
  vios: {
    name: "Toyota Vios 1.5G",
    price: "530.000.000 VND",
    year: "2023",
    km: "10.000 km",
    transmission: "Số tự động",
    images: ["img/VRG-S-3R3-1.png", "img/viosbtl.jpg"],
    description: `
      <h5 class="fw-bold">Mô tả xe Toyota Vios 1.5G 2023</h5>
      <p>Toyota Vios 1.5G 2023 là phiên bản cao cấp nhất, xe lướt chạy 10.000 km, tình trạng như mới. Xe được trang bị động cơ 1.5L bền bỉ, tiết kiệm nhiên liệu cùng hộp số tự động vô cấp CVT mượt mà.</p>
      <p>Ngoại thất màu đỏ cá tính, nội thất kem sang trọng. Xe đã được Auto69 kiểm định 176 hạng mục, cam kết không đâm đụng, không ngập nước, pháp lý rõ ràng.</p>
    `,
    specs: {
      "Năm sản xuất": "2023",
      "Tình trạng": "Đã qua sử dụng (Lướt)",
      "Số km đã đi": "10.000 km",
      "Kiểu dáng": "Sedan",
      "Hộp số": "Tự động vô cấp (CVT)",
      "Nhiên liệu": "Xăng",
      "Động cơ": "1.5L I4 (Dual VVT-i)",
      "Màu ngoại thất": "Đỏ",
      "Màu nội thất": "Be",
    },
  },
  city: {
    name: "Honda City RS",
    price: "590.000.000 VND",
    year: "2023",
    km: "Mới 100%",
    transmission: "Số tự động",
    images: ["img/city-grey.jpg", "img/citybtl.jpg"],
    description: `
      <h5 class="fw-bold">Mô tả xe Honda City RS 2023</h5>
      <p>Phiên bản RS thể thao cao cấp nhất của Honda City. Xe mới 100% chưa lăn bánh, bảo hành chính hãng. Trang bị động cơ 1.5L i-VTEC cho cảm giác lái phấn khích.</p>
      <p>Nội thất da lộn kết hợp chỉ đỏ thể thao, lẫy chuyển số trên vô lăng, hệ thống Honda SENSING an toàn vượt trội.</p>
    `,
    specs: {
      "Năm sản xuất": "2023",
      "Tình trạng": "Mới 100%",
      "Số km đã đi": "0 km",
      "Kiểu dáng": "Sedan",
      "Hộp số": "Tự động vô cấp (CVT)",
      "Nhiên liệu": "Xăng",
      "Động cơ": "1.5L i-VTEC",
      "Màu ngoại thất": "Xám",
      "Màu nội thất": "Đen (chỉ đỏ)",
    },
  },
  ranger: {
    name: "Ford Ranger Wildtrak",
    price: "850.000.000 VND",
    year: "2022",
    km: "30.000 km",
    transmission: "Số tự động",
    images: ["img/ford-ranger-wildtrak-mau-den-icon-fordlongbien.jpg", "img/wildtrakbtl.jpg"],
    description: `
      <h5 class="fw-bold">Mô tả xe Ford Ranger Wildtrak 2022</h5>
      <p>"Vua bán tải" Ford Ranger bản Wildtrak 4x4. Xe đã đi 30.000 km, chủ cũ giữ gìn cẩn thận, bảo dưỡng đầy đủ. Động cơ Bi-Turbo 2.0L cực kỳ mạnh mẽ và tiết kiệm.</p>
      <p>Xe trang bị nắp thùng cuộn, lót thùng, ghế da Wildtrak, màn hình trung tâm 12-inch, hệ thống an toàn cao cấp.</p>
    `,
    specs: {
      "Năm sản xuất": "2022",
      "Tình trạng": "Đã qua sử dụng",
      "Số km đã đi": "30.000 km",
      "Kiểu dáng": "Bán tải (Pickup)",
      "Hộp số": "Tự động 10 cấp",
      "Nhiên liệu": "Diesel",
      "Động cơ": "2.0L Bi-Turbo",
      "Dẫn động": "Hai cầu (4x4)",
      "Màu ngoại thất": "Đen",
      "Màu nội thất": "Đen",
    },
  },
  
  accent: {
    name: "Hyundai Accent 1.4 AT",
    price: "500.000.000 VND",
    year: "2022",
    km: "25.000 km",
    transmission: "Số tự động",
    images: ["img/hyundai-accent.jpg"],
    description: `
      <h5 class="fw-bold">Mô tả xe Hyundai Accent 1.4 AT 2022</h5>
      <p>Mẫu sedan hạng B bán chạy nhất nhì phân khúc. Phiên bản 1.4 AT Tiêu chuẩn, xe gia đình sử dụng kỹ, đã đi 25.000 km. Động cơ 1.4L, hộp số tự động 6 cấp, tiết kiệm nhiên liệu.</p>
      <p>Cam kết xe không tai nạn, không ngập nước. Hỗ trợ trả góp.</p>
    `,
    specs: {
      "Năm sản xuất": "2022",
      "Tình trạng": "Đã qua sử dụng",
      "Số km đã đi": "25.000 km",
      "Kiểu dáng": "Sedan",
      "Hộp số": "Tự động 6 cấp",
      "Nhiên liệu": "Xăng",
      "Động cơ": "1.4L",
      "Màu ngoại thất": "Trắng",
      "Màu nội thất": "Kem",
    },
  },
  mazda3: {
    name: "Mazda 3 Sport 1.5L",
    price: "680.000.000 VND",
    year: "2023",
    km: "Mới 100%",
    transmission: "Số tự động",
    images: ["img/mazda3.jpg"],
    description: `
      <h5 class="fw-bold">Mô tả xe Mazda 3 Sport 1.5L 2023</h5>
      <p>Xe mới 100% chính hãng, phiên bản Sport (Hatchback) 1.5L Premium. Thiết kế KODO-Ngôn ngữ thiết kế động. Nội thất bọc da cao cấp, cửa sổ trời, màn hình 8.8-inch.</p>
      <p>Sẵn xe, đủ màu, giao ngay. Hỗ trợ đăng ký, đăng kiểm.</p>
    `,
    specs: {
      "Năm sản xuất": "2023",
      "Tình trạng": "Mới 100%",
      "Số km đã đi": "0 km",
      "Kiểu dáng": "Hatchback",
      "Hộp số": "Tự động 6 cấp",
      "Nhiên liệu": "Xăng",
      "Động cơ": "1.5L SkyActiv-G",
      "Màu ngoại thất": "Đỏ (Soul Red Crystal)",
      "Màu nội thất": "Đen",
    },
  },
  creta: {
    name: "Hyundai Creta Cao cấp",
    price: "700.000.000 VND",
    year: "2023",
    km: "5.000 km",
    transmission: "Số tự động",
    images: ["img/creta.jpg"],
    description: `
      <h5 class="fw-bold">Mô tả xe Hyundai Creta Cao cấp 2023</h5>
      <p>Xe siêu lướt, mới chạy 5.000 km. Phiên bản 1.5 Cao cấp nhất, trang bị full-option: hệ thống an toàn SmartSense, làm mát ghế, loa Bose, màn hình 10.25-inch.</p>
      <p>Xe còn bảo hành chính hãng dài. Tiết kiệm hơn 100 triệu so với xe mới.</p>
    `,
    specs: {
      "Năm sản xuất": "2023",
      "Tình trạng": "Đã qua sử dụng (Lướt)",
      "Số km đã đi": "5.000 km",
      "Kiểu dáng": "SUV (Cỡ B)",
      "Hộp số": "Tự động vô cấp (IVT)",
      "Nhiên liệu": "Xăng",
      "Động cơ": "1.5L SmartStream",
      "Màu ngoại thất": "Đỏ-Đen",
      "Màu nội thất": "Đen",
    },
  },
  everest: {
    name: "Ford Everest Titanium",
    price: "1.200.000.000 VND",
    year: "2023",
    km: "15.000 km",
    transmission: "Số tự động",
    images: ["img/everest.jpg"],
    description: `
      <h5 class="fw-bold">Mô tả xe Ford Everest Titanium 2023</h5>
      <p>Ford Everest Titanium 4x2 một cầu, xe lướt 15.000 km. Động cơ Single-Turbo 2.0L mạnh mẽ. Thiết kế mới hầm hố, nội thất da cao cấp, màn hình dọc 12-inch, cần số điện tử.</p>
      <p>Cam kết chất lượng, xe không một lỗi nhỏ. Bank hỗ trợ 70%.</p>
    `,
    specs: {
      "Năm sản xuất": "2023",
      "Tình trạng": "Đã qua sử dụng (Lướt)",
      "Số km đã đi": "15.000 km",
      "Kiểu dáng": "SUV (Cỡ D)",
      "Hộp số": "Tự động 6 cấp",
      "Nhiên liệu": "Diesel",
      "Động cơ": "2.0L Single-Turbo",
      "Dẫn động": "Cầu sau (RWD)",
      "Màu ngoại thất": "Trắng",
      "Màu nội thất": "Đen",
    },
  },
  crv: {
    name: "Honda CR-V G",
    price: "950.000.000 VND",
    year: "2023",
    km: "5.000 km",
    transmission: "Số tự động",
    images: ["img/crv-g.jpg"],
    description: `
      <h5 class="fw-bold">Mô tả xe Honda CR-V G 2023</h5>
      <p>Bản G (7 chỗ) xe siêu lướt 5.000 km. Động cơ 1.5L Turbo VTEC tăng áp. Trang bị gói an toàn Honda SENSING, cửa sổ trời, cốp điện.</p>
      <p>Xe như mới, không một vết xước. Bảo hành chính hãng tới 2026.</p>
    `,
    specs: {
      "Năm sản xuất": "2023",
      "Tình trạng": "Đã qua sử dụng (Lướt)",
      "Số km đã đi": "5.000 km",
      "Kiểu dáng": "SUV (Cỡ C)",
      "Hộp số": "Tự động vô cấp (CVT)",
      "Nhiên liệu": "Xăng",
      "Động cơ": "1.5L Turbo",
      "Màu ngoại thất": "Trắng",
      "Màu nội thất": "Đen",
    },
  },
  fortuner: {
    name: "Toyota Fortuner Legender",
    price: "1.100.000.000 VND",
    year: "2022",
    km: "20.000 km",
    transmission: "Số tự động",
    images: ["img/fortuner.jpg"],
    description: `
      <h5 class="fw-bold">Mô tả xe Toyota Fortuner Legender 2022</h5>
      <p>Bản Legender 1 cầu (4x2), máy dầu 2.4L, đã đi 20.000 km. Ngoại hình Legender thể thao, đèn LED, cốp điện. Nội thất 2 màu, camera 360.</p>
      <p>Xe được chủ cũ chăm sóc kỹ, cam kết chất lượng. Bao test hãng.</p>
    `,
    specs: {
      "Năm sản xuất": "2022",
      "Tình trạng": "Đã qua sử dụng",
      "Số km đã đi": "20.000 km",
      "Kiểu dáng": "SUV (Cỡ D)",
      "Hộp số": "Tự động 6 cấp",
      "Nhiên liệu": "Diesel",
      "Động cơ": "2.4L",
      "Dẫn động": "Cầu sau (RWD)",
      "Màu ngoại thất": "Trắng Ngọc Trai",
      "Màu nội thất": "Đen-Đỏ",
    },
  },
  tucson: {
    name: "Hyundai Tucson 1.6 Turbo",
    price: "890.000.000 VND",
    year: "2023",
    km: "Mới 100%",
    transmission: "Số tự động",
    images: ["img/tucsson.jpg"],
    description: `
      <h5 class="fw-bold">Mô tả xe Hyundai Tucson 1.6 Turbo 2023</h5>
      <p>Xe mới 100%, bản 1.6 Turbo HTRAC cao cấp nhất. Động cơ tăng áp mạnh mẽ, dẫn động 4 bánh. Thiết kế tương lai với lưới tản nhiệt tham số, cần số nút bấm.</p>
      <p>Giao xe ngay, giá tốt nhất thị trường.</p>
    `,
    specs: {
      "Năm sản xuất": "2023",
      "Tình trạng": "Mới 100%",
      "Số km đã đi": "0 km",
      "Kiểu dáng": "SUV (Cỡ C)",
      "Hộp số": "Tự động ly hợp kép 7 cấp",
      "Nhiên liệu": "Xăng",
      "Động cơ": "1.6L Turbo",
      "Dẫn động": "4 bánh (HTRAC)",
      "Màu ngoại thất": "Bạc",
      "Màu nội thất": "Đen",
    },
  },
  cx5: {
    name: "Mazda CX-5 Premium",
    price: "820.000.000 VND",
    year: "2023",
    km: "12.000 km",
    transmission: "Số tự động",
    images: ["img/cx-5.jpg"],
    description: `
      <h5 class="fw-bold">Mô tả xe Mazda CX-5 Premium 2023</h5>
      <p>Bản 2.0 Premium (New Mazda CX-5). Xe lướt 12.000 km. Trang bị gói an toàn i-Activsense, màn hình 8-inch, loa Bose, cốp điện.</p>
      <p>Xe còn như mới, giá cực tốt. Tiết kiệm chi phí so với xe đập hộp.</p>
    `,
    specs: {
      "Năm sản xuất": "2023",
      "Tình trạng": "Đã qua sử dụng (Lướt)",
      "Số km đã đi": "12.000 km",
      "Kiểu dáng": "SUV (Cỡ C)",
      "Hộp số": "Tự động 6 cấp",
      "Nhiên liệu": "Xăng",
      "Động cơ": "2.0L SkyActiv-G",
      "Màu ngoại thất": "Xám (Machine Grey)",
      "Màu nội thất": "Đen",
    },
  },
  seltos: {
    name: "Kia Seltos 1.4 Premium",
    price: "650.000.000 VND",
    year: "2022",
    km: "22.000 km",
    transmission: "Số tự động",
    images: ["img/seltos.jpg"],
    description: `
      <h5 class="fw-bold">Mô tả xe Kia Seltos 1.4 Premium 2022</h5>
      <p>Bản 1.4 Turbo Premium, đã đi 22.000 km. Động cơ 1.4L tăng áp mạnh mẽ, hộp số ly hợp kép. Trang bị cửa sổ trời, làm mát ghế, màn hình 10.25-inch.</p>
      <p>Xe được bảo dưỡng định kỳ, cam kết chất lượng.</p>
    `,
    specs: {
      "Năm sản xuất": "2022",
      "Tình trạng": "Đã qua sử dụng",
      "Số km đã đi": "22.000 km",
      "Kiểu dáng": "SUV (Cỡ B)",
      "Hộp số": "Tự động ly hợp kép 7 cấp",
      "Nhiên liệu": "Xăng",
      "Động cơ": "1.4L Turbo",
      "Màu ngoại thất": "Vàng",
      "Màu nội thất": "Be",
    },
  },
  xpander: {
    name: "Mitsubishi Xpander Cross",
    price: "680.000.000 VND",
    year: "2023",
    km: "8.000 km",
    transmission: "Số tự động",
    images: ["img/expander.jpg"],
    description: `
      <h5 class="fw-bold">Mô tả xe Mitsubishi Xpander Cross 2023</h5>
      <p>Phiên bản Cross (bản nâng cấp 2023). Xe lướt 8.000 km, nội ngoại thất như mới. Thiết kế SUV mạnh mẽ, khoảng sáng gầm cao. Động cơ 1.5L MIVEC bền bỉ, tiết kiệm.</p>
      <p>Xe gia đình 7 chỗ rộng rãi, nhập khẩu Indonesia.</p>
    `,
    specs: {
      "Năm sản xuất": "2023",
      "Tình trạng": "Đã qua sử dụng (Lướt)",
      "Số km đã đi": "8.000 km",
      "Kiểu dáng": "MPV (lai SUV)",
      "Hộp số": "Tự động 4 cấp",
      "Nhiên liệu": "Xăng",
      "Động cơ": "1.5L MIVEC",
      "Màu ngoại thất": "Cam-Đen",
      "Màu nội thất": "Đen-Xanh",
    },
  },
  vf8: {
    name: "VinFast VF 8 Eco",
    price: "900.000.000 VND",
    year: "2023",
    km: "10.000 km",
    transmission: "Số tự động",
    images: ["img/vf8.jpg"],
    description: `
      <h5 class="fw-bold">Mô tả xe VinFast VF 8 Eco 2023</h5>
      <p>Xe điện VinFast VF 8 bản Eco, đã đi 10.000 km (chưa bao gồm pin). Động cơ điện mạnh mẽ, màn hình 15.6-inch, trần kính panorama.</p>
      <p>Trải nghiệm công nghệ xe điện thông minh, chi phí vận hành rẻ.</p>
    `,
    specs: {
      "Năm sản xuất": "2023",
      "Tình trạng": "Đã qua sử dụng (Lướt)",
      "Số km đã đi": "10.000 km",
      "Kiểu dáng": "SUV (Cỡ D)",
      "Hộp số": "Tự động (Xe điện)",
      "Nhiên liệu": "Điện",
      "Động cơ": "Motor điện",
      "Dẫn động": "4 bánh (AWD)",
      "Màu ngoại thất": "Xanh (Deep Ocean)",
      "Màu nội thất": "Đen",
    },
  },
  cross: {
    name: "Toyota Corolla Cross 1.8V",
    price: "750.000.000 VND",
    year: "2022",
    km: "30.000 km",
    transmission: "Số tự động",
    images: ["img/toyota-corolla-cross.jpg"],
    description: `
      <h5 class="fw-bold">Mô tả xe Toyota Corolla Cross 1.8V 2022</h5>
      <p>Bản 1.8V (Xăng), xe đã đi 30.000 km. Nhập khẩu Thái Lan. Trang bị gói an toàn Toyota Safety Sense, cửa sổ trời.</p>
      <p>Xe SUV 5 chỗ gầm cao, bền bỉ, giữ giá. Cam kết chất lượng.</p>
    `,
    specs: {
      "Năm sản xuất": "2022",
      "Tình trạng": "Đã qua sử dụng",
      "Số km đã đi": "30.000 km",
      "Kiểu dáng": "SUV (Cỡ B+)",
      "Hộp số": "Tự động vô cấp (CVT)",
      "Nhiên liệu": "Xăng",
      "Động cơ": "1.8L",
      "Màu ngoại thất": "Bạc",
      "Màu nội thất": "Đen",
    },
  },
  territory: {
    name: "Ford Territory Titanium",
    price: "810.000.000 VND",
    year: "2023",
    km: "7.000 km",
    transmission: "Số tự động",
    images: ["img/TERRITORY-TITANIUM.jpg"],
    description: `
      <h5 class="fw-bold">Mô tả xe Ford Territory Titanium 2023</h5>
      <p>Xe lướt 7.000 km, bản Titanium 1.5L. Nội thất hiện đại với 2 màn hình 12.3-inch, cần số điện tử, phanh tay điện tử. Động cơ EcoBoost mạnh mẽ.</p>
      <p>Giá tốt, tiết kiệm nhiều so với xe mới.</p>
    `,
    specs: {
      "Năm sản xuất": "2023",
      "Tình trạng": "Đã qua sử dụng (Lướt)",
      "Số km đã đi": "7.000 km",
      "Kiểu dáng": "SUV (Cỡ C)",
      "Hộp số": "Tự động ly hợp kép 7 cấp",
      "Nhiên liệu": "Xăng",
      "Động cơ": "1.5L EcoBoost",
      "Màu ngoại thất": "Đỏ",
      "Màu nội thất": "Be",
    },
  },
  hrv: {
    name: "Honda HR-V RS",
    price: "830.000.000 VND",
    year: "2023",
    km: "Mới 100%",
    transmission: "Số tự động",
    images: ["img/hrv.jpg"],
    description: `
      <h5 class="fw-bold">Mô tả xe Honda HR-V RS 2023</h5>
      <p>Xe mới 100%, bản RS cao cấp nhất, động cơ 1.5L Turbo VTEC (giống CR-V). Thiết kế SUV lai coupe thể thao. Gói an toàn Honda SENSING.</p>
      <p>Sẵn xe giao ngay, hỗ trợ trả góp.</p>
    `,
    specs: {
      "Năm sản xuất": "2023",
      "Tình trạng": "Mới 100%",
      "Số km đã đi": "0 km",
      "Kiểu dáng": "SUV (Cỡ B)",
      "Hộp số": "Tự động vô cấp (CVT)",
      "Nhiên liệu": "Xăng",
      "Động cơ": "1.5L Turbo",
      "Màu ngoại thất": "Trắng Ngọc Trai",
      "Màu nội thất": "Đen (chỉ đỏ)",
    },
  },
  santafe: {
    name: "Hyundai Santa Fe Cao cấp",
    price: "1.050.000.000 VND",
    year: "2022",
    km: "35.000 km",
    transmission: "Số tự động",
    images: ["img/santafe.jpg"],
    description: `
      <h5 class="fw-bold">Mô tả xe Hyundai Santa Fe Cao cấp 2022</h5>
      <p>Bản Xăng Cao cấp, 7 chỗ, đã đi 35.000 km. Trang bị full-option: cửa sổ trời panorama, 2 màn hình, cần số nút bấm, hệ thống an toàn SmartSense, camera 360.</p>
      <p>Xe gia đình sử dụng, cam kết không lỗi. Hỗ trợ 70% ngân hàng.</p>
    `,
    specs: {
      "Năm sản xuất": "2022",
      "Tình trạng": "Đã qua sử dụng",
      "Số km đã đi": "35.000 km",
      "Kiểu dáng": "SUV (Cỡ D)",
      "Hộp số": "Tự động 6 cấp",
      "Nhiên liệu": "Xăng",
      "Động cơ": "2.5L SmartStream",
      "Màu ngoại thất": "Đen",
      "Màu nội thất": "Nâu",
    },
  },
  mazda6: {
    name: "Mazda 6 2.0 Premium",
    price: "780.000.000 VND",
    year: "2022",
    km: "19.000 km",
    transmission: "Số tự động",
    images: ["img/mazda6.jpg"],
    description: `
      <h5 class="fw-bold">Mô tả xe Mazda 6 2.0 Premium 2022</h5>
      <p>Sedan hạng D cao cấp, bản 2.0 Premium, lướt 19.000 km. Nội thất da Nappa, màn hình HUD, gói an toàn i-Activsense, 11 loa Bose.</p>
      <p>Tình trạng xe hoàn hảo, bảo dưỡng full lịch sử hãng.</p>
    `,
    specs: {
      "Năm sản xuất": "2022",
      "Tình trạng": "Đã qua sử dụng",
      "Số km đã đi": "19.000 km",
      "Kiểu dáng": "Sedan",
      "Hộp số": "Tự động 6 cấp",
      "Nhiên liệu": "Xăng",
      "Động cơ": "2.0L SkyActiv-G",
      "Màu ngoại thất": "Trắng",
      "Màu nội thất": "Đen",
    },
  },
  k3: {
    name: "Kia K3 1.6 Premium",
    price: "610.000.000 VND",
    year: "2023",
    km: "14.000 km",
    transmission: "Số tự động",
    images: ["img/k3-xam.jpg"],
    description: `
      <h5 class="fw-bold">Mô tả xe Kia K3 1.6 Premium 2023</h5>
      <p>Xe lướt 14.000 km, bản 1.6 Premium cao cấp. Trang bị cửa sổ trời, sạc không dây, làm mát ghế, màn hình 10.25-inch.</p>
      <p>Thiết kế trẻ trung, hiện đại. Xe còn bảo hành chính hãng.</p>
    `,
    specs: {
      "Năm sản xuất": "2023",
      "Tình trạng": "Đã qua sử dụng (Lướt)",
      "Số km đã đi": "14.000 km",
      "Kiểu dáng": "Sedan",
      "Hộp số": "Tự động 6 cấp",
      "Nhiên liệu": "Xăng",
      "Động cơ": "1.6L",
      "Màu ngoại thất": "Xám",
      "Màu nội thất": "Be",
    },
  },
};


const STORAGE_KEY = 'auto69CarData';


function saveCarDatabase(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getCarDatabase() {
  let data = localStorage.getItem(STORAGE_KEY);
  
  if (!data) {
    console.log("Không tìm thấy LocalStorage, đang dùng dữ liệu gốc.");
    data = originalCarDatabase;
    saveCarDatabase(data);
    return data;
  } else {
    console.log("Đã tải dữ liệu từ LocalStorage.");
    return JSON.parse(data);
  }
}