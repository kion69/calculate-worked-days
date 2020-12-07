import React, { useState, useRef, useEffect } from 'react';
import moment from 'moment';
import { MainContainer, Container, Button } from '../style';
import Table from '../Table';

interface DateInput {
    AmountMinutes: number,
    AmountPause: number,
    BeginWork: string,
    DateGrid: string,
    EndWork: string,
    ID: [],
    LunchEndTime: string,
    LunchStartTime: string,
    TaskAmountMinutes: number,
    UserName: string,
}

const style = {
    spacing: {
        margin: '10px',
    },
    center: {
        alignSelf: 'center'
    }
};

const months = ['Janeiro', 'Feveveiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outbro', 'Novembro', 'Dezembro'];

function Home(props: any) {

    const [dateValue, setDateValue] = useState<DateInput[]>([]);
    const [selectedMonth, setSelectedMonth] = useState(-1);
    const [renderForm, setRenderForm] = useState<any[]>([]);

    const textAreaReference = useRef<any>();

    function calculateDate() {

        console.log('calcuei');
        let parsedDate: DateInput[];
        let date = null;

        try {
            parsedDate = JSON.parse(textAreaReference.current.value).timesheetgrid;
            const detectMonth = parsedDate.find((x: DateInput) => x.DateGrid);
            const month = moment(detectMonth?.DateGrid, 'DD/MM/YYYY').month();
            setSelectedMonth(month);
            date = parsedDate;
            const filteredList = date.filter((item: DateInput) => item.AmountMinutes > 0);
            setDateValue(filteredList);
        } catch (ex) {
            console.log(ex)
         }
    }

    const novoRender = () => {
        renderForm.push(
            <MainContainer key={renderForm.length} orientation={'column'}>

                <Container orientation={'row'} style={style.center}>

                    <Container orientation={'column'} style={{ ...style.spacing, alignSelf: 'flex-end' }}>
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
                        <Button size={16} onClick={() => calculateDate()}>
                            Calcular
                        </Button>

                    </Container >

                </Container >

                {
                    dateValue.length > 0 &&
                    <Table
                        dateTimeJson={dateValue}
                        monthSelected={selectedMonth}
                    />
                }
            </MainContainer >
        );
        setRenderForm(prevState => [...prevState]);
        console.log(renderForm);
    }

    useEffect(novoRender, []);


    return (
        // <>
        //     {renderForm}
        // </>
        <MainContainer key={renderForm.length} orientation={'column'}>
            <Container orientation={'row'} style={style.center}>

                <Container orientation={'column'} style={{ ...style.spacing, alignSelf: 'flex-end' }}>
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
                    <Button size={16} onClick={() => calculateDate()}>
                        Calcular
                        </Button>

                </Container >

            </Container>
            {
                dateValue.length > 0 &&
                <Table
                    dateTimeJson={dateValue}
                    monthSelected={selectedMonth}
                />}
        </MainContainer >
    );
}

export default Home;