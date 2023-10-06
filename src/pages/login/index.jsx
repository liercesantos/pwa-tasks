import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {ButtonPrimary, ButtonSecondary, InputPassword, InputText} from "../../components/input";
import KeyIcon from "../../assets/icons/key";
import MailIcon from "../../assets/icons/mail";
import TextDivider from "../../components/layout/text-divider";
import GuardControl from "../../controls/guard-control";
import {toast} from "react-toastify";

const Login = () => {
    let navigate = useNavigate();
    const control = new GuardControl();
    const [formData, setFormData] = useState({
        email:undefined,
        password:undefined
    });

    const handleLogin = () => {
        const validate = isValid();
        if (Object.values(validate || {}).every((value) => !value)) {
            control.authenticate(formData);
        }
        else {
            toast.warn("Preencha todos os campos corretamente!")
        }
    }

    const isValid = () => {
        return Object.entries(formData).reduce((elem, value) => {
            let invalid = true;

            if(value[1] && value[1].length > 0){
                invalid = false;
            }

            return {...elem, [value[0]]: invalid};
        }, {});
    }

    return (
        <div className={"background-login"}>
            <div className={"form-container"}>
                <InputText
                    placeholder={"E-mail"}
                    onValueChange={(value) => setFormData({...formData, email: value})}>
                    <MailIcon className={"mail-icon"} />
                </InputText>

                <InputPassword
                    placeholder={"Senha"}
                    onValueChange={(value) => setFormData({...formData, password: value})}>
                    <KeyIcon className={"pass-icon"} />
                </InputPassword>

                <ButtonPrimary onPress={handleLogin}>
                    Entrar
                </ButtonPrimary>

                <TextDivider text={"Não possui uma conta?"} />

                <ButtonSecondary onPress={() => {navigate("register")}}>
                    Nova Conta
                </ButtonSecondary>
            </div>
        </div>
    );
}

export default Login;
