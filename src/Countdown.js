import { useEffect, useState } from "react";

function Countdown() {
    const [countdown, setCountdown] = useState(60)

    useEffect(()=> {
        const timerId = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000);

        return () => clearInterval(timerId);
    }, [])

    return (
        <h1>{countdown}</h1>
    );
}

export default Countdown;