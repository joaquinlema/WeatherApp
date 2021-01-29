import { LOADING, ERROR, KEY, GET_WEATHER_DATA, GET_WEATHER_DATA_BA } from './types';

export const setLoading = () => {
    return{
        type:LOADING
    };
};

export const getWeather = () => async dispatch => {
    try {

        const res = await fetch('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?lat=-34.6132&lon=-58.3772&appid='+KEY,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        });
        const data = await res.json();
        
       
        dispatch({
            type: GET_WEATHER_DATA,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload:'Error buscando la info de Weather \n ' + error
        });
    };
};

export const getWeatherBA = () => async dispatch => {
    try {

        const res = await fetch('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=buenos+aires&appid='+KEY,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        });
        const data = await res.json();
        
       
        dispatch({
            type: GET_WEATHER_DATA_BA,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload:'Error buscando la info de Weather \n ' + error
        });
    };
};