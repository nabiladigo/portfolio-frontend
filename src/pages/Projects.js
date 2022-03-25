import { useState, useEffect  } from 'react';


const Projects = (props) => {
  const [projects, setProjects] = useState(null);
  const getProjectsData = async() =>{
    const response = await fetch(props.URL + "peojects");
    console.log(response);
    const data = await response.json();
    console.log(data);
    setProjects(data);
  };
  useEffect(()=> getProjectsData)
  const loaded =() =>{
    return projects.map((project)=>(
    <div>
        <img src={project.image} alt={project.name}/>
        <h1>{project.name}</h1>
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>live site</button>
        </a>
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects