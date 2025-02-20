import { useEffect, useState } from "react";
import axios from "axios";
import Darkmode from "./Darkmode";


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
    const fetchLogos = async () => {
      const apiUrl = process.env.REACT_APP_API_URL;
  
      // Validate the environment variable
      if (!apiUrl) {
        console.error("API URL is not defined. Please check your environment variables.");
        setError("API URL is missing. Please configure the environment variables.");
        setLoading(false);
        return;
      }
  
      const controller = new AbortController(); // For aborting the request on cleanup
      
  
      try {
        const response = await axios.get(`${apiUrl}/logo/`); // 5-second timeout
        setLogos(response.data); // Update state with the fetched data
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Fetch logos request cancelled.");
        } else {
          // console.error("Error fetching logos:", err);
          setError(err.response?.data?.message || "Failed to fetch logos. Please try again later.");
        }
      } finally {
        setLoading(false); // Ensure loading is turned off
      }
  
      // Cleanup: Abort the request if the component unmounts
      return () => {
        controller.abort();
      };
    };
  
    fetchLogos();
  }, []);
  


  return (
    <nav className="fixed left-0 right-0 top-0 z-50 w-full m-0 p-0">
      {/* Desktop Navbar */}
      <div className="mx-auto hidden max-w-5xl items-center justify-between rounded-lg border border-stone-50/30 bg-black/20  px-6 backdrop-blur-lg lg:flex ">
        {/* Logo Section */}
        <div className="flex items-center gap-4 ">
          {loading ? (
            <p className="text-white">Loading logos...</p>
          ) : error ? (
            <p className="text-red-500">{`Error loading logos: ${error}`}</p>
          ) : (
            logos.map((logo, index) => (
              <a href="/home" >
              <div key={index} className="flex items-center gap-2">
                <img
                  src={logo.logo}
                  alt={`Logo ${index}`}
                  className="rounded-full w-16 h-16 transition-transform duration-300 hover:scale-110 shadow-lg border-4 border-white dark:border-gray-800"
                />
                {logo.name && (
                  <h2 className="text-white text-sm font-semibold">{logo.name}</h2>
                )}
              </div>
              </a>
            ))
          )}
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {["#home", "#bio", "#skills", "#projects", "#services", "#contact"].map(
            (link, index) => (
              <a
                key={index}
                href={link}
                className= "text-white lg:text-black dark:text-white hover:text-gray-300 transition-colors"
                onClick={(e) => handleLinkClick(e, link)}
              >
                {link.replace("#", "").charAt(0).toUpperCase() +
                  link.slice(2)} {/* Capitalize first letter */}
              </a>
            )
          )}
          <Darkmode />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden fixed w-full bg-black/70 py-2 px-6 backdrop-blur-md z-50 top-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            logos[0] && logos[0].logo && ( // Make sure logo exists and is valid
              <div
                className="w-12 h-12 bg-cover bg-center mr-4 rounded-full dark:bg-gray-800 dark:text-white">
                  <a href="/home">
                <img
                  src={logos[0].logo}
                  alt="Logo"
                  className="rounded-full w-12 h-12 shadow-lg border-4 "
                />
                </a>
                
              </div>
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
            {["#home", "#bio", "#skills", "#projects", "#services", "#contact"].map(
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
            <Darkmode />  
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
