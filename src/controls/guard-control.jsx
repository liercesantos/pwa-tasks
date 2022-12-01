import {fetchUser, createUser, updateUser} from "../repositories/auth";
import {useGuard} from "../contexts/GuardContext";
import {toast} from "react-toastify";
import analytics from "../services/firebase/analytics";


class GuardControl {
    context = useGuard();

    register(data){
        const {setUser, setLogged, APPLICATION_KEY} = this.context;
        const user = {name: data.name, email: data.email, password: data.password}
        createUser(user).then(response => {
            setUser({response, key: APPLICATION_KEY});
            setLogged(true);
            localStorage.setItem('@user', JSON.stringify(response));
            analytics('new_user_registered', [{name: response.name, email: response.email}]);
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
        fetchUser(user)
            .then(response => {
                setUser({response, key: APPLICATION_KEY});
                setLogged(true);
                localStorage.setItem('@user', JSON.stringify(response));
                analytics('login_attempt', [{name: response.name, email: response.email}]);
            })
            .catch(err => {
                if(err === 'UserNotFound'){
                    toast.warn('Usuário não encontrado.');
                }
                else {
                    toast.error('Erro ao tentar iniciar a sessão. Por favor, tente novamente mais tarde.');
                }
            });
    }

    updatePassword(password){
        const {user} = this.context;

        user.password = password;
    }

    persist(){
        const {setUser, setLogged} = this.context;
        try {
            const user = JSON.parse(localStorage.getItem('@user'));

            if(user?.id){
                setUser(user);
                setLogged(true);
                return true;
            }
        }
        catch (e) {
            setUser({});
            setLogged(false);
            return false;
        }
    }

    logout() {
        const { user, setUser, setLogged} = this.context;
        setUser({});
        setLogged(false);
        localStorage.setItem('@user', "");
        analytics('logout', [{name: user.name, email: user.email}]);
        window.location.href = "/";
    }
}
export default GuardControl;
