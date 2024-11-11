import { useEffect, useState } from 'react';
import '../css/App.css';
import TimerDisplay from './TimerDisplay';
import TimerControl from './TimerControl';

function App() {
    const [time, setTime] = useState({ hour: 0, minute: 0, second: 0 });
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setTime(prevTime => {
                    let { hour, minute, second } = prevTime;

                    second += 1;
                    if (second >= 60) {
                        second = 0;
                        minute += 1;
                    }
                    if (minute >= 60) {
                        minute = 0;
                        hour += 1;
                    }
                    return { hour, minute, second };
                });
            }, 1000);
        }

        // Очистка интервала при размонтировании компонента или при изменении isRunning
        return () => clearInterval(intervalId);
    }, [isRunning]);

    const toggleTimer = () => {
        setIsRunning(prevIsRunning => !prevIsRunning);
    };

    return (
        <div className="App">
            <h1>Task Name</h1>
            <TimerDisplay key={`${time.hour}${time.minute}${time.second}`} time={time} />
            <TimerControl isRunning={isRunning} onToggle={toggleTimer} />
        </div>
    );
}

export default App;