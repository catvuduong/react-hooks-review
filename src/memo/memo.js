import React, { useCallback, useState } from 'react';
import Content from './Content';

//useCallback xài để không render lại Conponent khi xài hàm trong nó.
//useCallback chỉ xài khi đã sử dụng react memo.

const Memo = () => {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)

    const handleIncrease = useCallback(() => {
        setCount3(preState => preState + 1);
    }, []);

    return (
        <div>
            <h3>{count}</h3>
            <h3>{count3}</h3>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <button onClick={() => setCount2(count2 + 1)}>Click2</button>
            <Content count2={count2} onIncrease={handleIncrease} />
        </div>
    );
}

export default Memo;
