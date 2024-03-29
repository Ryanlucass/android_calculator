import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import './Calculator.css';
import './Reset.css';
import { breadcrumbsClasses } from '@mui/material';

export default function Calculator(){

    const [num,setNum] = useState(0);
    const [operador,setOperador] = useState('');
    const [oldNum,setOldNum] = useState(0);

    function inputNum(e){
        var input = e.target.getAttribute('value');
        num === 0 ? setNum(input) : setNum(num + input);
    }

    function allClear(){
        setNum(0);
    }

    function porcent(){
        setNum(num/100)
    }

    function clear(){
        setNum(num)
    }

    function operatorHandle(e){
        var operatorInput = e.target.getAttribute('value');
        console.log(operatorInput);


        setOperador(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate(){
        switch(operador){
            case '/':
            setNum(oldNum / num);
                break;
            case 'X':
            setNum(oldNum * num);
                break;
            case '-':
            setNum(oldNum - num);
                break;
            case '+':
            setNum(oldNum + num);
                break;
        }
    }




    return(
        <div>
        <Box m={5}>
            <Container maxWidth='xs'>
                <div className="wrapper">
                        <Container>
                            <div className="container">
                            <Box m={1}/>
                                <h1
                                className="result"
                                onClick={inputNum}
                                >
                                    {num}
                                </h1>
                            </div>
                        </Container>
                        <div className="button" onClick={allClear}>AC</div>
                        <div className="button dif" onClick={inputNum}>()</div>
                        <div className="button dif" onClick={porcent}>%</div>
                        <div className="button dif" onClick={operatorHandle} value={'/'}>/</div>
                        <div className="button" onClick={inputNum} value={7}>7</div>
                        <div className="button" onClick={inputNum} value={8}>8</div>
                        <div className="button" onClick={inputNum} value={9}>9</div>
                        <div className="button dif" onClick={operatorHandle} value={'X'}>X</div>
                        <div className="button" onClick={inputNum} value={4}>4</div>
                        <div className="button" onClick={inputNum} value={5}>5</div>
                        <div className="button" onClick={inputNum} value={6}>6</div>
                        <div className="button dif" onClick={operatorHandle} value={'-'}>-</div>
                        <div className="button" onClick={inputNum} value={1}>1</div>
                        <div className="button" onClick={inputNum} value={2}>2</div>
                        <div className="button" onClick={inputNum} value={3}>3</div>
                        <div className="button dif" onClick={operatorHandle} value={'+'}>+</div>
                        <div className="button" onClick={inputNum} value={0}>0</div>
                        <div className="button" onClick={inputNum} value={'.'}>.</div>
                        <div className="button">c</div>
                        <div className="button"onClick={calculate} >=</div>
                    </div>
            </Container>
        </Box>
        </div>
    )
}