import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [isMobMenu, setIsMobMenu] = useState(false);
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleMobMenu = () => {
    setIsMobMenu(!isMobMenu);
  };

  // Smooth scrolling effect
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85; // Adjust for navbar height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobMenu(false);
  };

  // Fetch data from the API
  useEffect(() => {
    axios
      .get("http://192.168.0.4:8000/logo/")
      .then((response) => {
        setLogos(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 w-full m-0 p-0">
      {/* Desktop Navbar */}
      <div className="mx-auto hidden max-w-6xl items-center justify-between rounded-lg border border-stone-50/30 bg-black/20 py-3 px-6  backdrop-blur-lg lg:flex">
        {/* Logo Section */}
        <div className="flex items-center w-3 h-2">
          {loading ? (
            <p className="text-white">Loading logos...</p>
          ) : error ? (
            <p className="text-red-500">{`Error loading logos: ${error}`}</p>
          ) : (
            logos.map((logo, index) => (
              <div key={index} className="flex items-center gap-2">
                <img
                  src={logo.logo} // Make sure the URL is valid here
                  alt={`Logo ${index}`}
                  width={50}
                  height={50}
                  className="rounded-full object-contain"
                />
                {logo.name && (
                  <h2 className="text-white text-sm">{logo.name}</h2>
                )}
              </div>
            ))
          )}
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {["#home","#bio","#skills","#projects","#services", "#contact"].map(
            (link, index) => (
              <a
                key={index}
                href={link}
                className="text-white hover:text-gray-300 transition-colors"
                onClick={(e) => handleLinkClick(e, link)}
              >
                {link.replace("#", "").charAt(0).toUpperCase() +
                  link.slice(2)} {/* Capitalize first letter */}
              </a>
            )
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden fixed w-full bg-black/70 py-2  px-6 backdrop-blur-md z-50 top-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            logos[0] && logos[0].logo && ( // Make sure logo exists and is valid
              <div
                className="w-10 h-10 bg-cover bg-center mr-4 rounded-lg border border-white"
                style={{
                  backgroundImage: `url(${logos[0].logo})`, // Ensure proper URL usage
                }}
              ></div>
            )
          )}

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle Menu"
            className="text-white focus:outline-none"
            onClick={toggleMobMenu}
          >
            {isMobMenu ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu Links */}
        {isMobMenu && (
          <div className="mt-4 flex flex-col items-center gap-4">
            {["#home","#bio","#skills","#projects", "#services", "#contact"].map(
              (link, index) => (
                <a
                  key={index}
                  href={link}
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={(e) => handleLinkClick(e, link)}
                >
                  {link.replace("#", "").charAt(0).toUpperCase() +
                    link.slice(2)}
                </a>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
