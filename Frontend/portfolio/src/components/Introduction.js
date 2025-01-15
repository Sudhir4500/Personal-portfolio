import React, { useEffect, useState } from "react";
import axios from "axios";

// const apiurl=process.env.REACT_APP_API_URL;

const IntroductionList = () => {
  const [introductions, setIntroductions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = process.env.REACT_APP_API_URL;
  
      if (!apiUrl) {
        setError("API URL is not defined.");
        setLoading(false);
        return;
      }
  
      try {
        const response = await axios.get(apiUrl);
        setIntroductions(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section id="home" className="flex min-h-screen flex-wrap items-center py-8 lg:m-10">
  {introductions.map((introduction) => (
    <React.Fragment key={introduction.id}>
      <div className="w-full md:w-1/2  ">
        <h2 className="my-8 text-4xl font-bold md:text-5xl lg:text-[4rem]">
          {introduction.name}..
        </h2>
        <p className="mb-8 text-3xl md:text-xl tracking-tight lg:text-4xl">
          {introduction.greet}
        </p>
        <p className="mb-8 p-2 text-xl">
          {introduction.description}
        </p>
      </div>
      <div className="w-full md:w-1/2 lg:pl-11 ">
        <div className="flex justify-center header">
          <img
            src={introduction.image}
            alt="profile_pic"
            className="profile-image"
          />
        </div>
      </div>
    </React.Fragment>
  ))}
</section>

  );
};

export default IntroductionList;
