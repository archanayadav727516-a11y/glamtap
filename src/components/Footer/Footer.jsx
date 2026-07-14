import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-pink-100 text-gray-900 mt-8">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Need Help */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            Need Help?
          </h3>

          <p className="text-base sm:text-lg mb-2 break-all">
            Email : hr@glamtap.in
          </p>

          <p className="text-base sm:text-lg">
            Phone : +91 7428676879
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-base sm:text-lg">
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>

            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="hover:underline">
                Refund & Cancellation
              </a>
            </li>

            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Professionals */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            For Professionals
          </h3>

          <a
            href="#"
            className="text-base sm:text-lg underline hover:text-pink-200"
          >
            Register as a Professional
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-5 sm:gap-6 pb-6 text-3xl">
        <a href="#">
          <FaFacebook className="hover:scale-110 duration-300" />
        </a>

        <a href="#">
          <FaInstagram className="hover:scale-110 duration-300" />
        </a>
      </div>

      {/* Bottom */}
      <div className="border-t border-pink-500 py-4 px-4 text-center text-xs sm:text-sm text-pink-100">
        © 2026, Glow Metro. All Rights Reserved.
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/917428676879"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 duration-300 z-50"
      >
        <FaWhatsapp className="text-white text-2xl sm:text-3xl" />
      </a>
    </footer>
  );
}

export default Footer;