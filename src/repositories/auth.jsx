const fetchUser = async (data) => {
    const {email, password} = data;
    return new Promise((resolve, reject) => {
        try {
            const users = JSON.parse(localStorage.getItem('@users'));

            const user = Object.entries(users).reduce((elem, [id, row]) => {
                if(row.email === email && row.password === password){
                    elem = row;
                }

                return elem;
            }, {});

            if(user?.id){
                resolve(user);
            }
            reject('UserNotFound');
        }
        catch (e) {
            console.log(e);
            reject(e);
        }
    });
}

const createUser = async ({name, email, password}) => {
    return new Promise((resolve, reject) => {
        try {
            let users = JSON.parse(localStorage.getItem('@users'));
            let exists = false;
            if(users && Object.entries(users).length > 0){
                exists = Object.entries(users).reduce((elem, value) => {
                    const exist = (value[1].email === email);
                    return {...elem, [value[0]]: exist};
                }, {});
            }


            if(!exists || Object.values(exists || {}).every((value) => !value)){
                const id = (users && users.length > 0) ? users[users.length - 1]['id'] + 1: 1;
                const user = {
                    id: id,
                    name: name,
                    email: email,
                    password: password
                };

                (users) ? users.push(user) : users = [user];
                localStorage.setItem('@users', JSON.stringify(users));
                resolve(user);
            }

            reject('UserExists');
        }
        catch (e) {
            reject(e);
        }
    });
}

const updateUser = async ({name, email, password}) => {

}

export {fetchUser, createUser, updateUser};
