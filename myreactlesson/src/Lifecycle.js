// lifecycle lesson 4 

import React, { useState, useEffect } from "react";

function ToggleMode() {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    const changeClass = document.querySelector(".App");
    if (mode === false) {
      changeClass.style.backgroundColor = "#ffffff";
      document.querySelector("#kk").innerHTML = '<span class="material-symbols-outlined">nightlight</span>';
    } else {
      changeClass.style.backgroundColor = "#605e5e";
      document.querySelector("#kk").innerHTML = '<span class="material-symbols-outlined">light_mode</span>';
    }
  }, [mode]);

  const handleToggle = () => {
    setMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <button  className="btn btn-primary "id="kk"  onClick={handleToggle} >
        
      <span className="material-symbols-outlined">nightlight</span>
      </button>
    </div>
  );
}

export default ToggleMode;





    /*let changeClass = document.querySelector('header');
    let buttonName = document.querySelector('#kk');
    if(changeClass.classList.contains('lightMode')){
      changeClass.classList.remove('lightMode');
      changeClass.classList.add('darkMode');
      buttonName.innerHTML ="LIGHTMODE";
      
    }
    else {
      changeClass.classList.remove('darkMode');
      changeClass.classList.add('lightMode');
      buttonName.innerHTML = "DARKMODE";*/
      
  
  


