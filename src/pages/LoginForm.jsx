import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';
import Logo from './img/Logo_Senai.jpeg';

function LoginForm() {
    return (
        <>
        <div class="img">
        <img src={Logo} alt="logosenai" width="400px"/>
        </div>

            <div className="cardGeral">

                <div class='texto'>
                    <h1>Bem-vindo</h1>
                    <p>Este Carômetro vai te ajudar a se autoconhecer<br />e a connhecer a seus amigos de outras salas.<br />Seja bem-vindo à jornada de autoconhecimento<br />guiada pelos princípios do SENAI.</p>
                </div>

                <div className="login">
                    <form className="needs-validation">
                        <div className="form-group was-validated mb-2">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" required></input>
                            <div className="invalid-feedback">
                                Por favor insira seu email
                            </div>
                        </div>
                        <div className="form-group was-validated mb-2">
                            <label htmlFor="password" className="form-label">Senha</label>
                            <input type="password" className="form-control" required></input>
                            <div className="invalid-feedback">
                                Por favor insira sua senha
                            </div>
                        </div>
                        <div className="form-group form-check mb-2">
                            <label htmlFor="check" className="form-check-label">Lembrar de mim</label>
                            <input type="checkbox" className="form-check-input"></input>
                        </div>
                        <button type="submit" id="btn-enviar" className="btn btn-sucess block mt-2">Enviar</button>
                        <button type="submit" id="btn-cadastrar" className="btn btn-sucess block mt-2"
                        onClick={() => {
                            window.open(
                                '/home',
                                '_self'
                            )
                        }}
                        >Cadastrar</button>
                    </form>
                </div>

            </div>

        </>
    )
}

export default LoginForm;