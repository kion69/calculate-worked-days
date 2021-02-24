import React, { createRef, useCallback, useState } from 'react';
import DateInputForm from '../../component/DateInput';
import './home-style.css';
import Button from '../../component/FloatButton';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { setTotalMinutesWorked } from '../../store/actionCreator';
import { ButtonStyled } from '../../style';

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
    const [keyForm, setKeyForm] = useState<number>(0);
    const dispatch: Dispatch<any> = useDispatch()


    const newForm = () => {
        renderForm.push(
            <DateInputForm
                key={keyForm}
                removeTable={() => removeTable(keyForm)}
                id={keyForm} />);
        setKeyForm(keyForm + 1);
        console.log(keyForm);
        setRenderForm(renderForm);
    }

    // function reduxLegal() {
    //     dispatch(addNumber());
    // }

    const removeTable =
        (index: number) => {
            console.log('chamei');
            const indexInRow = renderForm.findIndex(item => item.props.id === index);
            renderForm.splice(indexInRow, 1);
            console.log(renderForm);
            setRenderForm([...renderForm]);
        };

    return (
        <>
            {/* <ButtonStyled fontSize={16} onClick={() => reduxLegal()}>
                Calcular
            </ButtonStyled> */}
            
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