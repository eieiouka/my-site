import { useState } from "react";
import "./Gallery.css";

const images = [
  { src: "/images/sample1.jpg", alt: "ナノちゃんのイラスト1" },
  { src: "/images/sample2.jpg", alt: "ナノちゃんのイラスト2" },
  { src: "/images/sample3.jpg", alt: "ナノちゃんのイラスト3" },
  { src: "/images/sample4.jpg", alt: "ナノちゃんのイラスト4" },
  { src: "/images/sample5.jpg", alt: "ナノちゃんのイラスト5" },
  { src: "/images/sample6.jpg", alt: "ナノちゃんのイラスト6" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="section gallery">
      <p className="section-label">Gallery</p>
      <h2>私の可愛い写真集</h2>

      <div className="gallery-grid">
        {images.map((img) => (
          <button
            key={img.src}
            className="gallery-item"
            onClick={() => setSelectedImage(img)}
          >
            <img src={img.src} alt={img.alt} />
          </button>
        ))}
      </div>

      {/* モーダル */}
      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gallery-close"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            <img
              className="gallery-modal-image"
              src={selectedImage.src}
              alt={selectedImage.alt}
            />
          </div>
        </div>
      )}
    </section>
  );
}