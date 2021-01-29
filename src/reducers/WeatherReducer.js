import { LOADING,ERROR,GET_WEATHER_DATA } from "../actions/types";

const initialState = {
    loading : false,
    error : '',
    weatherData: [],
    weatherCity: {}
};

export default (state = initialState, action) => {
    switch(action.type){
        case GET_WEATHER_DATA:
            return{
                ...state,
                weatherData: action.payload.list,
                weatherCity: action.payload.city,
                loading:false
            }
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};