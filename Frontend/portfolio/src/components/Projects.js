import axios from "axios";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch data from the Django REST framework API
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
        // console.error("Error fetching projects:", err);
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
    <section id="projects" className="pt-20 ">
      <h2 className=" mb-8 text-center text-3xl lg:text-4xl">Projects</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className=" group relative overflow-hidden rounded-3xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className=" max-h-[550px] max-w-[560px]  object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className=" absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/50 group-hover:bg-black/70   text-white opacity-0 backdrop-blur-lg transition-opacity  duration-300 group-hover:opacity-100 pl-1"> 
                <h3 className=" mb-1 text-xl p-2 text-center">{project.title}</h3>
                <p className="text-sm mb-8 p-4">{project.description}</p>
                <h3 className=" text-sm  p-4 pb-4 ">
                  It is written in:
                  <span className=" p-1 font-bold text-red-500 text-xl">
                    {project.programming_languages}
                  </span>
                </h3>
                {project.Github_url && (
                  <a
                    href={project.Github_url}
                    className="bg-white text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-colors font-bold"
                  >
                    View Source Code
                  </a>
                )}

                {project.live_url && (
                  <a
                    href={project.live_url}
                    className="bg-white text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-colors font-bold"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
