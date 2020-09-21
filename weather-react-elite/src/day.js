import React from 'react';
// import ApiConfigs from './apiKeys.js';
// import ReactTable from "react-table";  
import { JsonToTable } from "react-json-to-table";
var moment = require('moment');

class DayContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dayData: [],
            imgURL: null
        }
    }
    componentDidMount = () => {
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
        const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-33.441792&exclude=hourly,minutely,current&appid=${API_KEY}`
        fetch(weatherURL)
        .then(res => res.json())
        .then(
            (response) => {
                this.setState({
                    data: response.daily
                })
                for (var i=1; i < this.state.data.length; i++) {
                    let newDate = new Date();
                    const weekday = this.state.data[i].dt * 1000
                    newDate.setTime(weekday)
                    if (moment(newDate).format('dddd').toLowerCase.toString() === this.props.match.params.day.toLowerCase.toString() ){
                        this.setState({
                            dayData: this.state.data[i],
                            imgURL : `owf owf-${this.state.data[i].weather[0].id} owf-5x`
                        })
                    }
                }
            },
        )
    }
    render() {
        const {dayData, imgURL} = this.state
        return (
            <div style={{textAlign: 'center'}}>
                <h1>{this.props.match.params.day.toUpperCase()}</h1>
                <i className={imgURL} />
                <JsonToTable json={dayData} />
            </div>
        )
    }
}

export default DayContainer