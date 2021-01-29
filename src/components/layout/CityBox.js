import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getWeatherBA,setLoading} from '../../actions/CityActions';
import CityDetail from './CityDetail';
import Animations from '../pages/Skeleton';
import Grid from '@material-ui/core/Grid';

const CityBox = ({WeatherReducer: {weatherCity, loading}, setLoading, getWeatherBA}) => {
    useEffect(() => {
        setLoading();
        getWeatherBA();
    }, []);

    if(loading) return (<Animations />);

    return (
        <Grid container>
            <CityDetail 
            fecha={''} 
            localidad={''} 
            temp={''} 
            tempLike={''} 
            cloudsdesc={''} 
            winddesc={''} 
            rain={''} 
            press={''} 
            hum={''}
            />
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
