import moment from "moment";
import React, { useState, useRef, useCallback, useEffect, createRef, FormEvent } from "react";
import { MainContainer, Container, ButtonStyled } from "../../style";
import Table from "../Table";
import Button from "../FloatButton";
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { setTotalMinutesWorked } from '../../store/actionCreator';
import { IDateInput } from "../../interfaces/date-input";

const style = {
    spacing: {
        margin: '10px',
    },
    center: {
        alignSelf: 'center'
    },
    borderBottom: {
        borderBottom: '1px solid #f2f2f2',
        margin: '20px 0'
    }
};

const months = ['Janeiro', 'Feveveiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outbro', 'Novembro', 'Dezembro'];

function DateInputForm(props: any) {

    const [dateValue, setDateValue] = useState<IDateInput[]>([]);
    const [selectedMonth, setSelectedMonth] = useState(-1);
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    // const [tableIndex, setTableIndex] = useState<number>(-1);

    const textAreaReference = useRef<any>();
    const botaozinho = useRef<any>();

    function calculateDate() {
        let parsedDate: IDateInput[];
        let date = null;

        try {
            parsedDate = JSON.parse(textAreaReference.current.value).timesheetgrid;
            const detectMonth = parsedDate.find((x: IDateInput) => x.DateGrid);
            const month = moment(detectMonth?.DateGrid, 'DD/MM/YYYY').month();
            const year = moment(detectMonth?.DateGrid, 'DD/MM/YYYY').year();
            setSelectedMonth(month);
            setSelectedYear(year);
            date = parsedDate;
            const filteredList = date.filter((item: IDateInput) => item.AmountMinutes > 0);
            setDateValue(filteredList);
        } catch (ex) {
            console.log(ex)
        }
    }

    return (
        <MainContainer orientation={'row'} style={style.borderBottom}>
            <MainContainer orientation={'column'} style={{ margin: 'auto' }}>

                <Container orientation={'row'} style={style.center}>

                    <Container orientation={'column'} style={{ ...style.spacing }}>
                        <label>{selectedYear && `${months[selectedMonth]}/${selectedYear}`}</label>
                    </Container>

                    <Container orientation={'column'} style={{ ...style.spacing, alignSelf: 'flex-end' }}>
                        <label htmlFor='textArea'>Json</label>
                        <textarea name='textArea' ref={textAreaReference} autoComplete={'false'}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    calculateDate();
                                };
                            }} />
                    </Container>

                    <Container orientation={'column'} style={{ ...style.spacing, alignSelf: 'flex-end' }}>
                        <ButtonStyled fontSize={16} onClick={() => calculateDate()}>
                            Calcular
                        </ButtonStyled>
                    </Container>
                </Container>

                <Table
                    dateTimeJson={dateValue}
                    selectedMonth={selectedMonth}
                    selectedYear={selectedYear}
                    tableIndex={props.id}
                />
            </MainContainer>
            <Container orientation={'row'} style={{ alignSelf: 'flex-start' }}>
                <Button
                    iconName={'FiMinusCircle'}
                    iconSize={20}
                    tooltipMsg={'Excluir'}
                    func={() => props.removeTable(props.id)}
                />
            </Container>
        </MainContainer>
    );
}

export default DateInputForm;