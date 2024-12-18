// Desc: Services component of the website
import axios from "axios";
import { useEffect, useState } from "react";

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from the Django REST framework API
    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = process.env.REACT_APP_API_URL;
            try {
                const response = await axios.get(`${apiUrl}/myservices/`);
                setServices(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Ensure the dependency array is included to avoid infinite loops

    return (
        <section id="services" className="text-gray-600 body-font dark:bg-gray-800 dark:text-white  lg:pt-20">
            <h2 className="mb-8 text-center text-3xl lg:text-4xl dark:bg-gray-800 dark:text-white">My Services</h2>
            <div className="container px-5 py-24 mx-auto dark:bg-gray-800 dark:text-white lg:pt-[2px]">
                <div className=" md:container w-auto  flex flex-wrap -m-4 dark:bg-gray-800 dark:text-white">
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error: {error}</p>
                    ) : (
                        services.map((service) => (
                            <div key={service.id} className="p-4 md:w-1/3 ">
                                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col lg:overflow-hidden dark:bg-gray-800 dark:text-white">
                                    <div className="flex items-center mb-3 dark:bg-gray-800 dark:text-white">
                                        <img
                                            alt={service.service_title}
                                            className=" h-full w-full  bg-gray-200 object-cover flex-shrink-0 rounded-lg mr-4 overflow-hidden dark:bg-gray-800 dark:text-white "
                                            src={service.service_image}
                                        />
                                       
                                    </div>
                                    <div className="flex-grow dark:bg-gray-800 dark:text-white">
                                    <h2 className="text-gray-900 text-lg title-font font-medium py-3 pr-3 dark:bg-gray-800 dark:text-white">
                                            {service.service_title}
                                        </h2>
                                        <p className="leading-relaxed text-base">
                                            {service.service_description}
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Services;
