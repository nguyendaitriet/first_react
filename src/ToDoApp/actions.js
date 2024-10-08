import { DELETE_ACTIVITY, SET_ACTIVITY, ADD_ACTIVITY } from "./constants.js";

export const setActivity = payload => {
    return {
        type: SET_ACTIVITY,
        payload
    };
}
export const addActivity = payload => {
    return {
        type: ADD_ACTIVITY,
        payload
    };
}
export const deleteActivity = payload => {
    return {
        type: DELETE_ACTIVITY,
        payload
    };
}