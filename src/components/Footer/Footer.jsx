import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-pink-400 to-pink-600 text-white mt-10">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-3xl font-serif mb-6">Company</h2>

          <ul className="space-y-3 text-lg">
            <li>» Privacy Policy</li>
            <li>» Terms & Conditions</li>
            <li>» Payment Policy</li>
            <li>» Cancellation & Refund Policy</li>
          </ul>
        </div>

        {/* Logo */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-xl px-6 py-3">
            <h2 className="text-4xl font-serif text-pink-600">
              GlamTap
            </h2>

            <p className="text-gray-600">Tap Book Glow</p>
          </div>

          <p className="mt-8 leading-8 text-lg">
            GlamTap brings together modern beauty,
            relaxing spa experiences, and professional
            grooming under one roof. From everyday
            self-care to special occasions, we provide
            high-quality services with attention to
            hygiene, comfort, and detail.
          </p>
        </div>

        {/* Download */}
        <div>
          <h2 className="text-3xl font-serif mb-5">
            Download Our App
          </h2>

          <div className="flex gap-3 mb-5">
            <button className="bg-black rounded-lg px-4 py-3 flex items-center gap-2">
              <FaGooglePlay />
              Google Play
            </button>

            <button className="bg-black rounded-lg px-4 py-3 flex items-center gap-2">
              <FaApple />
              App Store
            </button>
          </div>

          <p className="text-lg">
            Download the app and enjoy a smoother
            beauty experience.
          </p>

          <h3 className="mt-8 mb-4 text-2xl">
            Show some love on social media
          </h3>

          <div className="flex gap-5 text-2xl">
            <FaFacebookF className="cursor-pointer hover:scale-110 duration-300" />
            <FaInstagram className="cursor-pointer hover:scale-110 duration-300" />
            <FaYoutube className="cursor-pointer hover:scale-110 duration-300" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-pink-300">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">

          <p>
            Copyright @2026 GlamTap | All rights reserved.
          </p>

          <div className="flex gap-8">
            <a href="/">Home</a>
           
            <a href="/services">Services</a>
            
            <a href="/contact">Contact Us</a>
             <a href="/cart">Cart</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;