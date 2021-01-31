import React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getWeather,setLoading} from '../../actions/WeatherActions';
import WeatherList from './WeatherList';
import Animations from '../pages/Skeleton';

const WeatherBox = ({weatherReducer: { loading, weatherData,weatherCity},getWeather,setLoading}) => {

    useEffect(() => {
        setLoading();
        getWeather();
    }, [])


    if(loading) return (<Animations />)

    return (
        <WeatherList weatherData={weatherData} weatherCity={weatherCity}/>
    );
}

WeatherBox.propTypes = {
    weatherReducer: PropTypes.object.isRequired,
    getWeather: PropTypes.func.isRequired,
    setLoading: PropTypes.func,
}

const mapStateProps = state => ({
    weatherReducer: state.weatherReducer
})

export default connect(mapStateProps,{getWeather,setLoading})(WeatherBox);