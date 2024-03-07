
import {users} from './users/data.json'


const inicialState={
    id: 0,
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
    password: "",
    movies :[]

}

export const services = (props) => {

    const email = props.email
    const password = props.password
     let user = users.find((e)=>(
        e.email===email && e.password===password
    ))

    if (user === undefined) 
    {return inicialState
    }else{
        return (user)
    }
    
  
}
