interface IDateInput {
    index: number;
    totalMinutes: number;
}

type DateInputState = {
    dateInput: IDateInput;
}

type DateInputAction = {
    type: string,
    dateInput: IDateInput
}

type DispatchType = (args: DateInputAction) => DateInputAction

