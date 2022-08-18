import { useEffect, useState} from "react";
import '../styles/Home.scss';
function Home(props) {
 
  const [home, setHome] = useState();

  const getHomeData = async() => {
    const response= await fetch(props.URL + "home");
    console.log(response)
    const data = await response.json();
    setHome(data)
    console.log(data)
   
  };
  useEffect(() => getHomeData(), []);
  const loaded =() =>(
    <div>
      <h2>Hello I'm </h2>
      <h1>{home.name}</h1>
      <img className="tof" src={home.headshot} alt={home.name}/>
      <h5>FULLSTACK DEVELOPER | SOFTWARE ENGINEER</h5>
      {/* <p>{home.bio}</p> */}
      <a href="contact" className= "btn btn-primary"> Say Hello 👋</a>
    </div>
  );
    return home ? loaded() : <h1>loading...</h1>;
  }
  
  export default Home;

