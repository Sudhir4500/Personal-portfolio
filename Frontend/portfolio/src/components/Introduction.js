import React, { useEffect, useState } from "react";
import axios from "axios";

// const apiurl=process.env.REACT_APP_API_URL;

const IntroductionList = () => {
  const [introductions, setIntroductions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    // Fetch data from the Django REST framework API
    axios
     
      .get(`${apiUrl}`)
      .then((response) => {
        setIntroductions(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section id="home" className="flex min-h-screen flex-wrap items-center py-2">
  {introductions.map((introduction) => (
    <React.Fragment key={introduction.id}>
      <div className="w-full md:w-1/2">
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
      <div className="w-full md:w-1/2 lg:p-8">
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
