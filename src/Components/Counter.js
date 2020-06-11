import React, { useState } from 'react';


const Counter = () => {
    let [count, setCount] = useState(0);
    const handleClick = (type) => {
        if (type === 'inc') setCount(count + 1)
        else setCount(count - 1);
    }
    const inc = handleClick.bind(null, "inc");
    const dec = handleClick.bind(null, "dec");
    return (
        <>
            <div>Counter:{count}</div>
            <br />
            <button onClick={inc} >+</button>
            <button onClick={dec}>-</button>
        </>
    )
}

export default Counter;