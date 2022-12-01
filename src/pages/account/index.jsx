import React, {useState} from "react";
import BackIcon from "../../assets/icons/back";
import MailIcon from "../../assets/icons/mail";
import {InputText} from "../../components/input";
import ButtonPrimary from "../../components/input/button-primary";
import KeyIcon from "../../assets/icons/key";
import LogoutIcon from "../../assets/icons/logout";
import GuardControl from "../../controls/guard-control";
import PasswordModal from "../../components/layout/modals/update-password";
import AddTasksModal from "../../components/layout/modals/add-tasks";

const Account = () => {
    const control = new GuardControl();
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    }

    return(
        <div>
            <BackIcon />
            <div className={'form-title'}>
                <h3>Meus Dados</h3>
            </div>
            <div className={"form-container"}>
                <InputText placeholder={"Nome"}>
                    <MailIcon className={"mail-icon"} />
                </InputText>

                <InputText placeholder={"E-mail"}>
                    <MailIcon className={"mail-icon"} />
                </InputText>

                <ButtonPrimary>
                    Salvar
                </ButtonPrimary>
            </div>

            <div className={"account-password-link"}>
                <span onClick={() => setModal(!modal)}>
                    <KeyIcon className={"pass-icon"} /> Alterar Senha
                </span>
            </div>
            <div className={"account-password-logout"}>
                <span onClick={() => control.logout()}>
                    <LogoutIcon /> Sair
                </span>
            </div>
            <PasswordModal open={modal} onClose={handleModal} />
        </div>
    );
}
export default Account;
