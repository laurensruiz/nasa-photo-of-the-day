import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import NasaPhoto from "./components/NasaPhoto";
import NasaPhoto2 from "./components/NasaPhoto2";
import NasaHeader from "./components/NasaHeader";
import NasaHeader2 from "./components/NasaHeader2"


function App() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2013-01-14')
    .then(res =>{
      // console.log(res); remember to see what info you have!
      setData(res.data); //console.log data wont return anything here
    })
    .catch(err => 
      console.error(err))
  }, [])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2014-01-14')
    .then(res =>{
      // console.log(res); remember to see what info you have!
      setData2(res.data); //console.log data wont return anything here
    })
    .catch(err => 
      console.error(err))
  }, [])

  return (
    <div className="App">
    {data && <NasaHeader info={data}/>} {/*No need to put 'data && if u put empty array in useState but if type useState() you have to state data first */}
    {data && <NasaPhoto info={data}/>} {/* make sure to console log data here and not in useeffect to see it*/}
    {data2 && <NasaHeader2 info={data2}/>}
    {data2 && <NasaPhoto2 info={data2}/>}
    </div>
  );
}

export default App;

