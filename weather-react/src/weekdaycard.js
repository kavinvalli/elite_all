import React from 'react';
// import {epochToTime} from './epochToTime.js'
import { Link } from 'react-router-dom'
import './weekdaycard.css';
var moment = require('moment');

function WeekDayCard(data) {
    const imgURL = `owf owf-${data.weather[0].id} owf-5x`
    let newDate = new Date();
    const weekday = data.dt * 1000
    newDate.setTime(weekday)
    const link = `/${moment(newDate).format('dddd')}`
    console.log("Week COntainer DETAIL")
    return (
        // <a href={link}>
            <Link to={link} key={data.dt} className="weekday">
                <div className="grid-item-week">
                    <p>{moment(newDate).format('dddd')}</p>
                    <div className="temp-reading">
                        Avg: {Math.round((data.temp.min+data.temp.max)/2)} °F
                    </div>
                    <i className={imgURL}></i>
                </div>
            </Link>
        // </a>
    )
}

export default WeekDayCard;