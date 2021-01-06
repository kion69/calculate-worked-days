import React, { useCallback, useState } from 'react';
import DateInputForm from '../component/DateInput';
import './home-style.css';
import Button from '../component/FloatButton';

export interface DateInput {
    AmountMinutes: number,
    AmountPause: number,
    BeginWork: string,
    DateGrid: string,
    EndWork: string,
    ID: number,
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
    },
    middle: {
        verticalAlign: 'middle'
    }
};

function Home(props: any) {

    const [renderForm, setRenderForm] = useState<any[]>([]);

    const newForm = useCallback(
        () => {
            renderForm.push(<DateInputForm key={Math.round(Math.random() * 999)} />);
            setRenderForm(prevState => [...prevState]);
        }, [renderForm]);

    return (
        <>
            <Button
                iconName={'FiPlusCircle'}
                iconSize={20}
                style={style.middle}
                tooltipMsg={'Adicionar novo'}
                float={true}
                func={() => newForm()}
            />
            { renderForm.map((item) => item)}
        </>
    );
}

export default Home;