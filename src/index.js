import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from "@material-ui/core";
import {createTheme} from '@material-ui/core/styles';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const theme = createTheme({
    typography: {
        fontFamily: 'Raleway'
    },
    palette: {
        type: 'light',
        primary: {
            main: '#123148'
        },
        secondary: {
            main: '#e73d8e'
        },
        action: {
            active: '#e73d8e'
        },
        background: {
            default: 'rgba(229,229,229,0.85)',
            paper: '#ffffff'
        }
    },
    shape: {
        borderRadius: 24
    }
});

ReactDOM.render(
    <React.StrictMode>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <BrowserRouter>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <App/>
                    </ThemeProvider>
                </Provider>
            </BrowserRouter>
        </MuiPickersUtilsProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
