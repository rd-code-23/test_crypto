import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import { Route } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import { BrowserRouter, Switch } from "react-router-dom";
import { CoinWatchListContextProvider } from './context/CoinWatchListContext.jsx';
import defaultTheme from './DefaultTheme.js';
import CoinDetailPage from './pages/CoinDetailPage.jsx';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  },
})

const useStyles = makeStyles({
  appContainer: {
    minHeight: '100vh',
    width: '100vw'
    // maxWidth: '1000px'
    //  minWidth: '100vw'
  },

  container: {
    // minWidth: '80vw',
    minHeight: '100vh',
    // maxWidth: '1600px'
    // minWidth: '100vw'
  }
})
console.log("app");
function App() {
  const classes = useStyles();

  return (
   
    <ThemeProvider theme={defaultTheme}>
       {/* <CssBaseline /> */}
      <Paper className={classes.appContainer} square>
        {/* <Grid className={classes.container}> */}
       
              <CoinWatchListContextProvider>
                <BrowserRouter>
                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/coins/:id" component={CoinDetailPage} />
                  </Switch>
                </BrowserRouter>
              </CoinWatchListContextProvider>
        
        {/* </Grid> */}
      </Paper>
    </ThemeProvider>
  );
}

export default App;