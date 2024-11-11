import React from 'react';
import '../css/TimerDisplay.css';

const TimerDisplay = ({ time }) => {
    const { hour, minute, second } = time;

    const nextHour = (hour + 1) % 24;
    const nextMinute = (minute + 1) % 60;
    const nextSecond = (second + 1) % 60;

    return (
        <div className="timer">
            <div className="timer__item timer__item-hour">
                <div className="timer__item-inner">{String(hour).padStart(2, '0')}</div>
                <div className="timer__item-inner timer__item-inner--next">{String(nextHour).padStart(2, '0')}</div>
            </div>
            <div className="timer__item timer__item-minute">
                <div className="timer__item-inner">{String(minute).padStart(2, '0')}</div>
                <div className="timer__item-inner timer__item-inner--next">{String(nextMinute).padStart(2, '0')}</div>
            </div>
            <div className="timer__item timer__item-second">
                <div className="timer__item-inner timer__item-inner--animation">{String(second).padStart(2, '0')}</div>
                <div className="timer__item-inner timer__item-inner--next">{String(nextSecond).padStart(2, '0')}</div>
            </div>
        </div>
    );
};

export default TimerDisplay;