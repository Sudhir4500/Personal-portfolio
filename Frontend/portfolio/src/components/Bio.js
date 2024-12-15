import axios from 'axios';
import React, { useEffect,useState } from 'react'




const Bio = () => {
    const [bio, setBio] = useState([]);

    // fetch bio from the Django REST framework API
    useEffect(() => {
        const fetchBio = async () => {
          const apiUrl = process.env.REACT_APP_API_URL;
      
          if (!apiUrl) {
            console.error("API URL is not defined. Please check your environment variables.");
            return;
          }
      
          try {
            const response = await axios.get(`${apiUrl}/about/`);
            setBio(response.data);
          } catch (err) {
            console.error("Error fetching bio:", err);
          }
        };
      
        fetchBio();
      }, []);
      
        
  return (
    <section className="pt-0 lg:pt-20" id="bio">
    <h2 className=" mb-8 text-center text-3xl  lg:text-4xl">Bio</h2>
    <div className=' flex min-h-screen flex-wrap items-center'>
        {bio.map((bio) => (
            <>
             <div key={bio.id} className="w-full md:w-1/2 lg:p-8">
                <div className=" mr-9 flex justify-center header ">
                    <img
                        src={bio.image}
                        alt="profile_pic"
                        className=" profile-image"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <p className="mb-8 p-2 ml-6 text-xl">
                    {bio.description}
                </p>
            </div>
            
            </>
        ))}
    </div>

    </section>
  )
}

export default Bio
