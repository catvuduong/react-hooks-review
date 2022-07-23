import React, { useEffect, useState } from 'react';

const TimerFunction = () => {

    const [countdonw, setCountdown] = useState(180);

    //way 1
    // useEffect(() => {
    //     const timerId = setInterval(() => {
    //         setCountdown(preState => preState - 1)
    //     }, 1000);
    //     return () => {
    //         // cleanup
    //         clearInterval(timerId)
    //     };
    // }, []);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setCountdown(countdonw - 1)
        }, 1000);
        return () => {
            clearTimeout(timerId)
        };
    }, [countdonw]);

    //way 2

    return (
        <div>
            <h2>{countdonw}</h2>
        </div>
    );
}

export default TimerFunction;
