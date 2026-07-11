import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#c00072] text-white mt-8">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Need Help */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Need Help?</h3>

          <p className="text-lg mb-2">
            Email : hr@glamtap.in
          </p>

          <p className="text-lg">
            Phone : +91 7428676879
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-lg">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Refund & Cancellation</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
          </ul>
        </div>

        {/* Professionals */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            For Professionals
          </h3>

          <a
            href="#"
            className="text-lg underline hover:text-pink-200"
          >
            Register as a professional
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 pb-6 text-2xl">
        <a href="#">
          <FaFacebook className="hover:scale-110 duration-300" />
        </a>

        <a href="#">
          <FaInstagram className="hover:scale-110 duration-300" />
        </a>
      </div>

      {/* Bottom */}
      <div className="border-t border-pink-500 py-4 text-center text-sm text-pink-100">
        © 2026, Glow Metro All Rights Reserved
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/917428676879"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 duration-300"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>
    </footer>
  );
}

export default Footer;