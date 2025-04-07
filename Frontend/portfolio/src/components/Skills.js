import React, { useEffect, useState } from "react";
import axios from "axios";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null);

  // Fetch skills from the Django REST framework API
 useEffect(()=>{
  const fetchSkills = async () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
      const response = await axios.get(`${apiUrl}/skills/`);
      setSkills(response.data);
    } catch (err) {
      setError(err.message);
    }
  };
  fetchSkills();
 },[]);

 if (error) {
  return <p>Error: {error}</p>;
}

  // Helper function to get logo URL from a CDN
  const getLogoUrl = (name) => {
    const sanitized = name.toLowerCase().replace(/\s+/g, "-");
    return `https://img.icons8.com/color/48/${sanitized}.png`; // Adjust based on the CDN being used
  };

  return (
    <div id="skills" className="container mx-auto pt-0 lg:pt-2">
      <h2 className="text-3xl text-center mt-20 ">Skills</h2>
      <div className="mx-2  lg:grid lg:grid-cols-3 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30 ">
        {skills.map((skill, index) => (
          <div
            key={skill.id || index} // Prefer unique IDs over index if available
            className={`py-6 flex items-center justify-between ${
              index !== skills.length - 1 ? "border-b border-stone-50/30" : ""
            }`}
          >
            <div className="flex items-center">
              {/* Render logo using a div with a background image */}
              <div
                className="w-10 h-10 bg-cover bg-center mr-4  rounded-lg"
                style={{

                    backgroundImage: `url(${skill.logo ? skill.logo : getLogoUrl(skill.name)})`, // Use backend logo if available, else fallback to CDN
                }}
              >
              </div>
              <h3 className="text-3xl font-semibold">{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
