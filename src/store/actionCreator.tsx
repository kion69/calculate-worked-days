import * as actionTypes from "./action";

export function setTotalMinutesWorked(dateInput: IGeneric) {

    const action: GenericAction = {
        type: actionTypes.ADD_DATEINPUT,
        action: dateInput
    }
    return dispatchEvent(action)
}

// export function removeNumber(index: number) {
//     const action: DateInputAction = {
//         type: actionTypes.REMOVE_DATEINPUT,
//         action: index
//     }
//     return dispatchEvent(action)
// }

function dispatchEvent(action: GenericAction) {
    return (dispatch: GenericDispatchType) => {
        dispatch(action)
    }
}