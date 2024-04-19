import React from "react";
import Pessoa from "./img/pessoa.png"
import './idev2.css'
import Card from "../components/Card";
import Logo from './img/Logo_Senai.jpeg';
import NavbarTop from "../components/Navbar";


function Idev2() {
    return (
        <>  
        <NavbarTop></NavbarTop>
        <div className="Card-Nome">
            <div className="1">
            <Card nome='Alexandre Magalhaes' turma='IDEV2' número={1}></Card>
            <Card nome='Camilly Bianca' turma='IDEV2' número={2}></Card>
            <Card nome='Carolina Romano' turma='IDEV2' número={3}></Card>
            <Card nome='Claudete Carmo' turma='IDEV2' número={4}></Card>
            <Card nome='Eduarda Rodrigues' turma='IDEV2' número={5}></Card>
            <Card nome='Enzo Rafael' turma='IDEV2' número={6}></Card>
            <Card nome='Felipe Loncarovich' turma='IDEV2' número={7}></Card>
            <Card nome='Gabriel Oliveira' turma='IDEV2' número={8}></Card>
            </div>
            <div className="2">
            <Card nome='Gabriel Pires' turma='IDEV2' número={9}></Card>
            <Card nome='Gabrielle Lima' turma='IDEV2' número={10}></Card>
            <Card nome='Giovani Canella' turma='IDEV2' número={11}></Card>
            <Card nome='Guilherme Trevisan' turma='IDEV2' número={12}></Card>
            <Card nome='Guilherme Ferraresi' turma='IDEV2' número={13}></Card>
            <Card nome='Henrique Bussi' turma='IDEV2' número={14}></Card>
            <Card nome='Henry Gabriel' turma='IDEV2' número={15}></Card>
            <Card nome='Isabela Cunha' turma='IDEV2' número={16}></Card>
            </div>
            <div className="3">
            <Card nome='Jhuan Medeiros' turma='IDEV2' número={17}></Card>
            <Card nome='Juan Miguel' turma='IDEV2' número={18}></Card>
            <Card nome='Kauan Duarte' turma='IDEV2' número={19}></Card>
            <Card nome='Lucas Dias' turma='IDEV2' número={20}></Card>
            <Card nome='Lucas Martins' turma='IDEV2' número={21}></Card>
            <Card nome='Lucas Zanello' turma='IDEV2' número={22}></Card>
            <Card nome='Manuela Mattos' turma='IDEV2' número={23}></Card>
            <Card nome='Mateus Silverio' turma='IDEV2' número={24}></Card>
            </div>
            <div className="4">
            <Card nome='Matheus Rodolpho' turma='IDEV2' número={25}></Card>
            <Card nome='Pedro lima' turma='IDEV2' número={26}></Card>
            <Card nome='Pedro Henrique' turma='IDEV2' número={27}></Card>
            <Card nome='Tomás Heizo' turma='IDEV2' número={28}></Card>
            <Card nome='Vinicius Lima' turma='IDEV2' número={29}></Card>
            <Card nome='Vitória Muniz' turma='IDEV2' número={30}></Card>
            <Card nome='Yasmim Moreno' turma='IDEV2' número={31}></Card>
            </div>
            </div>
            
        </>
    )

}

export default Idev2;