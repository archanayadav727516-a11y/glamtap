function Claimservices() {
  const services = [
    {
      id: 1,
      title: "Wax",
      brand: "Wax Threading",
      price: "₹370/-",
      image:
        "https://i.pinimg.com/736x/53/35/b4/5335b4b7ed80f8622f6a44e9ee1c43d4.jpg",
    },
    {
      id: 2,
      title: "Bikini wax",
      brand: "Bikini wax  Threading",
      price: "₹100/-",
      image:
        "https://i.pinimg.com/1200x/15/c3/d3/15c3d3f16b94702002465150f19f9434.jpg",
    },
    {
      id: 3,
      title: "Face & Neck",
      brand: "Face & Neck Threading",
      price: "₹320/-",
      image:
        "https://i.pinimg.com/736x/92/2f/35/922f3587a63bb3f2b761be6f876dc590.jpg",
    },
    {
      id: 4,
      title: "Stress Relief",
      brand: "Stress Relief Threading",
      price: "₹50/-",
      image:
        "https://i.pinimg.com/736x/7e/ce/a3/7ecea3ac6a931c1c172f8b96a5c8b4a0.jpg",
    },
 
  ];

  return (
    <section className="py-16 bg-[#f7fdf7]">
      <div className="max-w-7xl mx-auto bg-white rounded-[35px] shadow-xl p-8">

        <span className="inline-block px-6 py-2 rounded-full border bg-pink-50 text-pink-700 font-semibold tracking-wide">
          LIMITED-TIME WELCOME OFFER
        </span>

        <h2 className="text-5xl font-bold mt-6">
          Claim 1 Rupee Services
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-yellow-400 rounded mt-5 mb-6"></div>

        <p className="text-gray-600 text-xl max-w-3xl leading-9">
          Unlock complimentary services and add one to your cart before the
          timer runs out. A calmer way to try GlamTap for the first time.
        </p>

        <div className="flex gap-6 overflow-x-auto mt-12 scrollbar-hide">

          {services.map((item) => (
            <div
              key={item.id}
              className="min-w-[320px] h-[430px] rounded-3xl overflow-hidden relative group shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">

                <h3 className="text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="text-lg mt-1">
                  {item.brand}
                </p>

                <div className="flex items-center gap-4 mt-5">

                  <span className="bg-white text-black px-5 py-2 rounded-full font-bold">
                    FREE
                  </span>

                  <span className="line-through text-xl text-gray-300">
                    {item.price}
                  </span>

                </div>

                <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition">
                  Claim Now
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Claimservices;