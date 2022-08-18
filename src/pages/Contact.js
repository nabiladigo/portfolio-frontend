 import React from "react";
import '../styles/Contact.scss';

const Contact = (props) => {
    return(
      <div>
        <h3 className="text-5xl font-bold pd-4">
            Get in Touch
          </h3>
          <div  className="box w-1/2 mx-auto py-8 border-solid border-4 rounded-lg sm:w-10/12">
            <p className="font-bold text-2xl pb-16 sm:pb-8"> I like to hear from you</p>
            <a href="mailto:nabiladigo91@gmail.com" className=" email hover:shadow font-bold py-3 px-8 text-xl rounded text-center">Get in Touch 👋</a>
          </div>
      </div>
    );
}

export default Contact