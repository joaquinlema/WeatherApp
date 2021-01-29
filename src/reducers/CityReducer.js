import { LOADING,ERROR, GET_WEATHER_DATA_BA } from "../actions/types";

const initialState = {
    loading : false,
    error : '',
    weatherBA:{}
};

export default (state = initialState, action) => {
    switch(action.type){
        case GET_WEATHER_DATA_BA:
            return{
                ...state,
                weatherBA: action.payload
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