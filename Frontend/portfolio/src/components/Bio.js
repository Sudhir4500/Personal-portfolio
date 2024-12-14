import axios from 'axios';
import React, { useEffect,useState } from 'react'



const Bio = () => {
    const [bio, setBio] = useState([]);

    // fetch bio from the Django REST framework API
    useEffect(
        ()=>{
            axios.get("http://192.168.0.4:8000/about/").then((response)=>{
                setBio(response.data);
            })

        }
    )
        
  return (
    <section className=" pt-20" id="bio">
    <h2 className=" mb-8 text-center text-3xl  lg:text-4xl">Bio</h2>
    <div className=' flex min-h-screen flex-wrap items-center'>
        {bio.map((bio) => (
            <>
             <div key={bio.id} className="w-full md:w-1/2 lg:p-8">
                <div className=" mr-9 flex justify-center header ">
                    <img
                        src={bio.image}
                        alt="profile_pic"
                        className="custom-position border-[10px] border-white ml-[50px] "
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
