function Footer(props) {
  
  return (
      <div>
         <div className="px-4 pb-4 sm:block">
           <div className="my-4 font-blod">
            <a className="px-3 text-xl" href="https://docs.google.com/document/d/1_GA1E4VOXxVk1QKdjY5BP3_uWV0lvLBOCfoTxEh146I" > Resume</a>
            <a className="px-3 text-xl" href="https://github.com/nabiladigo" >GitHub</a>
            <a className="px-3 text-xl" href="https://codepen.io/nabiladigo" >CodePen</a>
            <a className="px-3 text-xl" href="https://www.linkedin.com/in/nabila-digourdi-76179b225/">LinkedIn</a>
           </div>
           <p className=" font-bold text-lg col-end-3">
            Designed and Developed by
            <span className="footnote py-1 px-2 rounded-sm">Nabila Digourdi</span>
           </p>
          </div>


      </div>
  )
  // <div className="footer">Designed & Build by Nabila Digourdi 
  //       {/* add dark theme or dark mode */}
  //         <div className="mode-toggle">
  //             <button className="[toggle-button] [js-mode-toggle]">
  //               <span className= "toggle-icon" aria-hidden="true"></span>
  //               <span className="[toggle-text] [js-mode-toggle-text"> Switch to dark theme</span>

  //             </button>
  //         </div>
    
  //   </div>;
}

export default Footer;

