import React, { useEffect, useRef, useState } from 'react';

const StartStop = () => {

    const [count, setCount] = useState(60)

    const timerId = useRef();
    const h2Ref = useRef();
    const prevCount = useRef();

    useEffect(() => {
        const rect = h2Ref.current.getBoundingClientRect();
        console.log(rect);
        return () => {
            // cleanup
        };
    });

    useEffect(() => {
        prevCount.current = count;
    })

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevState => prevState - 1)

            console.log("Start: " + timerId.current);
        }, 1000);
    }

    const handleStop = () => {
        clearInterval(timerId.current)

        console.log("Stop: " + timerId.current);
    }

    console.log(count, prevCount.current);

    return (
        <div>
            <h2 ref={h2Ref}>{count}</h2>
            <button style={{ marginTop: 10 }}
                onClick={handleStart}
            >Start</button >
            <button style={{ marginTop: 10 }}
                onClick={handleStop}
            >Stop</button>
        </div >
    );
}

export default StartStop;
