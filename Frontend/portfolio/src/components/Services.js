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
            try {
                const response = await axios.get("http://192.168.0.4:8000/myservices/");
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
        <section id="services" className="text-gray-600 body-font">
            <h2 className="mb-8 text-center text-3xl lg:text-4xl">My Services</h2>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error: {error}</p>
                    ) : (
                        services.map((service) => (
                            <div key={service.id} className="p-4 md:w-1/3">
                                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col lg:overflow-hidden">
                                    <div className="flex items-center mb-3 ">
                                        <img
                                            alt={service.service_title}
                                            className="w-12 h-12 bg-gray-200 object-cover object-center flex-shrink-0 rounded-full mr-4 overflow-hidden"
                                            src={service.service_image}
                                        />
                                       
                                    </div>
                                    <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium py-3 pr-3">
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
