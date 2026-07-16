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
      name: "Bleach & D-tan",
      slug: "bleach-d-tan",
      image:
        "https://i.pinimg.com/736x/36/88/80/368880e284d04bca9ee2690c7d80ce5a.jpg",
    },
    {
      id: 6,
      name: "Threading & Facewax ",
      slug: "Threading & Facewax ",
      image:
        "https://i.pinimg.com/1200x/d3/dc/c7/d3dcc723f8cf88331f3a358e511bc076.jpg",
    },
    {
      id: 7,
      name: "Hair",
      slug: "hair",
      image:
        "https://i.pinimg.com/736x/96/c4/b3/96c4b3f1b2c4eb63d75ba23c635b8b9c.jpg",
    },
    {
      id: 8,
      name: "Body Polishing",
      slug: "body-polishing",
      image:
        "https://i.pinimg.com/736x/64/2c/45/642c451d6febfb4ba19ac401d8f55072.jpg",
    },
    {
      id: 9,
      name: "Body Massage",
      slug: "body-massage",
      image:
        "https://i.pinimg.com/736x/9a/2a/c3/9a2ac3665087c93b592b757d98f4911c.jpg",
    },
  ];

  return (
    <section className="py-8 bg-[#fdfbf7]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-5 gap-5">
          {categories.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/services/${item.slug}`)}
              className="group cursor-pointer"
            >
             <div className="flex justify-center">
  <div className="overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40">
    <img
      src={item.image}
      alt={item.name}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </div>
</div>

            <h3 className="mt-2 text-center text-sm sm:text-base font-medium text-gray-700 group-hover:text-pink-600 transition">
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