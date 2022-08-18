import { useState, useEffect  } from 'react';
import '../styles/Project.scss';

const Projects = (props) => {
  const [projects, setProjects] = useState(null);
  const getProjectsData = async() =>{
    const response = await fetch(props.URL + "projects");
    console.log(response);
    const data = await response.json();
    console.log(data);
    setProjects(data);
  };
  useEffect(() => getProjectsData(), []);
  const loaded =() =>{
    return projects.map((project, index)=>(
    <div   className= "container project_container"key={index}>
      <article className="project_item">
        <div className="project_item-image">
          <img src={project.image} alt={project.title}/>
        </div>
          <h1>{project.title}</h1>
          <div className="project_item-cta">
          <a href={project.git} className="btn" target="_blank">
            {/* <button>Github</button> */}
            Github
          </a>
          <a href={project.live} className="btn btn-primary" target="_blank">
            {/* <button>live site</button> */}
            live site
          </a>
          </div>
      </article>
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects