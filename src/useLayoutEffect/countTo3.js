import React, { useLayoutEffect, useState } from 'react';

// useLayoutEffect
/**
 * 1. Cật nhật state
 * 2. Cật nhật DOm (mutated)
 * 3. Gọi clean up nếu deps thay đổi (sync)
 * 4. Gọi useLayoutEffect callback (sync)
 * 5. Render lại UI
 */

const CountTo3 = () => {

    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     if (count > 3) {
    //         setCount(0)
    //     }
    //     return () => {
    //         // cleanup
    //     };
    // }, [count]);

    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0)
        }
        return () => {
            // cleanup
        };
    }, [count]);

    return (
        <div style={{ marginTop: 10 }}>
            <button onClick={() => setCount(count + 1)}>Count</button>
            <h2>{count}</h2>
        </div >
    );
}

export default CountTo3;
