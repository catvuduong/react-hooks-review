import React, { useRef } from 'react';
import Video from './Video';

const AppImperative = () => {
    const videoRef = useRef();

    // useEffect(() => {
    //     console.log(videoRef.current);
    //     return () => {
    //         // cleanup
    //     };
    // });

    const handleStart = () => {
        videoRef.current.play();
    }

    const handleStop = () => {
        videoRef.current.pause();
    }
    return (
        <>
            <Video ref={videoRef} />
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    );
}

export default AppImperative;
