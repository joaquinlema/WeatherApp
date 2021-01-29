import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import WeatherItem from './WeatherItem';
import Grid from '@material-ui/core/Grid';


const WeatherList = ({weatherData,weatherCity}) => {
    return (
        <Grid container>
            {
                weatherData.length > 0 && weatherData.map((item,index) => (
                    <WeatherItem 
                        key={index} 
                        icon={item.weather[0].icon}
                        cloud={item.clouds.all}
                        country={weatherCity.country}
                        cityName={weatherCity.name}
                        hum={item.main.humidity}
                        lat={weatherCity.coord.lat}
                        long={weatherCity.coord.lon}
                        tempmax={item.main.temp_max}
                        tempmin={item.main.temp_min}
                        wind={item.wind.speed}
                    />
                ))
            }
        </Grid>
    );
}

WeatherList.propTypes = {
    weatherData: PropTypes.array,
    weatherCity: PropTypes.object.isRequired,
}
 
export default WeatherList;
