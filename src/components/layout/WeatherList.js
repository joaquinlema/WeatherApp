import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import WeatherItem from './WeatherItem';
import Grid from '@material-ui/core/Grid';


const WeatherList = ({weatherData,weatherCity}) => {
    return (
        <Grid container>
            {
                weatherData.length > 0 && weatherData.map((item,index) => (
                    <WeatherItem key={index} itemData={item} itemCity={weatherCity}/>
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
