import { useState }  from 'react'


const api = {
  key: "7a1165303af2fa25a56251e528980a33",
  base: "https://api.openweathermap.org/data/2.5/"
}

const  App = () => {


  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  // const search = evt => {
  //   if (evt.key === "Enter ") {
  //     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  //     .then(res => res.json())
  //     .then(result => {
  //       setWeather(result)
  //       console.log("result:", result)
  //      setQuery('')})
  //   }
  // }


  const search = () => {
    
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        console.log("result:", result)
       setQuery('')})
    
  }


  const dateBuilder = (d) => {
    let months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November"]
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  
    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
  
  }
  return (
    <div className="app">
      
      <main>

      <div className="=search-box">
     
     
        <input className="search-bar" type="text" 
        onChange={e => setQuery(e.target.value)}
        value={query}
        // onKeyPress={search}
        placeholder="Search..."/>

        <button onClick={search}>GET AIR CONDITION</button>
    </div>


    {(typeof weather.main != "undefined" ) ? (
      <div>
    <div className="location-box">
      <div className="location">{weather.name}, {weather.sys.country}</div>
      <div className="date">{dateBuilder(new Date())}</div>
    </div>

    <div className="weather-box">
      <div className="temp">
        15c
      </div>
      <div className="weather">Sunny</div>
    </div>
    </div>
        ) : ('')  }

      </main>
     
    </div>
  );
}

export default App;
