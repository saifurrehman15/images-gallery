import { useState } from "react";

function Images() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleModal = (imageData) => {
    setSelectedImage(imageData);
    setIsModalOpen(!isModalOpen);
  };

  const galleryImage = [
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      caption: "Hemp Seeds",
      description:
        "These organic hemp seeds are a versatile superfood, rich in essential fatty acids, protein, and nutrients. Perfect for adding to smoothies, salads, and baked goods, they offer a nutty flavor and numerous health benefits.",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      caption: "Comfortable Joggers",
      description:
        "These athletic joggers are designed for both style and performance. Made from breathable, moisture-wicking fabric, they provide a comfortable fit for workouts or casual wear. With a modern slim-fit design and convenient pockets, these joggers are perfect for any active lifestyle.",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      caption: "White Shopping Bag",
      description:
        "This elegant white shopping bag is perfect for any retail experience. Made from sturdy, eco-friendly materials, it features reinforced handles for durability and a clean, minimalist design that complements any brand or occasion. Ideal for carrying purchases in style.",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      caption: "Wall Hanger",
      description:
        "This elegant wall decoration hanger is the perfect addition to any room, combining functionality with aesthetic appeal. Made from high-quality materials, it features intricate detailing and a sturdy design, ideal for displaying artwork, photos, or decorative pieces. Enhance your home décor with this stylish and practical accessory.",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      caption: "Smart Watch",
      description:
        "This sleek stainless steel watch combines timeless elegance with modern functionality. Featuring a polished metal band, a durable crystal face, and precise timekeeping, it’s the perfect accessory for both professional and casual outfits. Water-resistant and built to last, this watch is as reliable as it is stylish.",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      caption: "Stylish Blue  Joggers",
      description:
        "These blue fancy joggers offer a perfect blend of comfort and style. Crafted from premium fabric with a luxurious feel, they feature a tapered fit and chic detailing, making them ideal for both lounging and stepping out in style. Elevate your casual wardrobe with these versatile joggers.",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
      caption: "Hydrating Cleanser",
      description:
        "This gentle hydrating cleanser is formulated to effectively remove dirt, oil, and makeup without stripping your skin's natural moisture. Enriched with soothing ingredients, it leaves your skin feeling fresh, clean, and hydrated. Suitable for all skin types, this cleanser is perfect for daily use to maintain a clear and healthy complexion.",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
      caption: "White Shopping Bag",
      description:
        "This elegant white shopping bag is perfect for any retail experience. Made from sturdy, eco-friendly materials, it features reinforced handles for durability and a clean, minimalist design that complements any brand or occasion. Ideal for carrying purchases in style.",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
      caption: "Energy-Efficient LED Bulb",
      description:
        "This energy-efficient LED bulb provides bright, long-lasting illumination while reducing your energy consumption. With a sleek design and a soft, warm light, it’s perfect for any room in your home or office. Designed to last for years, this bulb offers both savings and sustainability.",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
      caption: "Revitalizing Tonik",
      description:
        "This revitalizing Tonik is designed to refresh and invigorate your skin. Enriched with nourishing ingredients, it helps balance and tone your complexion while providing a burst of hydration. Ideal for daily use, this Tonik leaves your skin feeling rejuvenated and radiant.",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
      caption: "Wireless Controller",
      description:
        "This ergonomic wireless game controller offers precision and comfort for an immersive gaming experience. With responsive buttons, customizable settings, and a sleek design, it’s perfect for both casual and competitive gamers. Compatible with multiple platforms, this controller is your key to next-level gaming.",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
      caption: "Classic Black Bag",
      description:
        "This classic black tote bag combines sophistication with practicality. Crafted from durable materials, it features spacious compartments and sturdy handles, making it perfect for daily use or special occasions. The timeless black color ensures it complements any outfit, while its versatile design meets all your carrying needs.",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-[50px]">
        {galleryImage.map((elem, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer"
              onClick={() => {
                toggleModal(elem);
              }}
              src={elem.url}
              alt={elem.caption}
            />
          </div>
        ))}
      </div>

      {isModalOpen && selectedImage && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-70 rounded-full"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full rounded-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 modal-title bg-slate-900">
                <div className="text-xl font-semibold text-gray-900 dark:text-white flex gap-2 items-center">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    class="h-8"
                    alt="Flowbite Logo"
                  />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
                    Images Gallery
                  </span>
                </div>
                <button
                  onClick={() => toggleModal(null)}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13m6-6L1 1"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4 flex justify-between items-center gap-3 ">
                <div className="w-1/2">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.caption}
                    className="w-full image-modal rounded-lg"
                  />
                </div>
                <div className="w-1/2 flex flex-col items-center">
                  <div className="mb-3">
                    <h1 className="caption-heading">{selectedImage.caption}</h1>
                  </div>

                  <div>
                    <p className="text-justify text-gray-800">
                      {selectedImage.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 ">
                <button
                  onClick={() => toggleModal(null)}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Images;
