import { useReducer } from "react";

// Initial state
const initialNumber = 0;

// Actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

// Reducer
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('Invalid action.');
    }
}

// Dispatch reducer
function NumberChanging() {
    const [state, dispatch] = useReducer(reducer, initialNumber);

    return (
        <>
            <h1>{state}</h1>
            <button
                onClick={() => dispatch(UP_ACTION)}
            >
                Up
            </button>
            <button
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Down
            </button>        
        </>
    )
}

export default NumberChanging;