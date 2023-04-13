import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
<<<<<<<< HEAD:src/components/Projects copy.js
import Project from "./Project";

const Projects = () => {
========
import Card from "./Card";
const ProjectList = () => {
>>>>>>>> 24cb535de69438abdc5efeeb6c855f9b04315ae8:src/components/ProjectList.js
  const { auth } = useAuth();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/projects/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setProjects(json);
      });
  }, []);
  return (
    <div>
      <h2
        className="text-xl text-primary text-center font-
         bold my-5"
      >
        Projects Page
      </h2>
      <div
        className="mx-8 grid grid-cols-1 md:grid-cols-2 
        gap-5 p-4"
      >
        {projects &&
          projects.map((el) => {
            return <Project key={el._id} project={el} />;
          })}
      </div>
    </div>
  );
};
<<<<<<<< HEAD:src/components/Projects copy.js
export default Projects;
========
export default ProjectList;
>>>>>>>> 24cb535de69438abdc5efeeb6c855f9b04315ae8:src/components/ProjectList.js
