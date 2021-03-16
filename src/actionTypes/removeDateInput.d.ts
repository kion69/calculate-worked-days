interface IRemoveDateInput {
    index: number;
}

type RemoveDateInputState = {
    dateInput: IRemoveDateInput;
}

type RemoveDateInputAction = {
    type: string,
    dateInput: IRemoveDateInput
}

type DispatchType = (args: RemoveDateInputAction) => RemoveDateInputAction

interface IGeneric {
    [key: string]: any;
}

type GenericState = {
    [key: string]: IGeneric
}

type GenericAction = {
    type: string,
    action: IGeneric
}

type GenericDispatchType = (ars: T) => T;