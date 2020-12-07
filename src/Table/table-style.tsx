import styled from 'styled-components';
import { redColor, darkColor, MainContainer } from '../style';


export const TableRow = styled.tr<{ amount: number }>`
    background-color: #fff;
    color: ${darkColor};
    color: ${({ amount }) => {
        if (amount === 0)
            return darkColor;
        else {
            return amount >= 480 ? darkColor : redColor;
        }
    }};
    
    :hover {
        cursor: pointer;
        background-color: #f1f1f1;
    }
`;

export const ContainerTableScrollable = styled.div`
    max-height: 50vh;
    overflow: auto;
    margin-bottom: 25px;
`;

export const ContainerFullWidth = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.4);
    padding: 15px;
`;

export const ContainerTimeInfo = styled(MainContainer)`
    color: ${darkColor};
    margin: 0px 2.5vw;
    align-self: flex-start;
    min-width: 300px;
    background-color: white;
    justify-content: space-evenly;
`;

