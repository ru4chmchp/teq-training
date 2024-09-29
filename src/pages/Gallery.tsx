import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";

// src/Gallery.js
const Gallery = () => {
  const items = [
    { title: "Company Trip", photos: 9, image: "./src/assets/companytrip.svg" }, // Adjust the image path
    { title: "Project", photos: 9, image: "./src/assets/companytrip.svg" },
    { title: "Office", photos: 9, image: "./src/assets/companytrip.svg" },
    { title: "Workshop", photos: 9, image: "./src/assets/companytrip.svg" },
    { title: "Event", photos: 9, image: "./src/assets/companytrip.svg" },
    { title: "Japan Class", photos: 9, image: "./src/assets/companytrip.svg" },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div key={index} className="relative group">
              <div className="bg-gray-300 h-full rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className=" w-full h-full"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <h2 className="text-white text-lg font-semibold mb-1">
                  {item.title}
                </h2>
                <p className="text-white">~ {item.photos} Photos ~</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
