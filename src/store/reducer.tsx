import * as actionTypes from "./action"


const initialState: DateInputState = {
    dateInput: {
        index: -1,
        totalMinutes: 0
    }
};

const reducer = (
    state: DateInputState = initialState,
    action: DateInputAction
): DateInputState => {
    switch (action.type) {
        case actionTypes.ADD_DATEINPUT:
            return {
                ...state,
                dateInput: {
                    index: action.dateInput.index,
                    totalMinutes: action.dateInput.totalMinutes
                }
            }

        case actionTypes.REMOVE_DATEINPUT:
            return {
                ...state,
                dateInput: {
                    index: action.dateInput.index,
                    totalMinutes: action.dateInput.totalMinutes
                }
            }
    }
    return state
}

export default reducer