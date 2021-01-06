import React from "react";
import styled from "styled-components";
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

    return (
        <TotalCount>Total: </TotalCount>
    )
}