import React, { useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import styled from "styled-components";
import { IDateInput } from "../../interfaces/date-input";
import { darkColor } from "../../style";


export const TotalCount = styled.div`
    flex-direction: row;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    padding-right: 3rem;
    color: ${darkColor};
`;

export function TotalCountHour() {

    const [totalMinutesWorked, setTotalMinutesWorked] = useState(0);
    const total = useSelector((state: any) => {
        const { dateInput } = state;
        console.log(state);
        return dateInput.totalMinutes;
    }, shallowEqual);

    function calculateTotal(totalMinutes: number) {
        const result = totalMinutesWorked + totalMinutes;
        setTotalMinutesWorked(result);
    }

    useEffect(() => {
        console.log(total);
        calculateTotal(total);
    }, [total]);

    return (
        <TotalCount>Total: {totalMinutesWorked}</TotalCount>
    )
}