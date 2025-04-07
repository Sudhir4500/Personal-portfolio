import axios from "axios";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the Django REST framework API
  useEffect(() => {
    const fetchProjects = async () => {
      const apiUrl = process.env.REACT_APP_API_URL;

      if (!apiUrl) {
        console.error(
          "API URL is not defined. Please check your environment variables."
        );
        setError(
          "API URL is missing. Please configure your environment variables."
        );
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${apiUrl}/projects/`);
        setProjects(response.data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Failed to fetch projects. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="pt-20">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl w-[400px] h-[550px] mx-auto shadow-lg"
            >
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-between bg-black/60 group-hover:bg-black/75 text-white opacity-0 backdrop-blur-lg transition-opacity duration-300 group-hover:opacity-100 p-6">
                <div className="flex flex-col items-center text-center space-y-6">
                  <h3 className="text-xl font-bold tracking-wide mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <h3 className="text-sm font-medium mt-9">
                    It is written in:
                    <span className="font-bold text-red-500 text-lg pl-2">
                      {project.programming_languages}
                    </span>
                  </h3>
                </div>
                <div className="flex gap-3">
                  {project.Github_url && (
                    <a
                      href={project.Github_url}
                      className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors font-semibold text-sm shadow-md"
                    >
                      View Source Code
                    </a>
                  )}
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors font-semibold text-sm shadow-md"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;