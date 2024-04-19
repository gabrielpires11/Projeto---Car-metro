import React from "react";
import Pessoa from '../pages/img/pessoa.png'
function Card({ nome, turma, número }) {
    return (
        <>
            <div className="geral ">
                <div className="container">
                    <img src={Pessoa} alt="" width="230px" />
                    <p className="roboto-thin"> {nome} <br /> {turma} <br /> {número}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card;