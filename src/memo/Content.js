import React, { memo } from 'react';

//memo xài khi có nhiều biến thay đổi trong Component con.

const Content = ({ count2, onIncrease }) => {

    console.log('re-render');
    return (
        <div>
            Hi Anh em F8 {count2}
            <button onClick={onIncrease}>Increase</button>
        </div>
    );
}

export default memo(Content);
