import React from "react";
import arrowDown from "../images/down-arrow.png"
import arrowSpinner from "../images/rotated.png"
import arrowUp from "../images/up-arrow.png"


export class Buttons extends React.Component {
    render() {
        return(
            <div>

                <button>
                    <img src={arrowDown} alt="Ícone de flecha apontada para baixo" />
                    Subtrair
                </button>

                <button>
                    <img src={arrowSpinner} alt="Ícone de flecha em rotação" />
                    Reiniciar
                </button>

                <button>
                    <img src={arrowUp} alt="Ícone de flecha apontada para cima" />
                    Somar
                </button>
            </div>
        )
    }
}