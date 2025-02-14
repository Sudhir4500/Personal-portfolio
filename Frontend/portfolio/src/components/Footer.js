const Footer = () => {
    // Social media links data
    const socialMediaLinks = [
      { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100006641689318" },
      { name: "twitter", url: "https://x.com/Sudhirsharma450" },
      { name: "LinkedIn", url: "ttps://www.linkedin.com/in/sudhir-sharma-b8a402207/" },
      { name: "GitHub", url: "https://github.com/Sudhir4500" },
      {name:"Gmail",url:"mailto:sudhirsharma4500@gmail.com"},
    ];
  
    return (
      <div className="relative h-full overflow-y-auto antialiased ">
        <footer className="flex flex-col items-center  text-white py-6 ">
          <p className="mb-4 text-black dark:bg-gray-800 dark:text-white">&copy; 2025 Portfolio. All rights reserved.</p>
          {/* Adding the social media links to contact us */}
          <h3 className=" text-black dark:bg-gray-800 dark:text-white">Let’s stay connected! </h3>
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
  