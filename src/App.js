import React, {useEffect, useState} from 'react';
import Skycons from 'react-skycons';


const App = () => {
  const proxyHeroku = `https://cors-anywhere.herokuapp.com/`;
  const [weatherData, setWeatherData] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [temperature, setTempereture] = useState([]);
  const [clock, setClock] = useState([]);
  const getRefresh = e => {
    e.preventDefault();
    setRefresh(refresh + 1);
  };

  useEffect(() => {
    update();
  }, [refresh]);

  const temperatureChange = () => {
    if(temperature[1] === 'Fahr') {
      let temperatureCels = (temperature[0]-32)*5/9;
      setTempereture([temperatureCels.toFixed(), 'Cels']);
    } else if (temperature[1] === 'Cels') {
      let temperatureFahr = (temperature[0]*9/5)+32;
      setTempereture([temperatureFahr.toFixed(), 'Fahr']);
    }
  };

  const update = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(data => {
        fetch(`${proxyHeroku}https://api.darksky.net/forecast/56be0ef4bc8f4cdffa9f0de805515c04/${data.coords.latitude},${data.coords.longitude}`)
          .then(response => {
            return response.json();
          }).then(data => {
            if(clock.length !== 1) {
              let hours = new Date().getHours();
              let minutes = new Date().getMinutes();

              if(hours <= 9) {
                hours = '0' + hours;
              }
              if(minutes <= 9) {
                minutes = '0' + minutes;
              }
              setClock([hours, minutes]);
            }

            let weatherDataFromFetch = [data.timezone, data.currently.icon, data.currently.summary];
            setTempereture([data.currently.temperature, 'Fahr']);
            setWeatherData(weatherDataFromFetch);
          }).catch( err => console.log(err));
      });
    }
  };
  const setSkycon = (iconId) => {
    if(iconId !== undefined) {
      let iconIdFixed = iconId.toUpperCase().replace('-', '_');
      return (
        <Skycons color="white" autoplay={true} icon={iconIdFixed} />
      );
    } else {
      return (
        <h2>Icon unavaible allow location get or wait for database connection..</h2>
      );
    }
  };

  return (
    <div className="App">
      <div className="clock">
        <div className="timezone">
          <div className="timezone-info">Timezone:</div>
          {weatherData[0]}
        </div>
        {clock.join(':')}</div>
      <button onClick={getRefresh}>Refresh</button>
      <div className="app-info">
        <h1>{weatherData[2]}</h1>
        <div className="icon">{setSkycon(weatherData[1])}</div>
      </div>
      <div className="temperature" onClick={temperatureChange}>
        <div className="temperature-info">Click to convert</div>
        {temperature.join(' ')}
      </div>
    </div>
  );
}

export default App;