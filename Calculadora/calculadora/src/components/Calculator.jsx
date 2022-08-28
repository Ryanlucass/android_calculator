import React from "react";
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import './Calculator.css';
import './Reset.css';

export default function Calculator(){
    return(
        <div>
        <Box m={5}/>
        <Container maxWidth='xs'>
            <div className="wrapper">
                    <Container>
                        <div className="container"></div>
                    </Container>
                    <div className="button">AC</div>
                    <div className="button dif">()</div>
                    <div className="button dif">%</div>
                    <div className="button dif">/</div>
                    <div className="button">7</div>
                    <div className="button">8</div>
                    <div className="button">9</div>
                    <div className="button dif">X</div>
                    <div className="button">4</div>
                    <div className="button">5</div>
                    <div className="button">6</div>
                    <div className="button dif">-</div>
                    <div className="button">1</div>
                    <div className="button">2</div>
                    <div className="button">3</div>
                    <div className="button dif">+</div>
                    <div className="button">0</div>
                    <div className="button">.</div>
                    <div className="button">c</div>
                    <div className="button">=</div>
                </div>
        </Container>
        </div>
    )
}