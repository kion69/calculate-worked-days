import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { Container, MainContainer, Button } from './style';
import Table from './Table';
import moment from 'moment';
import { Router, Route, Switch } from 'react-router';


interface DateInput {
  AmountMinutes: number,
  AmountPause: number,
  BeginWork: string,
  DateGrid: string,
  EndWork: string,
  ID: [],
  LeaderName: string,
  LunchEndTime: string,
  LunchStartTime: string,
  TaskAmountMinutes: number,
  UserName: string,
}

const months = ['Janeiro', 'Feveveiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outbro', 'Novembro', 'Dezembro'];

function App() {

  const [dateValue, setDateValue] = useState<DateInput[]>([]);
  const [selectedMonth, setSelectedMonth] = useState(-1);

  const textAreaReference = useRef<any>();

  function calculateDate() {

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
    } catch { }
  }

  return (
    <MainContainer orientation={'column'}>
      <Container orientation={'row'}>
        <Container orientation={'column'} style={{ margin: '2%' }}>
          <label>Mês</label>
          <select disabled defaultValue={-1} value={selectedMonth} onChange={(e) => setSelectedMonth(Number(e.target.value))} style={{ fontSize: '15pt' }}>
            <option value={-1}></option>
            {months.map((month, index) => <option value={index}>{month}</option>)};
        </select>
        </Container>

        <Container orientation={'column'}>

          <label htmlFor='textArea'>Json</label>
          <textarea name='textArea' ref={textAreaReference} />

          <Button size={16} onClick={() => calculateDate()}>
            Calcular
        </Button>

        </Container>
      </Container>

      <Table
        dateTimeJson={dateValue}
        monthSelected={selectedMonth}
      />
    </MainContainer>
  );
}

export default App;
