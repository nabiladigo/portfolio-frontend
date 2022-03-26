import { useState, useEffect } from "react";

function About(props) {
  const [about, setAbout] = useState(null);

  const getAboutData = async() => {
    const response = await fetch(props.URL + "about"
    // ,
    // {
    //    headers : { 
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //    }
    // }
    );
    console.log(response)
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => getAboutData(), []);
  const loaded = () => (
    <div>
      <h1>About Me:</h1>
      <div>
        {about.bio}
         <div>Here are few technologies I've been working with: {about.skills}</div>
      </div>
      <img src={about.headshot} alt= {about.name} />
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;