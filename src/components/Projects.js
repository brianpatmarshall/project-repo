import { useEffect, useState } from "react";
import mongoose from "mongoose";
import useAuth from "../hooks/useAuth";
import Project from "./Project";

const Projects = () => {
  const { auth } = useAuth();
  const [projects, setProjects] = useState([{_id: 1, name:"Brian"}, {_id:2, name:'Monica'}]);

  mongoose.connect('mongodb+srv://brianpmarshall:Martin!291@cluster0.9q6cjct.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Could not connect to MongoDB', error));


  
  // useEffect(() => {
  //   // fetch("http://127.0.0.1:3000/clients/", {"mongodb+srv://brianpmarshall:Martin!291@cluster0.9q6cjct.mongodb.net/test"
  //   fetch("mongodb+srv://brianpmarshall:Martin!291@cluster0.9q6cjct.mongodb.net/test", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${auth.token}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setProjects(json);
  //     });
  // }, []);


  return (
    <div>
      <h2
        className="text-xl text-primary text-center font-bold my-5">
        Projects Page
      </h2>
      <div
        className="mx-8 grid grid-cols-1 md:grid-cols-2 gap-5 p-4"
      >
        {projects &&
          projects.map((el) => {
            return <Project key={el._id} name={el.name} />;
          })}
      </div>
    </div>
  );
};
export default Projects;
