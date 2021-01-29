import React from 'react';
import Grid from '@material-ui/core/Grid';

const CityDetail = ({fecha,localidad,temp, tempLike, cloudsdesc, winddesc, rain, press, hum, icon}) => {
    
    let iconUrl = 'http://openweathermap.org/img/wn/'+icon+'@2x.png';
    
    return (
        <Grid container>
            <Grid container item>               
                <span>{fecha}</span>
                <h2>{localidad}</h2>
            </Grid>
            <Grid container item>               
                <p>
                    <img src={iconUrl} width="100" height="140" 
                    style={{float: 'left',margin: '0px 0px 15px 20px'}}/>
                    {temp}°C
                </p>
            </Grid>
            <Grid container item>               
                <span><strong>Feels like {tempLike}°C. {cloudsdesc} {winddesc} </strong></span>
                <Grid container>
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
