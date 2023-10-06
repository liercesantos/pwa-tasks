import React, {useState} from "react";
import BackIcon from "../../assets/icons/back";
import MailIcon from "../../assets/icons/mail";
import UserIcon from "../../assets/icons/user";
import {InputText} from "../../components/input";
import KeyIcon from "../../assets/icons/key";
import LogoutIcon from "../../assets/icons/logout";
import GuardControl from "../../controls/guard-control";
import PasswordModal from "../../components/layout/modals/update-password";
import {useGuard} from "../../contexts/GuardContext";
import {useNavigate} from "react-router-dom";

const Account = () => {
  let navigate = useNavigate();
  const {user} = useGuard();
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
        <InputText
          placeholder={"Nome"}
          defaultValue={user.name}
          readOnly={true}>
          <UserIcon className={"user-icon"} />
        </InputText>

        <InputText
          placeholder={"E-mail"}
          defaultValue={user.email}
          readOnly={true}>
          <MailIcon className={"mail-icon"} />
        </InputText>
      </div>

      <div className={"account-password-link"}>
        <span onClick={() => setModal(!modal)}>
            <KeyIcon className={"pass-icon"} /> Alterar Senha
        </span>
      </div>
      <div className={"account-password-logout"}>
        <span onClick={() => {
          control.logout(() => {
            navigate("/")
          })
        }}>
          <LogoutIcon /> Sair
        </span>
      </div>
      <PasswordModal open={modal} onClose={handleModal} />
    </div>
  );
}
export default Account;
