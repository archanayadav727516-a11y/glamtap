import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [showServices, setShowServices] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const location = useLocation();
  const categories = [
    { name: "Waxing", path: "/services/waxing" },
    { name: "Facial", path: "/services/facial" },
    { name: "Clean Up", path: "/services/clean-up" },
    { name: "Bleach & D-Tan", path: "/services/bleach-d-tan" },
    { name: "Threading & Facewax", path: "/services/threading-facewax" },
    { name: "Hair", path: "/services/hair" },
    { name: "Body Massage", path: "/services/body-massage" },
    { name: "Body Polishing", path: "/services/body-polishing" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-pink-500 text-white">
        <div className="max-w-7xl mx-auto h-12 px-4 md:px-6 flex items-center justify-between">
          <p className="text-sm md:text-base font-medium">
            Get 10% OFF on your first Appointment
          </p>

          <div className="flex items-center gap-4 text-lg">
            <FaUser className="cursor-pointer hover:text-pink-100" />
            <FaShoppingCart className="cursor-pointer hover:text-pink-100" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="bg-white shadow relative z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <h1 className="text-3xl md:text-4xl font-bold">
              <span className="text-pink-400">Glam</span>
              <span className="text-black">Tap</span>
            </h1>
            <p className="text-xs md:text-sm text-gray-500">
              Tap Book Glow
            </p>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold">

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `pb-1 transition ${isActive
                  ? "text-pink-500 border-b-2 border-pink-500"
                  : "hover:text-pink-500"
                }`
              }
            >
              Home
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button
                className={`flex items-center gap-2 pb-1 transition ${location.pathname.startsWith("/services")
                    ? "text-pink-500 border-b-2 border-pink-500"
                    : "hover:text-pink-500"
                  }`}
              >
                Services
                <FaChevronDown />
              </button>

              {showServices && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border py-2 z-50">
                  {categories.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setShowServices(false)}
                      className="block px-5 py-3 hover:bg-pink-50 hover:text-pink-500"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `pb-1 transition ${isActive
                  ? "text-pink-500 border-b-2 border-pink-500"
                  : "hover:text-pink-500"
                }`
              }
            >
              Contact Us
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `pb-1 transition ${isActive
                  ? "text-pink-500 border-b-2 border-pink-500"
                  : "hover:text-pink-500"
                }`
              }
            >
              Cart
            </NavLink>
          </nav>

          {/* Search */}
          <div className="hidden lg:flex items-center border rounded-full px-4 py-2 w-64">
            <FaSearch className="mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none w-full"
            />
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t shadow">

            <Link
              to="/"
              className="block px-6 py-3"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <button
              className="w-full flex justify-between items-center px-6 py-3"
              onClick={() => setMobileServices(!mobileServices)}
            >
              Services
              <FaChevronDown
                className={`transition ${mobileServices ? "rotate-180" : ""
                  }`}
              />
            </button>

            {mobileServices && (
              <div className="bg-pink-50">
                {categories.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileServices(false);
                    }}
                    className="block px-10 py-3 hover:bg-pink-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/contact"
              className="block px-6 py-3"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>

            <Link
              to="/cart"
              className="block px-6 py-3"
              onClick={() => setMenuOpen(false)}
            >
              Cart
            </Link>

            <div className="px-6 py-4">
              <div className="flex items-center border rounded-full px-4 py-2">
                <FaSearch className="mr-2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none w-full"
                />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;