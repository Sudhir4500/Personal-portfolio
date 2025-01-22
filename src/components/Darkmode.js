// desc: Darkmode component

import { useEffect, useState } from "react";

const Darkmode = () => {
    const [theme, setTheme] = useState(null);

// to check if the user prefers dark mode or not
    useEffect(()=>{
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark');
    }
    else{
        setTheme('light');
    }
    },[]);

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
        }
        else{
            document.documentElement.classList.remove('dark');
        }
    },[theme]);

    const handlethemeswitch=()=>{
        if(theme === 'dark'){
            setTheme('light');
        }
        else{
            setTheme('dark');
        }
    }

  return (
    <div className=" dark:text-white">
        <button onClick={handlethemeswitch} className=" text-white ">
            {theme === 'dark' ?  <span className="material-icons">light_mode</span> :  <span className="material-icons">dark_mode</span>}
        </button>
      
    </div>
  )
}

export default Darkmode
