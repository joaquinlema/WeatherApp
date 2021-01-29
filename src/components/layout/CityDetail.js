import React from 'react';
import Grid from '@material-ui/core/Grid';

const CityDetail = ({fecha,localidad,temp, tempLike, cloudsdesc, winddesc, rain, press, hum}) => {
    return (
        <Grid container>
            <Grid container item>               
                <span>{fecha}</span>
                <h2>{localidad}</h2>
            </Grid>
            <Grid container item>               
                <p>{temp}°C</p>
            </Grid>
            <Grid container item>               
                <span>Feels like {tempLike}°C. {cloudsdesc} {winddesc} </span>
                <Grid conteiner>
                    <Grid item>
                        {rain} {press} {hum}
                    </Grid>
                    <Grid item>
                        
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        );
}

export default CityDetail;
