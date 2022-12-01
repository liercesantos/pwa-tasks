import React, {useState} from "react";
import {ButtonPrimary, InputPassword, InputText} from "../../components/input";
import MailIcon from "../../assets/icons/mail";
import KeyIcon from "../../assets/icons/key";
import BackIcon from "../../assets/icons/back";
import GuardControl from "../../controls/guard-control";
import UserIcon from "../../assets/icons/user";
import {toast} from "react-toastify";

const Register = () => {
    const guard = new GuardControl();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: undefined,
        email:undefined,
        password:undefined,
        confirm_password:undefined
    });

    const handleRegister = () => {
        const validate = isValid();
        if (Object.values(validate || {}).every((value) => !value)) {
            guard.register(formData);
        }
        else {
            setErrors(validate);
            toast.error("Preencha todos os campos corretamente!")
        }
    }

    const isValid = () => {
        if(formData.password !== formData.confirm_password){
            setErrors({...errors, password: true, confirm_password: true})
        }

        return Object.entries(formData).reduce((elem, value) => {
            let invalid = true;

            if(value[1] && value[1].length > 0){
                invalid = false;
            }

            return {...elem, [value[0]]: invalid};
        }, {});
    }

    return (
        <div className={"background-register"}>
            <BackIcon />

            <div className={'form-title'}>
                <h3>Nova Conta</h3>
            </div>

            <div className={"form-container"}>
                <InputText
                    placeholder={"Nome"}
                    onValueChange={(value) => {
                        setFormData({...formData, name: value});
                        setErrors({...errors, name: false});
                    }}
                    error={errors.name}
                >
                    <UserIcon className={"user-icon"} />
                </InputText>

                <InputText
                    placeholder={"E-mail"}
                    onValueChange={(value) => {
                        setFormData({...formData, email: value});
                        setErrors({...errors, email: false});
                    }}
                    error={errors.email}
                >
                    <MailIcon className={"mail-icon"} />
                </InputText>

                <InputPassword
                    placeholder={"Senha"}
                    onValueChange={(value) => {
                        setFormData({...formData, password: value});
                        setErrors({...errors, password: false});
                    }}
                    error={errors.password}
                >
                    <KeyIcon className={"pass-icon"} />
                </InputPassword>

                <InputPassword
                    placeholder={"Confirmar Senha"}
                    onValueChange={(value) => {
                        setFormData({...formData, confirm_password: value});
                        setErrors({...errors, confirm_password: false});
                    }}
                    error={errors.confirm_password}
                >
                    <KeyIcon className={"pass-icon"} />
                </InputPassword>

                <ButtonPrimary onPress={() => handleRegister()}>
                    Cadastrar
                </ButtonPrimary>
            </div>
        </div>
    );
}

export default Register;
