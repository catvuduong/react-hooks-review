import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import video from './../video/video1.mp4';

const Video = (props, ref) => {
    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
    }))
    return (
        <>
            <video ref={videoRef} width={280} src={video}></video>
        </>
    );
}

export default forwardRef(Video);
