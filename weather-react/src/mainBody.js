import React from 'react';
import WeekContainer from './week.js'
import DayContainer from './day.js'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

class MainBody extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={WeekContainer}/>
                    <Route exact path='/:day' component={DayContainer}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default MainBody;