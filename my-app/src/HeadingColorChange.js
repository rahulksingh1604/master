import { useState, useEffect } from 'react';

const ChangeColor = () => {
    const [color, setColor] = useState("red");
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count % 2 === 0) {
            setColor("red");
        }
        else {
            setColor("blue");
        }
    }, [count]);

    return (
        <>
            <h1 style={{ color: color }}> This is color changing text </h1>
            <button onClick={() => setCount(count + 1)}>Change to {color === "red" ? "blue" : "red"}</button>
        </>
    );
}

export default ChangeColor;