const Footer = () => {
    // Social media links data
    const socialMediaLinks = [
      { name: "Facebook", url: "https://www.facebook.com" },
      { name: "Twitter", url: "https://www.twitter.com" },
      { name: "Instagram", url: "https://www.instagram.com" },
      { name: "LinkedIn", url: "https://www.linkedin.com" },
      { name: "GitHub", url: "https://www.github.com" },
    ];
  
    return (
      <div className="relative h-full overflow-y-auto antialiased">
        <footer className="flex flex-col items-center  text-white py-6">
          <p className="mb-4 text-black">&copy; 2024 Portfolio. All rights reserved.</p>
          {/* Adding the social media links to contact us */}
          <h3 className=" text-black p">Let’s stay connected! </h3>
          <div className="flex space-x-4">
            
            {socialMediaLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity flex items-center justify-center h-8 w-8 rounded-full"
                style={{
                  backgroundImage: `url('https://img.icons8.com/color/48/${link.name.toLowerCase().replace(/\s+/g, "-")}.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  