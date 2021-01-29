import {combineReducers} from 'redux';
import CityReducer from './CityReducer';
import WeatherReducer from './WeatherReducer';

export default combineReducers({
    weatherReducer: WeatherReducer,
    cityReducer: CityReducer
});