import React, { useState, useEffect } from 'react';
import Card from '../card';

function Countdown(props){
        const [state, setState] = useState({
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
        })
        
        useEffect(() => {
            const interval = setInterval(() => {
                const date = calculateCountdown(props.date);
                date ? setState(date) : stop(interval);
            }, 1000);

            return (()=> {
                stop(interval);
            })
        },[]);

    function calculateCountdown(endDate) {
        let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

        // clear countdown when date is reached
        if (diff <= 0) return false;

        const timeLeft = {
            years: 0,
            days: 0,
            hours: 0,
            min: 0,
            sec: 0
        };

        // calculate time difference between now and expected date
        if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
            timeLeft.years = Math.floor(diff / (365.25 * 86400));
            diff -= timeLeft.years * 365.25 * 86400;
        }
        if (diff >= 86400) { // 24 * 60 * 60
            timeLeft.days = Math.floor(diff / 86400);
            diff -= timeLeft.days * 86400;
        }
        if (diff >= 3600) { // 60 * 60
            timeLeft.hours = Math.floor(diff / 3600);
            diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
            timeLeft.min = Math.floor(diff / 60);
            diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;

        return timeLeft;
    }

    function stop(interval) {
        clearInterval(interval);
    }

    function addLeadingZeros(value) {
        value = String(value);
        while (value.length < 2) {
            value = '0' + value;
        }
        return value;
    }

        const countDown = state;

        return (
            <div  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "40%" }}>
                <div className="card-main-container">
                    <Card
                        classes="card1" bottomText="D A Y S" text={addLeadingZeros(countDown.days)} />
                </div>
                <div className="card-main-container">
                    <Card
                        classes="card2" bottomText="H O U R S" text={addLeadingZeros(countDown.hours)} />
                </div>
                <div className="card-main-container">
                    <Card
                        classes="card3" bottomText="M I N U T E S" text={addLeadingZeros(countDown.min)} />
                </div>
                <div className="card-main-container">
                    <Card
                        classes="card4" bottomText="S E C O N D S" text={addLeadingZeros(countDown.sec)} />
                </div>
            </div>
        );
    }

export default Countdown;