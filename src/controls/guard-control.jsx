import {createUser, signInUser, signOutUser, updateUserPassword} from "../repositories/auth";
import {useGuard} from "../contexts/GuardContext";
import {toast} from "react-toastify";
import firebaseAnalytics from "../services/firebase/analytics";
import {firebase_auth} from "../services/firebase";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";

class GuardControl {
  context = useGuard();

  register(data){
    const {setUser, setLogged, APPLICATION_KEY} = this.context;
    const user = {name: data.name, email: data.email, password: data.password}
    createUser(user).then(response => {
      setUser({...response, key: APPLICATION_KEY});
      setLogged(true);

      firebaseAnalytics('new_user_registered', [{name: response.name, email: response.email}]);
      window.location = '/';
    }).catch(err => {
      console.warn("ERROR", err)
      if(err === 'UserExists'){
        toast.warn('O email informado já está sendo utilizado.');
      }
      else {
        toast.error('Erro ao salvar o usuário. Por favor, tente novamente mais tarde.');
      }
    })
  }

  authenticate(data){
    const {setUser, setLogged, APPLICATION_KEY} = this.context;
    const user = {email: data.email, password: data.password};
    signInUser(user)
      .then(response => {
        setUser({...response, key: APPLICATION_KEY});
        setLogged(true);
        firebaseAnalytics('login_attempt', [{name: response.name, email: response.email}]);
      })
      .catch(err => {
        if(process.env.NODE_ENV === 'development'){
          console.log("AUTHENTICATE", err);
        }
        if(err === 'UserNotFound'){
          toast.warn('Credenciais inválidas. Por favor, tente novamente.');
        }
        else {
          toast.error('Erro ao tentar iniciar a sessão. Por favor, tente novamente mais tarde.');
        }
      });
  }

  async updatePassword(oldPassword, password){
    return new Promise((resolve, reject) => {
      const credential = EmailAuthProvider.credential(firebase_auth.currentUser.email, oldPassword);

      reauthenticateWithCredential(firebase_auth.currentUser, credential).then(() => {
        updateUserPassword(password)
          .then(() => {
            toast.success('Senha atualizada com sucesso.');
            resolve("updated");
          })
          .catch(error => {
            console.log(error.code);
            if(error.code === "auth/weak-password"){
              toast.warn('A senha deve ter, pelo menos, 6 caracteres.');

              reject("failed");
              return;
            }

            toast.error('Erro ao atualizar a senha. Por favor, tente novamente mais tarde.');
            reject("error");
          });
      }).catch((error) => {
        if(error.code === "auth/invalid-login-credentials"){
          toast.warn('Credenciais inválidas. Por favor, tente novamente.');

          reject("failed");
          return;
        }
        toast.error('Erro ao atualizar a senha. Por favor, tente novamente mais tarde.');
        reject("error");
      });
    });
  }

  persist(){
    const {setUser, setLogged, APPLICATION_KEY} = this.context;
    try {
      const user = firebase_auth.currentUser;
      console.log("CURRENT_USER", user)

      if(user?.uid){
        setUser({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          key: APPLICATION_KEY
        });
        setLogged(true);
      }
    }
    catch (e) {
      setUser({});
      setLogged(false);
    }
  }

  logout(callback) {
    const { user, setUser, setLogged} = this.context;

    signOutUser().then(() => {
      firebaseAnalytics('logout', [{name: user.name, email: user.email}]);

      setUser({});
      setLogged(false);
      callback();
      //window.location.href = "/";
    })
  }
}
export default GuardControl;
