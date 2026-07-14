import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: "Combo Package",
      slug: "combo-package",
      image:
        "https://i.pinimg.com/736x/5e/fe/ef/5efeefde66fb51a9c3cf727336312d5d.jpg",
    },
    {
      id: 2,
      name: "Waxing",
      slug: "waxing",
      image:
        "https://i.pinimg.com/1200x/15/c3/d3/15c3d3f16b94702002465150f19f9434.jpg",
    },
    {
      id: 3,
      name: "Facial",
      slug: "facial",
      image:
        "https://i.pinimg.com/736x/8b/b4/f5/8bb4f5da9ad877d8f15d2db40ba6fb75.jpg",
    },
    {
      id: 4,
      name: "Clean Up",
      slug: "clean-up",
      image:
        "https://i.pinimg.com/1200x/ac/3a/ff/ac3aff4e2e39179aed3df6748635731b.jpg",
    },
    {
      id: 5,
      name: "Hair",
      slug: "hair",
      image:
        "https://i.pinimg.com/736x/96/c4/b3/96c4b3f1b2c4eb63d75ba23c635b8b9c.jpg",
    },
    {
      id: 6,
      name: "Skin Care",
      slug: "skin-care",
      image:
        "https://i.pinimg.com/1200x/1d/ed/97/1ded9740172e7fa5fd54c3cdb35a8279.jpg",
    },
    {
      id: 7,
      name: "Threading",
      slug: "threading",
      image:
        "https://i.pinimg.com/1200x/d3/dc/c7/d3dcc723f8cf88331f3a358e511bc076.jpg",
    },
    {
      id: 8,
      name: "Massage",
      slug: "massage",
      image:
        "https://i.pinimg.com/736x/9a/2a/c3/9a2ac3665087c93b592b757d98f4911c.jpg",
    },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {categories.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/services/${item.slug}`)}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl lg:rounded-3xl shadow-md hover:shadow-xl transition">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 sm:h-52 md:h-60 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-3 sm:mt-4 text-center text-base sm:text-lg md:text-xl lg:text-2xl font-semibold group-hover:text-pink-600 transition">
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