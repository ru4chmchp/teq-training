import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const Carouselintro = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination]}
        spaceBetween={5}
        slidesPerView={3}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <div className="bg-white p-1 shadow-md max-w-sm mx-auto">
            <div className="img-container mx-auto mb-4">
              <img
                src="./src/assets/backend.svg"
                alt="Backend"
                className="mx-auto"
              />
            </div>
            <h3 className="font-bold mt-1 px-1">Backend</h3>
            <p className="text-mainGray mt-1 px-1 text-sm text-start">
              Design database, develop API and other backend Services
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-1 shadow-md max-w-sm mx-auto">
            <div className="img-container mx-auto mb-4">
              <img
                src="./src/assets/frontend.svg"
                alt="Frontend"
                className="mx-auto"
              />
            </div>
            <h3 className="font-bold mt-1 px-1">Frontend</h3>
            <p className="text-mainGray mt-1 px-1 text-sm text-start">
              Apply new state-in-the-art Technologies including ReactJS, VueJS,
              etc. for the best UI/UX
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-1 shadow-md max-w-sm mx-auto">
            <div className="img-container mx-auto mb-4">
              <img
                src="./src/assets/mobile.svg"
                alt="Mobile"
                className="mx-auto"
              />
            </div>
            <h3 className="font-bold mt-1 px-1">Mobile</h3>
            <p className="text-mainGray mt-1 px-1 text-sm text-start">
              Building Android, iOS, and MacOS apps with Kotlin, Swift, Flutter
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-1 shadow-md max-w-sm mx-auto">
            <div className="img-container mx-auto mb-4">
              <img
                src="./src/assets/mobile.svg"
                alt="Mobile"
                className="mx-auto"
              />
            </div>
            <h3 className="font-bold mt-1 px-1">Mobile</h3>
            <p className="text-mainGray mt-1 px-1 text-sm text-start">
              Building Android, iOS, and MacOS apps with Kotlin, Swift, Flutter
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
