import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Projects</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p._id} className="border rounded p-3">
            <h2 className="font-bold">{p.title}</h2>
            <p className="text-sm text-gray-600">{p.shortDescription}</p>
            <div className="mt-2 flex gap-2">
              {p.demoUrl && (
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Live
                </a>
              )}
              {p.repoUrl && (
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
