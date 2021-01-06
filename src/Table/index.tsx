import React, { useEffect, useState } from 'react';
import { MainContainer, Container, darkColor, Text, Divider } from '../style';
import { ContainerFullWidth, ContainerTableScrollable, ContainerTimeInfo, TableRow } from './table-style';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';
import moment from 'moment';

interface DateInput {
  AmountMinutes: number;
  AmountPause: number;
  BeginWork: string;
  DateGrid: string;
  EndWork: string;
  ID: [],
  LeaderName: string;
  LunchEndTime: string;
  LunchStartTime: string;
  TaskAmountMinutes: 0;
  UserName: string;
};

const style = {
  tableHead: {
    backgroundColor: '#AFA7C7',
    color: '#fff',
  },
  timeInfo: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}

function Table(props: any) {

  const [tableDateInput, setTableDateInput] = useState<DateInput[]>([]);
  const [positiveWorkedHours, setPositiveWorkedHours] = useState(0);
  const [negativeWorkedHours, setNegativeWorkedHours] = useState(0);
  // const [startDate] = useState();
  // const [endDate] = useState();
  const [workedDays, setWorkedDays] = useState(0);


  useEffect(() => {
    console.log(props.dateTimeJson);
    setTableDateInput(createTable(props.dateTimeJson, props.selectedMonth, props.selectedYear));
    calculateMinutes(props.dateTimeJson);
  }, [props]);

  function calculateMinutes(datesInputed: DateInput[]) {

    let positiveMinutes = 0;
    let negativeMinutes = 0;

    datesInputed = datesInputed?.filter(x => x.EndWork);

    const positiveWorkedMinutes = datesInputed.filter(item => item.AmountMinutes >= 480);
    const negativeWorkedMinutes = datesInputed.filter(item => item.AmountMinutes < 480);
    positiveWorkedMinutes.forEach(dayWorked => positiveMinutes += dayWorked.AmountMinutes);
    negativeWorkedMinutes.forEach(dayWorked => negativeMinutes += dayWorked.AmountMinutes);

    setPositiveWorkedHours(positiveMinutes);
    setNegativeWorkedHours(negativeMinutes);
  };

  function createTable(datesInputed: DateInput[], selectedMonth: number, selectedYear: number) {

    var startDate = moment(`01/${selectedMonth + 1}/${selectedYear}`, 'DD/MM/YYYY');
    var endDate = moment(startDate, 'DD/MM/YYYY').endOf('month');

    let day = startDate.date();
    let lastDate = endDate.date();
    const year = startDate.year();
    const month = startDate.month();

    let tableDate: DateInput[] = [];

    if (datesInputed?.length > 0) {

      for (day = startDate.date(); day <= lastDate; day++) {

        let dateOfMonth = moment([day, month + 1, year], 'DD/MM/YYYY');
        tableDate.push({
          DateGrid: dateOfMonth.format('DD/MM/YYYY'),
          AmountMinutes: 0,
          AmountPause: 0,
          BeginWork: '',
          EndWork: '',
          ID: [],
          LeaderName: '',
          LunchEndTime: '',
          LunchStartTime: '',
          TaskAmountMinutes: 0,
          UserName: '',
        });
      }

      datesInputed.forEach((date) => {
        tableDate.map((outraData) => {
          if (date.DateGrid === outraData.DateGrid) {
            return Object.assign(outraData, date);
          }
          return null;
        });
      });
    }

    setWorkedDays(tableDate.filter(x => x.EndWork).length);
    return tableDate;
  }

  const formatTime = (date: string) => {
    return date ? date : '00:00';
  }

  function checkAmountCell(amountMinutes: number) {
    if (amountMinutes === 0) {
      return;
    }
    if (amountMinutes >= 480) {
      return <FiCheckCircle size={24} />;
    } else {
      return <FiXCircle size={24} />;
    }
  }

  function calculateHour() {

    const result = ((positiveWorkedHours + negativeWorkedHours) - workedDays * 8 * 60) / 60;
    return result.toFixed(2);
  }

  return (
    <MainContainer orientation={'column'} style={{ justifyContent: 'space-evenly' }}>
      
      {tableDateInput.length > 0 &&
        <Container orientation={'row'}>
          <ContainerTableScrollable>
            <table
              cellPadding='20'
              style={{
                borderCollapse: 'collapse',
                borderSpacing: '0 0.25rem',
                textAlign: 'center',
                boxShadow: '0px 5px 10px 0.5px rgba(0,0,0,0.5)'
              }}>
              <thead style={style.tableHead}>
                <tr>
                  <th>Data</th>
                  <th>Inicio Trab</th>
                  <th>Inicio Alm</th>
                  <th>Fim Alm</th>
                  <th>Fim Trab</th>
                  <th>Total Minutos</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tableDateInput.map((item: DateInput, index: number) =>
                  <TableRow key={index} amount={item.AmountMinutes}>
                    <td>{item.DateGrid}</td>
                    <td>{formatTime(item.BeginWork)}</td>
                    <td>{formatTime(item.LunchStartTime)}</td>
                    <td>{formatTime(item.LunchEndTime)}</td>
                    <td>{formatTime(item.EndWork)}</td>
                    <td>{item.AmountMinutes}</td>
                    <td>{checkAmountCell(item.AmountMinutes)}</td>
                  </TableRow>
                )}
              </tbody>
            </table>
          </ContainerTableScrollable>

          {/* <Container orientation={'column'} style={{ margin: 'unset' }}> */}
          <ContainerTimeInfo orientation={'row'}>
            <ContainerFullWidth>
              <div style={style.timeInfo}>
                <Text fontSize={21} fontColor={darkColor} fontWeight={'bold'}>Dias trabalhados {workedDays}</Text>
              </div>
              <Divider />
              <div style={style.timeInfo}>
                <Text>Minutos totais: </Text>
                <Text>{workedDays * 8 * 60}</Text>
              </div>
              <div style={style.timeInfo}>
                <Text>Minutos positivas: </Text>
                <Text>{positiveWorkedHours}</Text>
              </div>
              <div style={style.timeInfo}>
                <Text>Minutos negativas: </Text>
                <Text>{negativeWorkedHours}</Text>
              </div>
              <div style={style.timeInfo}>
                <Text>Saldo(minutos): </Text>
                <Text>{(positiveWorkedHours + negativeWorkedHours) - workedDays * 8 * 60}</Text>
              </div>
              <div style={style.timeInfo}>
                <Text>Saldo(horas): </Text>
                <Text>{calculateHour()}</Text>
              </div>
            </ContainerFullWidth>
          </ContainerTimeInfo>
        </Container>
      }
    </MainContainer>
  );
}

export default React.memo(Table);