import { useState } from "react";
import "../assets/css/Gallery.css";

// ================== IMPORT ẢNH ==================

// Không gian (1 -> 22)
import khonggian1 from "../assets/img/Gallery/KhongGian/1.jpg";
import khonggian2 from "../assets/img/Gallery/KhongGian/2.jpg";
import khonggian3 from "../assets/img/Gallery/KhongGian/3.jpg";
import khonggian4 from "../assets/img/Gallery/KhongGian/4.jpg";
import khonggian5 from "../assets/img/Gallery/KhongGian/5.jpg";
import khonggian6 from "../assets/img/Gallery/KhongGian/6.jpg";
import khonggian7 from "../assets/img/Gallery/KhongGian/7.jpg";
import khonggian8 from "../assets/img/Gallery/KhongGian/8.jpg";
import khonggian9 from "../assets/img/Gallery/KhongGian/9.jpg";
import khonggian10 from "../assets/img/Gallery/KhongGian/10.jpg";
import khonggian11 from "../assets/img/Gallery/KhongGian/11.jpg";
import khonggian12 from "../assets/img/Gallery/KhongGian/12.jpg";
import khonggian13 from "../assets/img/Gallery/KhongGian/13.jpg";
import khonggian14 from "../assets/img/Gallery/KhongGian/14.jpg";
import khonggian15 from "../assets/img/Gallery/KhongGian/15.jpg";
import khonggian16 from "../assets/img/Gallery/KhongGian/16.jpg";
import khonggian17 from "../assets/img/Gallery/KhongGian/17.jpg";
import khonggian18 from "../assets/img/Gallery/KhongGian/18.jpg";
import khonggian19 from "../assets/img/Gallery/KhongGian/19.jpg";
import khonggian20 from "../assets/img/Gallery/KhongGian/20.jpg";
import khonggian21 from "../assets/img/Gallery/KhongGian/21.jpg";
import khonggian22 from "../assets/img/Gallery/KhongGian/22.jpg";

// Workshop (1 -> 4)
import Workshop1 from "../assets/img/Gallery/Workshop/1.jpg";
import Workshop2 from "../assets/img/Gallery/Workshop/2.jpg";
import Workshop3 from "../assets/img/Gallery/Workshop/3.jpg";
import Workshop4 from "../assets/img/Gallery/Workshop/4.jpg";

// Thiền (1 -> 2)
import Thien1 from "../assets/img/Gallery/Thien/1.jpg";
import Thien2 from "../assets/img/Gallery/Thien/2.jpg";

// Yoga (1 -> 31)
import Yoga1 from "../assets/img/Gallery/Yoga/1.jpg";
import Yoga2 from "../assets/img/Gallery/Yoga/2.jpg";
import Yoga3 from "../assets/img/Gallery/Yoga/3.jpg";
import Yoga4 from "../assets/img/Gallery/Yoga/4.jpg";
import Yoga5 from "../assets/img/Gallery/Yoga/5.jpg";
import Yoga6 from "../assets/img/Gallery/Yoga/6.jpg";
import Yoga7 from "../assets/img/Gallery/Yoga/7.jpg";
import Yoga8 from "../assets/img/Gallery/Yoga/8.jpg";
import Yoga9 from "../assets/img/Gallery/Yoga/9.jpg";
import Yoga10 from "../assets/img/Gallery/Yoga/10.jpg";
import Yoga11 from "../assets/img/Gallery/Yoga/11.jpg";
import Yoga12 from "../assets/img/Gallery/Yoga/12.jpg";
import Yoga13 from "../assets/img/Gallery/Yoga/13.jpg";
import Yoga14 from "../assets/img/Gallery/Yoga/14.jpg";
import Yoga15 from "../assets/img/Gallery/Yoga/15.jpg";
import Yoga16 from "../assets/img/Gallery/Yoga/16.jpg";
import Yoga17 from "../assets/img/Gallery/Yoga/17.jpg";
import Yoga18 from "../assets/img/Gallery/Yoga/18.jpg";
import Yoga19 from "../assets/img/Gallery/Yoga/19.jpg";
import Yoga20 from "../assets/img/Gallery/Yoga/20.jpg";
import Yoga21 from "../assets/img/Gallery/Yoga/21.jpg";
import Yoga22 from "../assets/img/Gallery/Yoga/22.jpg";
import Yoga23 from "../assets/img/Gallery/Yoga/23.jpg";
import Yoga24 from "../assets/img/Gallery/Yoga/24.jpg";
import Yoga25 from "../assets/img/Gallery/Yoga/25.jpg";
import Yoga26 from "../assets/img/Gallery/Yoga/26.jpg";
import Yoga27 from "../assets/img/Gallery/Yoga/27.jpg";
import Yoga28 from "../assets/img/Gallery/Yoga/28.jpg";
import Yoga29 from "../assets/img/Gallery/Yoga/29.jpg";
import Yoga30 from "../assets/img/Gallery/Yoga/30.jpg";
import Yoga31 from "../assets/img/Gallery/Yoga/31.jpg";

