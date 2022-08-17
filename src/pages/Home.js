import { useEffect, useState} from "react";

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
      <img className="tof" src={home.headshot} alt={home.name}/>
      <h2>Hello I'm </h2>
      <h1>{home.name}</h1>
      <h1>I build things</h1>
      <p>{home.bio}</p>
    </div>
  );
    return home ? loaded() : <h1>loading...</h1>;
  }
  
  export default Home;

