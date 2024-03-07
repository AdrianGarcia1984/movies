
import React, { createContext, useEffect, useState, useContext } from "react";
import {services} from '../../api/services'
import Swal from 'sweetalert2'


const UserContext = createContext();
//estado inicial para el usuario
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
    //(user para capturar datos de usuario, history para mover lo del usuario)

    const loginUser = async (user, navigate) => {
        try {
            setLoading(true);
            const data = await services(user)
            console.log(data)
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
                //navigate para mover al usuario por las rutas                
                navigate('/')
            } else{
                Swal.fire({
                    icon: 'error',
                    title: "usuario no existe en la base de datos",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            setLoading(false);
            console.log('error en loginUser, ',error);
        }

    };
    //registerUser para registrar nuevo usuario
    //user para capturar dato de usuario, history para mover lo del usuario

    // const registerUser = async (user, navigate, ok) => {
    //     try {
    //         setLoading(true);
    //         const { data } = await axios.post('user/register', user);
    //         setLoading(false);
    //         console.log(data);
    //         if (ok){
    //             if (data.ok) {
    //                 const userLogin = {
    //                     login: true,
    //                     name: data.name,
    //                     id: data._id,
    //                     roles:data.roles,
    //                     token: data.token,
    //                     email: data.email,
                        
    //                 }
    //                 //console.log(userLogin)
    //                 localStorage.setItem('user', JSON.stringify(userLogin));
    //                 setUser(userLogin);
    //                 // Swal.fire({
    //                 //     icon: 'success',
    //                 //     title: data.message,
    //                 //     showConfirmButton: false,
    //                 //     timer: 1500,
    //                 // });
    //                 //navigate para mover al usuario por las rutas
    //                 navigate("/homeproducts");
    //         }else{
    //             // Swal.fire({
    //             //     icon: 'success',
    //             //     title: data.message,
    //             //     showConfirmButton: false,
    //             //     timer: 1500,
    //             // });
    //             //navigate para mover al usuario por las rutas
    //                 router.push("/homeuser");
    //         }
               
    //         }

    //     } catch (error) {
    //         setLoading(false);
      
    //         if (!error.response.data.ok) {
    //             // return Swal.fire({
    //             //     icon: 'error',
    //             //     title: error.response.data.message,
    //             //     showConfirmButton: false,
    //             //     timer: 1500,
    //             // });
    //         }
    //         console.log('error registerUser', error.message);

    //     }
    // }

    //cerrar sesion
    const exit = () => {
        setUser(inicialState);
        localStorage.removeItem('user');
        
    }

    const value = {
        user,
        loginUser,
        //registerUser,
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
