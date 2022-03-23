import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import NasaPhoto from "./components/NasaPhoto";
import NasaHeader from "./components/NasaHeader";


function App() {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res =>{
      // console.log(res); remember to see what info you have!
      setData(res.data); //console.log data wont return anything here
    })
    .catch(err => 
      console.error(err))

  }, [])
  return (
    <div className="App">
      {data && <NasaHeader header={data}/>}
      {data && <NasaPhoto photo={data}/>} {/* make sure to console log data here and not in useeffect to see it*/}
    </div>
  );
}

export default App;

