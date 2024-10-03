import { useRef, useState } from "react";

function Timer() {
    const [count, setCount] = useState(60);
    const timerId = useRef();
    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000)
    }
    const handleStop = () => {
        clearInterval(timerId.current)
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    );
}

export default Timer;