import React from 'react';

const TimerControl = ({ isRunning, onToggle }) => {
    return (
        <button onClick={onToggle}>
            {isRunning ? 'Пауза' : 'Запуск'}
        </button>
    );
};

export default TimerControl;