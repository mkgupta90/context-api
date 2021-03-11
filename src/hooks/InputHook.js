import { useState } from 'react';

const InputHook = (val) => {
    // Get Initial State 
    const [state, setState] = useState(val);

    //Input Field
    const InputField = (e) => {
        setState(e.target.value);
    };

    //Clear Input Field
    const Clear = () => {
        setState("");
    };

    return [state, InputField, Clear];
}

export default InputHook;