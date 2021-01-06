import moment from "moment";
import React, { useState, useRef, useCallback } from "react";
import { DateInput } from "../../Home";
import { MainContainer, Container, ButtonStyled } from "../../style";
import Table from "../../Table";
import Button from "../FloatButton";

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

    const [dateValue, setDateValue] = useState<DateInput[]>([]);
    const [selectedMonth, setSelectedMonth] = useState(-1);
    const [selectedYear, setSelectedYear] = useState(0);

    const textAreaReference = useRef<any>();

    function calculateDate() {

        let parsedDate: DateInput[];
        let date = null;

        try {
            parsedDate = JSON.parse(textAreaReference.current.value).timesheetgrid;
            const detectMonth = parsedDate.find((x: DateInput) => x.DateGrid);
            const month = moment(detectMonth?.DateGrid, 'DD/MM/YYYY').month();
            const year = moment(detectMonth?.DateGrid, 'DD/MM/YYYY').year();
            setSelectedMonth(month);
            setSelectedYear(year);
            date = parsedDate;
            const filteredList = date.filter((item: DateInput) => item.AmountMinutes > 0);
            setDateValue(filteredList);
        } catch (ex) {
            console.log(ex)
        }
    }

    const deleteTable = useCallback(
        () => {
            console.log('legal')
        }, []);

    return (
        <MainContainer orientation={'row'} style={style.borderBottom}>
            <MainContainer orientation={'column'} style={{ margin: 'auto' }}>

                <Container orientation={'row'} style={style.center}>

                    <Container orientation={'column'} style={{ ...style.spacing, alignSelf: 'flex-end' }}>

                        <label>Ano {selectedYear !== 0 && selectedYear}</label>
                        <label>Mês</label>
                        <select disabled value={selectedMonth} onChange={(e) => setSelectedMonth(Number(e.target.value))} style={{ fontSize: '15pt', order: 1 }}>
                            <option value={-1}></option>
                            {months.map((month, index) => <option value={index} key={index}>{month}</option>)};
                        </select>
                    </Container>

                    <Container orientation={'column'} style={{ ...style.spacing, alignSelf: 'flex-end' }}>
                        <label htmlFor='textArea'>Json</label>
                        <textarea name='textArea' ref={textAreaReference} autoComplete={'false'} />
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
                />
            </MainContainer>
            <Container orientation={'row'} style={{ alignSelf: 'flex-start' }}>
                <Button
                    iconName={'FiMinusCircle'}
                    iconSize={20}
                    tooltipMsg={'Excluir'}
                    func={() => deleteTable()}
                />
            </Container>
        </MainContainer>
    );
}

export default DateInputForm;