import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getWeatherBA,setLoading} from '../../actions/CityActions';
import CityDetail from './CityDetail';
import Animations from '../pages/Skeleton';
import Grid from '@material-ui/core/Grid';

const CityBox = ({WeatherReducer: {weatherBA, loading}, setLoading, getWeatherBA}) => {
    useEffect(() => {
        setLoading();
        getWeatherBA();
    }, []);

    if(loading) return (<Animations />);

    return (
        <Grid container>
            {(Object.keys(weatherBA).length !== 0 && 
                <CityDetail 
                fecha={(new Date()).toUTCString()} 
                localidad={weatherBA.name + ' ' + weatherBA.sys.country} 
                temp={weatherBA.main.temp} 
                tempLike={weatherBA.main.feels_like} 
                cloudsdesc={weatherBA.weather[0].description} 
                winddesc={weatherBA.wind.speed}   
                rain={0} 
                press={weatherBA.main.pressure} 
                hum={weatherBA.main.humidity}
                icon={weatherBA.weather[0].icon}
                />
            )}
        </Grid>
    );
}

CityBox.prototype = {
    weatherCity : PropTypes.object.isRequired,
    loading: PropTypes.bool,
}

const mapStateProps = state => ({
    WeatherReducer: state.weatherReducer
});

export default connect(mapStateProps,{getWeatherBA, setLoading})(CityBox);
