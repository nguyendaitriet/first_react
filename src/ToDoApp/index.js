import { useReducer, useRef } from "react";
import { deleteActivity, setActivity, addActivity } from "./actions.js";
import reducer, { initialState } from "./reducer.js";

function ToDo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { activity, activities } = state

    const inputRef = useRef();

    const handleAdd = () => {
        dispatch(addActivity(activity));
        dispatch(setActivity(''));
        inputRef.current.focus();
    }

    return (
        <>
            <h2>To Do</h2>
            <input
                ref={inputRef}
                placeholder="Enter activity"
                value={activity}
                onChange={e => dispatch(setActivity(e.target.value))}
            />
            <button
                onClick={handleAdd}
            >
                Add
            </button>
            <ul>
                {
                    activities.map((item, index) =>
                        <li key={index}>
                            {item}
                            <span onClick={() => dispatch(deleteActivity(index))}>&times;</span>
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default ToDo;