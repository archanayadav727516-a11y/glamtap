import { Link } from "react-router-dom";

import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-pink-500 text-white">
        <div className="max-w-7xl mx-auto h-12 px-6 flex items-center justify-between">
          <p className="text-base font-medium">
            Get 10% OFF on your first Appointment
          </p>

          <div className="flex items-center gap-5 text-lg">
            <FaUser className="cursor-pointer hover:text-pink-100" />
            <FaShoppingCart className="cursor-pointer hover:text-pink-100" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="leading-none">
            <h1 className="text-4xl font-bold">
              <span className="text-pink-400">Glam</span>
              <span className="text-black">Tap</span>
            </h1>

            <p className="text-lg text-gray-175 mt-1">
              Tap Book Glow
            </p>
          </Link>

          {/* Menu */}
          <nav className="hidden lg:flex items-center gap-8 font-bold text-lg">

            <Link
              to="/"
              className="text-pink-500 border-b-2 border-pink-500 pb-1"
            >
              Home
            </Link>

            {/* <Link to="/about" className="hover:text-pink-500">
              About Us
            </Link> */}

            <Link to="/services" className="hover:text-pink-500">
              Services
            </Link>

            {/* <Link to="/gallery" className="hover:text-pink-500">
              Gallery
            </Link> */}

            

            <Link to="/contact" className="hover:text-pink-500">
              Contact Us
            </Link>
            <Link to="/cart" className="hover:text-pink-500">
              Cart
            </Link>
          </nav>

          {/* Search */}
          <div className="hidden lg:flex items-center border rounded-full px-4 py-2 w-64">
            <FaSearch className="text-gray-500 mr-3" />

            <input
              type="text"
              placeholder="Search here..."
              className="w-full outline-none text-base"
            />
          </div>

        </div>
      </header>
    </>
  );
}

export default Navbar;