import React from 'react';
import {connect} from 'react-redux';
import WeatherReducer from '../../reducers/WeatherReducer';
import {getWeatherBA} from '../../actions/WeatherActions';

const CityBox = () => {
    return (
        <div>
            
        </div>
    );
}

const mapStateProps = state => {
    WeatherReducer: state.weatherReducer
}
export default connect(mapStateProps,{getWeatherBA})(CityBox);
