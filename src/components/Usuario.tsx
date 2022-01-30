import { useState } from "react";

interface User {
    uid: string, 
    name: string
}

const tempUser: User = {
    uid: '123',
    name: 'Alejo'
}

export const Usuario = () => {
  
    const [user,setUser] = useState<User>(tempUser); //? Puede ser vacio y lo acepta 

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Alejandro Estrada'
        });
    }
    return( 
        <div
            className="mt-5"
        >
            <h3>Usuario: useState</h3>

            <button
                onClick={login}
                className="btn btn-outline-primary"
            >
                Login
            </button>

            {
                (!user) 
                    ? <pre>No hay usuario</pre>
                    : <pre>{JSON.stringify(user)}</pre>

            }
        </div>
    )
};
