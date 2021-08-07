import { Button } from "../../components/button";
import { Logo } from "../../components/logo";

import './style.css'

export function Login() {
    return (
        <div className="login">
            <p className="login__p-entrar">Entrar:</p>
            <Logo />
            <div className="login__form">
                <label htmlFor="username" className="login__form">
                    <p className="login__form__p">Login: </p>
                    <input className="login__form__input" type="text" name="username" id="username" />
                </label>
                <label htmlFor="password" className="login__form">
                    <p className="login__form__p">Senha: </p>
                    <input className="login__form__input" type="password" name="password" id="password" />
                </label>
                <div className="login__form__button">
                    <Button>
                        <i className="fas fa-sign-in-alt" /> Login
                    </Button>
                </div>
                <div className="login__form__button login__form__button-google">
                    <Button>
                        <i className="fab fa-google" /> Login com google
                    </Button>
                </div>
            </div>
        </div>
    )
}