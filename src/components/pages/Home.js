import React, { Fragment } from 'react';
import WeatherBox from '../layout/WeatherBox';
import Grid from '@material-ui/core/Grid';

const Home = () =>( 
        <Grid container>
                <Grid container>
                        <Grid item md={4}>

                        </Grid>
                        <Grid item md={8}>
                                
                        </Grid>
                </Grid>
                <Grid container>
                        <WeatherBox />
                </Grid>
        </Grid>
)

export default Home