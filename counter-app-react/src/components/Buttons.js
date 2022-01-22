import React from "react";
import arrowDown from "../images/down-arrow.png";
import arrowSpinner from "../images/rotated.png";
import arrowUp from "../images/up-arrow.png";
import styled from "styled-components";

// Estilização por styled-components

const Button= styled.button`
    padding: 0.5rem;
    margin: 0.3rem 1rem;
    font-size: 1.5rem;
    border: none;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 180px;


    img {
        width: 30px;
        height: 30px;
    }

    p {
        font-weight: bold;
        margin: 0;
    }
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`

const CounterNumber = styled.p`
    font-size: 4rem;
    text-align: center;
    margin: 0;
`


export class Buttons extends React.Component {
    state={
        counter: 0
    };

    onClickReset = () => {
        this.setState({counter: 0});
    };

    onClickAdd = () => {
        this.setState({counter: this.state.counter + 1});
    };

    onClickSubtract = () => {
        this.setState({counter: this.state.counter - 1});
    };

    render() {
        return(
            <div>

                <CounterNumber>{this.state.counter}</CounterNumber>

                <hr/>

                <ButtonsContainer>
                    <Button onClick={this.onClickSubtract} >
                        <img src={arrowDown} alt="Ícone de flecha apontada para baixo"/>
                        <p>Subtrair</p>
                    </Button>

                    <Button onClick={this.onClickReset} >
                        <img src={arrowSpinner} alt="Ícone de flecha em rotação" />
                        <p>Reiniciar</p>
                    </Button>

                    <Button onClick={this.onClickAdd}>
                        <img src={arrowUp} alt="Ícone de flecha apontada para cima" />
                        <p>Somar</p>
                    </Button>
                </ButtonsContainer>
            </div>
        );
    };
}