import React, {useEffect, useState} from 'react';
import Skycons from 'react-skycons';


const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const getRefresh = e => {
    e.preventDefault();
    setRefresh(refresh + 1);
  };

  useEffect(() => {
    update();
  }, [refresh]);

  const update = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(data => {
        fetch(`https://api.darksky.net/forecast/56be0ef4bc8f4cdffa9f0de805515c04/${data.coords.latitude},${data.coords.longitude}`, {mode: 'no-cors'})
          .then(response => {
            return response.json();
          }).then(data => {
            let weatherDataFromFetch = [data.timezone, data.currently.icon, data.currently.temperature + ' F'];
            setWeatherData(weatherDataFromFetch);
            console.log(weatherData);
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
      <button onClick={getRefresh}>Refresh</button>
      <div className="app-info">
        <div className="timezone">{weatherData[0]}</div>
        <div className="icon">{setSkycon(weatherData[1])}</div>
      </div>
      <div className="temperature">{weatherData[2]}</div>
    </div>
  );
}

export default App;