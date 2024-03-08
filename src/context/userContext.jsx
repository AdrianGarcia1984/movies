
import React, { createContext, useEffect, useState, useContext } from "react";
import {servicesLogin} from '../../api/services'
import Swal from 'sweetalert2'


const UserContext = createContext();
//estado inicial para el user
const inicialState={
    id: 0,
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
    password: "",
    movies :[]

}

export const UserProvider = (props) => {
    //inicializar estados
    const [user, setUser] = useState(inicialState);
    const [loading, setLoading] = useState(false);


    //si se cierra el navegador para que se vuelva a autologuear usando useEfect
    useEffect(() => {
        const initial = JSON.parse(localStorage.getItem("user"))
        initial ? initial.login && setUser(initial) : setUser(inicialState);
    }, []);

    //loginUser para iniciar sesion
    //(user para capturar datos de user, history para mover lo del user)

    const loginUser = async (user, navigate) => {
        try {
            setLoading(true);
            const data = await servicesLogin(user)
            setLoading(false);
            if (data.id !=0) {
                const userLogin = {
                    login: true,
                    id: data.id,
                    email: data.email,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    avatar: data.avatar,
                    password: data.password,
                    movies :data.movies
                }
                localStorage.setItem('user', JSON.stringify(userLogin));
                setUser(userLogin);
                Swal.fire({
                    icon: 'success',
                    title: "bienvenido",
                    showConfirmButton: false,
                    timer: 1500,
                });
                //navigate para mover al user por las rutas                
                navigate('/')
            } else{
                Swal.fire({
                    icon: 'error',
                    title: "user no existe en la base de datos",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            setLoading(false);
            console.log('error en loginUser, ',error);
        }

    };

    //cerrar sesion
    const exit = () => {
        setUser(inicialState);
        localStorage.removeItem('user');
        
    }

    const value = {
        user,
        loginUser,
        exit,
        loading,
    };

    return <UserContext.Provider value={value} {...props} />;
};

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser error");

    }
    return context;
}
