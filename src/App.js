import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import WeatherBox from './components/layout/WeatherBox';
import MenuBar from './components/layout/appBar/MenuBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <MenuBar content={<WeatherBox />}/>
    </Provider>
  );
}

export default App;
