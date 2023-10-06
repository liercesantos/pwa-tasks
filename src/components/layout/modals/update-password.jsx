import React, {useState} from "react";
import {Typography} from "@mui/material";
import BaseModal from "./index";
import GuardControl from "../../../controls/guard-control";
import {ButtonPrimary, InputPassword} from "../../input";
import KeyIcon from "../../../assets/icons/key";
import {toast} from "react-toastify";


const PasswordModal = ({open, onClose}) => {
  const guard = new GuardControl();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    old_password:false,
    password:false,
    confirm_password:false
  });

  const handleSave = () => {
    const validate = isValid();
    if (Object.values(validate || {}).every((value) => !value)) {
      guard.updatePassword(formData.old_password, formData.password).then(response => {
        handleClose(!open);
      }).catch(err => console.log("UnknownError"));
    }
    else {
      setErrors(validate);
      toast.error("Preencha todos os campos corretamente!")
    }
  }

  const isValid = () => {
    if(formData.password !== formData.confirm_password){
      return {...errors, password: true, confirm_password: true};
    }
  }

  const handleClose = () => {
    setErrors({password: false, confirm_password: false});
    onClose(!open);
  }


  return (
    <BaseModal open={open} onClose={handleClose}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        <span style={{color: '#5093B3'}}>Informe a senha atual</span>
      </Typography>

      <InputPassword
        placeholder={"Senha atual"}
        onValueChange={(value) => {
          setFormData({...formData, old_password: value});
          setErrors({...errors, old_password: false});
        }}
        error={errors.old_password}
      >
        <KeyIcon className={"pass-icon"} />
      </InputPassword>

      <Typography id="modal-modal-title" variant="h6" component="h2">
        <span style={{color: '#5093B3'}}>Informe a nova senha</span>
      </Typography>

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

      <ButtonPrimary onPress={() => handleSave()}>
        Cadastrar
      </ButtonPrimary>
    </BaseModal>
  )
}
export default PasswordModal;
