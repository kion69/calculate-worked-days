import React from 'react';
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import Calculator from '../../Calculator';
import Home from '../../Home';
import { ActiveLink, NavigationBar, yellow } from '../../style';
import { TotalCountHour } from '../TotalCountHour';

const style = {
    bodyPage: {
        marginTop: '60px'
    }
};

function NavigationHeader() {

    return (
        <HashRouter basename="/">

            <NavigationBar background={yellow}>
                <ActiveLink to="/home">Home</ActiveLink>
                <ActiveLink to="/calculator">Rolê</ActiveLink>
                <TotalCountHour />
            </NavigationBar>

            <div style={style.bodyPage}>
                <Switch>
                    <Redirect exact from='/' to='/home' />

                    <Route path='/home' >
                        <Home />
                    </Route>

                    <Route path='/calculator' component={Calculator}>
                        <Calculator />
                    </Route>
                </Switch>
            </div>

        </HashRouter>
    );
}

export default NavigationHeader;