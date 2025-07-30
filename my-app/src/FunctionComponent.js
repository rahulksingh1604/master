import { useState } from 'react';

function FunctionComponent() {
    const [value, setValue] = useState(100);

    return (
        <>
            <h1> Decremented Value : {value}</h1>
            <button onClick={() => setValue(value - 1)}>Decrement Value</button>
        </>
    );
}
export default FunctionComponent;