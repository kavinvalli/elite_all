import React from 'react';
import WeekDayCard from './weekdaycard.js';
import './week.css';
import TodayCard from './todayCard'

class WeekContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            todayData: [],
            latitude: null,
            longitude: null,
            isLoading: true
        }
    }
    componentDidMount = () => {
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
        this.setState({
            isLoading: true
        })
        const success = position => {
        this.setState({
            latitude: position.coords.latitude.toFixed(6),
            longitude: position.coords.longitude.toFixed(6)
        })
        const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.latitude}&lon=${this.state.longitude}&exclude=hourly,minutely,current&appid=${API_KEY}`
        fetch(weatherURL)
        .then(res => res.json())
        .then(
            (response) => {
                this.setState({
                    todayData: response.daily[0],
                    data: response.daily.splice(1, response.daily.length),
                    isLoading: false
                })
            }
            )
        }
        
        const error = () => {
            console.log("Unable to retrieve your location");
        };
        navigator.geolocation.getCurrentPosition(success, error);
    }

    componentDidUpdate = () => {
        console.log("Data: "+this.state.data)
    }
    render() {
        const {data, todayData, isLoading} = this.state

        // let newDate = new Date();
        // const weekday = this.state.todayData[0].dt * 1000
        // newDate.setTime(weekday)
        return(
            <div>
            {/* {textContent} */}
            {/* <h2>{todayData.time}</h2> */}
                {/* <div className="banner">
                    <h2>Weekly Forecast</h2>
                </div> */}
                <div className="grid-container">
                <div className="todayData grid-item">
                    <h1>Today</h1>
                    {isLoading ? true : <TodayCard data={todayData} temp={todayData.temp}/> }
                </div>
                <div className="grid-item grid-container-week">
                {/* {data===[] ? <p>Loading...</p> : data.map(DayData => {return WeekDayCard(DayData)})} */}
                {
                    !isLoading && 
                    data.map(DayData => {return WeekDayCard(DayData)})
                }
                {/* {data===[] ? <p>Loading...</p> : <p>Loading999</p>} */}
                </div>
                </div>
            </div>
        )
    }
}

export default WeekContainer;