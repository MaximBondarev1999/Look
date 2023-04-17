import { useEffect, useState } from 'react';
import './App.css';
import './assets/fonts.css';
import Home from "./components/pages/Home.jsx";


function App() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect((() => {
    // const timer = setTimeout(() => {
    //   setIsLoading(true);
    // }, 1000);

    // return () => clearTimeout(timer);
    return setIsLoading(true)
  }
  ), [])

  return (
    <div className="wraper">
      {isLoading ?
        <div className='home__wrapper my-component'><Home /> </div>
        :
        <div className="load"></div>
      }
    </div>
  );
}

export default App;
