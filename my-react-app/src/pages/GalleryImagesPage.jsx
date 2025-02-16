import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchGalleryImages } from "../api/api"; // Adjust the import path as needed
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function GalleryImagesPage() {
  const [searchParams] = useSearchParams();
  const [images, setImages] = useState([]);
  const [enlargedView, setEnlargedView] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const gallery_id = searchParams.get("s");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await fetchGalleryImages(parseInt(gallery_id));
        setImages(data);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };
    fetchImages();
  }, [gallery_id]);

  const openEnlargedView = (index) => {
    setActiveImage(index);
    setThumbsSwiper(null);
    setEnlargedView(true);
  };

  const closeEnlargedView = () => {
    setEnlargedView(false);
    setThumbsSwiper(null);
  };

  return (
    <div className="p-4">
      {!enlargedView ? (
        <>
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Gallery Images
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="border p-4 rounded-lg shadow-lg cursor-pointer bg-white dark:bg-gray-800 dark:border-gray-700"
                onClick={() => openEnlargedView(index)}
              >
                <img
                  src={image.img}
                  alt={image.caption}
                  className="w-full h-48 object-cover"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {image.caption}
                </p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          <button
            onClick={closeEnlargedView}
            className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition"
          >
            ✕
          </button>
          <Swiper
            spaceBetween={10}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            initialSlide={activeImage}
            className="w-full max-w-4xl h-96 mb-4"
            modules={[Navigation, Thumbs]}
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <img
                  src={image.img}
                  alt={image.caption}
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={5}
            freeMode
            watchSlidesProgress
            className="w-full max-w-4xl h-24"
            modules={[Thumbs]}
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <img
                  src={image.img}
                  alt={image.caption}
                  className="w-full h-full object-cover cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
