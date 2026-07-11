function Download() {
  return (
    <section className="bg-[#FDE9C9] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <h2 className="text-5xl font-bold text-black mb-4">
              Download Our App
            </h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Book salon services anytime, anywhere — right from your phone.
            </h3>

            <p className="text-lg text-gray-700 leading-8 mb-3">
              Our app lets you schedule appointments, explore packages,
              access exclusive offers, and manage your bookings effortlessly —
              all from the comfort of your home.
            </p>

            <p className="text-xl font-bold text-black mb-6">
              Download the app and enjoy a smoother beauty experience.
            </p>

            {/* Store Buttons */}
            <div className="flex gap-6">
              <a href="#">
                <img
                  src="/images/app.webp"
                  alt="Google Play"
                  className="h-16 hover:scale-105 transition duration-300"
                />
              </a>

              <a href="#">
                <img
                  src="/images/stor.webp"
                  alt="App Store"
                  className="h-16 hover:scale-105 transition duration-300"
                />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src="/images/a.webp"
              alt="Download App"
              className="w-[380px] lg:w-[430px] object-contain hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Download;