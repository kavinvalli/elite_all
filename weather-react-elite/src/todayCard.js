import React from 'react';
import Clock from 'react-live-clock';
var moment = require('moment');

function TodayCard(props) {
    const imgURL = `owf owf-${props.data.weather[0].id} owf-5x`
    let newDate = new Date();
    const weekday = props.data.dt * 1000
    newDate.setTime(weekday)
    return (
        <div className="todayCard">
            <p className="day">{moment(newDate).format('dddd, Do MMMM YYYY')}</p>
            <h1 className="time"><Clock format={'HH:mm:ss'} ticking={true} timezone={props.data.timezone} /></h1>
            <div className="todayFacts">
                <h1 className="time item">{Math.round((props.data.temp.min+props.data.temp.max)/2)} K</h1>
                <h1 className="time item">{Math.round(((((props.data.temp.min+props.data.temp.max)/2)-273.15)*9/5)+32)}ºF</h1>
                <h1 className="time item">{Math.round(((props.data.temp.min+props.data.temp.max)/2)-273)}ºC</h1>
                <h1 className="time item">{props.data.weather[0].main}</h1>
                <h1 className="time item">Wind Speed: {props.data.wind_speed} km/hr</h1>
                <h1 className="time item">Humidity: {props.data.humidity}</h1>
            </div>
        </div>
    )
}

export default TodayCard;