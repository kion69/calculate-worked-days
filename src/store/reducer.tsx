import * as actionTypes from "./action"


const initialState: GenericState = {
    dateInput: {
        index: -1,
        totalMinutes: 0
    }
};



const reducer = (
    state: GenericState = initialState,
    action: GenericAction
): GenericState => {

    switch (action.type) {
        case actionTypes.ADD_DATEINPUT:
            return {
                ...state,
                dateInput: {
                    index: action.action.index,
                    totalMinutes: action.action.totalMinutes
                }
            }

        case actionTypes.REMOVE_DATEINPUT:
            return {
                // ...state,
                // dateInput: {
                //     index: action.dateInput.index,
                //     totalMinutes: action.dateInput.totalMinutes
                // }
            }
    }
    return state
}

export default reducer