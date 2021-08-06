import { Button } from "../../components/button";
import { Logo } from "../../components/logo";

import './style.css'

export function Login() {
    return (
        <div className="login">
            <Logo />
            <div className="login__form">
                <label htmlFor="username">
                    <p className="login__form__p">Login: </p>
                    <input className="login__form__input" type="text" name="username" id="username" />
                </label>
                <label htmlFor="password">
                    <p className="login__form__p">Senha: </p>
                    <input className="login__form__input" type="text" name="password" id="password" />
                </label>
                <div className="login__form__button">
                    <Button>
                        Logar
                    </Button>
                </div>
            </div>
        </div>
    )
}