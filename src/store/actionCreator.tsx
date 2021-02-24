import * as actionTypes from "./action";

export function setTotalMinutesWorked(dateInput: IDateInput) {
    const action: DateInputAction = {
        type: actionTypes.ADD_DATEINPUT,
        dateInput
    }
    return dispatchEvent(action)
}

// export function removeNumber(dateInput: IDateInput) {
//     const action: DateInputAction = {
//         type: actionTypes.REMOVE_DATEINPUT,
//         dateInput
//     }
//     return dispatchEvent(action)
// }

function dispatchEvent(action: DateInputAction) {
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}