import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "Waxing", video: "/video/wax.mp4" },
    { id: 2, name: "CleanUp", video: "/video/clean.mp4" },
    { id: 3, name: "Hair", video: "/video/hair.mp4" },
    { id: 4, name: "Threading", video: "/video/threading.mp4" },
  

  ];

  return (
    <section className="py-16 px-8 bg-pink-50">
      <h2 className="text-4xl font-bold text-center mb-10">
        Beauty Services
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => navigate("/featured-services")}
            className="w-72 border rounded-xl p-4 shadow-lg hover:shadow-2xl transition duration-300 bg-white cursor-pointer"
          >
            <video
              className="w-full h-64 object-cover rounded-lg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={category.video} type="video/mp4" />
            </video>

            <h3 className="text-center mt-4 text-xl font-semibold">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;