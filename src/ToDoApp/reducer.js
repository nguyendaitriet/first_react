import { DELETE_ACTIVITY, SET_ACTIVITY, ADD_ACTIVITY } from "./constants.js";

export const initialState = {
    activity: '',
    activities: []
}

const reducer = (state, action) => {
    let newState;

    switch (action.type) {
        case SET_ACTIVITY:
            newState = {
                ...state,
                activity: action.payload
            }
            break;
        case ADD_ACTIVITY:
            newState = {
                ...state,
                activities: [...state.activities, action.payload]
            }
            break;
        case DELETE_ACTIVITY:
            let oldActivities = [...state.activities];
            oldActivities.splice(action.payload, 1);
            newState = {
                ...state,
                activities: oldActivities
            }
            break;
        default:
            throw new Error('Invalid action!');
    }

    console.log(newState);

    return newState;
}

export default reducer;