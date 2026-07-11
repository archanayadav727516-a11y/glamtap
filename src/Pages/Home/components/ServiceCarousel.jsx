function Categories() {
  const categories = [
    {
      id: 1,
      name: "Combo Package",
      image:
        "https://i.pinimg.com/736x/5e/fe/ef/5efeefde66fb51a9c3cf727336312d5d.jpg",
    },
    {
      id: 2,
      name: "Waxing",
      image:
        "https://i.pinimg.com/1200x/15/c3/d3/15c3d3f16b94702002465150f19f9434.jpg",
    },
    {
      id: 3,
      name: "Facial",
      image:
        "https://i.pinimg.com/736x/8b/b4/f5/8bb4f5da9ad877d8f15d2db40ba6fb75.jpg",
    },
    {
      id: 4,
      name: "Clean Up",
      image:
        "https://i.pinimg.com/1200x/ac/3a/ff/ac3aff4e2e39179aed3df6748635731b.jpg",
    },
    {
      id: 5,
      name: "Hair",
      image:
        "https://i.pinimg.com/736x/96/c4/b3/96c4b3f1b2c4eb63d75ba23c635b8b9c.jpg",
    },
    {
      id: 6,
      name: "Skin Care",
      image:
        "https://i.pinimg.com/1200x/1d/ed/97/1ded9740172e7fa5fd54c3cdb35a8279.jpg",
    },
    {
      id: 7,
      name: "Threading",
      image:
        "https://i.pinimg.com/1200x/d3/dc/c7/d3dcc723f8cf88331f3a358e511bc076.jpg",
    },
    {
      id: 8,
      name: "Massage",
      image:
        "https://i.pinimg.com/736x/9a/2a/c3/9a2ac3665087c93b592b757d98f4911c.jpg",
    },
  ];

  return (
    <section className="py-16 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-12">
          Our Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {categories.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-3xl shadow-lg">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <h3 className="text-2xl font-medium text-center mt-5 group-hover:text-pink-600 transition">
                {item.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Categories;