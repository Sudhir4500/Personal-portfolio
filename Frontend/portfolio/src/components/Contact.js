import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        service_type: "",
    });

    const [responseMessage, setResponseMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);  // Add a state to track the submitting process

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Disable the submit button while submitting
        setIsSubmitting(true);

        const apiUrl = process.env.REACT_APP_API_URL;
        axios.post(`${apiUrl}/contact/`, formData)
            .then((response) => {
                setResponseMessage("Thank you for contacting us!");
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                    service_type: "",
                });

                // Re-enable the submit button after 2 seconds
                setTimeout(() => setIsSubmitting(false), 2000);  // 2 seconds delay
            })
            .catch((error) => {
                setResponseMessage("Failed to submit the form. Please try again.");

                // Re-enable the submit button if there's an error
                setIsSubmitting(false);
            });
    };

    return (
        <div id="contact" className="flex items-center justify-center min-h-screen pb-10 ">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md dark:bg-gray-800 ">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center dark:text-white">Contact Us</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div >
                        <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-white">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-white">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
                        />
                    </div>
                    <div >
                        <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-white ">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none relative space-y-4 dark:bg-gray-800 dark:text-white "
                            rows="4"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-white">Service Type</label>
                        <input
                            type="text"
                            name="service_type"
                            value={formData.service_type}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}  // Disable the button while submitting
                        className={`w-full py-2 ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500'} text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}  {/* Change button text when submitting */}
                    </button>
                </form>
                {responseMessage && (
                    <p className="mt-4 text-center text-sm font-medium text-green-600">{responseMessage}</p>
                )}
            </div>
        </div>
    );
};

export default ContactForm;
