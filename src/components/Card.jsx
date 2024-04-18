import React from "react";
import Pessoa from '../pages/img/pessoa.png'
function Card({ nome, turma }) {
    return (
        <>
            <div className="geral ">
                <div className="container">
                    <img src={Pessoa} alt="" width="230px" />
                    <p className="roboto-thin"> {nome} <br /> {turma}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card;