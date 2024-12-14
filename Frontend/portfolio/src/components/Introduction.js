import React, { useEffect, useState } from "react";
import axios from "axios";

const IntroductionList = () => {
  const [introductions, setIntroductions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the Django REST framework API
    axios
      .get("http://192.168.0.4:8000")
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
    <section id="home" className="flex min-h-screen flex-wrap items-center py-2 ">
      {introductions.map((introduction) => (
        <>
          <div key={introduction.id} className="w-full md:w-1/2">
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
            <div className="flex justify-center header ">
              <img
                src={introduction.image}
                alt="profile_pic"
                className="custom-position border-[10px] border-white ml-[50px] "
              />
            </div>
            
          </div>
          </>
      ))}
    </section>
  );
};

export default IntroductionList;
