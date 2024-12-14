import axios from "axios"
import { useEffect, useState } from "react"


const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // fetch data from the Django REST framework API
    useEffect(() => {
        axios
          .get("http://192.168.0.4:8000/projects/")
          .then((response) => {
            setProjects(response.data);
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
      }, []);
  return (
    <section className=" pt-20" id="projects">
    <h2 className=" mb-8 text-center text-3xl  lg:text-4xl">Projects</h2>
    <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {loading?(
            <p>Loading...</p>
        ): error?(
            <p>Error: {error}</p>
        ):(
            projects.map((project) => (
                <div key={project.id} className="group relative overflow-hidden md:rounded-3xl ">
                    <div className=" w-full ">
                    <img src={project.image} alt="project_sample"
                    className=" object-cover transition-transform duration-500 group-hover:scale-110 "/>
                    </div>
                    <div className=" absolute inset-0 flex flex-col items-center justify-center text-black opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                        <h3 className=" mb-2 text-xl">{project.title}</h3>
                        <p className=" mb-12 p-4">{project.description}</p>
                        <a href={project.url} target="blank" rel="noopener noreferrer" className=" bg-black text-white px-4 py-2 rounded-full">View Project</a>

                    </div>
                  
                </div>
            ))
        )}

    </div>

   </section>
  )
}

export default Projects