// Khách hàng & Cộng đồng (1 -> 3)
import KhachHang1 from "../assets/img/Gallery/KhachHangVaCongDong/1.jpg";
import KhachHang2 from "../assets/img/Gallery/KhachHangVaCongDong/2.jpg";
import KhachHang3 from "../assets/img/Gallery/KhachHangVaCongDong/3.jpg";

function Gallery() {
  const [filter, setFilter] = useState("Tất cả");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    "Tất cả",
    "Không gian",
    "Workshop",
    "Thiền",
    "Yoga",
    "Khách hàng và cộng đồng",
  ];

  // Gom ảnh thành nhóm
  const khongGianImgs = [
    khonggian1, khonggian2, khonggian3, khonggian4, khonggian5, khonggian6,
    khonggian7, khonggian8, khonggian9, khonggian10, khonggian11, khonggian12,
    khonggian13, khonggian14, khonggian15, khonggian16, khonggian17, khonggian18,
    khonggian19, khonggian20, khonggian21, khonggian22,
  ];
  const workshopImgs = [Workshop1, Workshop2, Workshop3, Workshop4];
  const thienImgs = [Thien1, Thien2];
  const yogaImgs = [
    Yoga1, Yoga2, Yoga3, Yoga4, Yoga5, Yoga6, Yoga7, Yoga8, Yoga9, Yoga10,
    Yoga11, Yoga12, Yoga13, Yoga14, Yoga15, Yoga16, Yoga17, Yoga18, Yoga19, Yoga20,
    Yoga21, Yoga22, Yoga23, Yoga24, Yoga25, Yoga26, Yoga27, Yoga28, Yoga29, Yoga30, Yoga31,
  ];
  const khachHangImgs = [KhachHang1, KhachHang2, KhachHang3];

  // Sinh galleryItems
  let idCounter = 1;
  const makeItems = (arr, category) =>
    arr.map((img) => ({ id: idCounter++, category, image: img }));

  const galleryItems = [
    ...makeItems(khongGianImgs, "Không gian"),
    ...makeItems(workshopImgs, "Workshop"),
    ...makeItems(thienImgs, "Thiền"),
    ...makeItems(yogaImgs, "Yoga"),
    ...makeItems(khachHangImgs, "Khách hàng và cộng đồng"),
  ];

  const filteredItems =
    filter === "Tất cả"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const visibleItems = filteredItems.slice(0, visibleCount);

  return (
    <section className="gallery-section py-5">
      <div className="container text-center mb-4">
        <h2 className="fw-bold text-success">Bộ Sưu Tập Hoạt Động Yoga</h2>
        <p>
          Khám phá không gian và các hoạt động thú vị tại phòng tập của chúng tôi
        </p>
      </div>

      {/* Bộ lọc */}
      <div className="d-flex justify-content-center mb-4 gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn btn-sm rounded-pill px-3 ${
              filter === cat ? "btn-success" : "btn-outline-success"
            }`}
            onClick={() => {
              setFilter(cat);
              setVisibleCount(6);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid ảnh */}
      <div className="m-5">
        <div className="row g-4">
          {visibleItems.map((item) => (
            <div className="col-12 col-md-3" key={item.id}>
              <div
                className="gallery-card"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={`gallery-${item.id}`}
                  className="img-fluid rounded-4"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Nút xem thêm / thu gọn */}
        <div className="text-center mt-4">
          {visibleCount < filteredItems.length ? (
            <button
              className="btn btn-outline-success px-4"
              onClick={() => setVisibleCount(visibleCount + 6)}
            >
              Xem thêm
            </button>
          ) : filteredItems.length > 6 ? (
            <button
              className="btn btn-outline-danger px-4"
              onClick={() => setVisibleCount(6)}
            >
              Thu gọn
            </button>
          ) : null}
        </div>
      </div>

      {/* Modal hiển thị ảnh */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <span className="close-btn">&times;</span>
          <img src={selectedImage} alt="preview" className="modal-img" />
        </div>
      )}
    </section>
  );
}

export default Gallery;
