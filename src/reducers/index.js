import {combineReducers} from 'redux';
import WeatherReducer from './WeatherReducer';

export default combineReducers({
    weatherReducer: WeatherReducer
});